import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnswerBox1.css';
import SavedPopup1 from './SavedPopup1';
import axios from 'axios';
import React, { useState, useEffect } from "react";

const AnswerBox1 = () => {
  // const [text, setText] = useState([]);

  // useEffect(() => {
  //     axios.get('http://127.0.0.1:8000/QnA/answer/').then(Response => {
  //     setText(Response.data);
  //     console.log(Response.data);
  // }).catch((Error)=> {
  //     console.log(Error);
  // })
  //     }, [])

  return (
    <>
    {/* {text.map((e) => ( */}
      <>
      <FloatingLabel controlId="floatingTextarea2" className="box">
        <Form.Control
          as="textarea"
          placeholder = "답변을 입력해주세요" 
          style={{ height: '300px' }}
        >
        {/* {e.body} */}
        </Form.Control>
      </FloatingLabel>
      <br/><br/>
      <div className= "completed">
      <SavedPopup1/>
      </div>
      </>
    {/* ))} */}
    </>  
  );
};

export default AnswerBox1;