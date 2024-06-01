import { ActivityIndicator, Image, Text, View } from "react-native";

import * as Styled from "./Styled";
import Button from "../../../components/Button/Button";
import Label from "../../../components/Label/Label";
import useAiPillSearchStore from "../../../store/aiPillSearchStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchPillAi } from "../../../api/pill";
import { predictPill } from "../../../api/aiServer";
import { useEffect } from "react";

const AiSearchResultScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { frontFile, backFile, setPillData } = useAiPillSearchStore();
  console.log(frontFile);
  const { data: aiData, isLoading: aiLoding } = useQuery({
    queryKey: ["pill", "predict"],
    queryFn: () => predictPill(frontFile, backFile),
  });

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["pill", aiData.predicted_class_name],
    queryFn: () => searchPillAi(aiData.predicted_class_name),
    enabled: !!aiData,
  });

  if (aiLoding || isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const onPressRegisterBtn = () => {
    queryClient.invalidateQueries(["pill", "predict"]);
    queryClient.invalidateQueries(["pill"]);
    setPillData(data.data);
    navigation.navigate("ScheduleCreateScreen");
  };

  console.log(data);

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
              uri: `${data?.data.imageUrl}`,
            }}
          />
        </Styled.CameraWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"알약 이름"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {data?.data.name}
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"효능"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {data?.data.effect}
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"용법/용량"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {data?.data.dosing}
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"사용상 주의사항"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {data?.data.caution}
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
