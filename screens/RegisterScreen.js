
import React from 'react';
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation })=>{
    return (
      <View style={styles.container}>
          
          <View style = {{marginTop: 20}}>
            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}    
              placeholder = 'ВАШЕ ИМЯ' 
              placeholderTextColor = 'gray'
              autoCapitalize = 'words'
              />
            </View>

            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}  
              placeholder = 'ДАТА РОЖДЕНИЯ' 
              placeholderTextColor = 'gray'/>
            </View>

            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}   
              placeholder = 'НОМЕР ТЕЛЕФОНА' 
              placeholderTextColor = 'gray'
              keyboardType = 'phone-pad'
              />
            </View>

            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}   
              placeholder = 'ЭЛЕКТРОННАЯ ПОЧТА' 
              placeholderTextColor = 'gray'
              keyboardType = 'email-address'
              autoCompleteType = 'email'
              />
            </View>
          </View>

          <View style= {{marginTop: 40}}>
            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}   
              placeholder = 'ПАРОЛЬ' 
              placeholderTextColor = 'gray'
              autoCompleteType = 'password'
              secureTextEntry={true}
              />
            </View>

            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}   
              placeholder = 'ПОВТОРИТЕ ПАРОЛЬ' 
              placeholderTextColor = 'gray'
              autoCompleteType = 'password'
              secureTextEntry={true}
              />
            </View>
          </View>
          
          


          <View style = {{width:350}}>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
          </View>
          

          <TouchableOpacity 
                onPress = {()=>navigation.navigate('YesNoPet')}
                style = {styles.button}>
                <Text style = {styles.text}>
                    ДАЛЕЕ
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
    justifyContent: 'flex-start',
    marginTop: 30
  },
  input:{
    //flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'black',
    height: 50,
    width: 350,
    marginHorizontal:20,
    alignItems: 'flex-start',
    justifyContent:'center' ,
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
  },
  textin:{
    marginHorizontal: 20,
    width: 330
  },
  avatar:{
    height:80,
    width: 80,
    resizeMode: 'stretch',
  },
  imgview:{
    height:90,
    width: 90,
    borderColor: 'black',
    borderWidth:2,
    borderRadius: 10,
  }
});
export default RegisterScreen;