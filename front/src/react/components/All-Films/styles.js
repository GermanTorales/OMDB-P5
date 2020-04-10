import styled from "styled-components";

const styles = {};

styles.Grilla = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
`;

styles.Tarjetas = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

styles.Tarjeta = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  height: 350px;
  background: #708b97b2;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #444;
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
