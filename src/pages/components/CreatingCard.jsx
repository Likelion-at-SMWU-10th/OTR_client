import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './CreatingCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatingBox from './CreatingBox';

const apiUrl = "http://127.0.0.1:8000/";

const CreatingCard = ({apiUrl}) => {
  const [inputs, setInputs] = useState({
    title : '',
    body : '',
  });
  const { title, contents } = inputs;
  const testw = 1;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs ({
      ...inputs,
      [name]: value,
    });
  };

const onSubmit = () => {
  axios.post(`${apiUrl}/yuseo/`, {
    title: inputs.title,
    body: inputs.body,
  }). then(response => {
    console.log(response);
  })
}
  return (
    <>
    <div className="CreatingCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="CreatingBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
              <input type="text" placeholder='제목' class="title-input"></input>
            </div>
            <br/>
            <div>
              <input type="text" placeholder='날짜와 시간을 입력하세요..' class="date-input"></input>
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
            <CreatingBox/>
            </div>   
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};

export default CreatingCard;