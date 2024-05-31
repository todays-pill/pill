import { Image, Pressable, Text, View } from "react-native";
import { WithLocalSvg } from "react-native-svg/css";
import * as Styled from "./Styled";
import LabelInput from "../../../components/LabelInput/LabelInput";
import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import SelectedInput from "../../../components/SelectedInput/SelectedInput";
import { useEffect, useState } from "react";
import useAiPillSearchStore from "../../../store/aiPillSearchStore";
import Label from "../../../components/Label/Label";
import { createPillSchedule } from "../../../api/pillSchedule";
import { useQueryClient } from "@tanstack/react-query";

const days = ["월", "화", "수", "목", "금", "토", "일"];

const ScheduleCreateScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { pillData, reset } = useAiPillSearchStore();
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedvalues, setSelectedValues] = useState(["아침"]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      pillName: pillData?.name || "",
    },
  });

  useEffect(() => {
    if (pillData) {
      setValue("pillName", pillData.name);
    }
  }, [pillData]);

  const onCliclCameraWrapper = () => {
    navigation.navigate("PillCaptureScreen");
  };

  const onPressDay = day => {
    if (selectedDays.includes(day)) {
      const newDay = selectedDays.filter(d => d !== day);
      setSelectedDays(newDay);
      return;
    }
    setSelectedDays(v => [...v, day]);
  };

  const onSubmit = async ({ pillName }) => {
    console.log(pillName);
    const data = await createPillSchedule(
      pillData.pillId,
      pillName,
      selectedDays,
      selectedvalues.includes("아침"),
      selectedvalues.includes("점심"),
      selectedvalues.includes("저녁")
    );
    if (data.status === "OK") {
      queryClient.invalidateQueries(["pillSchedule", "today"]);
      reset();
      navigation.navigate("MainScreen");
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.CameraWrapper onPress={onCliclCameraWrapper}>
          {!pillData ? (
            <>
              <WithLocalSvg
                asset={require("../../../assets/vectors/camera-Icon.svg")}
                width={45}
                height={45}
              />
              <Text style={{ color: "#A4AAB9" }}>등록할 알약 사진 촬영</Text>
            </>
          ) : (
            <Image
              style={{
                width: 350,
                height: 200,
              }}
              source={{
                uri: `${pillData.imageUrl}`,
              }}
            />
          )}
        </Styled.CameraWrapper>
        <Styled.InputWrapper>
          <Controller
            control={control}
            rules={{
              required: "알약 이름은 필수입니다",
            }}
            render={({ field: { value, onChange } }) => (
              <LabelInput
                labelText={"어떤 알약인가요?"}
                placeholder="알약 이름"
                onChange={onChange}
                value={value}
                defaultValue={pillData?.name || ""}
                errorMessage={errors.pillName?.message}
                isShowCancelIcon={false}
                isBoldLabelText={true}
              />
            )}
            name="pillName"
          />
          <View>
            <Label isBold={true} text={"반복할 요일을 선택해주세요!"} />
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              {days.map(day => (
                <Pressable
                  onPress={() => onPressDay(day)}
                  key={day}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: selectedDays.includes(day)
                      ? "#5BADFF"
                      : "#FFF",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: selectedDays.includes(day) ? "#FFFFFF" : "#A7ADBD",
                      fontWeight: "bold",
                    }}
                  >
                    {day}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
          <SelectedInput
            labelText={"복용할 시간대를 골라주세요"}
            selectedvalues={selectedvalues}
            setSelectedValues={setSelectedValues}
            values={["아침", "점심", "저녁"]}
            title="복용할 시간대 선택하기 (중복 가능)"
            onChange={values => setSelectedValues(values)}
          />
        </Styled.InputWrapper>
      </Styled.ContentWrapper>

      <Button onPress={handleSubmit(onSubmit)}>완료</Button>
    </Styled.Wrapper>
  );
};

export default ScheduleCreateScreen;
