import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";


import * as Notifications from 'expo-notifications';

// First, set the handler that will cause the notification
// to show the alert

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Second, call the method
async function schedulePushNotification() {
Notifications.scheduleNotificationAsync({
  content: {
    title: 'Look at that notification',
    body: "I'm so proud of myself!",
  },
  trigger: null,
})};

const Eyebreak = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.execTitle}>Break Schedule</Text>

      <View style={styles.settingGroup}>
        <Text>Ring after every 15 Minutes of Work</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="15 Minutes"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.settingGroup}>
        <Text>Number of Exercises to perform in one Break</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="3"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
          // onPress={async () => {
          //   await schedulePushNotification();
          // }}
        >
          <Text style={styles.buttonText}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Eyebreak;

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

  input: {
    marginVertical: 20,
    borderWidth: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#ff006e",
    fontSize: 20
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
