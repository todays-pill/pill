import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import EmailInputPage from "./page/Join/EmailInputPage/EmailInputPage";
import EmailCheckPage from "./page/Join/EmailCheckPage/EmailCheckPage";
import LoginInputPage from "./page/Join/LoginInputPage/LoginInputPage";
import LoginCheckPage from "./page/Join/LoginCheckPage/LoginCheckPage";
import ScheduleCreateScreen from "./page/Schedule/ScheduleCreateScreen/ScheduleCreateScreen";
import PillCaptureScreen from "./page/Schedule/PillCaptureScreen/PillCaptureScreen";
import PillCaptureBackScreen from "./page/Schedule/PillCaptureBackScreen/PillCaptureBackScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScheduleCreateScreen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailInputPage"
          component={EmailInputPage}
          options={{
            header: () => <Header title="회원가입" />,
          }}
        />
        <Stack.Screen
          name="EmailCheckPage"
          component={EmailCheckPage}
          options={{
            header: () => <Header title="회원가입" />,
          }}
        />
        <Stack.Screen
          name="LoginInputPage"
          component={LoginInputPage}
          options={{
            header: () => <Header title="시작하기" />,
          }}
        />
        <Stack.Screen
          name="LoginCheckPage"
          component={LoginCheckPage}
          options={{
            header: () => <Header title="시작하기" />,
          }}
        />
        <Stack.Screen
          name="ScheduleCreateScreen"
          component={ScheduleCreateScreen}
          options={{
            header: () => <Header title="알약 등록" />,
          }}
        />
        <Stack.Screen
          name="PillCaptureScreen"
          component={PillCaptureScreen}
          options={{
            header: () => <Header title="알약 앞면 촬영" />,
          }}
        />
        <Stack.Screen
          name="PillCaptureBackScreen"
          component={PillCaptureBackScreen}
          options={{
            header: () => <Header title="알약 뒷면 촬영" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
