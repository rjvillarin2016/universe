import React, {useState} from 'react';
//import { FaArrowRight } from 'react-icons/fa';
import {Button} from '../ButtonElement'
import Video from '../videos/video.mp4';

import { 
    ContentContainer,
    ContentBg,
    InfoArea, 
    VideoBg,
    InfoH1,
    InfoP, 
    InfoBtnWrapper, 
    ArrowForward, 
    ArrowRight} 
    from './ContentElements'

const ContentSection = () => {
    const [hover, setHover] = useState(false);
    
    const onHover = ()=> {
        setHover(!hover)
    }

    return (
        
            <ContentContainer id='home'>
                <ContentBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
                </ContentBg>
                <InfoArea>
                   <InfoH1>You may see things far from reality.</InfoH1>
                    <InfoP>
                        Sign up for a new account today to see incredible things that we had discovered and you will have a chance to visit the space. 
                    </InfoP> 
                    <InfoBtnWrapper>
                        <Button 
                        to='signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='true' 
                        dark='true'
                        smooth={true} 
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} 
                        >Get started
                        {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </InfoBtnWrapper> 
                </InfoArea>
            </ContentContainer>
    );
};

export default ContentSection;
