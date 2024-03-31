import { useForm, Controller } from "react-hook-form";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";
import LabelInput from "../../../components/LabelInput/LabelInput";
import Button from "../../../components/Button/Button";

const EmailCheckPage = ({ route, navigation }) => {
  const { email } = route.params;
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <JoinLayout
      topText={`${email}로 전송된`}
      bottomText={"인증코드를 입력해주세요"}
      inputs={
        <Controller
          control={control}
          rules={{
            required: "인증코드를 적어주세요",
          }}
          render={({ field: { value, onChange } }) => (
            <LabelInput
              labelText={"인증코드"}
              placeholder="example@domin.com"
              onChange={onChange}
              value={value}
              onPressCancel={() => setValue("email", "")}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />
      }
      button={<Button onPress={handleSubmit(onSubmit)}>다음</Button>}
    />
  );
};

export default EmailCheckPage;
