import React, { useState } from 'react';
import Axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {    
  const [login_id, setLogin_id] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

  const onSubmit = (e) => {
    console.log("이벤트 들어옴");
    e.preventDefault()

    const user = {
      login_id: login_id,
      password: password
    }

    Axios.post('http://127.0.0.1:8000/login/', user)
    // Axios.post('http://ubuntu@ec2-13-125-134-114.ap-northeast-2.compute.amazonaws.com:8080/login/', user)
      .then(res => {
        console.log(res.data.token.access); //이게 토큰이고, 이걸 header에 넣어줘야 합니다! jwt react header 구글링해보면 될듯
        const { accessToken } = res.data.token.access;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
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
        // alert('아이디 또는 비밀번호가 일치하지 않습니다') -> 아이디 입력만 해도 바로 alert실행되어서 잠시 주석처리
        setLogin_id('')
        setPassword('')
      })
  }


    return (
        <div className='login-form3'>
            <form onClick={onSubmit}>
            <div className='text'>아이디</div>
                <input type="id" name="id" value={login_id}
            required class="text-field" placeholder="아이디"
            onChange={e => setLogin_id(e.target.value)}></input>
                <br></br>
                <br></br>
            <div className='text'>비밀번호</div>
                <input type="password" value={password}
            required name="password" class="text-field" placeholder="비밀번호"
            onChange={e => setPassword(e.target.value)}></input>
                <br></br>
                <br></br>
                <Link to = "/loginedHome"><input type="submit" value="로그인" class="submit-btn"></input></Link>
                <Link to = "/signup"><input type="submit" value="회원가입" class="submit-btn2"></input></Link>
            </form>
            <div class="links">
                <a href="#">비밀번호를 잊으셨나요?</a>
            </div>

            <hr></hr>
            <a target="_blank" href="https://www.kakaocorp.com/page/">
                <img className="sns" alt="kakao login" src="img/kakao_login.png" />
            </a>
            <a target="_blank" href="https://www.naver.com/">
                <img className="sns" alt="naver login" src="img/naver_login.png" />
            </a>
            
        </div>
    );
};

export default Login;