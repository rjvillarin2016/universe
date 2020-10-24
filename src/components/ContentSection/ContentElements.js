import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const ContentContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 600px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        postion: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

`;

export const ContentBg = styled.div`
    position: absolute;
    top:;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 480px){
        height: 100%;
        transition: 0.2s all ease;
    }
    
`;
export const VideoBg = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;;
    
`;


export const InfoArea = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    padding: 8px 24px;
    fex-direction: column;
    align-item-center;
    height: 100%;
    
`;
export const InfoH1 = styled.h1`
    color: #fff;
    font-size : 48px;
    text-align: center;
    position: relative;
    top: 150px;
   

    @media screen and (max-width: 768px){
        font-size: 30px;
        transition: 0.2s all ease;
        top: 150px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
        transition: 0.2s all ease;
    }

`;

export const InfoP = styled.p`
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 1000px;
    position: relative;
    top: 160px;

    @media screen and (max-width: 768px){
        font-size: 20px;
        transition: 0.2s all ease;
        top: 200px;
        
    }

    @media screen and (max-width: 480px){
        font-size: 2px;
        transition: 0.2s all ease;
       
    }

`;

export const InfoBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    position: relative;
    top: 170px;

    
    @media screen and (max-width: 768px){
        font-size: 20px;
        top: 220px;
        transition: 0.2s all ease;
    }

`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;