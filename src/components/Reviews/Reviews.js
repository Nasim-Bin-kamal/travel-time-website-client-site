import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className="review-section">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Testimonials and reviews</h5>
                    <h2 className="text-secondary fw-bold">What They’re Saying About Us</h2>
                </div>
                <div>
                    <Row xs={1} md={2} lg={3} className="mx-auto py-5">
                        <Col className="mx-auto my-3">
                            <div className="d-flex justify-content-center align-items-center flex-column mx-auto my-2 bg-light p-3 shadow-sm rounded-3">
                                <img className="img-fluid w-50 mx-auto pb-3" src="https://i.ibb.co/DVF89W5/testimonial-one-img-2.png" alt="" />
                                <h4 className="fw-bold">Kelvin Martin</h4>
                                <h5 className="short-info">Traveller</h5>
                                <p className="text-secondary">Our trip to Morocco was truly a once-in-a-lifetime experience and we are so grateful to everyone that made it happen seamlessly.</p>
                            </div>
                        </Col>
                        <Col className="mx-auto my-3">
                            <div className="d-flex justify-content-center align-items-center flex-column mx-auto my-2 bg-light p-3 shadow-sm rounded-3">
                                <img className="img-fluid w-50 mx-auto pb-3" src="https://i.ibb.co/4sVGRWG/testimonial-one-img-1.png" alt="" />
                                <h4 className="fw-bold">Shirley Smith</h4>
                                <h5 className="short-info">Traveller</h5>
                                <p className="text-secondary">Fantastic! Our Costa Rica travel company took care of everything. The owner and his wife met us at the airport with a care package of coffee and chocolate.</p>
                            </div>
                        </Col>
                        <Col className="mx-auto my-3">
                            <div className="d-flex justify-content-center align-items-center flex-column mx-auto my-2 bg-light p-3 shadow-sm rounded-3">
                                <img className="img-fluid w-50 mx-auto pb-3" src="https://i.ibb.co/VVHWhNp/testimonial-one-img-3.png" alt="" />
                                <h4 className="fw-bold">Jessica Brown</h4>
                                <h5 className="short-info">Traveller</h5>
                                <p className="text-secondary">This was a tour that was over two years in the making as it was delayed a full year when the world stopped vacation travel due to Covid.  </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Reviews;