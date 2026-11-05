/* Direct Claude adapter for the trusted local HTML file. No storage, proxy, SDK or fallback. */
(() => {
  'use strict';
  const data=window.SOM_STANDALONE;
  function context(payload) {
    if(typeof payload.notes!=='string'||!payload.notes.trim()||payload.notes.length>20000)throw Error('Voer geanonimiseerde aantekeningen in (maximaal 20.000 tekens).');
    if(!['intake','journal'].includes(payload.mode)||typeof payload.request_id!=='string'||!/^[a-zA-Z0-9-]{16,80}$/.test(payload.request_id))throw Error('Ongeldige casusaanvraag. Maak een nieuwe aanvraag.');
    const fields=data.schema.sections.filter(s=>(s.id==='journal')===(payload.mode==='journal')).flatMap(s=>s.fields.filter(f=>!['som_only','display','date','unknown'].includes(f.type)).map(f=>({id:f.id,label:f.label,type:f.type,required:f.required_in_screenshot})));
    return {request_id:payload.request_id,mode:payload.mode,fields,notes:payload.notes};
  }
  function parse(raw,payload) {
    const ctx=context(payload);
    if(typeof raw!=='string'||raw.length>250000)throw Error('Het AI-antwoord is te groot of ongeldig.');
    raw=raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'');
    let result;
    try{result=JSON.parse(raw);}catch{throw Error('Claude stuurde geen volledig JSON-antwoord. Je concepten zijn behouden. Probeer kortere aantekeningen of verdeel opnieuw.');}
    if(!result||typeof result!=='object'||Array.isArray(result)||Object.keys(result).sort().join()!==['fields','questions','request_id','suggestions','version'].join())throw Error('Het AI-antwoord heeft niet het gevraagde formaat. Er is niets vervangen.');
    if(result.version!==1||result.request_id!==ctx.request_id)throw Error('Dit antwoord hoort niet bij de huidige aanvraag. Er is niets overgenomen.');
    const allowed=new Set(ctx.fields.map(f=>f.id)),seen=new Set();
    if(!Array.isArray(result.fields)||result.fields.length>allowed.size)throw Error('Ongeldige dossieronderdelen in het AI-antwoord.');
    for(const entry of result.fields){
      if(!entry||typeof entry!=='object'||Array.isArray(entry)||Object.keys(entry).sort().join()!=='id,sources,text')throw Error('Een AI-veld mist tekst, veldnaam of bronpassages.');
      if(typeof entry.id!=='string'||!allowed.has(entry.id)||seen.has(entry.id))throw Error('Onbekend, dubbel of niet passend SOM-veld.');
      seen.add(entry.id);
      if(typeof entry.text!=='string'||entry.text.length>8000||!Array.isArray(entry.sources)||entry.sources.length>40)throw Error('Ongeldige tekst of bronpassages.');
      if(entry.text.trim()&&!entry.sources.length)throw Error('Een ingevuld AI-veld heeft geen bronpassage. Er is niets overgenomen.');
      if(entry.sources.some(s=>typeof s!=='string'||!s.trim()||!ctx.notes.includes(s)))throw Error('Een AI-bronpassage komt niet letterlijk voor in je aantekeningen. Je bestaande concepten zijn behouden. Probeer opnieuw.');
    }
    for(const key of ['questions','suggestions'])if(!Array.isArray(result[key])||result[key].length>60||result[key].some(s=>typeof s!=='string'||s.length>3000))throw Error('Ongeldige controlepunten in het AI-antwoord.');
    return result;
  }
  data.context=context; data.parse=parse;
})();