import React from "react";
import styles from "./styles";

export default ({ selected, width, height, number, name, onChangePage }) => {
  return (
    <styles.Button
      disabled={selected}
      width={width}
      heigth={height}
      onClick={(e) => {
        e.preventDefault();
        onChangePage(number);
      }}
    >
      {name}
    </styles.Button>
  );
};
