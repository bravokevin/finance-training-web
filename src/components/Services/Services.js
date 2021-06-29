import React from 'react'

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesH1>Ouse Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP> We help reduce your fees and encrease your overall revenue</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
