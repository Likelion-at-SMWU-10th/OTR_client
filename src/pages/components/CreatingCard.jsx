import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';import './CreatingCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SavedPopupLast from './SavedPopupLast';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CreatingCard = () => {

  const [text , setText] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/otr/yuseo1/').then(Response => {
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
             &nbsp;<img alt="main" src="./img/mail.png"></img>
             &nbsp;<img alt="main" src="./img/copy.png"></img>
            </div>
            <br/><hr/>
            <div className="adding-files">
            &nbsp;<img alt="main" src="./img/photo.png"></img>
            &nbsp;&nbsp;<img alt="main" src="./img/audio.png"></img>&nbsp;
            </div>
            <br/>
            <div className= "answer">
            {/* <CreatingBox/> */}
            <>
      <div class = "centered">
        <div class="image-audio-area">
          {/* 이미지영역 */}
          <div contentEditable="true">
            <div>
              <img className="example_img" alt="example" src={e.image} width = "368px" height = "315px"/>
            </div>
          </div>
          <br/><br/><br/>
          {/* 오디오영역 */}
          <div contentEditable="true">
            <div class="audio">
              <audio src='img/example.mp3' width='400' controls/>
            </div>
          </div>
        </div>
          <div class="text-area" id="body" value="">
            <FloatingLabel controlId="floatingTextarea" className="box">
              <Form.Control
              as="textarea"
              placeholder = "답변을 입력해주세요" 
              style={{ height: '500px' }}
              >
              {e.summary}
              </Form.Control>
            </FloatingLabel>
          </div>
      </div>
          <br/><br/>
      {/* 버튼 영역 */}
      <div className= "completed">
        <SavedPopupLast/>
      </div>
      <br/><br/>
      {/* 버튼 영역 */}
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

export default CreatingCard;