import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManagePackages.css';

const ManagePackages = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    const [singleBookedPackage, setSingleBookedPackage] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookedPackages(data));
    }, []);

    // useEffect(() => {
    //     const url = `http://localhost:5000/bookings/${id}`;
    //     fetch(url)
    //     .then(res=>res.json())

    // }, []);



    const handleApprovedBooking = (id) => {
        const findPackage = bookedPackages.find(bookedPackage => bookedPackage._id === id);
        setSingleBookedPackage(findPackage);

        const updatedPackage = { ...singleBookedPackage };
        updatedPackage.bookingStatus = "Approved";
        setSingleBookedPackage(updatedPackage);

        const url = `http://localhost:5000/bookings/update/${id}`;
        axios.put(url, singleBookedPackage)
            .then(res => {
                console.log(res.data);
                // if (res.data.modifiedCount > 0) {
                //     alert('Updated Successfully');
                // }
            });

    }
    const handleCancelBooking = (id) => {
        const url = `http://localhost:5000/bookings/${id}`;
        const proceed = window.confirm('Are you want to delete this package');
        if (proceed) {
            axios.delete(url)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingPackages = bookedPackages?.filter(bookedPackage => bookedPackage._id !== id);
                        setBookedPackages(remainingPackages);
                    }
                });
        }
    }
    return (
        <div>
            <Container>
                <div className="text-center mx-auto py-3">
                    <h2 className="title">Manage All Packages</h2>
                    <h4 className="text-secondary">Total Booked Packages: <strong>{bookedPackages.length}</strong></h4>
                </div>
                <div className="mx-auto my-5">
                    <Table striped bordered hover responsive className="shadow-sm">
                        <thead className="text-center">
                            <tr>
                                <th>Booking Id</th>
                                <th>Booked Package</th>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Booked Status</th>
                                <th>Approve/Cancel Booking</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                bookedPackages?.map(bookedPackage => <tr key={bookedPackage?._id}>
                                    <td>{bookedPackage?._id}</td>
                                    <td>{bookedPackage?.bookedPackage?.packageName} ({bookedPackage?.bookedPackage?.spendDays})</td>
                                    <td>{bookedPackage?.name}</td>
                                    <td>{bookedPackage?.email}</td>
                                    <td>{bookedPackage?.bookingStatus}</td>
                                    <td className="d-flex align-items-center justify-content-around">
                                        <i onClick={() => handleApprovedBooking(bookedPackage?._id)} className="fas p-1 fa-check-double text-success"></i>
                                        <i onClick={() => handleCancelBooking(bookedPackage?._id)} className="fas p-1 fa-trash-alt text-danger"></i>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </Table>
                </div>
            </Container>
        </div >
    );
};

export default ManagePackages;