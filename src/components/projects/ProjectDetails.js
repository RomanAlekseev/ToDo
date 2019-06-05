import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <span className className="card-title">
          Project Title - {id}
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          accusantium, provident id dignissimos sunt voluptatem eveniet harum
          soluta ullam, ratione quia qui amet pariatur inventore!
        </p>
      </div>
      <hr />
      <div className="card-action gret lighten-4 grey-text">
        <div>Posted by the Net Ninja</div>
        <div>2nd September, 2am</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
