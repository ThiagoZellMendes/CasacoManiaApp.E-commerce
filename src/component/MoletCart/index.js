import React, { useState }from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useCart } from '../../context'

export default function MoletCart(props) {

  const { remove, cart } = useCart()

  function filterDesc(desc) {
    if (desc.length < 20) {
      return desc;
    }

    return `${desc.substring(0, 16)}...`;
  }
  
  const [quantidade, setQuantidade] = useState("1")
  
  return (
    <View style={styles.container}>
      <View style={styles.containerProduto}>

        <View style={styles.viewimg}>
          <Image
            source={props.img}
            style={styles.MoletImg}
          />
        </View>

        <View style={styles.viewValor}>
          <Text style={styles.textRemover}>{filterDesc(props.children)}</Text>
          <Text style={styles.textRemover}>R$ {props.cost}</Text>
          <View style={styles.inputView}>
            <Text style={styles.TextQtd} >Quantidade</Text>
            <TextInput
              style={styles.inputArea}
              keyboardType={'number-pad'}
              value={quantidade}
              onChangeText={(qtd) => setQuantidade(qtd)}
            />
        </View>
        </View>

        <View style={styles.viewLimpar}>
          <TouchableOpacity style={styles.touchRemover} onPress={() => remove(props.index)}>
            <Text style={styles.textR}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#FFF',
    paddingTop: 10
  },
  containerProduto: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: '100%',
    width: "100%",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  MoletImg: {
    width: 100,
    height: 100,
  },
  MoletText: {
    fontSize: 16,
    color: '#4B0082',
    textAlign: 'center',
    width: '25%'
  },
  viewimg: {
    width: '30%',
    alignSelf: 'flex-start',
    justifyContent: 'center',

  },
  viewValor: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',

  },

  viewLimpar: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRemover: {
    color: '#4B0082',
    fontWeight: 'bold',
  },
  textR: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  touchRemover: {
    backgroundColor: '#28cc9e',
    color: '#FFF',
    height: '33%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  TextQtd: {
    color: '#4B0082',
    fontSize: 15,
  },
  inputView: {
    flexDirection: 'row',
    height: '30%',
    width: '77%',
    color: '#4B0082',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputArea: {
    height: 25,
    width: 35,
  },
 
});