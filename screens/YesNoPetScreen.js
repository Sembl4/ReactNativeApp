import React from 'react';
import {  StyleSheet,   Text,TouchableOpacity , View } from 'react-native';

const YesNoPetScreen = ({ navigation }) =>{
    return(
        <View style = {styles.container}>
           <Text style = {styles.text}>У вас есть котик?</Text>
           <View style = {styles.btns}>
                <TouchableOpacity 
                    onPress = {()=>navigation.navigate('AddPet')}
                    style = {styles.button}>
                    <Text style = {styles.text}>
                        ДА
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {()=>navigation.navigate('HelpFind')}
                    style = {styles.button}>
                    <Text style = {styles.text}>
                        НЕТ
                    </Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize : 20,
        fontStyle: 'normal',
        textAlign: 'center'
    },
    button:{
        backgroundColor: '#D3D3D3',
        borderWidth: 2,
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        marginVertical: 20,
        marginHorizontal: 40,
    },
    btns:{
        flexDirection:'row',
        
    }

  });

export default YesNoPetScreen;