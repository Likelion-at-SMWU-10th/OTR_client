import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SavedPopup.css';
import { Link } from 'react-router-dom';

class SavedPopup7 extends React.Component {
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
        <Button type="submit" variant="secondary" onClick={()=>{this.handleModal()}}> 저장하기 </Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <div id="container">
          <Modal.Header className="modal-header">
          <div class ="popup-notice">
          <br/>🎉 축하합니다!  <span class="navy">7개의 문답</span>을 모두 작성했습니다. 
          <br/>마지막 단계로, 유서를 작성해볼까요?
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
              <Button class="white-button" variant="outline-dark">&nbsp;완료&nbsp;</Button>
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
export default SavedPopup7;
