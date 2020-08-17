import React from 'react'
import { RestaurantConsumer } from '../Context/Context'
import Logo from '../Images/logo-default.png'
import styled from 'styled-components';
import { FaBars, FaXing } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {NavLinks} from '../Context/NavLinks'

const Navbar = () => {
    return (
        <RestaurantConsumer>
            {value => {
                const {toggleNavBar, navBarOpen, closeNavbar} = value;
                return(
                    <NavWrapper>
                        <nav className='navbar'>
                            <div className='nav-center'>
                                <div className="nav-header">
                                    <div className="navbar-brand">
                                        <Link to='/'>
                                            <img src={Logo} alt="logo"></img>
                                        </Link>
                                    </div>
                                    <button type="button" className='nav-button' onClick={toggleNavBar}>
                                        {!navBarOpen ? <FaBars className='nav-icon' /> : <FaXing className="nav-icon" /> }
                                    </button>
                                </div>
                                <ul className={navBarOpen ? "nav-links show-nav" : "nav-links"}>
                                    {
                                        NavLinks.map(navLink => {
                                            return(
                                                <li key={navLink.id}>
                                                    <Link to={navLink.path} onClick={closeNavbar}>{navLink.text}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </nav>
                    </NavWrapper>
                )
            }}
        </RestaurantConsumer>
    )
}

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    background: black;
    z-index: 100;
    .nav-center{
        width: 100%;
    }
    .nav-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-button{
        background: transparent;
        color: lime;
        outline: none;
        cursor: pointer;
        border: none;
        font-size: 2rem;
    }
    .nav-button:focus{
        transform: rotateZ(360deg);
        transition: var(--mainTransition);
    }
    .nav-links {
        height: 0;
        overflow: hidden;
        transition: var(--mainTransition);
        list-style-type: none;
        text-transform: uppercase;
        padding: 0;
    }
    .nav-links a {
        display: block;
        text-decoration: none;
        padding: 1rem 0;
        color: lime;
        transition: var(--mainTransition);
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 3px;
    }
    .nav-links a:hover {
        color: orange;
    }
    .show-nav{
        height: 210px;
    }
    @media screen and (min-width: 768px) {
        ul{
            margin: 1rem 0;
        }
        .nav-button {
            display: none;
        }
        .nav-center {
            max-width: 1170px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
        .nav-links {
            height: auto;
            display: flex;
            margin-left: 4rem;
        }
        .nav-links a {
            margin: 0 1rem;
            padding: 0.5rem 0;
        }
    }
`

export default Navbar
