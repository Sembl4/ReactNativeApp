import 'react-native-gesture-handler';
import React from 'react';
import {  StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import LoginScreen2 from './screens/LoginScreen2';
import RegisterScreen from './screens/RegisterScreen';
import StartScreen from './screens/StartScreen';
import YesNoPetScreen from './screens/YesNoPetScreen'
import AddPetScreen from './screens/AddPetScreen';
import HelpFindScreen from './screens/HelpFindScreen';

const Stack = createStackNavigator();

const App =()=> {
  return (
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Login2"
              component={LoginScreen2}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="YesNoPet"
              component={YesNoPetScreen}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="AddPet"
              component={AddPetScreen}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="HelpFind"
              component={HelpFindScreen}
              options = {{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      
    );
}
// const StartScreen = ({ navigation }) =>{
//   return (
//     <View style={styles.container}>
//     <Text>Начальное окно</Text>
//         <Button title = 'Войти' 
//         onPress = {()=>navigation.navigate('Login')}
//         />
//         <Button title = 'Создать' 
//         onPress = {()=>navigation.navigate('Register')}
//         />
    
//     </View>
// );
// }

// const LoginScreen = ({ navigation }) =>{
//   return (
//     <View style={styles.container}>
//         <Text>Окно входа</Text>
    
//     </View>
// );
// }

// const RegisterScreen = ({ navigation })=>{
//   return (
//     <View style={styles.container}>
//         <Text>Окно регистрации</Text>
//     </View>
//     );
//   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
