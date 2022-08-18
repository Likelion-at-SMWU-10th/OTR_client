import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-form3'>
            <div className='text'>아이디</div>
            <form>
                <input type="text" name="id" class="text-field" placeholder="아이디"></input>
                <br></br>
                <br></br>
            </form>
            <div className='text'>비밀번호</div>
            <form>
                <input type="password" name="password" class="text-field" placeholder="비밀번호"></input>
                <br></br>
                <br></br>
                <Link to = "/loginedHome"><input type="submit" value="로그인" class="submit-btn"></input></Link>
                <Link to = "/signup"><input type="submit" value="회원가입" class="submit-btn2"></input></Link>
            </form>
            <div className='text'>비밀번호 확인</div>
            <form>
                <input type="password" name="password" class="text-field" placeholder="비밀번호"></input>
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