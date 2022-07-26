import React from 'react';
import './Footer.css';

const Footer2 = () => {
    return (
    <>

       <div id="container">
        <div className= "footer">
        <br/><br/>
              <div className='comment'>
              상호 : OTR | 주소 : 서울특별시 용산구 청파로47길 100 | 대표자명 : 김희원 소희수 임아현 김지수 배지윤
              Copyright ⓒ2022 OTR, ltd. All rights reserved
              </div>
              <div id = "logo-container">
              <div className = "logos">
              ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ              ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ

                <a target="_blank" href="https://www.facebook.com/">
                  <img className="icon" alt="facebook" src="img/facebook_ic.png" />
                </a>
                ㅤ
                <a target="_blank" href="https://www.twitter.com/">
                  <img className="icon" alt="twitter" src="img/twitter_ic.png" />
                </a>
                ㅤ
                <a target="_blank" href="https://www.instagram.com/">
                  <img className="icon" alt="instagram" src="img/instagram_ic.png" />
                </a>
                ㅤ
                <a target="_blank" href="https://www.naver.com/">
                  <img className="icon" alt="naver" src="img/naver_ic.png" />
                </a>
                ㅤ
                <a target="_blank" href="https://www.youtube.com/">
                  <img className="icon" alt="youtube" src="img/youtube_ic.png" />
                </a>
              </div>
              </div>
          </div>
        </div>
    </>
    );
  }

export default Footer2;