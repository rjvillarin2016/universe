
import React,{useState}  from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ContentSection from '../ContentSection';
import InfoSection from '../InfoSection/';
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data';
import Services from '../Services'
import Footer from '../Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
           setIsOpen(!isOpen); 
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>
         <ContentSection />
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <Services />
         <InfoSection {...homeObjThree} />
         <Footer />
        </>
    );
};

export default Home;
