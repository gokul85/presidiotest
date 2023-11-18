import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="formcontainer">
                <form className='signupform flex'>
                    <div className="formgroup flex">
                        <label>
                            Name:
                        </label>
                        <input type="text" name="name" />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Username:
                        </label>
                        <input type="text" name="username" />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Confirm Password:
                        </label>
                        <input type="password" name="confirmPassword" />
                    </div>
                    <input type="submit" className='btn' value="Sign Up" />
                    <p>Already registered user?</p>
                    <Link to="/login">Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;