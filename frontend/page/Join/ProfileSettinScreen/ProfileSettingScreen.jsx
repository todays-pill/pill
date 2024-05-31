import { Controller, useForm } from "react-hook-form";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";
import LabelInput from "../../../components/LabelInput/LabelInput";
import SelectButton from "../../../components/SelectButton/SelectButton";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import { View } from "react-native";
import { updateProfile } from "../../../api/member";

const ProfileSettingScreen = () => {
  const [gender, setGender] = useState("MAN");
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onChangeGender = korGender => {
    setGender(changeGenderFromKorean(korGender));
  };

  function changeGenderFromKorean(korGender) {
    switch (korGender) {
      case "남성":
        return "MAN";
      case "여성":
        return "GIRL";
      default:
        throw new Error("Invalid Korean gender");
    }
  }

  const onSubmit = async ({ name }) => {
    console.log(gender);
    const res = await updateProfile(name, gender);
    console.log(res);
    if (res.status === "OK") {
      
    }
  };

  return (
    <JoinLayout
      topText="본인의 정보를 입력해주세요"
      inputs={
        <View style={{ gap: 30 }}>
          <Controller
            control={control}
            rules={{
              required: "이름은 필수입니다.",
            }}
            render={({ field: { value, onChange } }) => (
              <LabelInput
                isBoldLabelText={true}
                labelText={"이름"}
                onChange={onChange}
                value={value}
                onPressCancel={() => setValue("name", "")}
                errorMessage={errors.name?.message}
              />
            )}
            name="name"
          />
          <SelectButton
            labelText="성별"
            texts={["남성", "여성"]}
            defulatValue="남성"
            onChange={onChangeGender}
          />
        </View>
      }
      button={<Button onPress={handleSubmit(onSubmit)}>시작하기</Button>}
    />
  );
};

export default ProfileSettingScreen;
