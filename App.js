import React from 'react';
import {View, Text, StyleSheet, Button, Alert, Image } from 'react-native'
import styles from './styles.js'

const msg =() => Alert.alert('Caixa de Alerta' ,'Parabéns esse botão está funcionando :)')

export default function App(){
  return(
    <View style={styles.container}>
      <Image 
      source={require('./assets/image_36630729838.jpg')}
      style={styles.img}>
      </Image>

      <View style={styles.quadrado}>
       <Text style={styles.text}> Hello World! </Text>
       <Text style={styles.text2}> by Madruga </Text>
      </View>

      <Button style={styles.button} 
       title= 'Aperta Aqui'
       color= '#f19f22'
       onPress={msg}>
       </Button>
    </View>
  )
}

