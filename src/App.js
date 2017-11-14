import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/about/About';
import Header from './component/common/Header';

export default class App extends Component {

  render() {
    let Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;

      default:
        Child = Home;
        break;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Header />
        </div>
        <div>
          <Child />
        </div>
      </div>
    );
  }
}

let render = () => {
  let route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route} />, document.getElementById('root'));
}

window.addEventListener('hashchange', render)
render();