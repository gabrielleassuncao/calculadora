import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const App = () => {

  const [valor1, setValor1] = useState('0');
  const [valor2, setValor2] = useState('0');
  const [resultado, setResultado] = useState(null);
  const [memoria, setMemoria] = useState(null);

  const calcular = (operacao) => {
   const num1 = parseFloat(valor1);
   const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Operação Inválida');
      return;
    }

    switch (operacao) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Não é possível dividir por 0!';
        break;
      case '%':
      res = num1 * (num2 / 100);
      break;
      case 'log':
      res = parseFloat((Math.log(num1) / Math.log(num2)).toFixed(4));
      break;
     case 'x²':
      res = num1 ** num2;
      break;
      case 'raiz':
      res = Math.sqrt(num1);
      break;
      default:
        res = 'Operação Inválida';
    }

    setResultado(res);
  };
  
  const gravarNaMemoria = () => {
  if (resultado !== null && !isNaN(resultado)) {
    setMemoria(resultado);   
    setResultado(resultado); 
  }
};

const recuperarMemoria = () => {
  if (memoria !== null) {
    setValor1(memoria.toString()); 
    setResultado(memoria);     
    setValor2('');    
  }
};

const limpar = () => {
  setValor1('0');     
  setValor2('0');      
  setResultado(null); 
  setMemoria(null);   
};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor1}
        onChangeText={setValor1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor2}
        onChangeText={setValor2}
      />
  
    <View style={styles.botoes}>
     <Button title="MR"color="#FF0084" onPress={recuperarMemoria} />
      <Button title="MS"color="#FF0084" onPress={gravarNaMemoria} />
      <Button title="C" color="#FF0084" onPress={limpar} />
      <Button title="%" color="#FF0084" onPress={() => calcular('%')} />
</View>

      <View style={styles.botoes}>
      <Button title="log" color="#FF0084" onPress={() => calcular('log')} />
      <Button title="x²" color="#FF0084" onPress={() => calcular('x²')} />
      <Button title="√" color="#FF0084" onPress={() => calcular('raiz')} />

</View>
    <View style={styles.botoes}>
      <Button title="+" color="#FF0084" onPress={() => calcular('+')} />
      <Button title="-" color="#FF0084" onPress={() => calcular('-')} />
      <Button title="×" color="#FF0084" onPress={() => calcular('*')} />
      <Button title="÷" color="#FF0084" onPress={() => calcular('/')} /> 
      
</View>

        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      
       <Text style={styles.nomes}> Gabrielle do Carmo Assunção {'\n'}</Text>

    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFC5D3',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'serif',
    color: '#3C096C',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF0084',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 18,
    fontFamily: 'serif',
  },
  botoes: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: '#FF0084',
  paddingVertical: 10,  
  paddingHorizontal: 25, 
  borderRadius: 10,
  alignItems: 'center',
  marginHorizontal: 5,
  marginBottom: 5,
},
  resultado: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 35,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#3C096C',
  },
  nomes: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 90,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#3C096C',
  },
});

export default App;


