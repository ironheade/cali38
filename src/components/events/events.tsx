import { Container, Grid, Image, Paper, Table, TypographyStylesProvider } from '@mantine/core'
import { getAuth } from "firebase/auth";
import { TextEditor } from '../textEditor'
import { onSnapshot, collection, DocumentData } from "firebase/firestore";
import { useEffect, useState } from 'react';
import db from '../../firebase'
import FloFlag from '../../resources/FloFlag.jpg'
import Konrad from '../../resources/konrad.jpg'
import franzi_wallsit from '../../resources/franzi_wallsit.jpg'

import './articles.css'

interface Article {
    title?: string;
    shortTitle: string;
    description?: string;
    text: string;
}

export function Events() {

    const [articles, setArticles] = useState<DocumentData[]>([]);
    useEffect(() =>
        onSnapshot(collection(db, "Articles"), (snapshot) => {
            setArticles(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }),
        []
    );

    const localArticles = [{
        shortTitle:"Cali38 beim RENEW" ,
        image:FloFlag,
        text:'<h1>Cali38 beim RENEW Festival</h1><p><em>War gut und irre heißt. Schaut euch mal an wie stabil Flo sein Flag hält!</em></p><p><span class="ql-cursor">﻿</span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
    },
    {
        shortTitle:"Konrad beim RENEW" ,
        image:Konrad,
        text:'<h1>Schöner Mann chillt</h1><p><em>In den Ringen und so weiter</em></p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
    },
    {
        shortTitle:"Konrad beim RENEW" ,
        image:franzi_wallsit,
        text:'<h1>Franzi beim Wallsit</h1><p><em>Im Fullscreen ist der Kopf abgeschnitten, aber aufm Handy geht\'s</em></p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
    }]

    const auth = getAuth();
    const currentUser = auth.currentUser;

    return (
        <Container
            //size="xl" 
            id='article-container' my="xs">
            <Grid grow>
                <Grid.Col>
                    <h1>Articles</h1>
                    {localArticles.map((item, index) =>
                        <Paper key={index} id={item.shortTitle} className='Article-background' shadow="xl" p="md">
                            {item.image&&
                            <Image width={"100%"} height={300} src={item.image} alt="Panda" />
                            }

                            <TypographyStylesProvider>
                                <div dangerouslySetInnerHTML={{ __html: item.text }} />
                            </TypographyStylesProvider>

                        </Paper>
                    )}
                </Grid.Col>
{currentUser&&
                    <Grid.Col>
                        <TextEditor />
                    </Grid.Col>
}      
            </Grid>
        </Container>
    )
}