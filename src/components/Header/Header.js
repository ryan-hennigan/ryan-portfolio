import React, { Component } from 'react';
import './Header.css'

class Header extends Component {



  render() {
    let paths = 
      {
        about: "/",
        dash: "/dash"
      }

    return (
      <div className="Header">
        <div className="navbar-fixed">
          <nav className="light-blue darken-3">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo left"><i className="material-icons">code</i>RyanHennigan</a>

              <ul className="right hide-on-med-and-down">
                <li><a href={paths.dash}><i className="material-icons left">view_module</i>Projects</a></li>
                <li><a href={paths.about}><i className="material-icons left">person</i>About</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <div className="fixed-action-btn hide-on-med-and-up">
            <a className="click-to-toggle btn-floating btn-large light-blue"><i className="material-icons">more_vert</i></a>
            <ul>
              <li className="btn-floating btn-large light-blue"><a href={paths.dash}> <i className="material-icons">view_module</i></a></li>
              <li className="btn-floating btn-large light-blue"><a href={paths.about}><i className="material-icons">person</i></a></li>

            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
