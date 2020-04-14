import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import CardContent from './Card/CardContent';
import CardHeader from './Card/CardHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card>
          <CardHeader />
          <CardContent />
        </Card>
      </div>
    );
  }
}

export default App;
