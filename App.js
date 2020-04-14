
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      altura: 0,
      peso: 0,
      resultado: 0,
      resultadoText:""
    }
    this.calcular = this.calcular.bind(this);

   
    
  }


  calcular(){
    let imc = this.state.peso / (this.state.altura * this.state.altura);

    let s = this.state;
    s.resultado = imc;
    


    if(s.resultado < 16)
        s.resultadoText = "Magreza grave"
    else if(s.resultado < 17)
        s.resultadoText = "Magreza moderada"
    else if(s.resultado < 18.5)
        s.resultadoText = "Magreza leve"
    else if(s.resultado < 25)
        s.resultadoText = "Saudavel"
    else if(s.resultado < 30)
        s.resultadoText = "Sobrepeso"
    else if(s.resultado < 35)
        s.resultadoText = "Obesidade Grau I"
    else if(s.resultado < 40)
        s.resultadoText = "Obesidade Grau II (severa)"
    else 
        s.resultadoText = "Obesidade Grau III (morbida)"
      





    this.setState(s)
  }





  render(){
    return(
      <View style={styles.container}>
        <View style={styles.entrada}>
        <TextInput placeholder="peso" keyboardType="numeric"style={styles.input} onChangeText={(peso) => {this.setState({peso})}} />
        <TextInput placeholder="altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => {this.setState({altura})}}/>
        </View>
       
        <TouchableOpacity onPress={this.calcular} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
    <TextInput style={styles.resultado}>{this.state.resultado.toFixed(2)}</TextInput>
    <TextInput style={[styles.resultado, {fontSize: 25}]}>{this.state.resultadoText}</TextInput>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5FCFF"
  },

  entrada:{
    flexDirection: 'row',
  },

  input:{
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "lightgray"
  },
  button:{
    backgroundColor: "#89ffa5",
  },

  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight: 'bold'
  },
  resultado:{
    alignSelf: 'center',
    color: "lightgray",
    fontSize: 65,
    padding:15
  }

  
});


