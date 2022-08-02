import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className ="footer">
            <br/>
            상호 : OTR<br/> 
            주소 : 서울특별시 용산구 청파로47길 100<br/>
            대표자명 : 김희원 소희수 임아현 김지수 배지윤<br/>
            Copyright ⓒ2022 OTR, ltd. All rights reserved<br/><br/>
                <a target="_blank" href="https://www.facebook.com/">
                  <img className="icon" alt="facebook" src="img/facebook_ic.png" />
                </a>
                {' '}{' '}
                <a target="_blank" href="https://www.twitter.com/">
                  <img className="icon" alt="twitter" src="img/twitter_ic.png" />
                </a>
                {' '}{' '}
                <a target="_blank" href="https://www.instagram.com/">
                  <img className="icon" alt="instagram" src="img/instagram_ic.png" />
                </a>
                {' '}{' '}
                <a target="_blank" href="https://www.naver.com/">
                  <img className="icon" alt="naver" src="img/naver_ic.png" />
                </a>
                {' '}{' '}
                <a target="_blank" href="https://www.youtube.com/">
                  <img className="icon" alt="youtube" src="img/youtube_ic.png" />
                </a>
        </div>
    );
};

export default Footer;