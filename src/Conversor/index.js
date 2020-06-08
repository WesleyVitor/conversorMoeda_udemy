import React,{Component,use} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,Keyboard } from 'react-native';
import api from '../services/api';

//convert?q=USD_PHP&compact=ultra&apiKey=196b42696320e1cd3a63

class Conversor extends Component{

    constructor(props){
        super(props);
        this.state = {
            //Recebe os valores passado pelas props
            moedaA:props.moedaA, 
            moedaB:props.moedaB,

            //Recebe  valor passado pelo input
            moedaA_valor:0,

            //Recebe o valor de conversao
            valor_convertido:0,
        }

        this.handleConverter = this.handleConverter.bind(this);


    }

    async handleConverter(){
        let {moedaA_valor}  =this.state;
        let {moedaA,moedaB} = this.props;
        //Concatena a moedaA_moedaB(ex:USB_BRL) com a url passada para o axios
        let de_para = moedaA + "_" + moedaB;
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=196b42696320e1cd3a63`)

        //pega o objeto json que esta em data e tem nome da concatenacao de moedas
        const cotacao = response.data[de_para];


        console.log(response.data);


        const conversao = moedaA_valor* cotacao
        if(moedaA_valor == 0){
            this.state({
                valor_convertido:0
            });

        }else{
            this.setState({
                valor_convertido:conversao
            });
        }

        Keyboard.dismiss();
        
        
        
        

    }


    render(){
        let {valor_convertido} = this.state;
        let {moedaA,moedaB} = this.props
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

                <TextInput 
                placeholder="Valor a ser Convertido"
                style={styles.areaInput}
                //Adiciona o valor pego no onChangeText para a state moedaA_valor
                onChangeText={(moedaA_valor)=>{this.setState({moedaA_valor})}} 
                keyboardType="numeric"
                />

                <TouchableOpacity style={styles.botaoArea} onPress={this.handleConverter}>
                    <Text style={styles.botaoTexto}>Converter</Text>

                </TouchableOpacity>

        <Text style={styles.valorConvertido}>
            {moedaB}:
            {valor_convertido.toFixed(2)}</Text>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    titulo:{
        fontSize:30,
        fontWeight:"bold",
        
    },
    areaInput:{
        width:280,
        height:45,
        backgroundColor:"#FFF",
        textAlign:"center",
        fontSize:18,
        marginTop:15
    },
    botaoArea:{
        width:150,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red",
        borderRadius:5,
        marginTop:15
    },
    botaoTexto:{
        fontSize:18,
        fontWeight:'bold',
        color:"#FFF"
    },
    valorConvertido:{
        fontSize:30,
        fontWeight:'bold',
        color:"#000",
        marginTop:15
    }

})
export default Conversor;