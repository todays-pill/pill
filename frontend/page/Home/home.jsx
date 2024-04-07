import { View } from 'react-native';
import * as Styled from './Styled';
import Button from '../../components/Button/Button';

const Home = ({ navigation }) => {
  const onPressEmailStartButton = () => {
    navigation.navigate('LoginInputPage');
  };

  const onPressJointButton = () => {
    navigation.navigate('EmailInputPage');
  };

  return (
    <Styled.Wrapper>
      <Styled.ImageBg
        source={require('../../assets/main.png')}
        resizeMode="cover"
      >
        <View style={{ gap: 10 }}>
          <Button onPress={onPressEmailStartButton}>이메일로 시작하기</Button>
          <Button isBg={false} onPress={onPressJointButton}>
            회원가입
          </Button>
        </View>
      </Styled.ImageBg>
    </Styled.Wrapper>
  );
};

export default Home;
