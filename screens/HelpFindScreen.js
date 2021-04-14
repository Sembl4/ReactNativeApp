import React from 'react';
import {  StyleSheet,   Text,TouchableOpacity , View } from 'react-native';

const HelpFindScreen = ({ navigation }) =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                {'Мы Вам поможем найти котика:)'}
            </Text>
            <TouchableOpacity 
                //onPress = {()=>navigation.navigate('Login2')}
                style = {styles.button}>
                <Text style = {styles.text}>
                    НАЙТИ
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
  });
export default HelpFindScreen;