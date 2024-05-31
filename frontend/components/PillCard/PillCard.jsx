import { Image, StyleSheet, Text, View } from "react-native";
import * as Styled from "./Styled";
import Button from "../Button/Button";

//https://roundtable-test-20240507.s3.ap-northeast-2.amazonaws.com/pill/K036025.jpg
const PillCard = ({
  name,
  imageUrl,
  isBreakfast,
  isLunch,
  isDinner,
  isClear,
}) => {
  return (
    <Styled.Wrapper style={styles.card}>
      <Styled.Badge $isClear={isClear}>
        <Styled.BadgeText $isClear={isClear}>
          {isClear ? "복용" : "미복용"}
        </Styled.BadgeText>
      </Styled.Badge>
      <Styled.Name>{name}</Styled.Name>
      <View style={{ flexDirection: "row", gap: 4 }}>
        {isBreakfast && <Styled.Sub>아침</Styled.Sub>}
        {isLunch && <Styled.Sub>점심</Styled.Sub>}
        {isDinner && <Styled.Sub>저녁</Styled.Sub>}
      </View>
      <Styled.ImageWrapper>
        <Image
          style={{
            width: 175,
            height: 100,
            resizeMode: "contain",
            borderRadius: 10,
          }}
          source={{
            uri: imageUrl,
          }}
        />
      </Styled.ImageWrapper>
      <Styled.Button
        style={{ backgroundColor: isClear ? "#D3D9E3" : "#53A5F8" }}
      >
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>
          {isClear ? "완료됨" : "완료하기"}
        </Text>
      </Styled.Button>
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

export default PillCard;
