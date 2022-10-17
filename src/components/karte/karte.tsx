import { Paper } from '@mantine/core'
import './karte.css'

interface MapProps {
    mapsrc: string;
}
export function Karte({mapsrc}:MapProps) {

    return (
        <Paper shadow="xl" p="md">
            <iframe
                src={mapsrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Paper>
    )
}