import './landingPage.css'
import { ActionIcon, Container, Grid } from "@mantine/core";
import { ImageActionBanner } from "../bannercard";
import { Blackbelt } from "../blackbelt";
import { onSnapshot, collection, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from '../../firebase'
import { ImageImpression } from '../imageImpression';
import { IconBrandInstagram, IconBrandYoutube, IconBrandFacebook } from '@tabler/icons'


export function LandingPage() {

    const [adCards, setAdCards] = useState<DocumentData[]>([]);
    useEffect(() =>
        onSnapshot(collection(db, "AdCards"), (snapshot) => {
            setAdCards(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }),
        []
    );

    return (
        <>
            <Container size="xl" style={{ marginTop: "30vh" }} my="xs">
                <Grid grow>
                    <Grid.Col xl={12}><h1 id="headline">Cali38</h1></Grid.Col>
                    <Grid.Col xl={12}><p id="subheadline">
                        Cali38 - das bedeutet Calisthenics in Braunschweig.
                        Wir möchten Euch motivieren, miteinander verbinden oder Euch den Einstieg erleichtern.
                        Erfahrt hier alles über unseren Sport und werdet Teil von unserer Community!

                    </p>
                    </Grid.Col>

                    {adCards.map((item, index) =>
                        <Grid.Col md={4} key={index}>
                            <ImageActionBanner
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                action={{
                                    label: item.action.label,
                                    link: item.action.link
                                }}
                            />
                        </Grid.Col>
                    )}


                </Grid>
            </Container>

            <Blackbelt />

            <Container size="xl" my="xs" id="team">
                <Grid grow>
                    <Grid.Col xl={12}><h1 className="bigHeadline">Wer sind wir?</h1></Grid.Col>
                    <Grid.Col xl={12}><p className="bigSubheadline">

                        Wir sind eine Sportgruppe, welche es sich zur Aufgabe gemacht hat, den Sport in unserer Region zu fördern.
                        Bist Du interessiert an dem Sport, möchtest aber nicht alleine trainieren?<br />
                        Oder Du brauchst Hilfe bei Ausführung von Übungen?<br />
                        Bist Du bereits ein fortgeschrittener Calisthenics Sportler?<br />
                        In all diesen Fällen bist Du genau richtig bei uns! Melde Dich einfach und wir sehen uns schon beim nächsten Training.
                        <br /><br />
                        Wir freuen uns immer sehr über weiblichen Zuwachs, denn dies ist keine reine Männersportart.
                        Unser Frauenanteil macht bereits mehr als ein <b>Drittel</b> unserer Gruppe aus.

                    </p>
                    </Grid.Col>
                    <Grid.Col xl={12}><h1 className="bigHeadline">Wie erreichst du uns?</h1></Grid.Col>
                    <Grid.Col xl={12} className="bigSubheadline"><p>
                        <b>Unsere Trainingszeiten:</b>
                        </p>
                        <ul>
                            <li>Montags 17:30 Uhr</li>
                            <li>Donnerstags 17:30 Uhr</li>
                            <li>Samstags 11:00 </li>
                        </ul>
                        
                        an der <a style={{color:"black",textDecoration:"underline"}}>Calisthenics Anlage im Prinzenpark</a>,<br /> gegenüber Freie Turner Stadion und Löwengarten
                    </Grid.Col>
                    <Grid.Col xl={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div >
                        <a href="https://www.instagram.com/cali38_/" target="_blank"><ActionIcon style={{float:"left"}} size="xl" radius="md"><IconBrandInstagram size={60} /></ActionIcon></a>
                        <a href="https://www.facebook.com/Cali381/" target="_blank"><ActionIcon style={{float:"left"}} size="xl" radius="md"><IconBrandFacebook size={60} /></ActionIcon></a>
                        <a href="https://www.youtube.com/channel/UC2gbKUxh9MuWUyNgXnPnbHA" target="_blank"><ActionIcon style={{float:"left"}} size="xl" radius="md"><IconBrandYoutube size={60} /></ActionIcon></a>
                    </div>
                    </Grid.Col>

                    <Grid.Col xl={12}>
                        <h1 className="bigHeadline">Impressionen</h1>
                        <ImageImpression />

                    </Grid.Col>
                </Grid>
            </Container>

        </>
    )
}