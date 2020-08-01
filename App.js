import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      modalVisible: false,
    } 
    this.entrar = this.entrar.bind(this),
    this.sair = this.sair.bind(this)
  }

  entrar(){
    this.setState({modalVisible: true})
  }

  sair(visible) {
    this.setState({modalVisible: visible})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Aula Componente Modal em ReactNative!</Text>
        <Text  style={styles.txtSub}>Nesta aula será abordado o componente Modal e suas propiedades.</Text>
        <Button title="Entrar"  onPress={this.entrar}/>

        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTxt}>Seja bem-vindo!</Text>
            <Text style={styles.modalSubTxt}>O componente Modal react-native, pode ser utilizado como POP-UP, login,
            carregar uma imagem, uma mapa, tela de confirmação e entre outras...
            O Modal tem uma visibilidade false, ou seja, para o usuáro ele só passa a valer true, 
            quando o usuario clica no botão que é possiivel controlar pelo state. 
            </Text>
            <Button title="Sair" onPress={ () => this.sair(false) }/>
        </View>
       </Modal>
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
  },
  modalContainer: {
    width: 415,
    height: 350,
    backgroundColor: '#292929',

    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  modalTxt: {
    color: "#fff",
    fontSize: 28,
    justifyContent: "center",
    textAlign: "center"

  },
  modalSubTxt: {
    color: "#fff",
    paddingLeft: 5,
    textAlign: "center",
    
  }
})

export default App 