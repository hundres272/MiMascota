import React from 'react';
import {View,Text,Image,TouchableOpacity,Linking} from 'react-native';

const Animal = (props) => {
    const {id,raza,nombre,fotografia,url} = props.datos;
    function onpress(){
        Linking.openURL(url);
    }
    return (
        <View>
            <Text>Raza: {raza}</Text>
            <Text>ID: {id}</Text>
            <Text>Nombre: {nombre}</Text>
            <Image style={style.estiloImagen}
                source={{
                    uri: fotografia
                }}
            />
            <TouchableOpacity onPress={onpress} style={style.estiloBoton}>
                <Text style={style.estiloTexto}>Visitar sitio de la mascota</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = {
    estiloContenedor: {
        flexDiretion: 'colum',
        justifyContent: 'space-between'
    },
    estiloImagen: {
        height:300,
        width: '100%',
        alignItems: 'center'
    },
    estiloBoton:{
        alignSelf: 'stretch',
        backgroundColor: '#D5D8DB',
        borderWidth: 2,
        paddingTop: 7,
        marginLeft:7,
        marginRight: 7
    },
    estiloTexto:{
        fontSize: 16,
        // fontEight: '400',
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        color: '#296899'
    }
}

export default Animal;