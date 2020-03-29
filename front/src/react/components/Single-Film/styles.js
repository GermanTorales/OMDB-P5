import styled from "styled-components";

export const FilmCardContainer = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const FilmImageContainer = styled.div`
  width: 35%;
  height: 100%;
`;

export const FilmInfo = styled.div`
  width: 60%;
  height: 100%;
`;

export const FilmTitle = styled.h1`
  font-size: 38px;
  color: #000;
  font-weight: 800;
`;

export const FilmSubInfo = styled.p`
  font-size: 18px;
  color: #444;
`;

export const FilmPlot = styled.h2`
  font-size: 20px;
  color: #000;
`;
