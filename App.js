import { StyleSheet, Text, View } from "react-native";
import Exercises from "./Screens/Exercises";
import { NavigationContainer } from "@react-navigation/native";
import Exercisestwo from "./Screens/Exercisestwo";
import Exercisesthree from "./Screens/Exercisesthree";
import Home from "./Screens/Home";
import Eyebreak from "./Screens/Eyebreak";
import Notific from "./Screens/Notific";
import MyStack from "./navigation";
export default function App() {
  return (
    // <View style={styles.container}>
    //  <Home />
    //  {/* <Exercises /> */}
    //  {/* <Exercisestwo />
    //  <Exercisesthree /> */}
    //  {/* <Eyebreak /> */}
    //  {/* <Notific /> */}
    // </View>
    <NavigationContainer>
      <MyStack />
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
