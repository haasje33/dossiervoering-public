# Heldr Dossierassistent voor SOM — Claude API

Openbare browserproefversie: https://haasje33.github.io/dossiervoering-public/

1. Voer je eigen Claude API-sleutel in bij **Claude instellen**. De app bewaart die alleen in het geheugen van het huidige venster. Geen installatie of lokale modeldownload nodig.
2. Bevestig dat je invoer vooraf geanonimiseerd is en naar Claude mag. Typ of plak je anamnese, onderzoek en eigen beoordeling.
3. Klik **Schrijf dossier**. Dit gebruikt betaald API-tegoed bij Anthropic. Terwijl je typt wordt niets naar Claude verstuurd.
4. Controleer de conceptteksten en bronpassages. Onder **Meedenken** staan afzonderlijke klinische voorstellen; onder **Controle** ontbrekende gegevens.
5. Kopieer pas na jouw goedkeuring naar SOM. De assistent leest geen gegevens uit SOM. Keuzes, scores en toestemmingen controleer je zelf in SOM.

Je sleutel en de huidige geanonimiseerde casus gaan rechtstreeks vanuit de browser naar `api.anthropic.com`, niet via GitHub of een eigen proxy. De app slaat geen sleutel of casus op. Voor verwerking bij Anthropic gelden jullie afspraken met die leverancier. Nieuwe casus wist de casus en behoudt de sleutel voor het volgende dossier. Casus afsluiten wist ook de sleutel. Vernieuwen/sluiten verliest het werk. Het systeemklembord wordt niet automatisch gewist.

Online richtlijnzoeken staat standaard aan: maximaal twee zoekacties per aanvraag, met alleen algemene onderwerpen. Dit gebruikt aanvullende API-/zoekkosten en is beperkt tot Kennisplatform Fysiotherapie, NHG, Richtlijnendatabase en de Federatie Medisch Specialisten. Alleen inhoudelijke bronfragmenten uit een concrete richtlijn worden aan de schrijffunctie meegegeven; de Federatie-site is een wegwijzer naar die richtlijnen. Een tijdelijke zoekpauze kan maximaal tweemaal worden vervolgd, met behoud van zoekresultaten en het maximum van twee zoekacties. Dit kan aanvullende tokens gebruiken. Bij een bereikte antwoordlimiet worden alleen reeds ontvangen, gecontroleerde bronverwijzingen gebruikt, met een melding. Bij een echte fout wordt niet automatisch zonder online bronnen doorgeschreven. Je kunt dan met de knop **Schrijf met de beschikbare bronnen** bewust kiezen voor de aanwezige broncollectie; de app markeert dat online broncontrole niet gelukt is en herhaalt de zoekactie niet. Online zoeken kan bewust worden uitgezet.

De startcollectie bevat gecontroleerde samenvattingen van KNGF-dossiervoering 2019 v1.1 en NHG-richtlijnen voor aspecifieke lagerugpijn, schouderklachten en niet-traumatische knieklachten. Versies, bronlinks, beperkingen en raadpleegdatum (5 november 2026) zijn zichtbaar in de app. Deze ingebouwde collectie is niet volledig en wordt niet automatisch bijgewerkt; online zoeken is een aparte aanvulling en bewijst evenmin dat een gevonden versie de nieuwste is. Een geselecteerde bron bevestigt geen diagnose of toepasbaarheid bij deze patiënt. Er is geen automatische goedkeuring van klinische voorstellen.

Voor SOM links en de assistent rechts: open de hulp **SOM links · assistent rechts** in de app. De knop opent SOM in een eigen tabblad. Chrome kan beide tabbladen in gesplitste weergave naast elkaar tonen. Zie de officiële [Chrome-uitleg](https://support.google.com/chrome/answer/16971124?hl=nl). De assistent krijgt daardoor geen toegang tot SOM.

De app toont bij een fout specifieke technische informatie zonder dossierinhoud of API-sleutel. Die kan via **Kopieer technische info** worden gedeeld voor het onderzoeken van een fout.

De technische browserflow is getest met onderschepte API-antwoorden. Echte Claude-antwoorden en klinische kwaliteit moeten met jullie sleutel en vooraf geanonimiseerde praktijkgegevens beoordeeld worden.

Deze openbare repository bevat uitsluitend gebouwde websitebestanden en het door de gebruiker aangeleverde Heldr-logo, geen API-sleutels, casussen, oorspronkelijke bijlagen of private broncodegeschiedenis. Montserrat wordt lokaal aangeboden onder de meegeleverde OFL-licentie. De website heeft voorlopig geen login.

Sneller schrijven (v0.4.3): de standaardstand **Vlot** gebruikt dezelfde gekozen Claude-modelnaam met gemiddelde schrijfinspanning, waar het model dat ondersteunt. **Uitgebreid klinisch redeneren** gebruikt hogere inspanning. De antwoordlimiet en broncontroles blijven behouden. Volledige, structureel gecontroleerde conceptvelden verschijnen tijdens het schrijven als voorlopige tekst; overnemen en goedkeuren kan pas na ontvangst en controle van het hele antwoord. Bij afbreken of fouten verdwijnen deze voorvertoningen en blijven bestaande concepten behouden. De verstreken tijd is zichtbaar.

Recente openbare richtlijnfragmenten worden standaard maximaal 30 minuten in het geheugen van dit venster hergebruikt bij hetzelfde algemene klachtgebied en model. Alleen openbare bronnen worden bewaard, geen aantekeningen of eerdere dossierantwoorden. De app toont het tijdstip van de bronzoeking. Zet **Recente richtlijnbronnen hergebruiken** uit voor een nieuwe online zoekactie. Sleutelwijziging, sleutel wissen, casus afsluiten en sluiten van het venster wissen deze broncache. Nieuwe casus behoudt alleen deze openbare bronnen en de ingevulde sleutel. Dit bespaart wachttijd en zoekkosten bij herhaalde onderwerpen; de werkelijke snelheid hangt van Claude en het netwerk af.
