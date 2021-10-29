import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const { packageName, packagePrice, spendDays, image, rating, description } = singlePackage || {};
    useEffect(() => {
        const url = `http://localhost:5000/packages/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, []);
    return (
        <div className="booking-section">
            <Container>
                <div className="text-center mx-auto pt-4">
                    <h1 className="title">Book A Package and Enjoy Your Tour</h1>
                    <h5 className="text-secondary">Before Booking you please see all details about the package</h5>
                </div>
                <div className="mx-auto py-5">
                    <Row xs={1} md={1} lg={2} className="d-flex align-items-center justify-content-center shadow-sm bg-light px-2 py-3">
                        <Col>
                            <img className="w-100" src={image} alt="" />
                        </Col>
                        <Col>
                            <div className="mx-auto my-3">
                                <h4>Package Name: {packageName}</h4>
                                <h5>Package Price: {packagePrice}/Per Person</h5>
                                <p><b>Total Days:</b> {spendDays}</p>
                                <p><b>Rating:</b> {rating}</p>
                                <p><b>Description:</b>{description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h2 className="text-capitalize text-center mx-auto pb-5">If you want to book this package fill the form</h2>

                </div>
            </Container>
        </div>
    );
};

export default Booking;