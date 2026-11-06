# Heldr Dossierassistent 0.7.1

Open de [browserapp](https://haasje33.github.io/dossiervoering-public/) naast SOM in Chrome. Geen installatie nodig; deze proefversie heeft geen login.

1. Vul je eigen Claude API-sleutel in. De werkruimte is direct beschikbaar, zonder anonimiseringsvinkje of startstap. Anonimiseer de invoer vooraf.
2. Typ of plak je aantekeningen eenmaal. Automatische AI-denkhulp kan na een typpauze worden bijgewerkt; deze staat bij Instellingen en direct bij de invoer vermeld. Maximaal zes automatische aanvragen per casus, minimaal 20 seconden uiteen. Schrijven, handmatig ‘Denk mee’ en bronzoeken zijn afzonderlijke betaalde acties.
3. Klik **Schrijf dossier**. Complete gecontroleerde velden worden tijdens het schrijven beschikbaar. NRS- en PSK-knoppen kopiëren uitsluitend het getal; tekstknoppen uitsluitend de tekst voor dat SOM-vak. Geen goedkeurvinkjes, verplichte Volgende-stappen of voorstelvoorvoegsels.
4. Vul zo nodig je notities aan en klik **Werk dossier bij**. Eigen correcties blijven bewaard. Een afwijkend AI-voorstel wordt uitsluitend bij het betreffende veld getoond.

Bij een fout staat de oorzaak direct onder **Schrijf dossier**, met een vaste foutcode. Een expliciete afwijzing van het antwoordformaat of de schrijfinspanning kan eenmaal automatisch worden opgevangen; dezelfde dossiercontroles blijven gelden. Bij fouten met tegoed, toegang, netwerk of gebruikslimiet wordt niet automatisch opnieuw aangevraagd. Een onbekende HTTP 400-fout wordt niet als bewijs voor onvoldoende tegoed gepresenteerd.

Het dossier staat compact in vaste SOM-volgorde. Verplichte velden blijven zichtbaar, maar zijn geen blokkade om nu te kopiëren. Screening/rode vlaggen staat na Aanmelding. De voorlopige conclusie wordt opgesteld uit de anamnese en staat vóór Onderzoek; daarna volgt de volledig opgebouwde fysiotherapeutische werkdiagnose. Hulpvraag, alle zeven VALTOIS-letters, NRS, drie PSK/PSK100-activiteiten met scores, ICF en determinanten hebben vaste plekken. V verwerkt de relevante chronologie, voorgeschiedenis en eerdere behandeling. Ontbrekende VALTOIS-informatie wordt buiten de kopie als toelichting getoond; er worden geen gegevens verzonnen. Afgeleide voorstellen en broninformatie staan buiten de kopieerbare tekst. Ontbrekende scores worden niet geschat. De vijf afgesproken determinanten krijgen alleen `gb` als expliciet is beoordeeld dat hiervoor geen informatie is aangeleverd; een ontbrekend AI-veld wordt niet automatisch gb.

Er is geen vaste tekenlimiet of stilzwijgende afkapping van aantekeningen. Past een aanvraag niet in de echte capaciteit van het Claude-model, dan blijft je invoer behouden en krijg je een duidelijke melding.

De patiënt hoeft niet aanwezig te zijn. **Aanbevolen voor een volgend gesprek** bevat niet-urgente vragen en overwegingen. Deze blokkeren schrijven en kopiëren niet. Tegenstrijdigheden voor de therapeut en mogelijke urgente signalen staan apart. Toestemming wordt uitsluitend in SOM afgehandeld; de assistent vraagt dit niet opnieuw uit.

**Zoek aanvullende bronnen** werkt onafhankelijk van het schrijven. Het gebruikt algemene onderwerpen en uitsluitend Kennisplatform Fysiotherapie, NHG, Richtlijnendatabase en de Federatie Medisch Specialisten. Openbare passages kunnen maximaal 30 minuten in dit venster worden hergebruikt. De startcollectie is beperkt en inhoudelijk gecontroleerd op 5 november 2026. Versie en dekking zijn zichtbaar; er wordt geen volledige actuele richtlijndekking beloofd. Een wekelijkse alleen-lezen bronmonitor rapporteert bereikbaarheid in GitHub Actions en actualiseert geen klinische adviezen. Technische toegangsproblemen worden niet als inhoudelijke hercontrole gepresenteerd.

Sleutel en geanonimiseerde gegevens gaan rechtstreeks vanuit de browser naar Anthropic, niet via GitHub of een eigen proxy. De app bewaart ze alleen in venstergeheugen. Nieuwe casus wist de casus en behoudt de sleutel; afsluiten wist ook de sleutel. Verversen/sluiten verliest het werk. Het systeemklembord valt buiten de app.

De assistent heeft geen toegang tot SOM. Eén kopie van het hele concept wordt door SOM niet automatisch over losse vakken verdeeld. Gebruik daarvoor de veldknoppen. SOM en de assistent kunnen in twee Chrome-tabbladen via [gesplitste weergave](https://support.google.com/chrome/answer/16971124?hl=nl) naast elkaar staan.

De workflow is technisch getest met onderschepte API-antwoorden. De compactere interface is gemeten; echte Claude-responstijd, klinische kwaliteit en totale tijdwinst moeten in het echte werkproces worden beoordeeld. Deze repository bevat gebouwde websitebestanden en publieke broncontrolemetadata, geen private broncodegeschiedenis, oorspronkelijke bijlagen, API-sleutels of casussen.
