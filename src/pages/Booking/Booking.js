import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Booking = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const { packageName, packagePrice, spendDays, image, rating, description } = singlePackage || {};

    const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm();

    useEffect(() => {
        const url = `https://dark-blood-03727.herokuapp.com/packages/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [id]);

    useEffect(() => {
        setFocus("email")
    }, [setFocus]);


    const onSubmit = data => {
        data.name = user?.displayName;
        data.bookingStatus = "Pending";
        data.bookedPackage = { ...singlePackage };
        console.log(data);


        axios.post('https://dark-blood-03727.herokuapp.com/bookings', data)
            .then(res => {
                // console.log(res.data);
                if (res.data?.insertedId) {
                    alert('Successfully Booked');
                    reset();
                }
            })
    };
    console.log(errors);






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
                <div className="mx-auto pb-5">
                    <h2 className="text-capitalize text-center mx-auto py-3">Booking Form</h2>

                    <div className="text-center mx-auto pb-3">
                        <h5 className="user">Dear Sir, {user?.displayName}</h5>
                        <p>If you want to book this travel package fill the form first</p>
                    </div>

                    <div className="booking-form mx-auto p-3 rounded-3 shadow-sm">

                        <form className=" mx-auto d-flex justify-content-center align-items-center flex-column w-100" onSubmit={handleSubmit(onSubmit)}>

                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} value={user?.email || ""} muted />
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="tel" placeholder="Mobile number" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="date" placeholder="Travel Date" {...register("travelDate", { required: true })} />
                            <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Enter Your Address" {...register("address", { required: true })} />

                            <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3" variant="success" type="submit">Submit</Button>
                        </form>
                    </div>


                </div>
            </Container >
        </div >
    );
};

export default Booking;