import styled from "styled-components";
const styles = {};

styles.Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

styles.FilmCardContainer = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

styles.FilmImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  background: #708b97b2;
  border: 1px solid #ccc;
`;

styles.FilmInfo = styled.div`
  width: 60%;
  height: 100%;
`;

styles.FilmTitle = styled.h1`
  font-size: 38px;
  color: #000;
  font-weight: 800;
`;

styles.FilmSubInfo = styled.p`
  font-size: 18px;
  color: #444;
`;

styles.FilmPlot = styled.h2`
  font-size: 20px;
  color: #000;
`;

export default styles;
