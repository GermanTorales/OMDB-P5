import React from "react";

export default ({ title, content }) => {
  return (
    <tr>
      <th scope="">{title}</th>
      <td>{content}</td>
    </tr>
  );
};
