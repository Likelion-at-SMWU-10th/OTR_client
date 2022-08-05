import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox7 from './AnswerBox7';


function DaySevenCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            Q7. 당신은 앞으로 어떻게 살고 싶나요? 또, 어떻게 죽고 싶나요?
            </div>
            <br/><br/>
            <div className= "answer">
              <AnswerBox7/>
            </div>
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default DaySevenCard;