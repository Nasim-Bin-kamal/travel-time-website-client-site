import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TourPackage from '../TourPackage/TourPackage';
import './BestPackages.css';

const BestPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    return (
        <div className="packages-section py-5">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Choose Your Package</h5>
                    <h2 className="text-secondary fw-bold">Select Your Best Package</h2>
                </div>
                <div className="mx-auto my-5">
                    <Row xs={1} md={2} lg={3}>
                        {
                            packages?.map(tourPackage => <TourPackage key={tourPackage?._id} tourPackage={tourPackage}></TourPackage>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default BestPackages;