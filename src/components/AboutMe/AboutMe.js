import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render() {

    const bio = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

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