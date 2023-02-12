import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const TOP_API = 'https://pre-onboarding-selection-task.shop'

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const [isEmail, setIsEmail] = useState(false)
    const [isPwd, setIsPwd] = useState('')

    let navigate = useNavigate();


    const onCheckEmail = useCallback( (e) => {
        const emailRegex = /[a-z0-9]+@[a-z]/
        const currentEmail = e.target.value
        setEmail(currentEmail)
    
        // emailRegax를 사용해서 유효성 검사
    }, [])

    const onSubmit = useCallback(
        async (e) => {
          e.preventDefault()
          try {
            await axios
              .post(TOP_API+'/auth/signup', {
                email: email,
              })
              .then((res) => {
                console.log('response:', res)
                if (res.status === 200) {
                  navigate('/signin}')
                }
              })
          } catch (err) {
            console.error(err)
          }
        },
        [email, navigate]
      )

      
    return (
        <div className='container'>
            <h1>Signup</h1>
            <div className='field'>
                <p>EMAIL</p>
                <input data-testid="email-input" onChange={onCheckEmail}/>
            </div>
            <div className='field'>
                <p>PASSWORD</p>
                <input data-testid="password-input" />
            </div>
            <div className='field'>
                <button data-testid="signup-button" onClick={onSubmit}>회원가입</button>
            </div>
        </div>
    );
};

export default Signup;