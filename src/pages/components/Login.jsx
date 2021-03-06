import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login-form'>
            <div className='text'>이메일</div>
            <form>
                <input type="email" name="email" class="text-field" placeholder="이메일"></input>
                <br></br>
                <br></br>
            </form>
            <div className='text'>비밀번호</div>
            <form>
                <input type="password" name="password" class="text-field" placeholder="비밀번호"></input>
                <br></br>
                <br></br>
                <input type="submit" value="로그인" class="submit-btn"></input>
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