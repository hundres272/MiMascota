import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Animal from './Animal';
import axios from 'axios';

class ListaAnimales extends Component {
    state = { listaAnimales:[] };
    componentDidMount(){
        // fetch('')
        // .then(res => res.json())
        // .then(res2 => {
        //     this.setState({listaAnimales: res2});
        // })
        axios.get('https://animalesrestfull.herokuapp.com/')
        .then(response => {
            this.setState({listaAnimales: response.data});
        })
    }
    listaMostrar = ()=>{
        return this.state.listaAnimales.map(animales => {
            return <Animal key={animales.id} datos={animales}/>
        })
    }
    render (){
        return (
            <ScrollView>
                <View>{this.listaMostrar()}</View>
            </ScrollView>
        );
    }
}

export default ListaAnimales;