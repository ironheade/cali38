import './exercise.css'
import { useEffect, useState } from 'react'
import { Container, Grid, Text, Paper, Image, Tooltip } from '@mantine/core'
import { IconBarbell } from '@tabler/icons'
import { Checkboxes } from '../checkboxes'


export function Exercise() {

    const defaultExerciseData = [{
        bild: "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2FFloHandstand.jpg?alt=media&token=f7b3521a-a311-482b-9da9-818a35f5eaf7",
        headline: "Handstand",
        text: "liquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te",
        muskelgruppen: ["Brust", "Bizeps", "Solarium"],
        besonderheiten: ["Gut zum Flexen am Strand"],
        schwierigkeit: "Profi"
    }, {
        bild: "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2FBennyBacklever.jpg?alt=media&token=f709a802-6ff8-4c2a-b4a6-76e22b08fd65",
        headline: "Backlever",
        text: "Benny macht nen stabilden Backlever liquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te",
        muskelgruppen: ["Brust", "Bizeps"],
        besonderheiten: ["Gut zum Flexen am Strand"],
        schwierigkeit: "Fortgeschritten"
    }, {
        bild: "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2FIMG_20190127_162419.jpg?alt=media&token=298bd0b4-5c40-452f-b780-ce1724400fa6",
        headline: "Training beim Rühl",
        text: "Training beim Rühl verschafft dir automatisch 40% mehr gainz!",
        muskelgruppen: ["Oberkörper"],
        besonderheiten: ["Alles"],
        schwierigkeit: "Anfänger"
    }, {
        bild: "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2FGordonFlag.jpg?alt=media&token=6c7e40d3-8956-451d-8a0e-a109a9b99a11",
        headline: "Human Flag",
        text: "liquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te!",
        muskelgruppen: ["Lat", "Arme"],
        besonderheiten: ["Alles"],
        schwierigkeit: "Profi"
    }]

    const [exerciseData, setExerciseData] = useState(defaultExerciseData)

    const checklist = ["Anfänger", "Fortgeschritten", "Profi"]
    const [filterSchwierigkeit, setFilterSchwierigkeit] = useState(checklist)

    //Fügt alle Muskelgruppen zu einer Liste zusammen
    const muskelgruppenSet = new Set()
    defaultExerciseData.map((item => item.muskelgruppen.forEach(muskelgruppenSet.add, muskelgruppenSet)))
    const muskelgruppen = Array.from(muskelgruppenSet)
    const [muskelgruppenFilter, setMuskelgruppenFilter] = useState(muskelgruppen)

    //Ändert die angezeigten Übungen, je nachdem welcher Filter ausgewählt ist
    useEffect((() => {
        let filteredExercises = defaultExerciseData.filter(item => filterSchwierigkeit.includes(item.schwierigkeit))
        filteredExercises = (filteredExercises.filter(item => item.muskelgruppen.filter(item => muskelgruppenFilter.includes(item)).length > 0))
        setExerciseData(filteredExercises)
    }), [filterSchwierigkeit, muskelgruppenFilter])

    function Farbe(Schwierigkeit: any) {
        switch (Schwierigkeit) {
            case "Anfänger":
                return "green"
            case "Fortgeschritten":
                return "yellow"
            case "Profi":
                return "red"
            default:
                return "white"
        }
    }

    return (

        <Container
            //size="xl"
            //style={{ marginTop: "30vh" }} my="xs"
            >
            <Grid grow>
                <Grid.Col md={1}>
                    <Grid.Col className='filterColumn'>
                        <Paper id="exercisePaper" shadow="xl" p="md">
                            <h1>Filter</h1>
                            <Checkboxes checked={filterSchwierigkeit} setChecked={setFilterSchwierigkeit} title="Schwierigkeit" checklist={checklist} />
                            <Checkboxes checked={muskelgruppenFilter} setChecked={setMuskelgruppenFilter} title="Muskelgruppen" checklist={muskelgruppen} />
                        </Paper>
                    </Grid.Col>
                </Grid.Col>
                <Grid.Col md={7} >
                    {/*<Grid.Col md={10} > */}
                    {exerciseData.map((item, index) =>
                        <Grid.Col key={index}>
                            <Paper id="exercisePaper" shadow="xl" p="md">
                                <Grid>
                                    <Grid.Col xs={4}>
                                        <Image
                                            radius="md"
                                            src={item.bild}
                                            alt="Random unsplash image"
                                        />              </Grid.Col>
                                    <Grid.Col xs={8}>
                                        <h1>{item.headline}</h1>
                                        <Text>
                                            {item.text}
                                        </Text>
                                        <h4>Muskelgruppen</h4>
                                        <ul>
                                            {item.muskelgruppen.map((item, index) => <li key={index}>{item}</li>)}
                                        </ul>
                                        <h4>Besonderheiten</h4>
                                        <ul>
                                            {item.besonderheiten.map((item, index) => <li key={index}>{item}</li>)}
                                        </ul>
                                        <Tooltip
                                            label={item.schwierigkeit}
                                            position="bottom"
                                            withArrow>
                                            <div id="Schwierigkeit" style={{ backgroundColor: Farbe(item.schwierigkeit) }}>
                                                <IconBarbell id="BarbellLogo" size={42} stroke={1.5} color={item.schwierigkeit === "Fortgeschritten" ? "black" : "white"} />
                                            </div>
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