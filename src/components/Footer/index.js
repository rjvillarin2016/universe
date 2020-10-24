import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
} from 'react-icons/fa'
import {
FooterContainer,
FooterWrapper,
FooterLinkItems,
FooterLink,
FooterLinkTitle,
FooterLinkWrapper,
FooterLinksContainer,
SocialMedia,
SocialMediaWrap,
SocialIcon,
WebsiteRights,
SocialIconLink,
SocialLogo
} from './FooterElments'

const Footer = () => {

const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to=''>How it works</FooterLink>
                            <FooterLink to=''>Testimonials</FooterLink>
                            <FooterLink to=''>Careers</FooterLink>
                            <FooterLink to=''>Investors</FooterLink>
                            <FooterLink to=''>Terms and Services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to=''>How it works</FooterLink>
                            <FooterLink to=''>Testimonials</FooterLink>
                            <FooterLink to=''>Careers</FooterLink>
                            <FooterLink to=''>Investors</FooterLink>
                            <FooterLink to=''>Terms and Services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to=''>How it works</FooterLink>
                            <FooterLink to=''>Testimonials</FooterLink>
                            <FooterLink to=''>Careers</FooterLink>
                            <FooterLink to=''>Investors</FooterLink>
                            <FooterLink to=''>Terms and Services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to=''>Facebook</FooterLink>
                            <FooterLink to=''>Twitter</FooterLink>
                            <FooterLink to=''>Instagram</FooterLink>
                            <FooterLink to=''>Youtube</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
             </FooterLinksContainer>
             <SocialMediaWrap>
             <SocialMedia>
                <SocialLogo to='/' onClick={toggleHome}>Universe</SocialLogo>
                <WebsiteRights>Universe © {new Date().getFullYear()} All rights reserved</WebsiteRights>
             <SocialIcon>
                 <SocialIconLink href="www.facebook.com" target="_blank" aria-label="Facebook">
                     <FaFacebook />
                 </SocialIconLink>
                 <SocialIconLink href="www.instagram.com" target="_blank" aria-label="Instagram">
                     <FaInstagram />
                 </SocialIconLink>
                 <SocialIconLink href="www.twitter.com" target="_blank" aria-label="Twitter">
                     <FaTwitter />
                 </SocialIconLink>
                 <SocialIconLink href="www.youtube.com" target="_blank" aria-label="Youtube">
                     <FaYoutube />
                 </SocialIconLink>
             </SocialIcon>
             </SocialMedia> 
             </SocialMediaWrap>  
            </FooterWrapper>
        </FooterContainer>

  
    )
}

export default Footer
