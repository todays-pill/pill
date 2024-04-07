import * as Styled from './Styled';

const JoinLayout = ({ topText, bottomText, inputs, button }) => {
  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.H1>{topText}</Styled.H1>
        <Styled.H1 isBottom>{bottomText}</Styled.H1>
      </Styled.Top>
      <Styled.InputContainer>{inputs}</Styled.InputContainer>
      {button}
    </Styled.Wrapper>
  );
};

export default JoinLayout;
