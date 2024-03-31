import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const Top = styled.View`
  width: 100%;
  height: 66px;
`;

export const H1 = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #3f4245;
  margin-top: ${props => (props.isBottom ? "5px" : "0")};
`;
