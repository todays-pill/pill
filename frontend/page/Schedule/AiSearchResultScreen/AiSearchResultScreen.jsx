import { ActivityIndicator, Image, Text, View } from "react-native";

import * as Styled from "./Styled";
import Button from "../../../components/Button/Button";
import Label from "../../../components/Label/Label";
import useAiPillSearchStore from "../../../store/aiPillSearchStore";
import { useQuery } from "@tanstack/react-query";
import { searchPillAi } from "../../../api/pill";
import { useEffect } from "react";

const AiSearchResultScreen = ({ navigation }) => {
  const { frontBlob, backBlob, setPillData } = useAiPillSearchStore();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["pill"],
    queryFn: () => searchPillAi(frontBlob, backBlob),
  });

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const { data: pillData } = data;

  const onPressRegisterBtn = () => {
    setPillData(pillData);
    navigation.navigate("ScheduleCreateScreen");
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.CameraWrapper>
          <Image
            style={{
              width: 350,
              height: 200,
            }}
            source={{
              uri: `${pillData.imageUrl}`,
            }}
          />
        </Styled.CameraWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"알약 이름"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {pillData.name}
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"효능"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {pillData.effect}
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"용법/용량"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {pillData.dosing}
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"사용상 주의사항"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {pillData.caution}
          </Text>
        </Styled.InputWrapper>
      </Styled.ContentWrapper>
      <Styled.ButtonWrapper>
        <Button
          onPress={() => navigation.goBack()}
          viewStyle={{ flex: 0.5, backgroundColor: "#B1B1B1" }}
        >
          취소
        </Button>
        <Button onPress={onPressRegisterBtn} viewStyle={{ flex: 0.5 }}>
          등록
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default AiSearchResultScreen;
