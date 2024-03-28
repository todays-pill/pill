import * as Styled from "./Styled";

const Button = ({ children, onPress, isBg = true }) => {
  return (
    <Styled.Wrapper isBg={isBg} onPress={onPress}>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default Button;
