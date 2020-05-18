import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import CardContent from './Card/CardContent';
import CardHeader from './Card/CardHeader';
import Checkbox from './Card/Checkbox'
import { DEFAULT, CHECKED } from './Card/variant'

class App extends Component {
  state = {
    checked: false,
    variant: DEFAULT
  }

  handleCheckboxChange = event => {
    this.setState({
      checked: event.target.checked,
      variant: event.target.checked ? CHECKED : DEFAULT
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Card variant={this.state.variant}>
            <CardHeader checkbox={<Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />}
                text={"Caption"}>
            </CardHeader>
            <CardContent text={"Text"}/>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
