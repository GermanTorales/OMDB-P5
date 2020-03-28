import React from "react";

export default ({ msg }) => (
  <div className="col-md-4 mx-auto">
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">{msg.title}</h4>
      <p>{msg.content}</p>
      <hr />
    </div>
  </div>
);
