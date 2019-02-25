import React, { Component } from 'react'

import MainScreen from './components/MainScreen'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.scss'

export default class App extends Component {
  render() {
    return (
      <div className="main--app--screen">
        <Header />
          <MainScreen />
        <Footer />
      </div>
    );
  }
}
