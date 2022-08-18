import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SavedPopup.css';
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
      <>
      <div>
        <Button type="submit" variant="secondary" onClick={()=>{this.handleModal()}}> 저장하기 </Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <div id="container">
          <Modal.Header className="modal-header">
          <div class ="popup-notice">
          <br/>무지개의 <span class="yellow">세번째 색</span>이 채워졌습니다.
          <br/>앞으로 일주일 간 열리는 문답을 모두 작성하여
          <br/>무지개를 완성해보세요!
          <br/>
          </div>
          </Modal.Header>
          </div>
          <div id="container">
          <Modal.Body className="modal-body"> 
            <br/><br/><img className="rainbow" alt="rainbow" src="img/rainbow3.png" /><br/><br/>
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
  }
}   
export default CompletedPopup;
