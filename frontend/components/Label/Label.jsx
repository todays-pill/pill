import * as Styled from "./Styled";

const Label = ({ text, isBold }) => {
  return (
    <Styled.Wrapper>
      {isBold ? (
        <Styled.BoldLabelText>{text}</Styled.BoldLabelText>
      ) : (
        <Styled.LabelText>{text}</Styled.LabelText>
      )}
    </Styled.Wrapper>
  );
};

export default Label;
