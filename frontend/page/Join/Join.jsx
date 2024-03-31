import { StatusBar } from "expo-status-bar";
import * as Styled from "./Styled";

const Join = () => {
  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.H1>로그인에 사용할</Styled.H1>
        <Styled.H1 isBottom>이메일을 입력해 주세요</Styled.H1>
      </Styled.Top>
    </Styled.Wrapper>
  );
};

export default Join;
