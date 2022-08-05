import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox2 from './AnswerBox2';

function DayTwoCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '830px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            Q2. 나의 장례식은 어떤 분위기였으면 좋겠나요?
            </div>
            <br/><br/>
            <div className= "answer">
            <AnswerBox2/>
            </div> 
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default DayTwoCard;