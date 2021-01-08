import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image, } from "react-native";
import styles from "./styles.js";

export default function App() {
  const msg = () => Alert.alert("Caixa de Alerta", "Parabéns esse botão está funcionando :)");
  const msg2 = () => Alert.alert(`Olá ${nome}`, "O Madruga está criando um app!");

  const [nome, setNome] = useState({nome: 'Luciano'});

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/image_36630729838.jpg")}
        style={styles.img}>
      </Image>

      <View style={styles.quadrado}>
        <Text style={styles.text}> Hello World! </Text>
        <Text style={styles.text2}> by Madruga </Text>
      </View>

      <Button title="Aperta Aqui" color="#f19f22" onPress={msg}></Button>

    <View styled={styles.container2}>
       <TextInput
        style={styles.input}
        placeholder={"Digite seu nome"}
        onChangeText={(value) => setNome(value)}>
       </TextInput>
       <Button title="Ok" color="#f19f22" onPress={msg2}></Button>
    </View>
    </View>
  );
}
