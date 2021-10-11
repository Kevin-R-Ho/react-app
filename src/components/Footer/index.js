import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import {
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin
}
from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>Business Number</FooterLink>
                                <FooterLink to='/signin'>Sponsorships</FooterLink>
                                <FooterLink to='/signin'>Legalities</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>    
                        <FooterLinkItems>
                            <FooterLinkTitle>Member Features</FooterLinkTitle>
                                <FooterLink to='/signin'>Account Access</FooterLink>
                                <FooterLink to='/signin'>Credit Card Rewards</FooterLink>
                                <FooterLink to='/signin'>Notifications</FooterLink>
                                <FooterLink to='/signin'>Account Agreements</FooterLink>
                                <FooterLink to='/signin'>Mobile Banking</FooterLink> 
                        </FooterLinkItems>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to='/signin'></FooterLink>
                                <FooterLink to='/signin'></FooterLink>
                                <FooterLink to='/signin'></FooterLink>
                                <FooterLink to='/signin'></FooterLink>
                                <FooterLink to='/signin'></FooterLink> 
                        </FooterLinkItems> */}
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}> money</SocialLogo>
                        <WebsiteRights>© Kevin Ho {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                                <FaFacebook /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaInstagram /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                                <FaYoutube /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                                <FaTwitter /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Linkedin">
                                <FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        
    )
}

export default Footer;
