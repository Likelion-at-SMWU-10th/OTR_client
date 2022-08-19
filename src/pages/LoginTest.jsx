import React, { useState } from 'react';
import Axios from 'axios';

const LoginTest = () => {

  const [login_id, setLogin_id] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      login_id: login_id,
      password: password
    }

    Axios.post('http://127.0.0.1:8000/login/', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          // window.location.replace('/')
          console.log(res.data);
        } else {
          setLogin_id('')
          setPassword('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.log(err)
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        setLogin_id('')
        setPassword('')
      })
  }

  return (
    <>
      <h1>로그인</h1>
      <br />
      {/* {errors === true && <h2>Cannot log in with provided credentials</h2>} */}
        <form onSubmit={onSubmit}>
          <label>아이디:</label>
          <input
            type='id'
            value={login_id}
            required
            onChange={e => setLogin_id(e.target.value)}
          />
          <label>비밀번호:</label>
          <input
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
          <input type='submit' size="large" value='로그인' />
        </form>
    </>
  )
}

export default LoginTest;