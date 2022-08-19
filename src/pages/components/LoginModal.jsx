import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SavedPopup.css';
import { Link } from 'react-router-dom';

class LoginModal extends React.Component {
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
        <Button type="submit" variant="secondary" onClick={()=>{this.handleModal()}}> 가입하기 </Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <div id="container">
          <Modal.Header className="modal-header">
          <div class ="popup-notice">
          <br/>회원가입이 완료되었습니다.
          <br/>
          </div>
          </Modal.Header>
          </div>
          <div id="container">
          <Modal.Body className="modal-body"> 
            <br/><br/><img className="rainbow" alt="clap" src="img/clap.png" /><br/><br/>
          </Modal.Body>
          </div>
          <div id="container">
          <Modal.Footer>
            <div className="save-button">
              <Link to = "/login">
              <Button class="white-button" variant="outline-dark">&nbsp;로그인&nbsp;</Button>
              </Link>
            </div>
          </Modal.Footer>
          </div>
        </Modal>
        </div>
      </>
    );
  }
}   
export default LoginModal;
