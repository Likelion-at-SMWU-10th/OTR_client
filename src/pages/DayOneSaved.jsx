import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import Footer from './components/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const DayOneSaved = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/QnA/answer1/').then(Response => {
        setText(Response.data);
        console.log(Response.data);
    }).catch((Error)=> {
        console.log(Error);
    })
        }, [])
    return (
        <>
        {/* 헤더 */}
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice}/></div>
        <br/><br/><br/>
        {/* 헤더 */}
        {/* 문답 콘텐츠 */}
            <div id = "container">
            <div className="QuestionCard">
            <Card className="Card" style={{ width: '830px'}}>
            <Card.Body className="QuestionBox">
                <Card.Title>
                    <div className="post">
                    <form className="post">
                    <div className= "title">
                    Q1. 죽음에 대해 생각해 본 적이 있나요? 당신에게 죽음이란 무엇인가요?
                    </div><br></br>
                    <div className='al'>
                    {text.map((e) => (
                        <div className='font'>
                        {e.body}
                        </div>
                    ))}</div>
                    <br></br><br></br>
                    <div>
                        <Link to="/dayone">
                        <button className="bb">답변 추가</button>
                        </Link>
                    </div>
                    </form>
                    </div>
                </Card.Title>
            </Card.Body>
            </Card>
            </div>
            </div>
        {/* 문답콘텐츠 */}
        <br/><br/>
        <Footer/>
        </>                        
    );
};

export default DayOneSaved;