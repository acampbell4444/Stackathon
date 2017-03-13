import React from 'react';
import store from '../store'
import {hashHistory, Link} from 'react-router'
import { Button, ButtonToolbar, Modal, Component } from 'react-bootstrap';



export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {show:true}
    this.hideModal = this.hideModal.bind(this)
    this.addToConversation = this.addToConversation.bind(this)
  }

  hideModal() {
    this.setState({show: false});
    history.back()
  }

  addToConversation() {
    
  }

  render () {
    let event = this.props.currentEvent
    return ( 
      <div>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          bsSize="large" 
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className='center' id="contained-modal-title-lg">Teach Arty to Speak!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='center'>
          
           
                <form onSubmit={evt => {
                      evt.preventDefault()
                      this.props.addNewCommand({prompt:evt.target.prompt.value, response: evt.target.response.value})
                      this.hideModal()
                    }}
                >
                  <div className='row'>
                      <h3>Add Prompt</h3>
                  </div>
                 <div className='row'>
                    <textarea id='prompt' className='prompt response' name="prompt" placeholder='Add Your Prompt Here' required/>
                  </div>
                   <div className='row'>
                      <h3>Add Response</h3>
                  </div>
                  <div className='row'>
                       <textarea id='response' className='prompt response' name="response" placeholder='Add Your Response Here' required/>
                  </div>
                  <div className='row'>
                      <input id='addCommand' type="submit" className='button btn-xl btn-success' value="Submit" />
                  </div>
               
                </form>
          
           
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className='button btn btn-danger' id='closeModal' onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}