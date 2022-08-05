import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { Link } from 'react-router-dom';
import './Toast.css';

function DismissibleExample() {
  const [showB, setShowB] = useState(false);

  const toggleShowB = () => setShowB(!showB);

  return (
    <div className='Toast'>
    <Row>
      <Col md={6} className="mb-2" id="Buttons">
        <Button onClick={toggleShowB} className="mb-2" id="Btt">
          <strong>김멋사 님</strong>
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false} id="Buttonss">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">김멋사 님</strong>
            <Link to = "/mypage"><button className='bt'><strong>이어서 작성하기</strong></button></Link>
          </Toast.Header>
          <Toast.Body className="tobody">
          <strong className='lg'>마이페이지</strong><br></br>
          <strong className='lg'>개인정보 수정</strong><br></br><br></br>
          <Link to = "/"><button className='logout'><strong className='lg'>로그아웃</strong></button></Link></Toast.Body>
        </Toast>
      </Col>
    </Row>
    </div>
  );
}

export default DismissibleExample;