import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox5 from './AnswerBox5';

function DayFiveCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '830px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            Q5. 나의 삶은 어떤 의미를 가지고 있나요? 나의 가치관은 무엇인가요?
            </div>
            <br/><br/>
            <div className= "answer">
            <AnswerBox5/>
            </div> 
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default DayFiveCard;