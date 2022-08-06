import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompletedPopup.css';
import { Link } from 'react-router-dom';

class CompletedPopup extends React.Component {
  constructor()
  {
    super()
    this.state={
      show:false
    }
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  render () {
    return (
     <div>
      <Button variant="secondary" onClick={()=>{this.handleModal()}}> 저장하기 </Button>
      <Modal show={this.state.show} onHide={()=>this.handleModal()}>
        <div id="container">
        <Modal.Header className="modal-header">
        <div class="popup-notice">
        <br/>🎉축하합니다! <span class="violet">7일 간의 문답</span>을 모두 작성했습니다.
        <br/>마지막 단계로, 유서를 작성해볼까요?
        <br/>
        </div>
        </Modal.Header>
        </div>
        <div id="container">
        <Modal.Body className="modal-body"> 
          <br/><br/><img className="rainbow" alt="rainbow" src="img/rainbow7.png" /><br/><br/>
        </Modal.Body>
        </div>
        <div id="container">
        <Modal.Footer>
          <div className="save-button">
              <Link to = "/creatingpage">
              <Button class="white-button" variant="outline-dark">&nbsp;유서 쓰러 가기&nbsp;</Button>
              </Link>
          </div>
        </Modal.Footer>
        </div>
      </Modal>
      </div>
    );
  }
}   
export default CompletedPopup;