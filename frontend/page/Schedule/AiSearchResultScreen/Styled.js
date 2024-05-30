import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  gap: 10px;
  position: relative;
`;

export const ContentWrapper = styled.ScrollView`
  flex: 1;
  margin-bottom: 10px;
`;

export const CameraWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
`;

export const InputWrapper = styled.View`
  margin-top: 30px;
  gap: 10px;
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`;
