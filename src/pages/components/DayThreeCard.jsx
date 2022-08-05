import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox3 from './AnswerBox3';

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
            Q3. 인생에서 가장 후회되는 일을 적어주세요.
            </div>
            <br/><br/>
            <div className= "answer">
            <AnswerBox3/>
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