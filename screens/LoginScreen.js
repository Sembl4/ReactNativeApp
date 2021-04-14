
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) =>{
  return (
    <View style={styles.container}>
        
        <View style = {styles.input}>
          <TextInput  
          placeholder = 'Номер телефона' 
          placeholderTextColor = 'gray'
          keyboardType = 'phone-pad'
          
          />
        </View>
        
        <View style = {styles.input}>
          <TextInput  
          placeholder = 'Электронная почта' 
          placeholderTextColor = 'gray'
          keyboardType = 'email-address'
          autoCompleteType = 'email'
          />
        </View>
        
        <TouchableOpacity 
          onPress = {()=>navigation.navigate('Login2')}
          style = {styles.button}>
            <Text style = {styles.text}>
              ДАЛЕЕ
            </Text>
        </TouchableOpacity>

          <View style= {styles.low}>
              <TouchableOpacity 
              //onPress = {()=>navigation.navigate('')}
                style = {styles.lowBtn}>
                <Text style = {styles.text}>
                  G
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
              //onPress = {()=>navigation.navigate('')}
                style = {styles.lowBtn}>
                <Text style = {styles.text}>
                  Apple ID
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
              //onPress = {()=>navigation.navigate('')}
                style = {styles.lowBtn}>
                <Text style = {styles.text}>
                  VK
                </Text>
              </TouchableOpacity>


          </View>
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
  input:{
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: 'black',
    height: 60,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#D3D3D3',
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    marginVertical: 20,
  },
  text:{
    fontSize : 20,
    fontStyle: 'normal',
    textAlign: 'center'
  },
  low:{
    marginTop:100,
    flexDirection:'row'
  },
  lowBtn:{
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:20,
  }
});
export default LoginScreen;