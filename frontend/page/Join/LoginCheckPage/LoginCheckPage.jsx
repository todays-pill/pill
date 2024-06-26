import { useForm, Controller } from "react-hook-form";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";
import LabelInput from "../../../components/LabelInput/LabelInput";
import Button from "../../../components/Button/Button";
import * as SecureStore from "expo-secure-store";
import { login } from "../../../api/auth";
import { getMe } from "../../../api/member";

const LoginCheckPage = ({ route, navigation }) => {
  const { email } = route.params;
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
    },
  });
  const onSubmit = async ({ password }) => {
    const res = await login(email, password);
    if (res.status === "CREATED") {
      await Promise.all([
        SecureStore.setItemAsync("accessToken", res.data.accessToken),
        SecureStore.setItemAsync("refreshToken", res.data.refreshToken),
      ]);

      const { data, status } = await getMe();
      if (status === "OK") {
        if (!data.name) {
          navigation.navigate("ProfileSettinScreen");
          return;
        }
        navigation.navigate("HomeScreen");
      }
    }
  };

  return (
    <JoinLayout
      topText={"비밀번호를 입력해주세요"}
      inputs={
        <Controller
          control={control}
          rules={{
            required: "비밀번호는 필수입니다",
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
      }
      button={<Button onPress={handleSubmit(onSubmit)}>다음</Button>}
    />
  );
};

export default LoginCheckPage;
