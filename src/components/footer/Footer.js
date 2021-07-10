import React from 'react'

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa"

import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTittle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRigths} from "./Footer.styles.js";

const FOOTER_ITEMS1 = [
  {
    one: {
      tittle: "about",
      contents: [
        "how it works",
        "testimonials",
        "careers",
        "investors",
        "terms of services"]
    },

    two: {
      tittle: "contact us",
      contents: [
        "contact",
        "support",
        "destinations",
        "sponsorships"]
    }
  }
]
const FOOTER_ITEMS2 = [{
  one: {
    tittle: "Videos",
    contents: [
      "submit a video",
      "ambassadors",
      "agency",
      "influencers"]
  },

  two: {
    tittle: "social media",
    contents: [
      "instagram",
      "facebook",
      "youtube",
      "twitter"]
  }
}
]

const SOCIAL_MEDIA = [
  { name: "instagram", icon:  FaInstagram },
  { name: "twitter", icon: FaTwitter },
  { name: "linkdin", icon: FaLinkedin },
  { name: "facebook", icon: FaFacebook }, 
  { name: "youtube", icon: FaYoutube}
]

const Footer = ({toggleHome}) => {

  return (

    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>

          {/* We put two columns for the mobile view */}
          {FOOTER_ITEMS1.map((item, index) => (
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTittle>{item.one.tittle}</FooterLinkTittle>
                {item.one.contents.map((content) => (
                  <FooterLink to="/signin">{content}</FooterLink>
                ))}
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTittle>{item.two.tittle}</FooterLinkTittle>
                {item.one.contents.map((content) => (
                  <FooterLink to="/signin">{content}</FooterLink>
                ))}
              </FooterLinkItems>
            </FooterLinksWrapper>
          ))}

          {FOOTER_ITEMS2.map((item, index) => (
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTittle>{item.one.tittle}</FooterLinkTittle>
                {item.one.contents.map((content) => (
                  <FooterLink to="/signin">{content}</FooterLink>
                ))}
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTittle>{item.two.tittle}</FooterLinkTittle>
                {item.one.contents.map((content) => (
                  <FooterLink to="/signin">{content}</FooterLink>
                ))}
              </FooterLinkItems>
            </FooterLinksWrapper>
          ))}
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'onClick={toggleHome} >Dollar</SocialLogo>
            <WebsiteRigths>{new Date().getFullYear()} all rights reserved</WebsiteRigths>
            <SocialIcons>

              {SOCIAL_MEDIA.map((i) => (
                <SocialIconLink href="/" target="_blank" aria-label={i.name}>
                  {<i.icon/>}
                </SocialIconLink>
              ))}

            </SocialIcons>

          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
