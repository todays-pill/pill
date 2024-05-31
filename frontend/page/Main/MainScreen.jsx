import { View } from "react-native";
import Header from "../../components/Header/Header";
import * as Styled from "./Styled";

const MainScreen = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header
        style={{
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "#FFFFFF",
        }}
      >
        <View style={{ gap: 6 }}>
          <Styled.Title>안녕하세요, 지수님!</Styled.Title>
          <Styled.Title>오늘도 알약을 챙겨먹어요</Styled.Title>
        </View>
      </Styled.Header>
      <Styled.ContentWrapper></Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default MainScreen;
