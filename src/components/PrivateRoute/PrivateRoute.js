import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className="d-flex justify-content-center my-5"><Spinner className="" animation="grow" variant="warning" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect to={{
                    pathname: "/registerLogin",
                    state: { from: location }
                }}></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;