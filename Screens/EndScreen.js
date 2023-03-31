import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

const EndScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Text style={styles.execTitle}>Congrats 🎉🎉</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("./Images/final.gif")}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.imgText}>You successfully completed today's exercise session. !!!</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.imgText2}>Check this out 👉</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("Eyebreak")}
        >
          <Text style={styles.buttonText}>EyeStrain Reducer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EndScreen;

const styles = StyleSheet.create({

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
    // paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: "justify",
    color: '#3a86ff'
  },


  imgText2: {
    // paddingVertical: 20,
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: "justify",
    color: '#111'
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
    marginTop: 0,
    paddingVertical: 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  button: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#ff006e",
    borderRadius: 15,
    
  },

  button2: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#3a86ff",
    borderRadius: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    alignItems: "center",
  },
});
