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
import AiSearchResultScreen from "./page/Schedule/AiSearchResultScreen/AiSearchResultScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PasswordInputScreen from "./page/Join/PasswordInputScreen/PasswordInputScreen";
import ProfileSettingScreen from "./page/Join/ProfileSettinScreen/ProfileSettingScreen";
import MainScreen from "./page/Main/MainScreen";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WithLocalSvg } from "react-native-svg/css";
import HomeIcon from "./assets/vectors/home-icon.svg";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        tabBarInactiveTintColor: "#D5DCE4",
        tabBarActiveTintColor: "#3F4245",
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          header: () => <HomeHeader />,
          tabBarIcon: ({ focused }) => <WithLocalSvg asset={HomeIcon} />,
          tabBarLabel: "홈",
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
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
            name="PasswordInputScreen"
            component={PasswordInputScreen}
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
            name="ProfileSettinScreen"
            component={ProfileSettingScreen}
            options={{
              header: () => <Header title="프로필 설정" />,
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
          <Stack.Screen
            name="AiSearchResultScreen"
            component={AiSearchResultScreen}
            options={{
              header: () => <Header title="알약 검색 결과" />,
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
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
