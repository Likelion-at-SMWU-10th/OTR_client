import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnswerBox.css';

function AnswerBox() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="Leave your answer here..." className="box">
        <Form.Control
          as="textarea"
          style={{ height: '300px' }}
        />
      </FloatingLabel>
    </>
  );
}

export default AnswerBox;