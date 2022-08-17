import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './QList2.css';
import OneBadge from './OneBadge';

const YuseoMenu3 = () => {
<Link to = "/creatingpagesaved3" style={{ textDecoration: 'none' }}>
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
    >
    <div className="ms-2 me-auto" id="line">
        <div className="fw-bold" id="title">
        <img className="icon" src='img/star.png' alt="수정"></img>
        &nbsp;유서 제목</div>
        <div id="content">유서 소제목/설명(선택)</div>
    </div>
    <Link to = "/"><img className="icon" src='img/modify.png' alt="수정"></img></Link>
    &nbsp;&nbsp;&nbsp;
    <img className="icon" src='img/delete.png' alt="삭제"></img>
    </ListGroup.Item>
</Link>

}
export default YuseoMenu3;