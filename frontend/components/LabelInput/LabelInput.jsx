import Input from '../Input/Input';
import Label from '../Label/Label';
import * as Styled from './Styeld';

const LabelInput = ({
  labelText,
  placeholder,
  defaultValue,
  value,
  onChange,
  onPressCancel,
  errorMessage,
  secureTextEntry,
}) => {
  const inputProps = {
    placeholder,
    defaultValue,
    value,
    onChange,
    onPressCancel,
    secureTextEntry,
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
