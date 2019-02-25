import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class Home extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Home | Simple React App Boilerplate</title>
        </Helmet>
        <div className="container">
          Home content
        </div>
      </section>
    );
  }
}
