import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal} from 'react-native';
import Entrar from '../src/Entrar'

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

        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
          <View style={styles.modal}>
             <Entrar fechar={ () => this.sair(false)}/>
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
  modal: {
    margin: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default App 