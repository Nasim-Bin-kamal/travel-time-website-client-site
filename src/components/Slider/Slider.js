import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://i.ibb.co/xsJqP07/traveling-thailand-amazing-view-from-thai-traditional-wooden-longtail-boat-travel-sea-7186-3259.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption">
                        <h1>Amazing Tour All Over The World</h1>
                        <p className="fs-4">Travel all the world's best place with best deals.</p>
                        <Button className="text-white border border-2 px-4 py-2 slider-btn" variant="outside-light">Read More <i class="fas fa-angle-double-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://i.ibb.co/F7PvKM2/1293441583-nature-forest-morning-in-the-forest-015232.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="caption">
                        <h1>Travel and Adventures</h1>
                        <p className="fs-4">Where would you like to go?</p>
                        <Button className="text-white border border-2 px-4 py-2 slider-btn" variant="outside-light">Read More <i class="fas fa-angle-double-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://i.ibb.co/xSpr3jM/newyorkcity336475-1280.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <h1>Find Your Next Tours</h1>
                        <p className="fs-4">Plan your favourite destination.</p>
                        <Button className="text-white border border-2 px-4 py-2 slider-btn" variant="outside-light">Read More <i class="fas fa-angle-double-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;