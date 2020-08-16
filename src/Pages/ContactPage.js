import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import contactBcg from '../Images/breadcrumbs.jpg'
import { ContactData } from '../Context/ContactData'
import styled from 'styled-components'

const ContactPage = () => {
    return (
        <>
            <Hero img={contactBcg} title="contact Us">
                <Link to='/' className="main-link">goto Home</Link>
            </Hero>
            <ContactWrapper>
                <div className="contacts">
                    {
                        ContactData.map(item => {
                            return(
                                <div key={item.id}>
                                    <div>{item.icon}</div>
                                    <div className="desc">
                                        <h5>{item.link}</h5>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ContactWrapper>
            <hr/>
            <ContactFormWrapper>
                    <h3>Get in touch</h3>
                    <form action="https://formspree.io/mknqelye" method="POST">
                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                        <input type="email" name="email" id="email" placeholder="E-mail"/>
                        <input type="text" name="phone" id="phone" placeholder="Phone"/>
                        <textarea placeholder="Message" rows="4"></textarea>
                        <button type="submit" className='btn-success'>Send</button>
                    </form>
            </ContactFormWrapper>
        </>
    )
}

const ContactWrapper = styled.div`
    text-align: center;
    padding: 3rem;
    .contacts {
        display: grid;
        margin: 0 auto;
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
        grid-row-gap: 1rem;
        grid-column-gap: 2rem;
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

const ContactFormWrapper = styled.div`
    text-align: center;
    padding: 3rem;
    form{
        margin: 2rem auto;
    }
    form input, form textarea, form button{
        padding: 1rem 2rem;
        margin: 1rem auto;
        border: 1px solid black;
        letter-spacing: 2px;
        display: block;
        width: 60vw;
        border-radius: 0.5rem;
    }
    form button {
        width: 40vw;
        font-size: 1.3rem;
        margin: 2rem auto;
    }
    h3 {
        font-weight: bold;
        letter-spacing: 3px;
    }
`

export default ContactPage
