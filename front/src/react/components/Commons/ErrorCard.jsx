import React from "react";

export default ({ msg }) => (
  <div className="col-md-4 mx-auto">
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">{msg.title}</h4>
      <p>{msg.content}</p>
      <hr />
    </div>
  </div>
);
