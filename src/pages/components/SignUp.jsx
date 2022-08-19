import React, {useState} from 'react';
import Axios from 'axios';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
        <form onSubmit = {onSubmit}>
            <div className='login-form'>
            <div className='signup'>회원가입</div><br/>
            <div className='text' htmlFor='login_id'>아이디</div>
                <form>
                <div className='put'>
                    <input 
                    type="id" 
                    value={login_id}
                    onChange={onChangeLogin_id}
                    required
                    className="text-field1" 
                    placeholder="아이디 입력(6~20자)">
                    </input>
                </div>
                </form>
                <div className='put'>
                    <input 
                        type="submit" 
                        value="중복확인" 
                        className="btn"
                    />
                </div> 
                <br/><br/><br/>
                <div className='text' htmlFor='password'>비밀번호</div>
                <input 
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                    className="text-field2"
                    placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                />
            
            <br/><br/><br/>
            <div className='text' htmlFor='email'>이메일</div>
            
                <input 
                type="email" 
                value={email} 
                onChange = {onChangeEmail}
                required
                className="text-field2"
                placeholder="이메일입력"
                />
            
            <br/><br/><br/>

            <div className='text'>닉네임</div>
            <form>
                <input 
                type="text" 
                value={nickname} 
                onChange = {onChangeNickname}
                required
                className="text-field2"
                placeholder="닉네임입력"
                />
            </form>    
                <br/><br/> <br/> <br/> 
                <input type="submit" value="가입하기" class="submit-btn2"></input>
            </div>
        </form>   
    );
};

export default SignUp;