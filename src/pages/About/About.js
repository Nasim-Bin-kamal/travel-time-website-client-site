import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center about-banner">
                <h1 className=" text-uppercase text-white fw-bold">About Us</h1>
            </div>
            <div className="directors-section">
                <Container>
                    <div className="mx-auto">
                        <div className="mx-auto">
                            <h2 className="text-center mx-auto text-uppercase py-5 fw-bold title">Board Of Directors</h2>
                        </div>
                        <Row xs={1} md={2} lg={3} className="pb-5 mx-auto">
                            <Col className="mx-auto my-3">
                                <div className="mx-auto shadow-sm p-3 bg-white  rounded-3">
                                    <img className="img-fluid w-100 mx-auto pb-3" src="https://i.ibb.co/3dnRtNV/team-1-1.jpg" alt="" />
                                    <p>CEO</p>
                                    <h4 className="director-name">Edward Nash</h4>
                                    <small>The chief executive officer (CEO) is the highest-ranking person in a company. While every company differs, CEOs are often responsible for expanding the company, driving profitability, and in the case of public companies, improving share prices. CEOs manage the overall operations of a company.</small>
                                </div>
                            </Col>
                            <Col className="mx-auto my-3">
                                <div className="mx-auto shadow-sm p-3 bg-white  rounded-3">
                                    <img className="img-fluid w-100 mx-auto pb-3" src="https://i.ibb.co/0jCBbpj/team-1-4.jpg" alt="" />
                                    <p>MD</p>
                                    <h4 className="director-name">Roxie Palmer</h4>
                                    <small> Managing Director is the leader of our company. He is a person who develops a corporate culture for our company. Since the MD is responsible for the day-to-day business of on organisation, he would be responsible for the overall management of our company. He is a person who has to bring in innovations and expansions.</small>
                                </div>
                            </Col>
                            <Col className="mx-auto my-3">
                                <div className="mx-auto shadow-sm p-3 bg-white  rounded-3">
                                    <img className="img-fluid w-100 mx-auto pb-3" src="https://i.ibb.co/FXSB4Ss/team-1-3.jpg" alt="" />
                                    <p>CAO</p>
                                    <h4 className="director-name">Hellen Lowe</h4>
                                    <small>The Chief Administrative Officer (CAO) is responsible for managing the day-to-day operations of a company and is in charge of specific departments (such as finance, HR, and sales), reporting directly to the CEO and board of directors. As such, the CAO is often known as the Chief Operating Officer (COO). </small>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>

        </div>
    );
};

export default About;