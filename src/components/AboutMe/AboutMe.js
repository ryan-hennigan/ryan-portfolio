import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render() {

    const bio = "Hello, my name is Ryan.\
                Since I was young, I've always had a passion for digging deeper and the need to understand how things worked;\
                whether it was puzzles, computers, or math.\
                I was born and raised in Texas, so naturally I attended Texas A&M University. There I studied computer science,\
                a field that gives me limitless opportunities to learn new technologies every day. \
                Getting my degree has allowed me to further my passion, and continue working on what I enjoy.\
                This site will be used to host all of my future projects so that I may keep track of them while holding myself accountable."

    return (
      <div className="AboutMe">
        <div className="container">
          <div className="card light-blue lighten-5 z-depth-3">
            <div className="row valign-wrapper">
              <div className="hide-on-small-only">
                <img src='images/me.jpg' alt=' ' className='responsive-img'></img>
              </div>
              <div className="card-content">
                <img src='images/me.jpg' alt=' ' className='hide-on-med-and-up responsive-img'></img>
                <div className="card-title h1">About Me</div>
                <p className="flow-text">{bio}</p>
              </div>
            </div>
          </div>
         </div>

          
      </div>
    );
  }
}

export default AboutMe;