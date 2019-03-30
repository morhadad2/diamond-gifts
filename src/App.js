import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Layout>
          <p>Test</p>
        </Layout> */}
        <Album></Album>
      </div>
    );
  }
}

export default App;
