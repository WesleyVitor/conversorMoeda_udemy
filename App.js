import React,{Component,useState} from 'react';
import { StyleSheet, Text, View,Picker } from 'react-native';
import Conversor from './src/Conversor';

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=196b42696320e1cd3a63
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      valor:0,
      valor1:1,
      valorLista:[
        {key:1,nome:'USD'},
        {key:2,nome:'BRL'},
        {key:3,nome:'EUR'},
        {key:4,nome:'GBP'},
        {key:5,nome:'AUD'},
        
      ]
    }
  }
 


  render(){


    let pickerItem = this.state.valorLista.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.nome} />
    })
    return(
      <>
        <View style={{flex:1,backgroundColor:'green'}}></View>

        <View style={styles.container}>
        <Conversor 
        moedaA={this.state.valorLista[this.state.valor].nome} 
        moedaB={this.state.valorLista[this.state.valor1].nome} />
       </View>

       <View style={styles.picker}>
          <Picker
          style={styles.picker1}
          selectedValue={this.state.valor}
          onValueChange={(item)=>this.setState({valor:item})}>
          {pickerItem}
          </Picker>
          <Picker
          style={styles.picker1}
          selectedValue={this.state.valor1}
          onValueChange={(item)=>this.setState({valor1:item})}>
          {pickerItem}
          </Picker>
        </View>

      </>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:7,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#FFF",
  },
  picker:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"green",
    paddingBottom:3,
    
    
  },
  picker1:{
    flex:1,
    margin:5,
    backgroundColor:'#90EE90',
  }
})

export default App;
