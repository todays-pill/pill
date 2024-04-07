import * as Styled from './Styled';

const Button = ({ children, onPress, isBg = true, extraButton }) => {
  return (
    <>
      <Styled.Wrapper isBg={isBg} onPress={onPress}>
        <Styled.Text>{children}</Styled.Text>
      </Styled.Wrapper>
      {extraButton && (
        <Styled.ExtraButtonWrapper onPress={extraButton.onPress}>
          <Styled.ExtraButtonText>{extraButton.text}</Styled.ExtraButtonText>
        </Styled.ExtraButtonWrapper>
      )}
    </>
  );
};

export default Button;
