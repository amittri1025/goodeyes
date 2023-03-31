import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Title from "../components/Title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image 
          source={require("./Images/intro.jpg")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>


      <Title />
      <Text style={{ fontSize: 20, fontStyle: "italic" }}>
        An initiative solving various Eye Problems by providing Personalised Solutions
      </Text>


      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("Eyebreak")}
        >
          <Text style={styles.buttonText}>Eye Health Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercises")}
        >
          <Text style={styles.buttonText}>Start Eye Exercises</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },

  banner: {
    height: 300,
    width: 300,
    // borderRadius: 50,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonGroup: {
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  button: {
    width: 300,
    textAlignVertical: "center",
    marginVertical: 5,
    padding: 20,
    backgroundColor: "#3a86ff",
    borderRadius: 30,
  },
  button2: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: "#ff006e",
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    alignItems: "center",
  },
});
