import React from 'react'
import styled from 'styled-components'
import award1 from '../../Images/award1.png'
import award2 from '../../Images/award2.png'
import award3 from '../../Images/award3.png'
import award4 from '../../Images/award4.png'

const Awards = () => {
    return (
        <AwardWrapper>
            <h2 className="mx-auto py-3 text-center">Our awards</h2>
            <div className="row">
                <div className='award-img col-6 col-md-3 my-3'>
                    <img src={award1} alt="award1" />
                </div>
                <div className='award-img col-6 col-md-3 my-3'>
                    <img src={award2} alt="award1" />
                </div>
                <div className='award-img col-6 col-md-3 my-3'>
                    <img src={award3} alt="award1" />
                </div>
                <div className='award-img col-6 col-md-3 my-3'>
                    <img src={award4} alt="award1" />
                </div>
            </div>
        </AwardWrapper>
    )
}

const AwardWrapper = styled.div`
    padding: 2rem;
    margin: 0 auto;
    img {
        max-width: 100%;
        height: auto;
    }
    .award-img {
        width: 100%;
        text-align: center;
    }
    img:hover {
        transition: var(--mainTransition);
        box-shadow: 2px 2px 20px #bbb;
    }
`

export default Awards
