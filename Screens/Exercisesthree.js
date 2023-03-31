import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

const Exercisesthree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.execTitle}>Exercise No. 3</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("./Images/eye3.png")}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.imgText}>
            This is a great exercise to practice controlling the physical
            movement of your eyes. Imagine a giant figure eight on the floor,
            about 10 feet (3 m) in front of you. Trace the figure eight with
            your eyes, slowly. Trace it one way for a few minutes and then trace
            it the other way for a few minutes.
            {"\n"}
            {'\n'}
            1. Imagine a giant figure eight on the floor, about 10 feet (3 m) in
            front of you. {"\n"}{"\n"}
            2. Trace the figure eight with your eyes, slowly. {"\n"}{"\n"}
            3. Trace it one way for a few minutes and then trace it the other way
            for a few minutes. {"\n"}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercisesfour")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercisestwo")}
        >
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exercisesthree;

const styles = StyleSheet.create({

  scroll: {
    height: "70%",
  },

  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "space-between",
  },

  banner: {
    height: 250,
    width: 250,
    borderRadius: 50,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imgText: {
    paddingVertical: 20,
    fontSize: 20,
    color: "grey",
    textAlign: "justify",
  },

  execTitle: {
    fontSize: 30,
    marginTop: 30,
    paddingBottom: 20,
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
  },

  buttonGroup: {
    paddingVertical: 20,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },

  button: {
    padding: 20,
    // marginVertical: 10,
    backgroundColor: "#ff006e",
    borderRadius: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    alignItems: "center",
  },
});
