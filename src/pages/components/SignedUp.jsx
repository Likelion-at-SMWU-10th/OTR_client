import React from 'react';
import './SignedUp.css';
import { Link } from 'react-router-dom';

const SignedUp = () => {
    return (
        <div className='login-form2'>
            <div className='signup'>회원가입</div><br></br><br></br>

            <div className='signup'>회원가입이 완료되었습니다.</div><br></br><br></br>

            <div className='im'><img src="img/clap.png" className='clap'></img></div>

            <br></br><br></br>
            
            <form>
            <div className='put2'>
            <Link to = "/login"><input type="submit" value="로그인" class="submit-btn3"></input></Link>
            </div>
            <div className='put2'>
            <Link to = "/"><input type="submit" value="메인으로 이동" class="submit-btn4"></input></Link>
            </div>
            </form>
        </div>
    );
};

export default SignedUp;