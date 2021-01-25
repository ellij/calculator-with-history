import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Flatlist} from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);
  const hist1 = text1 + ' + ' + text2 + ' = ' + result;
  const hist2 = text1 + ' - ' + text2 + ' = ' + result;
  
  const add = () =>{
    setResult(parseInt(text1) + parseInt(text2));
    setData([...data, {key:hist1}]);
  }

  const subtract = () =>{
    setResult(parseInt(text1) - parseInt(text2));
    setData([...data, {key:hist2}]);
  }  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <TextInput style={styles.textInput}
        onChangeText={text1 => setText1(text1)} 
        value={text1}
        keyboardType={'numeric'}
      />
      <TextInput style={styles.textInput}
        onChangeText={text2 => setText2(text2)} 
        value={text2}
        keyboardType={'numeric'}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <Button color="#000" onPress={add} title="+" />
        <Button color="#000" onPress={subtract} title="-" />
      </View> 
      <Text style={styles.text}>History</Text> 
      <Flatlist
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center', 
    padding: 50, 
  },
  text: {
    fontSize: 18,
  },
  textInput: {
    height: 40, 
    width: "50%", 
    borderColor: '#808080', 
    borderWidth: 2, 
    margin: 5,
    fontSize: 18,    
  },  
});
