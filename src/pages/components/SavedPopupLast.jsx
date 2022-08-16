import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SavedPopup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiUrl = "http://127.0.0.1:8000/";

class SavedPopupLast extends React.Component {
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
      <>
      <div>
        <Button variant="secondary" onClick={()=>{this.handleModal()}}> 저장하기 </Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <div id="container">
          <Modal.Header className="modal-header">
          <div class ="popup-notice">
          
          </div>
          </Modal.Header>
          </div>
          <div id="container">
          <Modal.Body className="modal-body"> 
            <br/><br/>
            <h3>유서작성이 완료되었습니다.</h3>
            <br/>
            <small>작성한 유서는 [마이페이지] - [나의 유서] 탭에서 확인하실 수 있습니다.</small>
            <br/><br/>
          </Modal.Body>
          </div>
          <div id="container">
          <Modal.Footer>
            <div className="save-button">
              <Link to = "/mypage">
              <Button class="white-button" variant="outline-dark">&nbsp;완료&nbsp;</Button>
              </Link>
            </div>
          </Modal.Footer>
          </div>
        </Modal>
        </div>
      </>
    );
  };
};

export default SavedPopupLast;