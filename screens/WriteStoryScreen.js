import React from 'react';
import {Text,View,TouchableOpacity, TextInput}  from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          title: '',
          author: '',
          storyText: '',
      }
  }

  submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          storyText: this.state.storyText,
          //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
      })
      this.setState({
          title: '',
          author: '',
          storyText: ''
      })
      ToastAndroid.show('Your story has been submitted'
      , ToastAndroid.SHORT)
  }


    render(){
      return(
          <KeyboardAvoidingView style={styles.container}
           behavior="padding" enabled>
             <Header 
                  backgroundColor = {'lightblue'}
                   centerComponent = {{
                      text : 'Story Hub',
                      style : { color: 'black', fontSize: 30}
                  }}
              />
              <TextInput 
                  placeholder="Story Title"
                  onChangeText= {(text)=>{
                      this.setState({
                          title: text
                      })
                  }}
                  placeholderTextColor='black'
                  value={this.state.title}
                  style={styles.title}/>
              <TextInput
                  placeholder="Author"
                  onChangeText= {(text)=>{
                      this.setState({
                          author: text
                      })
                  }}
                  placeholderTextColor='black'
                  value={this.state.author}
                  style={styles.author} />
              <TextInput 
                  placeholder="Write your story"
                  onChangeText= {(text)=>{
                      this.setState({
                          storyText: text
                      })
                  }}
                  placeholderTextColor='black'
                  value={this.state.storyText}
                  style={styles.storyText}
                  multiline={true}/>
              
              <TouchableOpacity
                  style={styles.submitButton}
                  onPress={this.submitStory}
                  >
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </KeyboardAvoidingView>
      );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    storyBox:{
        backgroundColor:'#234EAF',
        width: 50,
        borderWidth: 1.3,
        borderRightWidth: 1.3,
        fontSize: 22,
        backgroundColor: 'white'
    },
    scanButton:{
        backgroundColor: '#66BB6A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    },
    submitButton:{
      backgroundColor:'#ee3cc4' ,
      width: 100,
      height:50
    },
    submitButtonText:{
      padding:10,
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    }
});