import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import Footer from './components/Footer';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const DaySixSaved = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/QnA/answer6/').then(Response => {
        setText(Response.data);
        console.log(Response.data);
    }).catch((Error)=> {
        console.log(Error);
    })
        }, [])
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice}/></div>
        <br/><br/><br/>
    <div id = "container">
    <div className="QuestionCard">
    <Card className="Card" style={{ width: '830px'}}>
      <Card.Body className="QuestionBox">
        <Card.Title>
            <div className="post">
            <form className="post">
            <div className= "font0">
            Q6. 나는 어떨 때 고마움과 미안함을 느끼나요? 고마운 사람과 미안한 사람이 생각난다면 적어보세요.
            </div><br></br>
            <div className='al'>
            {text.map((e) => (
                <div className='font2'>
                  {e.body}
                </div>
            ))}</div><br></br><br></br>
            <div>
            <Link to="/daysix">
            <button className="bb">답변 추가</button></Link>
            &nbsp; &nbsp; 
            <Link to="/mypage">
            <button className="bb">목록으로</button>
            </Link>
            </div>
            </form>
            </div>
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
    <br/><br/>
    <Footer/>
        </>
    );

};

export default DaySixSaved;