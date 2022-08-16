import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import Footer from './components/Footer';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class DayTwo extends Component {
    state = {
        q_id: "2",
        body: ""
      };
    
      onTitleChange = e => {
        this.setState({
            q_id: e.target.value
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
          q_id: this.state.q_id,
          body: this.state.body
        };
        axios
          .post("http://127.0.0.1:8000/QnA/answer2/", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };

    render() {
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
            <form className="post" onSubmit={this.handleSubmit}>
            <div className= "title" value={this.state.q_id}
                onChange={this.onTitleChange} unrequired>
            Q2. 나의 장례식은 어떤 분위기였으면?
            </div><br></br>
            <textarea style={{ height: '300px', width: '715px' }} className="tb"
                placeholder="답변을 입력해 주세요." value={this.state.body}
                onChange={this.onBodyChange} required
            /><br></br><br></br>
            <div>
            <button className="bb" type="submit">저장하기</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/daytwosaved"><button className="bb">내 답변</button></Link></div>
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
    }
};

export default DayTwo;