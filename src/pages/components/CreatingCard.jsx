import Card from 'react-bootstrap/Card';
import './CreatingCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatingBox from './CreatingBox';

function CreatingCard() {
  return (
    <>
    <div className="QuestionCard">
    <Card style={{ width: '800px'}}>
      <Card.Body className="QuestionBox">
        <br/><br/>
        <Card.Title>
            <div className= "title" >
            <form>
            <input type="text" placeholder='제목' class="title-input"></input>
            </form>
            </div>
            <br/>
            <div>
             <span className="time">2022.05.24 AM 02:32</span>
             &nbsp;<img alt="main" src="./img/mail.png"></img>
             &nbsp;<img alt="main" src="./img/copy.png"></img>
            </div>
            <br/><hr/>
            <div className="adding-files">
            &nbsp;<img alt="main" src="./img/photo.png"></img>
            &nbsp;&nbsp;<img alt="main" src="./img/audio.png"></img>&nbsp;
            </div>
            <br/>
            <div className= "answer">
            <CreatingBox/>
            </div>
            
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default CreatingCard;