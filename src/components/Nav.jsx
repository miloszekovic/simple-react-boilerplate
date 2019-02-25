import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <article>
            <Link to="/">Logo</Link>
          </article>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
