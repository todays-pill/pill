import { Text } from "react-native";
import Input from "../Input/Input";
import Label from "../Label/Label";
import * as Styled from "./Styeld";

const LabelInput = ({
  labelText,
  placeholder,
  defaultValue,
  value,
  onChange,
  onPressCancel,
  errorMessage,
}) => {
  const inputProps = {
    placeholder,
    defaultValue,
    value,
    onChange,
    onPressCancel,
  };
  return (
    <Styled.Wrapper>
      <Label text={labelText} />
      <Input {...inputProps} />
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.Wrapper>
  );
};

export default LabelInput;
