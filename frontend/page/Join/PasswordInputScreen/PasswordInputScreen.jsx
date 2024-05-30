import { Controller, useForm } from "react-hook-form";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";
import LabelInput from "../../../components/LabelInput/LabelInput";
import Button from "../../../components/Button/Button";
import { View } from "react-native";
import { registerMember } from "../../../api/member";

const PasswordInputScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      passwordCheck: "",
    },
  });

  const onSubmit = async ({ password }) => {
    const data = await registerMember(email, password);
    console.log(data);
    alert("회원가입 완료");
    navigation.navigate("Home");
  };

  return (
    <JoinLayout
      topText="로그인에 사용할"
      bottomText="비밀번호를 입력해주세요"
      inputs={
        <View style={{ gap: 20 }}>
          <Controller
            control={control}
            rules={{
              required: "비밀번호를 적어주세요",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: "대문자와 숫자를 포함해 8자 이상 입력해주세요",
              },
            }}
            render={({ field: { value, onChange } }) => (
              <LabelInput
                labelText={"비밀번호"}
                placeholder="비밀번호"
                secureTextEntry
                onChange={onChange}
                value={value}
                onPressCancel={() => setValue("password", "")}
                errorMessage={errors.password?.message}
              />
            )}
            name="password"
          />
          <Controller
            control={control}
            rules={{
              required: "비밀번호 확인을 적어주세요",
              validate: value =>
                value === watch("password") || "비밀번호가 일치하지 않습니다.",
            }}
            render={({ field: { value, onChange } }) => (
              <LabelInput
                labelText={"비밀번호 확인"}
                secureTextEntry
                onChange={onChange}
                value={value}
                onPressCancel={() => setValue("passwordCheck", "")}
                errorMessage={errors.passwordCheck?.message}
              />
            )}
            name="passwordCheck"
          />
        </View>
      }
      button={<Button onPress={handleSubmit(onSubmit)}>다음</Button>}
    />
  );
};

export default PasswordInputScreen;
