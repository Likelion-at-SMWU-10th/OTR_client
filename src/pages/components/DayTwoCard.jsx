import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox from './AnswerBox';

function SevenDaysCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            Q2. 당신은 삶에서 어떤 기쁨을 발견하셨나요?
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

export default SevenDaysCard;