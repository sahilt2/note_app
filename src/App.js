
import './App.css';
import Form from './components/Form';
import Preview from './components/Preview';
import Modal from './components/Modal';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Form/>
        <Preview/>
        <Modal/>

      </div>
    );
  }
}

export default App;


