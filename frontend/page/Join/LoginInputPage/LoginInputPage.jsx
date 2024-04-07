import { useForm, Controller } from 'react-hook-form';
import JoinLayout from '../../../layouts/JoinLayout/JoinLayout';
import LabelInput from '../../../components/LabelInput/LabelInput';
import Button from '../../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const LoginInputPage = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = ({ email }) => {
    navigation.navigate('LoginCheckPage', { email });
  };
  const handleGoToEmailInputPage = () => {
    navigation.navigate('EmailInputPage');
  };

  return (
    <JoinLayout
      topText={'회원가입에 사용한'}
      bottomText={'이메일을 입력해주세요'}
      inputs={
        <Controller
          control={control}
          rules={{
            required: '이메일은 필수입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '이메일 형식이 아닙니다.',
            },
          }}
          render={({ field: { value, onChange } }) => (
            <LabelInput
              labelText={'이메일 주소'}
              placeholder="example@domin.com"
              onChange={onChange}
              value={value}
              onPressCancel={() => setValue('email', '')}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />
      }
      button={<Button onPress={handleSubmit(onSubmit)}>다음</Button>}
      extraButton={
        <Button onPress={handleGoToEmailInputPage}>
          이메일 입력페이지로 이동
        </Button>
      }
    />
  );
};

export default LoginInputPage;
