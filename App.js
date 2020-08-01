import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Aula Componente Modal em ReactNative!</Text>
        <Text  style={styles.txtSub}>Nesta aula será abordado o componente Modal e suas propiedades.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
   
  },
  txtSub: {
    textAlign: "center"
  }
})

export default App 