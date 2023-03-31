import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Exercises from "../Screens/Exercises";
import Exercisesthree from "../Screens/Exercisesthree";
import Exercisesfour from "../Screens/Exercisesfour";
import Exercisestwo from "../Screens/Exercisestwo";
import Eyebreak from "../Screens/Eyebreak";
import EndScreen from '../Screens/EndScreen';


// import * as Notifications from 'expo-notifications';

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Home" component = {Home} options={{headerShown: false}} />
      <Stack.Screen name = "Exercises" component = {Exercises} options={{headerShown: false}} />
      <Stack.Screen name = "Exercisestwo" component = {Exercisestwo} options={{headerShown: false}} />
      <Stack.Screen name = "Exercisesthree" component = {Exercisesthree} options={{headerShown: false}} />
      <Stack.Screen name = "Exercisesfour" component = {Exercisesfour} options={{headerShown: false}} />
      <Stack.Screen name = "Eyebreak" component = {Eyebreak} options={{headerShown: false}} />
      <Stack.Screen name = "EndScreen" component = {EndScreen} options={{headerShown: false}} />
      
    </Stack.Navigator>
  )
}

export default MyStack;