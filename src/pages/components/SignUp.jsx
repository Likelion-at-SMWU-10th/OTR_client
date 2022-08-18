import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login-form'>
            <div className='signup'>회원가입</div><br></br>
            <div className='text'>아이디</div>
            <form>
                <div className='put'>
                    <input type="text" name="id" className="text-field1" placeholder="아이디 입력(6~20자)"></input>
                </div>
                <div className='put'>
                    <input type="submit" value="중복확인" className="btn"></input>
                </div>
                
                <br></br>
                <br></br>
                <br></br>
            </form>
            
                <div className='text'>비밀번호</div>
            <form>
                <input type="password" name="password" class="text-field2"
                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"></input>
            </form>
            <br/><br/><br/>
            <div className='text'>비밀번호 확인</div>
            <form>
                <input type="password" name="password" class="text-field2"
                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"></input>
            </form>    
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <Link to = "/signedup"><input type="submit" value="가입하기" class="submit-btn2"></input></Link>
        </div>
    );
};

export default SignUp;