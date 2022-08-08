import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './QList1.css';

function DefaultExample() {
  return (
    <ListGroup as="ol">
      <Link to = "/dayone" style={{ textDecoration: 'none' }}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
          <div className="ms-2 me-auto" id="line">
          <div className="fw-bold" id="title">Q1. 죽음의 의미</div>
          <div id="content">죽음에 대해 생각해 본 적이 있나요? 당신에게 죽음이란 무엇인가요?</div>
        </div>
        <div>
        <img className="icon" src='img/modify.png' alt="수정"></img>
        &nbsp;&nbsp;&nbsp;
        <img className="icon" src='img/delete.png' alt="삭제"></img></div>
      </ListGroup.Item></Link>
      <Link to = "/daytwo" style={{ textDecoration: 'none' }}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
          <div className="ms-2 me-auto" id="line">
          <div className="fw-bold" id="title">Q2. 나의 장례식</div>
          <div id="content">나의 장례식은 어떤 분위기였으면 좋겠나요?</div>
        </div>
        <div>
        <img className="icon" src='img/modify.png' alt="수정"></img>
        &nbsp;&nbsp;&nbsp;
        <img className="icon" src='img/delete.png' alt="삭제"></img></div>
      </ListGroup.Item></Link>
      <Link to = "/daythree" style={{ textDecoration: 'none' }}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
          <div className="ms-2 me-auto" id="line">
          <div className="fw-bold" id="title">Q3. 가장 후회되는 일</div>
          <div id="content">인생에서 가장 후회되는 일을 적어주세요.</div>
        </div>
        <div>
        <img className="icon" src='img/modify.png' alt="수정"></img>
        &nbsp;&nbsp;&nbsp;
        <img className="icon" src='img/delete.png' alt="삭제"></img></div>
      </ListGroup.Item></Link>
      <Link to = "/dayfour" style={{ textDecoration: 'none' }}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
          <div className="ms-2 me-auto" id="line">
          <div className="fw-bold" id="title">Q4. 가장 행복했던 일</div>
          <div id="content">인생에서 가장 행복했던 일을 적어주세요.</div>
        </div>
        <div>
        <img className="icon" src='img/modify.png' alt="수정"></img>
        &nbsp;&nbsp;&nbsp;
        <img className="icon" src='img/delete.png' alt="삭제"></img></div>
      </ListGroup.Item></Link>
      <Link to = "/dayfive" style={{ textDecoration: 'none' }}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
          <div className="ms-2 me-auto" id="line">
          <div className="fw-bold" id="title">Q5. 삶의 의미</div>
          <div id="content">나의 삶은 어떤 의미를 가지고 있나요? 나의 가치관은 무엇인가요?</div>
        </div>
        <div>
        <img className="icon" src='img/modify.png' alt="수정"></img>
        &nbsp;&nbsp;&nbsp;
        <img className="icon" src='img/delete.png' alt="삭제"></img></div>
      </ListGroup.Item></Link>
      <Link to = "/daysix" style={{ textDecoration: 'none' }}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto" id="line">
          <div className="fw-bold" id="title">Q6. 고마움과 미안함</div>
          <div id="content">나는 어떨 때 고마움과 미안함을 느끼나요? 고마운 사람과 미안한 사람이 생각난다면 적어보세요.</div>
        </div>
        <div>
        <img className="icon" src='img/modify.png' alt="수정"></img>
        &nbsp;&nbsp;&nbsp;
        <img className="icon" src='img/delete.png' alt="삭제"></img></div>
      </ListGroup.Item></Link>
      <Link to = "/dayseven" style={{ textDecoration: 'none' }}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
          <div className="ms-2 me-auto" id="line">
          <div className="fw-bold" id="title">Q7. 앞으로의 삶과 죽음</div>
          <div id="content">당신은 앞으로 어떻게 살고 싶나요? 또, 어떻게 죽고 싶나요?</div>
        </div>
        <div>
        <img className="icon" src='img/modify.png' alt="수정"></img>
        &nbsp;&nbsp;&nbsp;
        <img className="icon" src='img/delete.png' alt="삭제"></img></div>
      </ListGroup.Item></Link>
    </ListGroup>
  );
}

export default DefaultExample;