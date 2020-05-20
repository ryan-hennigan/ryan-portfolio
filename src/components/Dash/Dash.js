import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Project } from '../Project';



class Dash extends Component {
  render() {
    let projects = [
        {
          title: "TODO",
          description: "in progress"
        }
       ];
    
   return (
      <div className="Dash">       
        <div className="container">
         {projects.map((item) => 
            <Project key={uuidv4()} title={item.title} description={item.description}></Project> 
         )}
        </div>
      </div>
    );
  }
}

export default Dash;
