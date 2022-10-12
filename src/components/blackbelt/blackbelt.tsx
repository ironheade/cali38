import { Container, Grid } from '@mantine/core'
import { } from 'antd-mobile'
import './blackbelt.css'
import kkkbacklever from '../../resources/kkkbacklever.png'
import { useResizeObserver } from '@mantine/hooks';

export function Blackbelt() {

    const [ref, rect] = useResizeObserver();

    return (
        <>
            <div className='blackBeltSpacer' />
            <div className='blackBelt' ref={ref}>
                <Container size="xl" my="xs">
                    <Grid grow>
                        {rect.width > 1000 &&
                            <Grid.Col xs={6}>
                                <img id="blackBeltImage" src={"https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2Fkkkbacklever.jpeg?alt=media&token=d9c16e65-aea2-491c-8844-95f8eb3e0cb9"} />
                            </Grid.Col>}

                        <Grid.Col xs={6}>
                            <h1 className='blackBeltText blackBeltHeadline'>Was ist Calisthenics?</h1>
                            <p className='blackBeltText'>
                                Calisthenics bedeutet übersetzt "schöne Kraft" und stellt eine Art des Eigengewichtstrainings dar.
                                Basics wie Klimmzüge oder Liegestütze werden dabei mit Übungen aus anderen Sportarten wie dem Turnen oder Akrobatik kombiniert.<br/><br/>
                                Trainiert werden kann grundsätzlich überall, es wird jedoch vorwiegend an bestimmten Trainingsspots, so genannten Calisthenics Parks trainiert.
                                Eine Übersicht über die Parks in Braunschweig findet ihr <span><a className='blackBeltLink'>hier</a></span>.<br/><br/>

                                Durch das Progressionsprinzip ist die Sportart insbesondere sehr gut für Einsteiger geeignet.</p>
                        </Grid.Col>

                    </Grid>
                </Container>
            </div>
            <div className='blackBeltSpacer' />
        </>
    )
}