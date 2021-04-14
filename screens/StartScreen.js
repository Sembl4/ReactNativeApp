
import React from 'react';
import {  StyleSheet,   Text,TouchableOpacity , View } from 'react-native';


const StartScreen = ({ navigation }) =>{
    return (
      <View style={styles.container}>
      
          <TouchableOpacity 
          onPress = {()=>navigation.navigate('Login')}
          style = {styles.button}
          >
            <Text style = {styles.text}>
              ВОЙТИ
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          onPress = {()=>navigation.navigate('Register')}
          style = {styles.button}
          >
            <Text style = {styles.text}>
              СОЗДАТЬ
            </Text>
          </TouchableOpacity>

      
      </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button:{
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    height: 60,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 50,
  },
  text:{
    fontStyle: 'italic',
    
    fontSize: 30,
    borderTopColor : 'black',
    borderBottomWidth: 3,
    borderTopWidth: 3,

  }
});

export default StartScreen;