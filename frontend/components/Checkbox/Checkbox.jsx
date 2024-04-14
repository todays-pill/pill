import * as Styled from "./Styled";

const Checkbox = ({ value, isChecked, onPressCheckBox }) => {
  return (
    <Styled.Wrapper onPress={onPressCheckBox}>
      <Styled.Box>
        <Styled.CheckIcon isChecked={isChecked}>
          <Styled.InnerCircle isChecked={isChecked} />
        </Styled.CheckIcon>
        <Styled.Text isChecked={isChecked}>{value}</Styled.Text>
      </Styled.Box>
    </Styled.Wrapper>
  );
};

export default Checkbox;
