import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import CardContent from './Card/CardContent';
import CardHeader from './Card/CardHeader';
import Checkbox from './Card/Checkbox'

class App extends Component {
  state = {
    checked: false,
    cardColor: "green"
  }

  handleCheckboxChange = event => {
    this.setState({
      checked: event.target.checked,
      cardColor: event.target.checked ? "red" : "green"
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Card cardColor={this.state.cardColor}>
          <CardHeader>
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
            />
          </CardHeader>
          <CardContent />
        </Card>
      </div>
    );
  }
}

export default App;
