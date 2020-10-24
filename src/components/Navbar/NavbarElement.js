import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background : ${({scrollNav}) => (scrollNav) ? 'rgba(0, 0, 0, 0.8);' : '#000'};
    height : 80px;
    margin-top : 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
  
    z-index: 10;
    padding: 0px 100px;

 
    @media screen and (max-width: 960px){
        transition: 0.2s all ease;
        height : 50px;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-component: space-between;
    height:80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 650px  ;
    position: relative;    
`;


export const NavLogo = styled(LinkR)`
    color : #fff;
    justify-self: flex-starter;
    font-size: 1.5rem;
    cursor : pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    font-family: Tahoma, Geneva, sans-serif;
    position: absolute;  
    margin-left: -200px;
    top: 20px;

    @media screen and (max-width: 768px){
    margin-left:-100px;
    }
`;




export const MobileIcon = styled.div`
    display: none;
   
    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        
        right: -100px;
        transform: translate(-100%, 60%);
        font-size:1.8rem;
        cursor: pointer;
        color:#fff;
        
    }

`;



export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    magin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;


export const NavItems = styled.li`
    height : 80px;
    padding: 0 20px;
`;

export const NavLinks = styled(LinkS)`
    color : #fff;
    display : flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    position: relative;

`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space:nowrap;
    padding: 10px 25px;
    color: #010606;
    font-size: 16px
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 02.s ease-in-out;
    text-decoration: none;
    position: absolute;
       

    

&:hover{
    transition: all 02.s ease-in-out;
    background: #fff;
    color: #010606;
}

@media screen and (max-width: 768px){
        display: none;
`;