import React from 'react'
import styled from 'styled-components'

const ReservationForm = () => {
    return (
        <ReservationWrapper>
            <div>
                <form>
                    <input type="text" name="name" id="name" placeholder="Your Name" required/>
                    <input type="phone" name="phone" id="phone" placeholder="Phone Number" required/>
                    <input type="date" name="date" id="date"/>
                    <input type="number" name="people" id="people" placeholder="Number of People" required/>
                    <button type="submit" className='btn-dark'>check availability</button>
                </form>
            </div>
        </ReservationWrapper>
    )
}

const ReservationWrapper = styled.div`
    position: relative;
    margin: 3rem;
    margin-bottom: 0;
    /* background: transparent; */
    top: -6rem;
    form {
        padding: 3rem;
        box-shadow: 4px 4px 20px #ccc;
        border-radius: 1rem;
        width: 80%;
        margin: 0 auto;
        background: white;
        display: grid;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    form input{
        padding: 1rem;
        outline: none;
        border: none;
        border: 1px solid black;
        border-radius: 5px;
        width: 100%;
        text-align: left;
        text-transform: capitalize;
        letter-spacing: 2px;
    }
    form button {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        padding: 1rem;
        border: none;
        outline: none;
    }
    form button:hover {
        background: green;
    }
    @media(max-width: 768px) {
        margin: 2rem 1.5rem;
        form {
            padding: 2rem 1rem;
            width: 100%;
        }
    }
`

export default ReservationForm
