import React from 'react'
import styled from 'styled-components'
import mainBCG from '../Images/parallax-img.jpg'

const Hero = ({children, img, title, subtitle, max}) => {
    return (
        <HeroWrapper max={max} img={img}>
            <div className="banner">
                <h1 className="title">{title}</h1>
                <div className='line'></div>
                <p className="subtitle">{subtitle}</p>
                {children}
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props => props.max ? '60vh' : '40vh' };
    color: white;
    padding: ${props => props.max ? '2rem 6rem 4rem 6rem' : '2rem 6rem' };
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props => props.img}) center/cover no-repeat;
    .title {
        padding-top: 2rem;
        font-size: 3.5rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        letter-spacing: 7px;
        font-weight: bolder;
    }
    .subtitle{
        font-size: 1.2rem;
        color: white;
        letter-spacing: 2px;
    }
    .line {
        width: 10rem;
        height: 6px;
        background: lime;
        margin: 2rem auto 3rem auto;
    }
    @media(max-width: 768px) {
        padding: ${props => props.max ? '2rem 2rem 4rem 2rem' : '2rem' };
        .title {
            font-size: 2.5rem;
        }
    }
`

Hero.defaultProps = {
    img: mainBCG
}

export default Hero
