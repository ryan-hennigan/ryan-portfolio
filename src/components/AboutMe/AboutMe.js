import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render() {

    const bio = "Hello my name is Ryan. I am passionate about learning how things work.\
                Since I was young, I've always wanted to dig deeper and fully understand why things worked and how i could build them too. \
                Whether it be puzzles, computers, or math.\
                I'm born and raised in Texas, so naturally I attended Texas A&M University to get my bachelors degree in computer science,\
                a field that gives me limitless opportunities to learn new things every day to keep me occupied. \
                I'm going to use this site to host all of my future creations, not only to keep track of them,  \
                but to also force me to see them to completion."

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