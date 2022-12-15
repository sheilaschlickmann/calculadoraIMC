import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Keyboard } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {peso: '', altura: '', info: '-', resultado: 0.0}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
  
  calculaIMC(){

    if (this.state.peso !== undefined && this.state.altura !== undefined) {

      this.state.altura = this.state.altura.replace(',', '.');
      if (this.state.peso > 0 && this.state.altura > 0) {
        if (!this.state.altura.includes('.')) {
          this.state.altura = this.state.altura / 100;
        }

    let imc = this.state.peso / (this.state.altura * 2)
    let s = this.state  
    s.resultado = imc
  
    if(s.resultado < 16){
      s.info ='Magreza '
    }
    else if (s.resultado < 24.9){
     s.info ='Entre 18,5 e 24,9, seu quadro é: Normal'
    }
    else if (s.resultado >= 15 && s.resultado < 17){
     s.info ='Magreza Moderada'
    }
    else if (s.resultado >= 17 && s.resultado < 18.5) {
     s.info ='Magreza Leve'
    }
    else if (s.resultado >= 18.5 && s.resultado < 25) {
     s.info ='Saudável'
    }
    else if (s.resultado >= 25 && s.resultado < 30) {
      s.info ='Sobrepeso'
     }
     else if (s.resultado >= 30 && s.resultado < 35) {
      s.info ='Obesidade Grau I'
     }
     else if (s.resultado >= 35 && s.resultado < 40) {
      s.info ='Obesidade Grau II (severa)'
     }
     else if (s.resultado >= 40) {
      s.info ='Obesidade Grau III (mórbida)'
     }
    //this.setState()
    }
  }
  }
  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: 0.0,
      info: '-'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Altura (m)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder='Exemplo: 1,75'
          keyboardType={'numeric'}
        />
        <Text style={styles.text}>Peso (kg)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='Exemplo: 68,8'
          keyboardType={'numeric'}
        />
        <Separator />
        <Button 
          onPress={this.calculaIMC} 
          title='Calcula'
          color='green'
          accessibilityLabel='Clique aqui para calcular seu IMC'
        />
        <Separator />
        <Button 
          onPress={this.clear}
          title='Limpa'
          color='red'
          accessibilityLabel='Botão para limpar os valores'
        />
        <Separator />
        <Text style={styles.input}>
         Seu IMC é: {this.state.resultado.toFixed(2)} {this.state.info}
        </Text>
      </View>
    );
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 18,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 4,
    margin: 5,
    borderRadius: 10,
    width: '80%',
  }
});
