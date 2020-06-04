import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Project } from '../Project';



class Dash extends Component {
  render() {
    let projects = [
        {
          title: "Portfolio Site",
          description: "This is the protfolio site you are currently viewing.",
          link: "https://github.com/ryan-hennigan/ryan-portfolio.git"
        }
       ];
    
   return (
      <div className="Dash">       
        <div className="container">
         {projects.map((item) => 
            <Project key={uuidv4()} title={item.title} description={item.description} link={item.link}></Project> 
         )}
        </div>
      </div>
    );
  }
}

export default Dash;
