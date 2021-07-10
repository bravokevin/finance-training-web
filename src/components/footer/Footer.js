import React from 'react'

import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTittle, FooterLink } from "./Footer.styles.js";

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
  }}
]

const Footer = () => {

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
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
