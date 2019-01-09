import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Produto = ({navigation}) => {
    return(
        <View style={styles.container}>
            {/* <Text>{navigation.state.params.produto.titulo}</Text> */}
            <View style={styles.containerTitulo}>
                <Text style={styles.tituloProduto}>{navigation.state.params.produto.titulo}</Text>
            </View>

            <View style={styles.containerFotoProduto}>
                <Image      
                    style={styles.imagemProduto}                   
                    source={{uri: navigation.state.params.produto.foto}}
                />
            </View>

            <View style={styles.containerTitulo}>
                <View style={styles.containerDescricoesProduto}>
                    <Text style={styles.TextDescricoes}>Local do Anúncio: </Text>
                    <Text style={styles.TextDescricoes2}>{navigation.state.params.produto.local_anuncio}</Text>
                </View>
                <View style={styles.containerDescricoesProduto}>
                    <Text style={styles.TextDescricoes}>Data do anuncio: </Text>
                    <Text style={styles.TextDescricoes2}>{navigation.state.params.produto.data_publicacao}</Text>
                </View>
                <View style={styles.containerDescricoesProduto}>
                    <Text style={styles.TextDescricoes}>Valor: </Text>
                    <Text style={styles.TextDescricoes2}>{navigation.state.params.produto.valor}</Text>
                </View>
            </View>
        </View>
    )
}

Produto.navigationOptions = {
    title: 'Produtos'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        borderWidth: 2,
        borderColor: '#fafafa',
        padding: 8,
    },
    containerTitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderWidth: 3,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
    },
    tituloProduto: {        
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2F4F4F'
    },
    containerFotoProduto: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 3,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
    },
    imagemProduto: {
        width: 150,
        height: 150
    },
    containerDescricoesProduto: {
        flexDirection: 'row',   
        alignItems: 'center',     
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    TextDescricoes: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Produto