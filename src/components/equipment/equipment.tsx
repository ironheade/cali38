import { Grid, Paper } from '@mantine/core'
import './equipment.css'

const equpmentData = [
    {
        name:"Rings",
        description:"sind halt Ringe",
        links:[{link:"Gornation Ringe",
                url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                linkDescription:"Sind nicht schlecht von Gornation"}]
},
{
    name:"Chalk",
    description:'gesprochen [ʃaalk], wie "Schalke" mit langem a',
    links:[{link:"Gornation Chalk",
            url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            linkDescription:"Schmeckt besser als die meisten anderen"}]
},{
    name:"Springseil",
    description:"15 Min durchpowern",
    links:[{link:"Gratisspringseil noch vom Renew",
            url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            linkDescription:"Einem geschenkten Gaul..."}]
},
{
name:"Gummiband",
description:'Alternativ auch als Überdimensionale Steinschleuder zu verwenden',
links:[{link:"Gornation Chalk",
        url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        linkDescription:"Ideal geeignet für den bootytrain"}]
}
]


export function Equipment() {
    return (
        <Grid>
            {equpmentData.map((item,index)=>
                <Grid.Col key={index} md={6}>
                    <Paper shadow="xl" p="md">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <h3>Empfehlungen</h3>
                            {item.links.map((item,index)=>
                                <div key={index}><a href={item.url} target="_blank">{item.link}</a><br/><p>{item.linkDescription}</p></div>
                            )}


                    </Paper>
                    </Grid.Col>
            )}
        </Grid>
    )
}