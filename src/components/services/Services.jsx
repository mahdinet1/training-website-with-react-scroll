import React from 'react'
import { ServicesContainer,ServicesP, ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2} from './ServicesElements.style'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2>Reducer expances</ServicesH2>
                        <ServicesP>we help reduce your feas increase your overall revenue</ServicesP>
                   
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                        <ServicesH2>Reducer expances</ServicesH2>
                        <ServicesP>we help reduce your feas increase your overall revenue</ServicesP>
                   
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                        <ServicesH2>Reducer expances</ServicesH2>
                        <ServicesP>we help reduce your feas increase your overall revenue</ServicesP>
                    
                </ServicesCard>
                
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
