import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import Footer from './components/Footer';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const DayFiveSaved = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/QnA/answer5/').then(Response => {
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
            <div className= "title">
            Q5. 나의 삶은 어떤 의미를 가지고 있나요? 나의 가치관은 무엇인가요?
            </div><br></br>
            <div className='al'>
            {text.map((e) => (
                <div className='font'>
                  {e.body}
                </div>
            ))}</div><br></br><br></br>
            <div>
            <Link to="/dayfive">
            <button className="bb">답변 추가</button></Link></div>
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

export default DayFiveSaved;