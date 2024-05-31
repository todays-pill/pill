import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  background-color: #69b4ff;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${props => (props.isBg ? "#69b4ff" : "none")};
`;

export const Text = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
