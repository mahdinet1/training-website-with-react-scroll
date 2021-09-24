import React,{useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import { homeObject1,homeObject2,homeObject3 } from '../components/info/Data';
import Info from '../components/info/Info';
import Navbar from '../components/navbar/Navbar'
import Services from '../components/services/Services';
import SideBar from '../components/sidebar/SideBar'

const Home = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle =()=>{
        setisOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle} />
            <HeroSection />
            <Info {...homeObject1}  />
            <Info {...homeObject2} />
            <Services />
            <Info {...homeObject3} />
        </>
    )
}

export default Home
