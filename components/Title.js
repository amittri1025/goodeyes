import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
 return (
   <View  style = { styles.header}>
     <Text style = {styles.title}>✨  Good Eyes ✨ </Text>
   </View> 
 )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  header: {
    paddingVertical: 16,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});