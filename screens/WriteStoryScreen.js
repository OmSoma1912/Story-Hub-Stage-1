import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import AppHeader from '../AppHeader';

export default class WriteStoryScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <AppHeader/>
        <TextInput
          style = {styles.inputBoxA}
          placeHolder = "Story Title"
        />
        <TextInput
          style = {styles.inputBoxA}
          placeHolder = "Author"
        />
        <TextInput
          style = {styles.inputBoxB}
          placeHolder = "Write your story"
        />
        <TouchableOpacity style = {styles.submitButton}>
          <Text style = {styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  inputBoxA:{
    width: 200,
    height: 40,
    fontSize: 20
  },
  inputBoxB:{
    width: 200,
    height: 400,
  },
  scanButton:{
    backgroundColor: '#f09ff9',
    width: 50,
    height : 10
  },
  buttonText : {
    fontSize : 20,
  }
});