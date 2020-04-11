import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background: #34515e;
`;

export const Home = styled.div`
  padding-left: 25px;
  padding-top: 5px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
`;

export const ToggleButtons = styled.div`
  width: 15%;
  margin-right: 25px;
  padding-top: 5px;
`;

export const NotUser = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  background: #90a4ae;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 5px;
`;
