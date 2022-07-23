import Card from 'react-bootstrap/Card';
import './SevenDaysCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SevenDaysCard() {
  return (
    <div className="QuestionCard">
    <Card style={{ width: '937px'}} >
      <Card.Body>
        <br/>
        <Card.Title>
            <div  className= "title" >
            Q1. 죽음에 대해 생각해 본 적이 있나요? 당신에게 죽음이란 무엇인가요?
            </div>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default SevenDaysCard;