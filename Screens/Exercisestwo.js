import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

const Exercisestwo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.execTitle}>Exercise No. 2</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("./Images/eye2.png")}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.imgText}>
            Practice zooming with your eyes. This is a good eye focusing
            exercise, as you have to constantly adjust how well you can focus on
            an object from certain distances.
            {"\n"}
            {"\n"}
            1. Sit in a comfortable position. {"\n"}
            2. Stretch out your arm with your thumb in the hitchhiking position
            (thumbs up). {"\n"}
            3. Focus on your thumb. Then, bring the thumb closer to you, focusing
            until your thumb is about 3 inches (8 cm) in front of your face.{" "}
            {"\n"}
            4. Move your thumb away again until your arm is fully outstretched.{" "}
            {"\n"}
            5. Repeat this exercise three more times, once a week. {"\n"}
            You can also practice this exercise by holding a pencil in front of
            you at arms length. Then, move your arm slowly to your nose. Follow
            the pencil with your eyes until you cant focus on it any longer.{" "}
            {"\n"}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercisesthree")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercises")}
        >
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exercisestwo;

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
