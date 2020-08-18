import React from 'react'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import gallery1 from '../../Images/gallery-masonry-1.jpg'
import gallery2 from '../../Images/gallery-masonry-2.jpg'
import gallery3 from '../../Images/gallery-masonry-3.jpg'
import gallery4 from '../../Images/gallery-masonry-4.jpg'
import gallery5 from '../../Images/gallery-masonry-5.jpg'
import { RestaurantConsumer } from '../../Context/Context';

const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5
]

const Gallery = () => {
    return (
        <RestaurantConsumer>
            {value => {
                const {lightboxOpen, lightboxIndex, openLightbox, closeLightbox, changeLightboxIndex} = value;
                return(
                    <GalleryWrapper>
                        <div className='row m-0 py-5'>
                            {
                                images.map((image, index) => {
                                    return(
                                        <div key={index} className={index !== 2 ? 'gallery col-12 col-sm-6 p-0' : 'gallery col-12 col-sm-12 p-0'}>
                                            <img src={image} className='img-fluid w-100' alt="gallery1" />
                                            <div className="d-block" onClick={() => openLightbox(index)}>Zoom</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {lightboxOpen && (
                            <Lightbox
                                mainSrc={images[lightboxIndex]}
                                nextSrc={images[(lightboxIndex + 1) % images.length]}
                                prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
                                onCloseRequest={closeLightbox}
                                onMovePrevRequest={() => changeLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
                                onMoveNextRequest={() => changeLightboxIndex((lightboxIndex + 1) % images.length)}
                            />
                        )}
                    </GalleryWrapper>
                )
            }}
        </RestaurantConsumer>
    )
}

const GalleryWrapper = styled.div`
    margin: -3rem 0;
    .gallery {
        position: relative;
    }
    .gallery > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 30;
        padding: 2rem 1rem;
        background: white;
        border-radius: 50%;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
        border: 10px solid rgba(0, 255, 255, 0.1);
        opacity: 0.4;
    }
    .gallery > div:hover {
        border: 20px solid rgba(0, 255, 255, 0.1);
        transition: var(--mainTransition);
        opacity: 1;
        cursor: pointer;
    }
`

export default Gallery
