import React from 'react';
import {View,Text,Image} from 'react-native';

const Titulo = () => {
    return (
        //Header para el título y logo de la empresa
        <View style={styles.view}>
            <Image style={styles.estiloImagen} source={require('../imagenes/iconoM.png')}
            />
            <Text style={styles.titulo}>Mascotas</Text>
        </View>
    );
}

const styles = {
    titulo: {
        fontSize: 30
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#229954'
    },
    estiloImagen: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20
    }
};

export default Titulo;