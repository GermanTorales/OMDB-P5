import React from "react";

export default ({ favorites, user }) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {favorites.map(fav => {
          return (
            <tr>
              <td>fav.Title</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
