import React from 'react';
import {
  View,
  Text
} from 'react-native';
import ListaAnimales from './src/componentes/ListaAnimales';
import Titulo from './src/componentes/Titulo';

const App =  () => {
  return (
    <View style={{flex: 1,backgroundColor: '#eaeaea'}}>
      <Titulo/>
      <ListaAnimales/>
    </View>
  );
};

export default App;
