import React from 'react'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NewsData } from '../../Context/NewsData';

const News = () => {
    return (
        <NewsWrapper>
            <h1 className='text-center mx-auto mb-5 text-capitalize font-weight-bold'>Recent news</h1>
            <OwlCarousel className={'owl-theme'}
                loop={true}
                margin={10}
                nav={false}
                dots={true}
                autoplay={false}
                autoplayTimeout={2000}
                items={9}
                responsive={{ 
                    250: {
                        items: 1,
                    },
                    700: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }}
            >
                {NewsData.map(item => {
                    return(
                        <div key={item.id} className={'item'}>
                            <h3 className="mb-2 text-left">{item.title}</h3>
                            <p className="text-muted">{item.subtitle}</p>
                        </div>
                    )
                })}
            </OwlCarousel>
        </NewsWrapper>
    )
}

const NewsWrapper = styled.div`
    background: #eee;
    padding: 2rem;
    h1 {
        font-size: 3rem;
    }
    .owl-theme {
        padding: 0;
        text-align: justify;
    }
    .item {
        margin: 0 1.5rem;
    }
    .item h3 {
        line-height: 1.5;
        text-transform: capitalize;
        letter-spacing: 2px;
    }
`

export default News
