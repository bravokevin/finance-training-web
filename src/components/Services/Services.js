import React from 'react'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './Services.styles'



const Services = ({info}) => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Ouse Services</ServicesH1>
        <ServicesWrapper>
          {info.map(({tittle, description, icon}) => (
            <ServicesCard>
              <ServicesIcon src={icon}/>
              <ServicesH2>{tittle}</ServicesH2>
              <ServicesP>{description}</ServicesP>
            </ServicesCard>
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
