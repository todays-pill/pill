import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;

  display: flex;
  gap: 20px;
`;

export const Top = styled.View`
  width: 100%;
  flex: 0.15;
`;

export const H1 = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3f4245;
  margin-top: ${props => (props.isBottom ? "5px" : "0")};
`;

export const InputContainer = styled.View`
  flex: 1;
`;
