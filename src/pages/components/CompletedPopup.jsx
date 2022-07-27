import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompletedPopup.css';

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
      <Button variant="secondary" onClick={()=>{this.handleModal()}}> Save </Button>
      <Modal show={this.state.show} onHide={()=>this.handleModal()}>
        <div id="container">
        <Modal.Header className="modal-header" closeButton>
        <br/>🎉축하합니다! 7일 간의 문답을 모두 작성했습니다.ㅤㅤ 
        <br/>마지막 단계로, 유서를 작성해볼까요?
        <br/>
        </Modal.Header>
        </div>
        <div id="container">
        <Modal.Body className="modal-body"> 
          <br/><br/><img className="rainbow" alt="rainbow" src="img/rainbow.png" /><br/><br/>
        </Modal.Body>
        </div>
        <div id="container">
        <Modal.Footer>
          <div className="save-button">
            <Button variant="secondary" onClick={()=>{this.handleModal()}}>
              Close
            </Button>
          </div>
        </Modal.Footer>
        </div>
      </Modal>
      </div>
    );
  }
}   
export default CompletedPopup;