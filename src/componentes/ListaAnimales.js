import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Animal from './Animal';
import axios from 'axios';

class ListaAnimales extends Component {
    state = { listaAnimales:[] };
    //Esta función permite actualizar la APP cuando hay cambios en el estado.
    componentDidMount(){
        //Permite traer los datos de un apiREST y guardarlos en listaAnimales
        axios.get('https://animalesrestfull.herokuapp.com/')
        .then(response => {
            this.setState({listaAnimales: response.data});
        })
    }
    //En esta parte se crea un array de componentes tipo "Animal" y se envian los
    //parámetros de listaAnimimales para cada mascota
    listaMostrar = ()=>{
        return this.state.listaAnimales.map(animales => {
            return <Animal key={animales.id} datos={animales}/>
        })
    }
    render (){
        return (
            //Componente que permite aplicar scroll a lo que contenga
            <ScrollView>
                <View>{this.listaMostrar()}</View>
            </ScrollView>
        );
    }
}

export default ListaAnimales;