import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="col s4 offset-s4 center">
          <div className="card light-blue lighten-5 z-depth-3">
              <div className="card-content">
                <div className="card-title">{this.props.title}</div>
                <p>{this.props.description}</p>
                <a href={this.props.link} target="_blank" className="btn waves-effect light-blue">View on GitHub</a>
              </div>
            </div>
         </div>

          
      </div>
    );
  }
}

export default Project;