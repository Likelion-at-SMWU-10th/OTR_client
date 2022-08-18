import axios from 'axios';
import React, { Component, useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './CreatingCardSaved.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SavedPopupLast from './SavedPopupLast';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CreatingBox from './CreatingBox';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class CreatingCard extends Component {

    state = {
        title: "",
        date: "",
        time: "",
        body: ""
      };
    
    onTitleChange = e => {
        this.setState({
            title: e.target.value
        });
    };
    
    onBodyChange = e => {
    this.setState({
        body: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
          title: this.state.title,
          date: this.state.date,
          time: this.state.time,
          body: this.state.body
        };
        axios
          .post("http://127.0.0.1:8000/yuseotext/yuseo1/", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };
render(){
  return (
    <>
    <div className="CreatingCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="CreatingBox">
        <br/><br/>
        <Card.Title>
            <div className="post" onSubmit={this.handleSubmit}>
            <form className="post" value={this.state.title}>
            <div className= "title" >
              <input 
              type="text" 
              placeholder="제목" 
              class="title-input" 
              value={this.state.title}
              onChange={this.onTitleChange}
              required
              >
              </input>
            </div>
            <br/>
            <div>
            <input type="text" placeholder="2022-01-01" class="date-input"></input>
            <input type="text" placeholder="00:00" class="time-input"></input>
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
                value={this.state.body}
                onChange={this.onBodyChange}
                >
              </Form.Control>
              </FloatingLabel>
            </div>
          </div>
        {/* 유서작성칸 끝  */}
          <br/><br/><br/>
        {/* 팝업 영역 시작  */}
            <div className= "completed">
            <SavedPopupLast/>
            {/* <button className="bb" type="submit">&nbsp;저장하기&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* <Link to="/creatingpagesaved1">
            <button className="bb" type="submit">&nbsp;내 유서&nbsp;</button>
            </Link> */}
            </div>
        {/* 팝업 영역 끝  */}
          <br/><br/>
    </>
    </div>
    </form>
    </div>   
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}
};

export default CreatingCard;