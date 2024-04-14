import Input from "../Input/Input";
import Label from "../Label/Label";
import * as Styled from "./Styeld";

const LabelInput = ({
  labelText,
  isBoldLabelText,
  placeholder,
  defaultValue,
  value,
  onChange,
  onPressCancel,
  errorMessage,
  secureTextEntry,
  isShowCancelIcon,
  keyboardType,
}) => {
  const inputProps = {
    placeholder,
    defaultValue,
    value,
    onChange,
    onPressCancel,
    secureTextEntry,
    isShowCancelIcon,
    keyboardType,
  };
  return (
    <Styled.Wrapper>
      <Label text={labelText} isBold={isBoldLabelText} />
      <Input {...inputProps} />
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.Wrapper>
  );
};

export default LabelInput;
