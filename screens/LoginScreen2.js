import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const LoginScreen2 = ({ navigation }) =>{
    return (
        <View style={styles.container}>
            <View style = {styles.input}>
                <TextInput  placeholder = 'Пароль' 
                placeholderTextColor = 'gray' 
                autoCompleteType = 'password' 
                secureTextEntry={true} 
                autoCompleteType= 'password'
                />
            </View>
            <TouchableOpacity 
                //onPress = {()=>navigation.navigate('Login2')}
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
    }
})

export default LoginScreen2;