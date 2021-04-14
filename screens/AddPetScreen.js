import React from 'react';
import {  StyleSheet,   Text, TouchableOpacity , View, TextInput,Image,ScrollView } from 'react-native';


const AddPetScreen = ({ navigation }) =>{
    return (
      <View style={styles.container}>
          
          <View style = {{marginTop: 20}}>
            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}    
              placeholder = 'ИМЯ КОТИКА' 
              placeholderTextColor = 'gray'
              autoCapitalize = 'words'
              />
            </View>

            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}  
              placeholder = 'ДАТА РОЖДЕНИЯ' 
              placeholderTextColor = 'gray'
              keyboardType = 'number-pad'
              />
            </View>

            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}   
              placeholder = 'ПОРОДА' 
              placeholderTextColor = 'gray'
              keyboardType = 'phone-pad'
              />
            </View>

            <View style = {styles.input}>
              <TextInput
              style = {styles.textin}   
              placeholder = 'ПОЛ' 
              placeholderTextColor = 'gray'
              autoCompleteType = 'email'
              />
            </View>
            <View style = {styles.longInput}>
              <TextInput
              style = {styles.textin}   
              placeholder = 'ОПИСАНИЕ' 
              placeholderTextColor = 'gray'
              autoCompleteType = 'email'
              />
            </View>
          </View>
          
          <ScrollView style = {styles.scroll} horizontal = {true}>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
            <View style = {styles.imgview}>
                <Image style = {styles.avatar} source = {require('../images/cat.png')}/>
            </View>
          </ScrollView>

          <TouchableOpacity 
                //onPress = {()=>navigation.navigate('YesNoPet')}
                style = {styles.button}>
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
    flexDirection: 'row',
    marginHorizontal:10
  },
  longInput:{
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'black',
    height: 150,
    width: 350,
    marginHorizontal:20,
    alignItems: 'flex-start',
    justifyContent:'flex-start' ,
  },
  scroll:{
    
    width: 350,
    height: 100,
    //flexDirection: 'row',
    margin:20,
  }
});

export default AddPetScreen; 