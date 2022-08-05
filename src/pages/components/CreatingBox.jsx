import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreatingBox.css';


function CreatingBox() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" className="box">
        <Form.Control
          as="textarea"
          placeholder = "답변을 입력해주세요" 
          style={{ height: '500px' }}
        />
      </FloatingLabel>
      <br/><br/>
      <div className="completed">
        <Link to ="/mypage">
        <Button variant="dark">작성완료</Button>
        </Link>
      </div>
      <br/><br/>
    </>
  );
}

export default CreatingBox;