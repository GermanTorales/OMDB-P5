import styled from "styled-components";

const styles = {};

styles.Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #27789bb2;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.4s;
  &:hover {
    transition: all 0.4s;
    background: #1b3f4e;
    color: #fff;
  }
`;

export default styles;
