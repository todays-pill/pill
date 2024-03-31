import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import EmailInputPage from "./page/Join/EmailInputPage/EmailInputPage";
import EmailCheckPage from "./page/Join/EmailCheckPage/EmailCheckPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
