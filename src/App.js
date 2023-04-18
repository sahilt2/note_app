
import './App.css';
import Form from './components/Form';
import Preview from './components/Preview';
import Modal from './components/Modal';

import React, { Component } from 'react';

class App extends Component {
  state = {
    showModal : false,
    input : ''
  }
  
  modalHandler = (e) =>{
    e.preventDefault();
    this.setState({
      showModal:!this.state.showModal
    })
        console.log("I work")
  }

  handleChange = (e) => {
      this.setState({
        input:e.target.value
      })
  }
  render() {
    return (
      <div className='App'>
        <Form click = {this.modalHandler} handleChange = {this.handleChange}/>
        <Preview firstname= {this.state.input}/>
        {this.state.showModal &&  <Modal click = {this.modalHandler}/>}
       

      </div>
    );
  }
}

export default App;


