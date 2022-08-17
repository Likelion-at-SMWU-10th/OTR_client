import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './CreatingCardSaved.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SavedPopupLast from './SavedPopupLast';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CreatingBox from './CreatingBox';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CreatingCard2 = () => {

  const [text , setText] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/yuseotext/yuseo2/').then(Response => {
        setText(Response.data);
        console.log(Response.data);
    }).catch((Error)=> {
        console.log(Error) ;
    })
        }, [])

  return (
    <>
    { text.map((e)=> (
    <div className="CreatingCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="CreatingBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
              <input type="text" placeholder={e.title} class="title-input"></input>
            </div>
            <br/>
            <div>
              <input type="text" placeholder={e.date} class="date-input"></input>
              <input type="text" placeholder={e.time} class="time-input"></input>
             &nbsp;<img alt="main" src="./img/mail.png"></img>
             &nbsp;<img alt="main" src="./img/copy.png"></img>
            </div>
            <br/><hr/>
        {/* 파일 첨부 영역 */}
            {/* <div className="adding-files">
            &nbsp;<img alt="main" src="./img/photo.png"></img>
            &nbsp;&nbsp;<img alt="main" src="./img/audio.png"></img>&nbsp;
            </div>
            <br/> */}
        {/* 파일 첨부 영역 */}
            <div className= "answer">
            {/* <CreatingBox/> */}
            <>
      <div class = "centered">
        {/* 이미지영역 */}
        {/* <div class="image-audio-area">
          <div contentEditable="true">
            <div>
              <img className="example_img" 
              alt="example" 
              src={e.image} 
              width = "368px" 
              height = "315px"/>
            </div>
          </div>
          <br/><br/><br/> */}
        {/* 이미지영역 */}
        {/* 오디오영역  */}
        {/* <div class="audio">
          <audio src='img/example.mp3' width='400' controls/>
            </div> */}
        {/* 오디오영역  */}
      </div> 
      <br/><br/>
        {/* 유서작성칸 시작  */}
          <div contentEditable="true">  
            <div class="text-area" id="body" value="">
              <FloatingLabel controlId="floatingTextara" className="box">
                <Form.Control
                as="textarea"
                placeholder = "답변을 입력해주세요" 
                style={{ height: '600px' }}
                className= "inputbox"
                >
                {e.body}
                </Form.Control>
              </FloatingLabel>
            </div>
          </div>
        {/* 유서작성칸 끝  */}
          <br/><br/><br/>
        {/* 팝업 영역 시작  */}
            <div className= "completed">
              <Link to = "/mypage">
                <Button variant="secondary">목록으로 돌아가기</Button>
              </Link>
            </div>
        {/* 팝업 영역 끝  */}
          <br/><br/>
    </>
            </div>   
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    ))}
    </>
  );
};

export default CreatingCard2;