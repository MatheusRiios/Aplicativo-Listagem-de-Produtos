import React, {Component} from 'react'
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

import api from '../service/api'

export default class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            produtos: [],            
        }
    }

    static navigationOptions = {
        title: 'Produtos'
    }

    componentDidMount(){
        this.carregarProdutos()
    }

    carregarProdutos = async () => {
        const response = await api.get('http://faus.com.br/recursos/c/dmairr/api/itens.html');

        const produtos = response.data;

        this.setState({
            produtos
        })

        return produtos
    }

    renderizarProdutos = ({item}) => {      
        const {navigate} = this.props.navigation  
        return(
            <View style={styles.containerContentProdutos}>
                <Text style={styles.tituloProduto}>{item.titulo.toUpperCase()}</Text>
                <View style={styles.containerValorImagemProduto}>
                    <Image      
                        style={styles.imagemProduto}                   
                        source={{uri: item.foto}}
                    />
                </View>
                <Text style={styles.valorProduto}>R$: {item.valor}</Text>
                <TouchableOpacity style={styles.productButton} onPress={() => navigate('Produto', {produto: item})}>
                    <Text style={styles.buttonAcessar}>Ver Anuncio'</Text>
                </TouchableOpacity>
            </View>
        )
    }

    filtarProduto = async (text) => {
        const {produtos}  = this.state
        const produtosAux = await this.carregarProdutos();
        

        if(text.length > 0){
            const newData = produtos.filter(produto => {
                const produtoFiltrado = `${produto.titulo} ${produto.valor}`
                const dadosInputText = text
    
                return produtoFiltrado.indexOf(dadosInputText) >= 0;
            })            
            return this.setState({
                produtos: newData
            })
        }        

        this.setState({
            produtos: produtosAux
        })
        
        
    }

    render(){
        const {produtos} = this.state
        
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInputBusca}
                    placeholder={"Digite o que deseja buscar"}
                    onChangeText={text => this.filtarProduto(text)}
                />
                <View style={styles.containerFlatListProdutos}>
                    <FlatList                     
                        data={produtos}
                        renderItem={this.renderizarProdutos}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 8,        
    },
    textInputBusca: {
        padding: 10,
        marginBottom: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#CCC'
    },
    containerFlatListProdutos: {
        width: '100%',
        flexDirection: 'row' 
    },    
    containerContentProdutos: {        
        borderWidth: 2,
        borderColor: '#CCC',
        borderRadius: 5,
        margin: 5,                
    },
    tituloProduto: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2F4F4F'
    },
    containerValorImagemProduto: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25
    },
    valorProduto: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2F4F4F'
    },
    imagemProduto: {
        width: 150,
        height: 150
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: '#DA552F',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonAcessar: {
        color: '#FFF'
    }
});