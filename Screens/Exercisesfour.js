import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

const Exercisesfour = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.execTitle}>Exercise No. 4</Text>

      <ScrollView style = {styles.scroll}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("./Images/eye4.jpg")}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.imgText}>
            
            {"\n"}
            {'\n'}
            1. Stand or sit upright. Look straight ahead. Without moving your head, look to the left. Focus on what you see. 
            Then look right. Move your eyes side to side five times. Repeat this three times.{"\n"}{"\n"}
            2. Without moving your head, look down. Focus on what you see. Then, look up. Focus on what you see. Repeat this three times.. {"\n"}{"\n"}
            3. Without moving your head, look straight ahead. Then, look down and to the left. Focus on what you see. Then, move your eyes diagonally and look up and to the right. Focus on what you see. Repeat this exercise five times. Then, look straight ahead and do the same exercise
            looking down and to the right and then looking up and to the left. Repeat this cycle three times {"\n"}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("EndScreen")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercisesthree")}
        >
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exercisesfour;

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
