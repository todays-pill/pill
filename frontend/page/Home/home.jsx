import { View } from "react-native";
import * as Styled from "./Styled";
import Button from "../../components/Button/Button";

const Home = ({ navigation }) => {
  const onPressJointButton = () => {
    navigation.navigate("Join");
  };

  return (
    <Styled.Wrapper>
      <Styled.ImageBg
        source={require("../../assets/main.png")}
        resizeMode="cover"
      >
        <View style={{ gap: 10 }}>
          <Button>이메일로 시작하기</Button>
          <Button isBg={false} onPress={onPressJointButton}>
            회원가입
          </Button>
        </View>
      </Styled.ImageBg>
    </Styled.Wrapper>
  );
};

export default Home;
