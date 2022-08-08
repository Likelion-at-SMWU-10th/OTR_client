import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tab.css';
import QList1 from './QList1';
import QList2 from './QList2';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledTabsExample() {
  const [key, setKey] = useState('home');

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
      <Tab eventKey="profile" title="나의 유서" tabClassName="font">
        <QList2/>
      </Tab>
    </Tabs>
    </div>
  );
}

export default ControlledTabsExample;