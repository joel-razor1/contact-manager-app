import React, { Component } from 'react';
import './App.css';
import Contactsl from './components/Contactsl'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './context'
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
         
         <Header branding="Contact Manager" />
         <div className='container'>
         <Contactsl />
         </div>
         
       </div>
      </Provider>
      
    );
  }
}

export default App;
