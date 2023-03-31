import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

const Exercises = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.execTitle}>Exercise No. 1</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("./Images/eye1.png")}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.imgText}>
          Palm your eyes. Doing this will reduce stimuli to your eyes and brain.
           Closing your eyes and applying light pressure to them will spread the tear 
           film in your eyes evenly and relax them.[6]
            {"\n"}
            {"\n"}            {"\n"}
            Close your eyes and cover them lightly with your cupped palms. Avoid applying pressure to your eyeballs. 
            Your nose should not be covered to ensure you have enough ventilation during the palming.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercisestwo")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exercises;

const styles = StyleSheet.create({

  scroll:{
    height: '70%'
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
