import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const BASE_URL = 'https://pre-onboarding-selection-task.shop'

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const [emailMsg, setEmailMsg] = useState('')
    const [pwdMsg, setPwdMsg] = useState('')

    const [isEmail, setIsEmail] = useState(false)
    const [isPwd, setIsPwd] = useState(false)

    let navigate = useNavigate();


    const onCheckEmail = useCallback( (e) => {
        const currentEmail = e.target.value
        const checkEmail = currentEmail.includes('@')
        if (checkEmail === false) {
            setEmailMsg('잘못된 이메일 형식입니다. @가 들어가야합니다.')
            setIsEmail(false)
        }
        else {
            setEmailMsg('')
            setEmail(currentEmail)
            setIsEmail(true)
        } 

    }, [])

    const onCheckPwd = useCallback( (e) => {
        const currentPwd = String(e.target.value)
        
        if (currentPwd.length < 8) {
            setPwdMsg('잘못된 비밀번호 형식입니다. 8자리이상이어야합니다.')
            setIsPwd(false)
        }
        else {
            setPwdMsg('')
            setPwd(currentPwd)
            setIsPwd(true)
        }
    }, [])


    const onSubmit = useCallback(
        async (e) => {
          e.preventDefault()
          try {
            await axios
              .post(BASE_URL+'/auth/signup', {
                email: email,
                password: pwd,
                headers: {
                    "Content-Type": "application/json",
                }
              })
              .then((res) => {
                console.log('response:', res)
                if (res.status === 201) {
                  navigate('/signin')
                }
              })
          } catch (err) {
            console.error(err)
          }
        },
        [email, pwd, navigate]
      )


    return (
        <div className='container'>
            <h1>Signup</h1>
            <div className='field'>
                <p>EMAIL</p>
                <input data-testid="email-input" onChange={onCheckEmail}/>
            </div>
            <span>{emailMsg}</span>
            <div className='field'>
                <p>PASSWORD</p>
                <input data-testid="password-input" onChange={onCheckPwd}/>
            </div>
            <span>{pwdMsg}</span>
            <div className='field'>
                <button data-testid="signup-button" type="submit" 
                  onClick={onSubmit} disabled={!(isEmail && isPwd)} >회원가입</button>
            </div>
        </div>
    );
};

export default Signup;