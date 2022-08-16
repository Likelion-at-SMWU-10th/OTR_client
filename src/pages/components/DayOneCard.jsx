import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SavedPopup1 from './SavedPopup1';
import React, { useState } from 'react';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function SevenDaysCard() {

  return (
    <>
    <div id = "container">
    <div className="QuestionCard">
    <Card className="Card" style={{ width: '830px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title">
            Q1. 죽음에 대해 생각해 본 적이 있나요? 당신에게 죽음이란 무엇인가요?
            </div>
            <br/><br/>
            <div className= "answer">
            <FloatingLabel controlId="floatingTextarea2" className="box">
              <Form.Control
                as="textarea"
                placeholder = "답변을 입력해주세요" 
                style={{ height: '300px' }}
              />
            </FloatingLabel>
            <br/><br/>
            <div className= "completed">
            <SavedPopup1/>
            </div>
            </div> 
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
}

export default SevenDaysCard;