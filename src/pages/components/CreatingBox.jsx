//이페이지 안씀

import React, { useState, useRef, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreatingBox.css';
import SavedPopupLast from './SavedPopupLast';
import axios from 'axios';

const CreatingBox = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/yuseo/').then(Response => {
      setText(Response.data);
      console.log(Response.data);
  }).catch((Error)=> {
      console.log(Error);
  })
      }, [])

  return (
    <>
    {text.map((e) => (
      <>
      <div class = "centered">
        <div class="image-audio-area">
          {/* 이미지영역 */}
          <div contentEditable="true">
            <div>
              <img className="example_img" alt="example" src="img/example.png" width = "368px" height = "315px"/>
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
    ))}
    </>
  );
}

export default CreatingBox;