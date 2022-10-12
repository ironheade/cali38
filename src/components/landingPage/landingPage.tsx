import './landingPage.css'
import { Container, Grid } from "@mantine/core";
import { ImageActionBanner } from "../bannercard";
import { Blackbelt } from "../blackbelt";
import { onSnapshot, collection, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from '../../firebase'


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
        </>
    )
}