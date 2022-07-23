import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AnswerBox() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '300px' }}
        />
      </FloatingLabel>
    </>
  );
}

export default AnswerBox;