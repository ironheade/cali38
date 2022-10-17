import './carousel'
import { useState } from 'react'
import { createStyles, Image, Modal } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles((theme, _params, getRef) => ({
    price: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    carousel: {
        '&:hover': {
            [`& .${getRef('carouselControls')}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getRef('carouselControls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    carouselIndicator: {
        width: 4,
        height: 4,
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: 16,
        },
    },
}));

export function ImageCarousel(props: any) {
    const { classes } = useStyles();

    const [modalOpen, setModalOpen] = useState(false)
    const [currentURL,setCurrentURL] = useState("")

    function OpenModal(image:string){
        setCurrentURL(image)
        setModalOpen(true)
    }

    const slides = props.images.map((image: string) => (

        <Carousel.Slide key={image}>

                <Image radius="md" src={image} height={220} onClick={()=>OpenModal(image)}/>

        </Carousel.Slide>
    ));

    return (
        <div>

            <Modal
                centered
                overlayColor={"black"}
                overlayOpacity={0.55}
                size="auto"
                overlayBlur={3}
                opened={modalOpen}
                withCloseButton={false}
                onClose={() => setModalOpen(false)}
            >
                <Image
                    radius="md"
                    src={currentURL}
                    alt="Random unsplash image"
                    fit='contain'
                    height={"70vh"}
                />
            </Modal>

            <Carousel
                withIndicators
                loop
                classNames={{
                    root: classes.carousel,
                    controls: classes.carouselControls,
                    indicator: classes.carouselIndicator,
                }}
            >
                {slides}
            </Carousel>
        </div>
    );
}