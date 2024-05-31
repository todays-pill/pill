import { StyleSheet, View } from "react-native";
import * as Styled from "./Styled";
import { WithLocalSvg } from "react-native-svg/css";
import PlusIcon from "../../assets/vectors/plus-icon.svg";
import { StatusBar } from "expo-status-bar";
import PillCard from "../../components/PillCard/PillCard";

const MainScreen = ({ navigation }) => {
  return (
    <Styled.Wrapper>
      <StatusBar />
      <Styled.Header
        style={{
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "#FFFFFF",
        }}
      >
        <View style={{ gap: 6 }}>
          <Styled.Title>안녕하세요, 지수님!</Styled.Title>
          <Styled.Title>오늘도 알약을 챙겨먹어요</Styled.Title>
        </View>
      </Styled.Header>
      <Styled.ContentWrapper>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Styled.SubTitle>오늘 먹을 알약</Styled.SubTitle>
          <Styled.SubTitle style={{ color: "#5BADFF" }}>0건</Styled.SubTitle>
        </View>
        {/* <Styled.Card style={styles.card}>
          <View style={{ alignItems: "center", gap: 10 }}>
            <WithLocalSvg asset={SmileIcon} />
            <Text
              style={{ color: "#9CA3AB", fontWeight: "bold", fontSize: 14 }}
            >
              오늘 먹을 알약이 없어요!
            </Text>
          </View>
        </Styled.Card> */}
        <PillCard
          name="타이레놀"
          imageUrl={
            "https://roundtable-test-20240507.s3.ap-northeast-2.amazonaws.com/pill/K036025.jpg"
          }
          isBreakfast={true}
          isDinner={true}
          isLunch={true}
          isClear={false}
        />
        <Styled.AddWrapper
          onPress={() => navigation.navigate("ScheduleCreateScreen")}
        >
          <WithLocalSvg asset={PlusIcon} />
        </Styled.AddWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
  },
});

export default MainScreen;
