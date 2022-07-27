import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox1 from './AnswerBox1'

function SevenDaysCard() {
  return (
    <>
    <div id = "container">
    <div className="QuestionCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title">
            Q1. 죽음에 대해 생각해 본 적이 있나요? 당신에게 죽음이란 무엇인가요?
            </div>
            <br/><br/>
            <div className= "answer">
            <AnswerBox1/>
            </div> 
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
}

export default SevenDaysCard;