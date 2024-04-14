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
  width: 185px;
  height: 185px;
  background-color: #f8f9fd;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
`;

export const InputWrapper = styled.View`
  margin-top: 20px;
  gap: 30px;
  flex: 1;
`;
