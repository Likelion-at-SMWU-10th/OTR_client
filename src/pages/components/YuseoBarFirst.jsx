import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './QList2.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import OneBadge from './OneBadge';

const YuseoBarFirst = () => {
  const [text , setText] = useState([]);
    
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/yuseotext/yuseo1/').then(Response => {
      setText(Response.data);
      console.log(Response.data);
  }).catch((Error)=> {
      console.log(Error) ;
  })
      }, [])
  
    return (
      <>
      { text.map((e)=> (
    <ListGroup as="ol">
    <Link to = "/creatingpagesaved1" style={{ textDecoration: 'none' }}>
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
    >
    <div className="ms-2 me-auto" id="line">
      <div className="fw-bold" id="title">
      <img className="icon" src='img/star.png' alt="수정"></img>
        &nbsp;{e.title} <OneBadge/>
      </div>
    <div id="content">{e.date} {e.time} 에 작성된 유서입니다.</div>
    </div>
    <Link to = "/creatingpage"><img className="icon" src='img/modify.png' alt="수정"></img></Link>
    &nbsp;&nbsp;&nbsp;
    <img className="icon" src='img/delete.png' alt="삭제"></img>
    </ListGroup.Item>
    </Link>
    </ListGroup>
    ))}
    </>
  );
}

export default YuseoBarFirst;