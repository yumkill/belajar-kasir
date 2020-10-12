import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useFirebase} from './FirebaseProvider';


function PrivateRoute({ component : Component, ...restProps }){

    const {user} = useFirebase();

    return <Route
    
    {...restProps}

    render={props => {
        
        return user ? 
        <Component {...props} />
        :
        <Redirect tp={{
            pathname: '/login'
        }} />

    }}

    />
}

export default PrivateRoute;