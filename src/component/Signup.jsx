import React from 'react';

const Signup = () => {
    return (
        <div className='container'>
            <h1>Signup</h1>
            <div className='field'>
                <p>EMAIL</p>
                <input data-testid="email-input" />
            </div>
            <div className='field'>
                <p>PASSWORD</p>
                <input data-testid="password-input" />
            </div>
            <div className='field'>
                <button data-testid="signup-button">회원가입</button>
            </div>
        </div>
    );
};

export default Signup;