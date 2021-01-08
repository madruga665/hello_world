import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.quadrado}>
      <Text style={styles.text}> Hello World! </Text>
      <Text style={styles.text2}> by Madruga </Text>
      </View>
    </View>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quadrado:{
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
  },
  text:{
    color: 'white',
    fontWeight: 'bold',  
  },
  text2:{
    color: 'white',
    fontStyle: 'italic',
  }
})