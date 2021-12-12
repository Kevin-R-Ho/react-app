import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/index.js'
import InfoSection from '../components/InfoSection/index.js'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data.js'
import Navbar from '../components/Navbar/index.js'
import Services from '../components/Services/index.js'
import Sidebar from '../components/Sidebar/index.js'
import Footer from '../components/Footer/index.js'


const Home = () => {
    const[isOpen, setIsOpen] = useState(false) 

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    );
}
export default Home
