import React, { useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './RegisterLogin.css';

const RegisterLogin = () => {
    const { setUser, setUserName, singInProcess, verifyEmail, setErrorMsg, setLoading, errorMsg, signInWithGoogle, signInWithGithub, newUserRegistration } = useAuth();

    const [isRegistration, setIsRegistration] = useState(false);
    const location = useLocation();
    const redirectUrl = location.state?.from || "/home";
    const history = useHistory();


    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (password.length < 6) {
            setErrorMsg('Password must be at least 6 character long.')
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorMsg('Password must be 2 uppercase letter');
            return;
        }

        isRegistration ? userRegistration(email, password) : userSignIn(email, password);


    }

    //Register user by email and password
    const userRegistration = (email, password) => {
        const name = nameRef.current.value;
        newUserRegistration(email, password)
            .then(result => {
                console.log('registration success')
                history.push(redirectUrl);
                setUserName(name);
                setUser(result?.user);
                setErrorMsg('');
                verifyEmail();
                window.location.reload();
            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => setLoading(false));
    }

    //sign in with email and password
    const userSignIn = (email, password) => {
        singInProcess(email, password)
            .then(result => {
                //signed in.
                history.push(redirectUrl);
                setUser(result?.user);
                setErrorMsg('');
            }).catch(error => {
                setErrorMsg(error?.message);
            }).finally(() => setLoading(false));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {

                history.push(redirectUrl);
            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => setLoading(false));
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirectUrl);
            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => setLoading(false));
    }

    const toggleRegisterLogin = (e) => {
        setIsRegistration(e.target.checked);
    }



    return (
        <div>
            <Container>
                <h2 className="text-center mx-auto my-3 form-title">Please {isRegistration ? "Register" : "Login"} First</h2>
                <div className="user-form mx-auto my-5 p-3 rounded-3 shadow-sm">
                    <Form className="mx-auto w-100" onSubmit={handleSubmitForm}>

                        {isRegistration && <Form.Group className="mb-3 mx-auto" controlId="formBasicText">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter full name" />
                        </Form.Group>}
                        <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>


                        <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3 mx-auto mt-4 d-flex justify-content-center align-items-center" variant="success" type="submit">
                            {isRegistration ? "Register" : "Login"}
                        </Button>
                        <p className="text-danger text-center mx-auto my-3">{errorMsg}</p>
                    </Form>
                    <p className="text-center my-3 mx-auto texti-muted "><small>Or {isRegistration ? "Register" : "Login"} With</small></p>
                    <div className="d-flex align-content-center justify-content-center">
                        <i onClick={handleGoogleSignIn} className="fab fa-google mx-2  mb-3 fs-3"></i>
                        <i onClick={handleGithubSignIn} className="fab fa-github mx-2  mb-3 fs-3"></i>
                    </div>

                    <Form.Group onChange={toggleRegisterLogin} className="mb-3 d-flex align-items-center justify-content-center" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={isRegistration ? "Already have an account" : "Register new account"} />
                    </Form.Group>

                </div>
            </Container>
        </div >
    );
};

export default RegisterLogin;