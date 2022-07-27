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
        <Modal.Header className="modal-header" closeButton>
        <br/>저장완료!!<br/>
        </Modal.Header>
        </div>
        <div id="container">
        <Modal.Body className="modal-body"> 
          <br/><br/>/*이미지삽입*/<br/><br/>
        </Modal.Body>
        </div>
        <div id="container">
        <Modal.Footer>
          <div className="save-button">
            <Link to = "/">
            <Button variant="secondary">
              확인
            </Button>
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