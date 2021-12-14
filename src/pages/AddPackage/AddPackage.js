import axios from 'axios';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dark-blood-03727.herokuapp.com/packages', data)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    alert('Package Added Successfully');
                    reset();
                }
            });
    };
    console.log(errors);
    return (
        <div className='addPackage'>
            <Container>
                <div className="text-center mx-auto my-2">
                    <h2 className="form-title">Add A Tour Package</h2>
                    <h5 className="text-secondary">To add a package fill the require form fields</h5>
                </div>
                <div className="package-from mx-auto my-5 p-3 rounded-3 shadow-sm">
                    <form className="mx-auto d-flex justify-content-center align-items-center flex-column w-100" onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Package Name" {...register("packageName", { required: true, maxLength: 80 })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Package Price" {...register("packagePrice", { required: true, maxLength: 100 })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Spend Days, i.e. (3 Days/ 4 Night)" {...register("spendDays", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Image Url" {...register("image", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Rating" {...register("rating", { required: true })} />
                        <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Package Description" {...register("description", { required: true })} />

                        <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3" variant="success" type="submit">Submit</Button>
                    </form>
                </div>

            </Container>
        </div>
    );
};

export default AddPackage;