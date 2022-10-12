import { HeaderResponsive } from "../header";
import './homescreen.css'
import { useWindowScroll } from '@mantine/hooks';
import { FooterSimple } from "../footer";

import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import { LandingPage } from "../landingPage";
import { Events } from "../events";
import { Calisthenics } from "../calisthenics";
import { LoginModal } from "../loginModal";
import { useState, useLayoutEffect } from "react";
import headerImage from '../../resources/headerImage.jpg'

export function HomeScreen(props: any) {

    const mockdata = [
        {
            "link": "/",
            "label": "Home"
        },
        {
            "link": "/events",
            "label": "Events"
        },
        {
            "link": "/calisthenics",
            "label": "Calisthenics"
        }
    ]

    const [scroll, scrollTo] = useWindowScroll();
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    //gerade aktive Route
    const [active, setActive] = useState(mockdata[0].link)


    const footermockdata = [{
        "link": "#",
        "label": "Contact"
    },
    {
        "link": "#",
        "label": "Privacy"
    },
    {
        "link": "#",
        "label": "Blog"
    },
    {
        "link": "#",
        "label": "Careers"
    }]

    const location = useLocation();

       useLayoutEffect(() => {
        setActive(location.pathname) 
       }, [location])

    return (
        <>
            <HeaderResponsive active={active} setActive={setActive} links={mockdata} 
            //logged={props.logged} 
            changeOpenState={setLoginModalOpen} 
            //logout={() => props.logout()} 
            />
            <div id="greetingImage" 
                style={{ backgroundImage:`url(${headerImage})`, transform: `translate(0px,${(-scroll.y / 4)}px)` }} />

            <LoginModal open={loginModalOpen} changeOpenState={setLoginModalOpen}/>

            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/calisthenics" element={<Calisthenics />}></Route>
            </Routes>

            {/*<div id="secondImage" style={{ transform: `translate(0px,${(-scroll.y / 4) + 500}px)` }} />*/}
            <FooterSimple links={footermockdata} />
        </>
    )
}