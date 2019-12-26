import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title {id} </span>
          <p>some Content</p>
        </div>
        <div className="card-action ligthen-4 grey-text">
          <div>Posted by NN</div>
          <div>3 September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
