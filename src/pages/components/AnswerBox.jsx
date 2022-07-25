import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnswerBox.css';
import SaveButton from './SaveButton';

function AnswerBox() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="답변을 입력해주세요" className="box">
        <Form.Control
          as="textarea"
          placeholder= "답변을 입력해주세요"
          style={{ height: '300px' }}
        />
      </FloatingLabel>
      <br/><br/>
      <div className= "save">
      <SaveButton/>
      </div>
    </>
  );
}

export default AnswerBox;