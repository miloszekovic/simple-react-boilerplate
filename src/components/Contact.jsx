import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class Contact extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Contact | Simple React App Boilerplate</title>
        </Helmet>
        <div className="container">
          Contact content
        </div>
      </section>
    );
  }
}
