import React from 'react';
import { Text, View, Header, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
   render() {
       return(
           <View style = {{flex:1, justifyContent:"center", alignItems:"center"}}>
           <Text style = {styles.header}> Read this Story </Text>
           <Text style = {styles.text}>
               It was my best friend Lily's farewell. She held a party in the ‘spooky hooky’ restaurant, 
               a place that wasn’t visited by anyone in the locality. They believed that anyone who would 
               visit that restaurant would see a man in a black coat the very next day. But even after 
               hearing all this, I went there as I couldn’t miss lily’s farewell. I went there all 
               dressed up. When I entered the place, I heard someone call my name, but there was 
               no one around to my surprise. I could hear my heartbeat fasten, but I ignored it 
               and walked fast. The party got over at about 1 in the night. I returned home humming 
               the music they played at the party when I heard a weird sound from my back. My heart s
               tarted beating even faster. I walked fast back home and once I reached home I was relieved. 
               I went to bed and turned off the light. That is when I saw someone standing in my window I 
               could see him in the mirror. It was a horrible face. Fearing him, I shut my eyes tightly.   </Text>  


               </View>
          
       )
   } 
}

const styles = StyleSheet.create({
    text: {
        flex:1,
        fontWeight: 'bold',
        fontSize:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        backgroundColor:'#1adc43',
        fontSize: 30,
    }

});