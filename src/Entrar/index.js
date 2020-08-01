import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Entrar extends Component {
    render() {
        return (
            <View style={styles.modalContainer}>
            <Text style={styles.modalTxt}>Seja bem-vindo!</Text>
            <Text style={styles.modalSubTxt}>O componente Modal react-native, pode ser utilizado como POP-UP, login,
            carregar uma imagem, uma mapa, tela de confirmação e entre outras...
            O Modal tem uma visibilidade false, ou seja, para o usuáro ele só passa a valer true, 
            quando o usuario clica no botão que é possiivel controlar pelo state. 
            </Text>
            <Button title="Sair" onPress={(this.props.fechar)}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
modalContainer: {
    width: 400,
    height: 350,
    backgroundColor: '#292929',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15
},
modalTxt: {
    color: "#fff",
    fontSize: 28,
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 15
  
},
modalSubTxt: {
    color: "#fff",
    paddingLeft: 5,
    textAlign: "center",
      
    }
  })
  
  

export default Entrar 