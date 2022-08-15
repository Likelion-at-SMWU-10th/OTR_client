import React, { useState, useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tab.css';
import QList1 from './QList1';
import QList2 from './QList2';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputSample() {
    const [key, setKey] = useState('home');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
    nameInput.current.focus();
  };


  return (
        <div className='tab'>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="문답" tabClassName="font">
        <QList1/>
      </Tab>
      <Tab eventKey="profile" title="나의 유서" tabClassName="font" ref={nameInput}>
        <QList2/>
      </Tab>
    </Tabs>
    </div>
  );
}

export default InputSample;