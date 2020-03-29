import styled from "styled-components";
const styles = {};

styles.Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
`;

styles.Form = styled.form`
  width: 30%;
  margin: 0 auto;
`;

styles.Field = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

styles.Label = styled.label`
  font-size: 20px;
  font-weight: 400;
`;

styles.Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &::placeholder {
    padding-left: 10px;
  }
`;

styles.Button = styled.button`
  width: 50%;
  height: 50px;
  margin: 0 auto;
  background: #90a4ae;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  transition: all 0.5s;
  border: 1px solid #ccc;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s;
    background: #525e64;
  }
`;

export default styles;
