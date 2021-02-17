import React from 'react';
import {View,Text,Image} from 'react-native';

const Titulo = () => {
    return (
        <>
            <View><Text>Mascotas</Text></View>
            <Image style={styles.estiloImagen} source={require('../imagenes/iconoM.png')}
            />
        </>
    );
}

const styles = {
    estiloImage: {
        width: 100,
        height: 100,
    }
};

export default Titulo;