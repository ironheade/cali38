import './textEditor.css'
import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import { Button, TypographyStylesProvider, Input, List, Table, Paper, Image, createStyles } from '@mantine/core';
import { ImageUpload } from '../imageUpload';
import { addDoc, collection } from "firebase/firestore"
import db from '../../firebase'

const initialValue = '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

interface Article {
    title?: string;
    shortTitle: string;
    description?: string;
    text: string;
    image?: string;
    table?: Object
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: 30,
    },

    control: {
        position: 'absolute',
        width: 250,
        left: 'calc(50% - 125px)',
        bottom: -20,
    },
}));

export function TextEditor() {

    const { classes, theme } = useStyles();

    const [text, setText] = useState(initialValue);
    const [shortTitle, setShortTitle] = useState(String)
    const [articleObjects, addArticleObjets] = useState(Array<Article>)
    const [imageURL,setImageURL] = useState("URL")

    function DoArticles() {
        
        console.log({ text: text, shortTitle: shortTitle, image:imageURL })
        addArticleObjets([...articleObjects, { text: text, shortTitle: shortTitle, image:imageURL }]);
        setShortTitle("")
        setText("")
        setImageURL("")
    }

    const addQuote = async () => {
        const collectionRef = collection(db, "Articles");
        const payload = { text: text, shortTitle: shortTitle, image:imageURL }
        await addDoc(collectionRef, payload)
        setShortTitle("")
        setText("")
        setImageURL("")
    }

    return (
        <>
                <ImageUpload onUpload={setImageURL}/>
                <div className={classes.wrapper}>
                    <Input placeholder="Short Title" value={shortTitle} id="Short-title-input" onChange={(e: React.FormEvent<HTMLInputElement>) => setShortTitle(e.currentTarget.value)} />
                    <RichTextEditor placeholder="Article" value={text} onChange={setText} />
                    <Button size="md" radius="xl" className={classes.control} 
                    //onClick={() => addQuote()}
                    onClick={()=>console.log(text)}
                    >Add Article</Button>
                </div>
        </>
    )
}
