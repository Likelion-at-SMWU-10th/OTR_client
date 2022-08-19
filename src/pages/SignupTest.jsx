import React, { useState } from 'react';
import Axios from 'axios';

const SignupTest = () => {
  const [login_id, setLogin_id] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [errors, setErrors] = useState(false)

  const onChangeLogin_id = (e) => {
    setLogin_id(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangeNickname = (e) => {
    setNickname(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      login_id: login_id,
      password: password,
      email: email,
      nickname : nickname,
    }

    // // 유효성 검사
    // if(password1 !== password2) {
    //   alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
    //   return false
    // }

    Axios.post('http://127.0.0.1:8000/signup/', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          // window.location.replace('/')
        } else {
          setLogin_id('')
          setPassword('')
          setEmail('')
          setNickname('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.log(err)
        // alert('아이디 혹은 비밀번호가 일치하지 않습니다')
      })
  }

  return (
    <>
      <h1>회원가입</h1>
      <br />
      {/* {errors === true && <h2>Cannot signup with provided credentials</h2>} */}
      <form onSubmit={onSubmit}>
        <label htmlFor='login_id'>아이디:</label>
        <input
          type='id'
          value={login_id}
          onChange={onChangeLogin_id}
          required
        />
        <label htmlFor='password'>비밀번호(소문자, 숫자, 특수문자 포함 8~16자):</label>
        <input
          type='password'
          value={password}
          onChange={onChangePassword}
        //   minLength='8'
        //   pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
          required
        />
        <br />
        <label htmlFor='email'>이메일:</label>
        <input 
          type='email'
          value={email}
          onChange={onChangeEmail}
        //   minLength='8'
        //   pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
          required
        />
        <label htmlFor='nickname'>닉네임</label>
        <input
          type='nickname'
          value={nickname}
          onChange = {onChangeNickname}
        />
        <input type='submit' size="large" value='가입하기' />
      </form>
    </>
  )
}

export default SignupTest;