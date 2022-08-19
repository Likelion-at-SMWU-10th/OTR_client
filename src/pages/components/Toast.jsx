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
  
  const [text, setText] = useState('');
  // 하단 input 박스에서 값 변경 시 이벤트 객체가 파라미터(e)에 담겨서 온다.
  const onChange = (e) => {
      // e.target에는 이벤트가 발생한 input DOM에 대한 정보를 가지고 있다.
      console.log(e.target);
      // 이벤트가 발생한 DOM의 값 가져오기
      console.log(e.target.value);
      setText(e.target.value);
  }
  // 초기화
  const onReset = () => {
      setText('');
  }

  return (
    <div className='toast-whole'>
    <Row>
      <Col md={6} className="mb-6" id="Buttons">
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
            <strong className="me-auto">김멋사 님&nbsp;<small onChange={onChange} value={text}></small></strong>
          </Toast.Header>
          <Toast.Body className="tobody">
          <Link to = "/mypage"><button className='bt'><strong>이어서 작성하기</strong></button></Link>{' '}
          <Link to = "/"><button className='logout'><strong className='lg'>로그아웃</strong></button></Link>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
    </div>
  );
}

export default DismissibleExample;