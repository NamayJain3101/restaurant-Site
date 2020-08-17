import React from 'react'
import styled from 'styled-components'
import gallery1 from '../../Images/gallery-masonry-1.jpg'
import gallery2 from '../../Images/gallery-masonry-2.jpg'
import gallery3 from '../../Images/gallery-masonry-3.jpg'
import gallery4 from '../../Images/gallery-masonry-4.jpg'
import gallery5 from '../../Images/gallery-masonry-5.jpg'

const Gallery = () => {
    return (
        <GalleryWrapper>
            <div className='row m-0 py-5'>
                <div className='gallery col-12 col-sm-6 p-0'>
                    <img src={gallery1} className='img-fluid w-100' alt="gallery1" />
                    <div className="d-block">Zoom</div>
                </div>
                <div className='gallery col-12 col-sm-6 p-0'>
                    <img src={gallery2} className='img-fluid w-100' alt="gallery2" />
                    <div className="d-block">Zoom</div>
                </div>
                <div className='gallery col-12 col-sm-12 p-0'>
                    <img src={gallery3} className='img-fluid w-100' alt="gallery1" />
                    <div className="d-block">Zoom</div>
                </div>
                <div className='gallery col-12 col-sm-6 p-0'>
                    <img src={gallery4} className='img-fluid w-100' alt="gallery1" />
                    <div className="d-block">Zoom</div>
                </div>
                <div className='gallery col-12 col-sm-6 p-0'>
                    <img src={gallery5} className='img-fluid w-100' alt="gallery1" />
                    <div className="d-block">Zoom</div>
                </div>
            </div>
        </GalleryWrapper>
    )
}

const GalleryWrapper = styled.div`
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
