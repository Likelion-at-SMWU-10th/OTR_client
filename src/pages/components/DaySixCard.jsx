import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox from './AnswerBox';

function DaySixCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            Q6. 여섯번째 질문
            </div>
            <br/><br/>
            <div className= "answer">
            <AnswerBox/>
            </div> 
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default DaySixCard;