import React from 'react'

const FOOTER_ITEMS = ["About", "how it works", "testimonials", "careers", "investors", "terms of services"]

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            
            <FooterLinkItems>
              <FooterLinkTittle></FooterLinkTittle>
              <FooterLink to="/signin"></FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTittle></FooterLinkTittle>
              <FooterLink to="/signin"></FooterLink>
            </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
