import React from 'react';
import useAuth from '../../../Contexts/useAuth';


const Login = () => {
    const { singInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please LogIn</h2>
            <button onClick={singInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;