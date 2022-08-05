import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox4 from './AnswerBox4';

function DayFourCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '830px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            Q4. 인생에서 가장 행복했던 일을 적어주세요.
            </div>
            <br/><br/>
            <div className= "answer">
            <AnswerBox4/>
            </div> 
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default DayFourCard;