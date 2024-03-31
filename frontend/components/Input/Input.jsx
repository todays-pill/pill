import * as Styled from "./Styled";
import { WithLocalSvg } from "react-native-svg/css";
import CancelIcon from "../../assets/vectors/cancel.svg";

const Input = ({
  placeholder,
  defaultValue,
  value,
  onChange,
  onPressCancel,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.CustomInput
        autoCapitalize="none"
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChange}
      />
      <Styled.SvgWrapper onPress={onPressCancel}>
        <WithLocalSvg asset={CancelIcon} />
      </Styled.SvgWrapper>
    </Styled.Wrapper>
  );
};

export default Input;
