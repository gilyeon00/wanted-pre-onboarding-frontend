import React from 'react';

const Signin = () => {
    return (
        <div className='container'>
            <h1>Signin</h1>
            <div className='field'>
                <p>EMAIL</p>
                <input data-testid="email-input" />
            </div>
            <div className='field'>
                <p>PASSWORD</p>
                <input data-testid="password-input" />
            </div>
            <div className='field'>
                <button data-testid="signin-button">로그인</button>
            </div>

        </div>
    );
};

export default Signin;