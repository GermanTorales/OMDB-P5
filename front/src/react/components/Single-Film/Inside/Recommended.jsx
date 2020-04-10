import React from "react";
import styles from "./styles";

export default ({ recommended }) => {
  return (
    <styles.Container>
      {recommended.Search.map((film, index) => {
        return (
          <styles.CardContainer>
            <styles.Image src={film.Poster} />
          </styles.CardContainer>
        );
      })}
    </styles.Container>
  );
};
