import { Text, View } from "react-native";
import * as Styled from "./Styled";
import { WithLocalSvg } from "react-native-svg/css";
import Icon from "../../assets/vectors/icon.svg";
import AlarmIcon from "../../assets/vectors/alarm.svg";

const HomeHeader = () => {
  return (
    <Styled.Wrapper>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <WithLocalSvg asset={Icon} />
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#C0C5CC" }}>
          Todays Pill
        </Text>
      </View>
      <View>
        <WithLocalSvg asset={AlarmIcon} />
      </View>
    </Styled.Wrapper>
  );
};

export default HomeHeader;
