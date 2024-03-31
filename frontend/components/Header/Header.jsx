import * as Styled from "./Styled";
import ArrowLeft from "../../assets/vectors/arrow-left.svg";
import { WithLocalSvg } from "react-native-svg/css";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();
  const onPressArrow = () => {
    navigation.goBack();
  };
  return (
    <Styled.Wrapper>
      <Styled.SvgWrapper onPress={onPressArrow}>
        <WithLocalSvg asset={ArrowLeft} />
      </Styled.SvgWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Item></Styled.Item>
    </Styled.Wrapper>
  );
};

export default Header;
