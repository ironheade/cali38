import './locations.css'

import { Container, Grid, Paper, Tooltip, ActionIcon, TypographyStylesProvider } from '@mantine/core'
import {IconMapPin} from '@tabler/icons'
import { Floatingsidemenu } from '../floatingsidemenu'
import { ImageCarousel } from '../carousel'
import { Karte } from '../karte'
import { useState } from 'react'

export function Locations() {

    const [currentLocation,setCurrentLocation] = useState("https://www.google.com/maps/d/u/1/embed?mid=1NqRixZQ85e4MJv2K2OxjLXrV3qMEZGU&ehbc=2E312F")

    const defaultExerciseData = [{
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2FPrinzenpark1.jpg?alt=media&token=31e47c86-68db-4184-a024-c7ccbd4f0ef9",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2FPrinzenpark2.jpg?alt=media&token=19d16008-af5d-42ae-bdac-043062082cb2",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2FPrinzenpark3.jpg?alt=media&token=a5b58154-f2c7-48cb-8f04-41b5faa48051",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2FPrinzenpark4.jpg?alt=media&token=86c7f54c-0b44-4b81-951d-a80d8625b799",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2FPrinzenpark5.jpg?alt=media&token=04c7e7e8-7adb-448b-9b60-5dc21ae5e33a",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2FPrinzenpark6.jpg?alt=media&token=163ee17a-a8a5-466f-a0f2-bfb0bdd2583f"
        ],
        headline: "Prinz-Albrecht-Park (Prinzenpark)",
        text: "<p>An dieser Anlage im Braunschweiger Prinz-Albrecht-Park treffen wir uns hauptsächlich zum gemeinsamen Training. Hier trifft man auch oft andere Sportler der Calisthenics-Szene. </p><p><strong>Es gibt vier Standorte, welche verteilt an der 2,1 km langen Finnenbahn liegen: </strong></p><p><u>Station 1</u> - gegenüber Freie Turner Stadion - ist eine klassische Calisthenics Anlage der Firma Playparc mit mehreren Klimmzugstangen in verschiedenen Höhen, Dipbarren, Liegestützgriffe in verschiedenen Höhen, eine vertikale Leiter, Box Jump-Plattformen in drei Höhen und eine Monkeybar. </p><p>Hier trifft man Calisthenics Sportler, Ninja Warrior Athleten, Freeleticstreibende und sonstige Individualsportler. </p><p>Oft kommen auch Jogger von der nebenliegenden Finnenbahn für ein paar Übungen vorbei. Auch wir trainieren hier hauptsächlich 😊 </p><p><u>Station 2</u> - in der Nähe des Spielplatzes an der Georg-Westerman-Allee - an diesen Standort kommt man, wenn man der Finnenbahn weiter folgt. Hier gibt es Balanceübungen verschiedener Schwierigkeitsgrade, eine Gleichgewichtsplattform an Ketten, z.B. für Kniebeugen und sogar ein Trampolin. </p><p><u>Station 3</u> - am Polizeisportverein - der Finnenbahn weiter folgend kommt man an diese Station. Hier findet man eine Klimmzugstange Plus mit verschiedenen Griffvariationen, einen Bauchtrainer und eine Slackline vor. </p><p><u>Station 4</u> - an der Hundewiese - etwas abgelegen von der Finnenbahn direkt am Kunstrasenplatz liegt die größte Station. Diese besteht aus verschiedenen klassischen Trimm-Dich-Pfad-Elementen. Trainieren kann man dort an verschiedenen Bauchtrainern, niedrigen Reckstangen, einer Balance-Strecke, sowie einer kleinen Monkeybar. </p><p>Parkplätze gibt es hier nur begrenzt an der Straße, man sollte am besten mit dem Fahrrad kommen.</p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.773994293838!2d10.5513874!3d52.265648999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aff572d8b26ca7%3A0x46ad6c5c82470ef4!2sCali38%20-%20Calisthenics%20Braunschweig!5e0!3m2!1sde!2sbe!4v1666004525281!5m2!1sde!2sbe'
    }, {
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fburgerpark1.jpg?alt=media&token=e161dabe-43bc-4355-a7e5-f0f92109dba2",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fburgerpark2.jpg?alt=media&token=e25cb335-9fcd-4d45-9db2-fe83a3fce01c",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fburgerpark3.jpg?alt=media&token=8b47e5ca-ad9f-4ec1-9f10-bfa068d897d6",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fburgerpark4.jpg?alt=media&token=868a2d19-e970-4169-8e8e-0060af975a1c"
        ],
        headline: "Bürgerpark",
        text: "<p>Auch der folgende Spot hat eine hohe Beliebtheit bei Sportlern, da er direkt an der Laufstrecke des Braunschweiger Bürgerparks liegt.  Diese Calisthenics Anlage wurde 2019 im Bürgerpark als Ergebnis einer Bürgerinitiative errichtet. </p><p>Verwendet wurden hier erstmals bei einem städtischen Calisthenics Park Geräte der Firma Kompan, statt wie zuvor von Playparc. </p><p>Als besonderes Merkmal findet man hier ein robustes Schlingentrainersystem in verschiedenen Höhen. </p><p>Außerdem gibt es einen Dipbarren, Box Jump-Plattformen in drei verschiedenen Höhen, Liegestützgriffe in zwei verschiedenen Höhen, einen Bauchtrainer, eine Monkeybar und eine Klimmzugstange, welche mit weiteren Liegestützgriffen bzw. Rudergriffen ausgestattet ist. Diese sind bei Klimmzügen leider etwas störend. </p><p>Der Boden besteht aus einem weichen Fallschutz aus Tartan, mit einigen Markierungen für weitere Übungen. Zahlreiche Hinweisschilder erklären die diese. </p><p>Parken kann man hier auf dem nahegelegenen P+R Parkplatz. </p><p> </p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174.68992364283667!2d10.519812009537183!3d52.25045827157035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aff76a0d154b65%3A0xb1e47baf68e116ec!2sCalisthenics%20Park%20B%C3%BCrgerpark!5e0!3m2!1sde!2sbe!4v1666005008834!5m2!1sde!2sbe'

    }, {
        bilder: [
            "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fstoeckheim1.jpg?alt=media&token=1a463c49-6358-4b12-b800-8fe15b6360e2",
            "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fstoeckheim2.jpg?alt=media&token=4bc0375f-cab2-4670-9384-0dc5e5dc7186",
            "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fstoeckheim3.jpg?alt=media&token=f48c16e3-392b-4df6-9e1a-dad6fc81999e",
            "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fstoeckheim4.jpg?alt=media&token=dd85376a-5ca1-4be9-8b06-46eae4417bf0",
            "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fstoeckheim5.jpg?alt=media&token=8d18443c-d45e-4fab-8fdc-0d49e85baf60",
            "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fstoeckheim6.jpg?alt=media&token=7d9c468c-69fe-4c29-a475-19a1dc59f032"      
],
        headline: "Stöckheim",
        text: "<p>Wie auch bei dem zuletzt eröffneten Park in unserer Stadt wurden Geräte des Herstellers Kompan verwendet.</p><p>Die Anlage liegt in der Nähe des Neubaugebiets an der Leiferdestraße, auf Höhe des Altarms der Oker. Wenn man zu Fuß in den Wilhelm-Bornstein-Weg abbiegt, kommt auf einen an der Oker gelegenen Wanderweg. Folgt man diesem etwa 150 Meter, tauchen schon die ersten Geräte auf. </p><p>Die Geräte sind als einzelne Stationen alle paar Meter am Weg gelegen. Zur Verfügung stehen eine doppelte Monkeybar, eine Balancestrecke mit verschiedenen Schwierigkeiten, eine vierfache Klimmzugstation, Drüber-und-Drunter Hürden, eine Kletterwand mit Netz und ein Dipbarren. Die Ausstattung ermöglicht ein vollständiges Calisthenics Training. Durch die zusätzlichen Elemente, wie Hürden oder Kletterwand ist hier auch ein Ninja Warrior oder OCR Training möglich. </p><p>Direkte Parkplätze sind nicht vorhanden, am besten mit dem Fahrrad oder zu Fuß vorbei kommen. </p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.2594426620661!2d10.5198333!3d52.206361099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a55fb03a0a9ba9%3A0x288b60591c429029!2sCalisthenics%20Park%20St%C3%B6ckheim!5e0!3m2!1sde!2sbe!4v1666005066471!5m2!1sde!2sbe'

    },{
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fheidberg1.jpg?alt=media&token=8220e0b9-36ad-4e3a-b27a-32a3646f8f0b",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fheidberg2.jpg?alt=media&token=600bf993-c501-4007-b63c-f24eb444281a",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fheidberg3.jpg?alt=media&token=08739fc7-7fbe-40a4-9f48-1f8addd0445e",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fheidberg4.jpg?alt=media&token=afe0fef3-04bd-4424-a806-74263341fe87",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fheidberg5.jpg?alt=media&token=c8d20554-75e2-43dc-9253-6db8548c045e",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fheidberg6.jpg?alt=media&token=b612aa00-956f-4ca2-adf8-9ed1e00bc079"
        ],
        headline: "Heidbergpark",
        text: "<p>Der mit 110.000 EUR bislang teuerste Park im Stadtgebiet Braunschweig bietet mit 10 verschiedenen Trainingsstationen ein sehr breites Angebot für fast jeden Sportler. Neben einem Calisthenics Workout kann hier auch klassisches Fitness- und Gewichtstraining absolviert werden. Dafür sorgen eher untypische Geräte wie Stepper, Crosstrainer und Spinning-Bikes sowie unterschiedlich schwere, fest installierte Gewichte für Übungen wir Kreuz- oder Seitheben. Daneben gibt es mehrere Klimmzugstangen, Barren, Ringe, Schlingentrainer und Klimmzuggriffe in Form von Kugeln. Letztere ermöglichen das gezielte Training von Griffkraft. Leider sucht man eine Monkeybar zum Hangeln vergeblich. Stattdessen gibt es eine schräg nach oben gehende Leiter mit drei Sprossen, welche man immerhin zum vertikalen Hangeln nutzen kann. Abgerundet wird das Sportangebot von einem Fallschutzboden aus grauem Tartan. </p><p>Durch die gute Lage im Park direkt an einer etablierten Laufstrecke kann man sein Workout perfekt mit einer Laufeinheit verbinden. Diese Kombination ist besonders für OCR-Sportler interessant. </p><p>Zum nahegelegenen Heidbergsee sind es knapp 200 Meter zu Fuß. Hier findet man auch die einzigen Parkplätze sowie öffentliche Toiletten. Direkt ansteuern kann man die Anlage daher am besten mit dem Fahrrad. </p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d425.989599223455!2d10.549855682265594!3d52.229849909992595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a55fdf927781f7%3A0xae4017ef4d59475e!2sNextLevel%20Fitnesszirkel%20H24!5e1!3m2!1sde!2sbe!4v1666004695604!5m2!1sde!2sbe'

    }, {
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fwestpark1.jpg?alt=media&token=1bf2eb1f-3951-460b-97d1-c9cb8e4ba09f",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fwestpark2.jpg?alt=media&token=ac686dbd-6c70-41c3-8e97-49ca54a21d9b",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fwestpark4.jpg?alt=media&token=14d3278d-f1f7-44f5-8969-addd18e7e7b2",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fwestpark5.jpg?alt=media&token=29c67751-d96a-4c8a-a62b-cba009b3eecd",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fwestpark6.jpg?alt=media&token=b1bbe301-d7ef-4b26-a1f0-96f3ae7991ed"
],
        headline: "Weststadt-Westpark",
        text: "<p>Dies ist der allererste Cali-Park, der in unserer Region gebaut wurde! Nach grundlegenden Planungen im Jahr 2016 wurde dieser Park dann ein Jahr später errichtet. </p><p>Es handelt sich um eine Anlage der Firma Playparc, welche im Westpark in unmittelbarer Nähe zur Wilhelm-Bracke-Gesamtschule liegt. Direkt gegenüber ist der Sportplatz des MTV. </p><p>Auf angenehmem Fallschutzboden aus Tartan findet ihr hier insbesondere viele Klimmzugstangen, einen Dipbarren, eine Monkeybar, eine vertikale Leiter und eine Bank direkt am Gerüst. Ausreichend Parkplätze sind ca. 200 Meter weiter vorhanden. Eine fast identische Konstruktion wurde im Januar 2019 mit der Anlage im Prinzenpark eröffnet. </p><p>Insgesamt ist der Calisthenics Park im Westpark weniger frequentiert, als beispielsweise die Module im Prinzenpark oder Bürgerpark. Bei gutem Wetter trifft man trotzdem auch hier auf einige Trainierende. 💪🏼 </p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.022104510019!2d10.473638900000001!3d52.253750000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4a305967e36dfe0!2zNTLCsDE1JzEzLjUiTiAxMMKwMjgnMjUuMSJF!5e1!3m2!1sde!2sbe!4v1666004731832!5m2!1sde!2sbe'

    }, {
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fbevenrode1.jpg?alt=media&token=59b7d3cb-db71-47f1-99ad-bae50ce1a49b",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fbevenrode2.jpg?alt=media&token=eb58799f-e03f-4662-8e78-0f263eac42b9",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fbevenrode3.jpg?alt=media&token=1db110c1-cd3f-4805-97bd-c1fb3fd81c7a",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fbevenrode4.jpg?alt=media&token=1ea4d0e5-63b6-4922-a270-4e6e79e235ae"
        ],
        headline: "Neubaugebiet Bevenrode",
        text: "<p>Diese Anlage ist absoluter Geheimtipp für alle Sportler am nördlichen Rand von Braunschweig oder aus den Dörfern des südlich angrenzenden Landkreises Gifhorn. </p><p>Entstanden ist sie erst im Jahr 2020, im Zuge eines groß angelegten Spiel- und Jugendplatz. Die Geräte des Hersteller Spiel-Bau umfassen zwei vertikale Leitern, viele verschiedene Klimmzug- und Reckstangen, einen Hangelbogen, Liegestützgriffe und einen Dipbarren. </p><p>Als Untergrund wurde hier ein Sandboden gewählt. Die Reckstangen sind leider alle ein wenig niedrig, der sehr hohe Barren hat keine Einstiegshilfe. </p><p>Parken kann man hier ausschließlich in den angrenzenden Wohngebiet.</p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78052.84633481782!2d10.5606067!3d52.3132543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80c8b4d39ff460d6!2sNeuer%20Spielplatz!5e0!3m2!1sde!2sbe!4v1666004754451!5m2!1sde!2sbe'

    },{
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Frautheim1.jpg?alt=media&token=bc6adf88-c864-4429-88ed-83f1ac9d10b8",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Frautheim2.jpg?alt=media&token=1cfd21a8-868d-4d8a-a59d-c1ef322502b1",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Frautheim3.jpg?alt=media&token=a1a1bdfc-0431-4815-8e2f-5651f2ddeeda"

        ],
        headline: "Rautheim (Parkour Park)",
        text: "<p>Dies ist der bislang einzige Parkour Park im Braunschweiger Stadtgebiet. Für Calisthenics Sportler aus Rautheim eine gute Alternative für ein Training, wenn man kurze Wege bevorzugt. </p><p>Direkt neben einem Spielplatz im Neubaugebiet von Rautheim gelegen findet man diesen Spot. Neben vielfältigen Möglichkeiten für Parkour-Traceure kann man hier auch ein Calisthenics Workout absolvieren. </p><p>Der Park ist ausgestattet mit Reckstangen in verschiedenen Höhen für Muscle Ups, Klimmzüge, Straight Bar Dips, Ruder- oder Liegestützübungen, sowie Plattformen in mehreren verschiedenen Höhen für u.a. Box Jumps. Die Stangen sind jedoch etwas dicker, als in üblichen Calisthenics Parks. Aufgebaut ist die Anlage auf einem blauen Fallschutzboden aus Tartan. Parkplätze sind hier nur begrenzt im anliegenden Wohngebiet vorhanden. Benutzt werden darf der Park laut Schildern von 10-22 Uhr. </p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d368.6096025060047!2d10.5697865!3d52.2418867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aff5451ed3b98b%3A0x36bef859bf24e47e!2sSpielplatz%20Rautheim%20Mascherode!5e1!3m2!1sde!2sbe!4v1666004774149!5m2!1sde!2sbe'

    }, {
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fkennelbad1.jpg?alt=media&token=11050538-27f7-4e39-8e66-b981a7335290",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fkennelbad2.jpg?alt=media&token=7d0f36d0-1e74-4152-9692-aace64ed6295",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fkennelbad3.jpg?alt=media&token=1a98c0ad-532d-407b-a2f1-81a68295ed94",
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Fkennelbad4.jpg?alt=media&token=e7a2cb2f-3f74-474f-b909-b6279f8d61d9"
        ],
        headline: "Kennelbad",
        text: "<p>Diese Calisthenics-Anlage wurde vom Fitnessstudio 'Fitnessloft' im Freibad Kennelbad aufgestellt. Benutzen kann diese jeder Gast im Bad, der Eintritt beträgt 2,50 Euro.</p><p>Es gibt Klimmzugstangen in zwei verschiedenen Höhen, genau wie auch Dipbarren in zwei verschiedenen Höhen. Außerdem eine zweigeteilte Monkeybar, eine vertikale Leiter und ein Bauchtrainer. </p><p>Genügend Parkplätze sind vor dem Bad vorhanden, nach dem Workout kann man sich an den Natursee legen oder direkt ins Wasser springen. </p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d304.0592320095177!2d10.52140077800152!3d52.24076302770028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7eeb871a02238c96!2zNTLCsDE0JzI2LjciTiAxMMKwMzEnMTguMCJF!5e1!3m2!1sde!2sbe!4v1666004794077!5m2!1sde!2sbe'

    }, {
        bilder: [
"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/Anlagen%2Funipark1.jpg?alt=media&token=1b2edae6-8e09-4945-a957-ddb1a3c47a5f"
        ],
        headline: "Sportzentrum TU",
        text: "<p>Der Calisthenics Park gehört zum Sportzentrum der TU Braunschweig. Es ist die aktuell größte Anlage in Braunschweig. </p><p>Die Ausstattung besticht durch viele Klimmzugstangen und Dipbarren in verschiedenen Höhen. Weiterhin gibt es Bauchtrainer und feste Paraletts bzw. Liegestützgriffe und Turnringe in zwei verschiedenen Höhen. Die Monkeybar ist lang ausgestaltet und enthält einen aufsteigenden und absteigenden Teil.</p><p>Zu den absoluten Highlights des Spots zählen das 3m hohe Klettertau, sowie eine Himmelsleiter. </p><p>Der Spot ist zugangsbeschränkt, eine Jahreskarte kostet für alle nicht-Studenten 50,00 EUR im Jahr.</p>"
        ,ort:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d736.6046571653367!2d10.5410955!3d52.2788695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aff42c38637deb%3A0xf6d7467a7d986d13!2sSportzentrum%20der%20TU%20Braunschweig!5e1!3m2!1sde!2sbe!4v1666004820317!5m2!1sde!2sbe'
    }]

    const locations = defaultExerciseData.map(item => ({label:item.headline,link:"#"+item.headline,order:1}))

    return (

        <Container
            //size="xl"
            //style={{ marginTop: "30vh" }} my="xs"
            >
            <Grid grow>
                <Grid.Col>
                    <Grid.Col>
                        <div id="karte">
                        <Karte mapsrc={currentLocation}/>
                        </div>
                    </Grid.Col>
                </Grid.Col>

                <Grid.Col md={1}>
                    <Grid.Col className='filterColumn'>
                        <Paper id="exercisePaper" shadow="xl" p="md">
                            <h1>Locations</h1>
                            <Floatingsidemenu links={locations} />
                        </Paper>
                    </Grid.Col>
                </Grid.Col>
                <Grid.Col md={7} >
                    {/*<Grid.Col md={10} > */}
                    {defaultExerciseData.map((item, index) =>
                        <Grid.Col key={index} >
                            <Paper id={item.headline} shadow="xl" p="md" style={{position:"relative"}}>
                                <Grid>
                                    <Grid.Col xs={12}>
                                        <ImageCarousel images={item.bilder}/>            
                                    </Grid.Col>
                                    <Grid.Col xs={12}>
                                        <h1>{item.headline}</h1>
                                        <TypographyStylesProvider>
                                <div dangerouslySetInnerHTML={{ __html: item.text }} />
                            </TypographyStylesProvider>

                                        <Tooltip label="Ort">
                                            <a style={{position:"absolute",right:"10px",bottom:"8px"}} 
                                                href="#karte">
                                                <ActionIcon style={{float:"left"}} size="xl" radius="md" onClick={()=>setCurrentLocation(item.ort)}><IconMapPin size={60} /></ActionIcon>
                                            </a>
                                        </Tooltip>
                                    </Grid.Col>
                                </Grid>

                            </Paper>
                        </Grid.Col>
                    )}
                </Grid.Col>

            </Grid>

        </Container>

    );
}