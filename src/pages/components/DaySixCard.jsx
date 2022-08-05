import Card from 'react-bootstrap/Card';
import './DayOneCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox6 from './AnswerBox6';

function DaySixCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            Q6. 나는 어떨 때 고마움과 미안함을 느끼나요? 
            고마운 사람과 미안한 사람이 <br/> 생각난다면 적어보세요.
            </div>
            <br/><br/>
            <div className= "answer">
            <AnswerBox6/>
            </div> 
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default DaySixCard;