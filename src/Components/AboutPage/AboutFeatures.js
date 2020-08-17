import React from 'react'
import styled from 'styled-components'
import { AboutData } from '../../Context/AboutData'

const AboutFeatures = () => {
    return (
        <AboutFeatureWrapper>
            <div>
                <h2 className="mx-auto my-3 text-center">why people choose us</h2>
                <div className="aboutFeatures">
                    {
                        AboutData.map(item => {
                            return(
                                <div key={item.id}>
                                    <div>{item.icon}</div>
                                    <div className="desc">
                                        <h5>{item.title}</h5>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </AboutFeatureWrapper>
    )
}

const AboutFeatureWrapper = styled.div`
    background: #eee;
    padding: 3rem;
    margin: 0;
    @media(max-width: 768px) {
        padding: 3rem 1rem;
    }
    h2 {
        margin: 1rem auto 3rem auto;
    }
    .aboutFeatures {
        display: grid;
        margin: 0 auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-row-gap: 1rem;
        grid-column-gap: 3rem;
        text-align: center;
    }
    .icon {
        font-size: 4rem;
        margin: 2rem;
    }
    .desc {
        letter-spacing: 2px;
        font-size: 1.1rem;
    }
    .desc a {
        color: black;
    }
    .desc a:hover {
        text-decoration: none;
        color: green;
    }
    .desc p{
        color: grey;
    }
`


export default AboutFeatures
