import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* {moment().format('MMMM Do YYYY, hh:mm:ss a')} */}
          <p>Now</p>
          
        </header>
        <p className="App-intro">
          This is just the beginning...
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
