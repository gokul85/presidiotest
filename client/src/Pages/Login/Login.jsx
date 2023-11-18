import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="formcontainer">
                <form className='loginform flex'>
                    <div className="formgroup flex">
                        <label>
                            Username / Email:
                        </label>
                        <input type="text" name="username" />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" />
                    </div>
                    <input type="submit" className='btn' value="Sign Up" />
                    <p>New user?</p>
                    <Link to="/signup">Register</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;