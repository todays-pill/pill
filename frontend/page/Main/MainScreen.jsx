import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Styled from "./Styled";
import { WithLocalSvg } from "react-native-svg/css";
import PlusIcon from "../../assets/vectors/plus-icon.svg";
import { StatusBar } from "expo-status-bar";
import PillCard from "../../components/PillCard/PillCard";
import { useQuery } from "@tanstack/react-query";
import { getTodayPillSchedule } from "../../api/pillSchedule";
import SmileIcon from "../../assets/vectors/smile.svg";
import { getMe } from "../../api/member";

const MainScreen = ({ navigation }) => {
  const { data: meData } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });
  const { data } = useQuery({
    queryKey: ["pillSchedule", "today"],
    queryFn: () => getTodayPillSchedule(),
  });

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
          <Styled.Title>안녕하세요, {meData?.data.name}님!</Styled.Title>
          <Styled.Title>오늘도 알약을 챙겨먹어요</Styled.Title>
        </View>
      </Styled.Header>
      <Styled.ContentWrapper>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Styled.SubTitle>오늘 먹을 알약</Styled.SubTitle>
          <Styled.SubTitle style={{ color: "#5BADFF" }}>
            {data?.data.length || "0"}건
          </Styled.SubTitle>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data?.data.length > 0 ? (
            data?.data.map(pillSchedule => (
              <View
                key={pillSchedule.pillScheduleId}
                style={{ marginRight: 20 }}
              >
                <PillCard
                  name={pillSchedule.pillName}
                  imageUrl={pillSchedule.imageUrl}
                  isBreakfast={pillSchedule.isBreakfast}
                  isDinner={pillSchedule.isDinner}
                  isLunch={pillSchedule.isLunch}
                  isClear={false}
                />
              </View>
            ))
          ) : (
            <Styled.Card style={styles.card}>
              <View style={{ alignItems: "center", gap: 10 }}>
                <WithLocalSvg asset={SmileIcon} />
                <Text
                  style={{ color: "#9CA3AB", fontWeight: "bold", fontSize: 14 }}
                >
                  오늘 먹을 알약이 없어요!
                </Text>
              </View>
            </Styled.Card>
          )}
        </ScrollView>
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
