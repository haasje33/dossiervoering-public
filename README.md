# Heldr Dossierassistent voor SOM — Claude API

Openbare browserproefversie: https://haasje33.github.io/dossiervoering-public/

1. Voer je eigen Claude API-sleutel in bij **Claude instellen**. De app bewaart die alleen in het geheugen van het huidige venster. Geen installatie of lokale modeldownload nodig.
2. Bevestig dat je invoer vooraf geanonimiseerd is en naar Claude mag. Typ of plak je anamnese, onderzoek en eigen beoordeling.
3. Klik **Schrijf dossier**. Dit gebruikt betaald API-tegoed bij Anthropic. Terwijl je typt wordt niets naar Claude verstuurd.
4. Controleer de conceptteksten en bronpassages. Onder **Meedenken** staan afzonderlijke klinische voorstellen; onder **Controle** ontbrekende gegevens.
5. Kopieer pas na jouw goedkeuring naar SOM. De app maakt geen verbinding met SOM. Keuzes, scores en toestemmingen controleer je zelf in SOM.

Je sleutel en de huidige geanonimiseerde casus gaan rechtstreeks vanuit de browser naar `api.anthropic.com`, niet via GitHub of een eigen proxy. De app slaat geen sleutel of casus op. Voor verwerking bij Anthropic gelden jullie afspraken met die leverancier. Nieuwe casus wist de casus en behoudt de sleutel voor het volgende dossier. Casus afsluiten wist ook de sleutel. Vernieuwen/sluiten verliest het werk. Het systeemklembord wordt niet automatisch gewist.

Online richtlijnzoeken staat standaard aan: maximaal twee zoekacties per aanvraag, met alleen algemene onderwerpen. Dit gebruikt aanvullende API-/zoekkosten en is beperkt tot Kennisplatform Fysiotherapie, NHG, Richtlijnendatabase en de Federatie Medisch Specialisten. Alleen inhoudelijke bronfragmenten uit een concrete richtlijn worden aan de schrijffunctie meegegeven; de Federatie-site is een wegwijzer naar die richtlijnen. Een tijdelijke zoekpauze kan maximaal tweemaal worden vervolgd, met behoud van zoekresultaten en het maximum van twee zoekacties. Dit kan aanvullende tokens gebruiken. Bij een bereikte antwoordlimiet worden alleen reeds ontvangen, gecontroleerde bronverwijzingen gebruikt, met een melding. Bij een echte fout wordt niet automatisch zonder online bronnen doorgeschreven. Online zoeken kan bewust worden uitgezet.

De startcollectie bevat gecontroleerde samenvattingen van KNGF-dossiervoering 2019 v1.1 en NHG-richtlijnen voor aspecifieke lagerugpijn, schouderklachten en niet-traumatische knieklachten. Versies, bronlinks, beperkingen en raadpleegdatum (5 november 2026) zijn zichtbaar in de app. Deze ingebouwde collectie is niet volledig en wordt niet automatisch bijgewerkt; online zoeken is een aparte aanvulling en bewijst evenmin dat een gevonden versie de nieuwste is. Een geselecteerde bron bevestigt geen diagnose of toepasbaarheid bij deze patiënt. Er is geen automatische goedkeuring van klinische voorstellen.

De technische browserflow is getest met onderschepte API-antwoorden. Echte Claude-antwoorden en klinische kwaliteit moeten met jullie sleutel en vooraf geanonimiseerde praktijkgegevens beoordeeld worden.

Deze openbare repository bevat uitsluitend gebouwde websitebestanden en het door de gebruiker aangeleverde Heldr-logo, geen API-sleutels, casussen, oorspronkelijke bijlagen of private broncodegeschiedenis. Montserrat wordt lokaal aangeboden onder de meegeleverde OFL-licentie. De website heeft voorlopig geen login.
