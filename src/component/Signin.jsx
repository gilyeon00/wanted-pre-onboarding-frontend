import React from 'react';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const TOP_API = 'https://pre-onboarding-selection-task.shop'

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const [emailMsg, setEmailMsg] = useState('')
    const [pwdMsg, setPwdMsg] = useState('')

    let navigate = useNavigate();


    const onCheckEmail = useCallback( (e) => {
        const currentEmail = e.target.value
        const checkEmail = currentEmail.includes('@')
        if (checkEmail === false) {
            setEmailMsg('잘못된 이메일 형식입니다. @가 들어가야합니다.')
        }
        else {
            setEmailMsg('')
            setEmail(currentEmail)
        } 

    }, [])

    const onCheckPwd = useCallback( (e) => {
        const currentPwd = String(e.target.value)
        
        if (currentPwd.length < 8) {
            setPwdMsg('잘못된 비밀번호 형식입니다. 8자리이상이어야합니다.')
        }
        else {
            setPwdMsg('')
            setPwd(currentPwd)
        }
    }, [])


    const onSubmit = useCallback(
        async (e) => {
          e.preventDefault()
          try {
            await axios
              .post(TOP_API+'/auth/signin', {
                email: email,
                password: pwd
              })
              .then((res) => {
                console.log('response:', res)
                if (res.status === 200) {
                  navigate('/todo')
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
            <h1>Signin</h1>
            <div className='field'>
                <p>EMAIL</p>
                <input data-testid="email-input" onChange={onCheckEmail}/>
            </div>
            <span>{emailMsg}</span>
            <div className='field'>
                <p>PASSWORD</p>
                <input data-testid="password-input" onChange={onCheckPwd} />
            </div>
            <span>{pwdMsg}</span>
            <div className='field'>
                <button data-testid="signin-button" onClick={onSubmit}>로그인</button>
            </div>

        </div>
    );
};

export default Signin;