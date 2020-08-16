import React from 'react'
import styled from 'styled-components'
import Logo from '../Images/logo-default.png'
import { SocialLinks } from '../Context/SocialLinks'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterWrapper>
            <footer>
                <div className="logo container-fluid">
                    <img src={Logo} alt="logo"></img>
                </div>
                <div className="icons">
                    {SocialLinks.map(socialLink => {
                        return(
                            <span key={socialLink.id}>
                                <Link to={socialLink.url}>{socialLink.icon}</Link>
                            </span>
                        )
                    })}
                </div>
                <div className='text-center copyright'>
                    Copyright &copy; 2020 Pesto
                </div>
            </footer>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    width: 100% !important;
    background: black;
    padding: 3rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo{
        display: flex;
        justify-content: center;
        padding: 1rem;
        padding-bottom: 0;
        margin-bottom: 2rem;
    }
    .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        padding-bottom: 0;
    }
    .icon{
        font-size: 2rem;
        display: flex;
        color: lime;
        margin: 0.5rem;
        display: inline-block;
    }
    .copyright {
        color: white;
        padding: 1rem;
        letter-spacing: 5px;
        margin-top: 3rem;
        font-size: 1.3rem;
    }
`

export default Footer
