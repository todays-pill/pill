import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  /* height: 50px; */
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3f4245;
`;

export const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 17px;
  color: #3f4245;
`;

export const Card = styled.View`
  background-color: #fff;
  width: 207px;
  height: 291px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const PillCard = styled.View`
  background-color: #fff;
  width: 207px;
  height: 291px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  background-color: #f8f9fd;
  padding: 15px;
  padding-top: 20px;
  gap: 10px;
`;

export const AddWrapper = styled.TouchableOpacity`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #5badff;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  right: 20px;
`;
