import React from 'react';
import {View,Text,Image,TouchableOpacity,Linking} from 'react-native';

const Animal = (props) => {
    //Desestructuración de atributos para trabajarlos directamente
    const {id,raza,nombre,fotografia,url} = props.datos;
    //La siguiente función permite abrir el navegador en la url definida
    function onpress(){
        Linking.openURL(url);
    }
    return (
        //Aquí se llena los valores correspondientes a cada mascota
        <View style={style.tarjetas}>
            <Text style={style.textCenter}>{raza}</Text>
            <Text style={style.textLeft}>ID: {id}</Text>
            <Text style={style.textLeft}>Nombre: {nombre}</Text>
            {/* Componente que permite cargar una imagen */}
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
        height: 400,
        width: '96%',
        alignItems: 'center',
        margin: '2%',
        marginBottom: 10
    },
    estiloBoton:{
        alignSelf: 'stretch',
        backgroundColor: '#52BE80',
        borderWidth: 2,
        paddingTop: 7,
        marginLeft:7,
        marginRight: 7,
        marginBottom: 10,
        borderRadius: 20,
        borderColor: 'transparent'
    },
    estiloTexto:{
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        color: 'black'
    },
    tarjetas: {
        margin: 10,
        backgroundColor: '#ABEBC6',
        borderRadius: 7,
        borderColor: 'black'
    },
    textCenter: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
    textLeft: {
        marginLeft: 10,
        fontSize: 15
    }
}

export default Animal;