import { Text } from "react-native";
import { WithLocalSvg } from "react-native-svg/css";
import CameraIcon from "../../../assets/vectors/camera-Icon.svg";
import * as Styled from "./Styled";
import LabelInput from "../../../components/LabelInput/LabelInput";
import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import SelectedInput from "../../../components/SelectedInput/SelectedInput";
import { useState } from "react";

const ScheduleCreateScreen = ({ navigation }) => {
  const [selectedvalues, setSelectedValues] = useState(["아침"]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pillName: "",
      frequencyInterval: null,
    },
  });
  const onCliclCameraWrapper = () => {
    navigation.navigate("PillCaptureScreen");
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.CameraWrapper onPress={onCliclCameraWrapper}>
          <WithLocalSvg
            asset={require("../../../assets/vectors/camera-Icon.svg")}
            width={45}
            height={45}
          />
          <Text style={{ color: "#A4AAB9" }}>등록할 알약 사진 촬영</Text>
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
                errorMessage={errors.pillName?.message}
                isShowCancelIcon={false}
                isBoldLabelText={true}
              />
            )}
            name="pillName"
          />
          <Controller
            control={control}
            rules={{
              required: "복용 주기는 필수입니다.",
              pattern: {
                value: /^([1-9]\d*)(\.\d+)?$/,
                message: "1이상의 숫자만 허용합니다.",
              },
              max: {
                value: 30,
                message: "복용 주기는 30일을 초과할 수 없습니다.",
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <LabelInput
                labelText={"복용 주기를 적어주세요"}
                placeholder="며칠 간격으로 복용할지를 적어주세요"
                onChange={onChange}
                value={value}
                errorMessage={error?.message}
                isShowCancelIcon={false}
                isBoldLabelText={true}
                keyboardType={"number-pad"}
              />
            )}
            name="frequencyInterval"
          />
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
