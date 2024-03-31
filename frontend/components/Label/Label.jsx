import * as Styled from "./Styled";

const Label = ({ text }) => {
  return (
    <Styled.Wrapper>
      <Styled.LabelText>{text}</Styled.LabelText>
    </Styled.Wrapper>
  );
};

export default Label;
