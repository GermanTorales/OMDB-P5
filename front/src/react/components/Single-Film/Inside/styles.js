import styled from "styled-components";
const styles = {};

styles.Container = styled.div`
  padding-top: 100px;
  width: 90%;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

styles.CardContainer = styled.div`
  width: 18%;
  height: 280px;
`;

styles.Image = styled.img`
  width: 100%;
  height: 100%;
`;

styles.TarjetaTitle = styled.h2`
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    color: #fff;
  }
`;

export default styles;
