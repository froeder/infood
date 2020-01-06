import React , {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Autocomplete from 'react-native-autocomplete-input';
import * as data from '../assets/alimentos.json'



export default function HomeScreen() {
  const [alimentos, setAlimentos] = useState() ;
  const [tamanho, setTamanho] = useState(0) ;
  const [nomes, setNomes] = useState([]) ;
  const [data, setData] = useState([]) ;

  useEffect(() => {
    let teste = []
    setTamanho(Object.keys(data).length)
    setAlimentos(data)
    if(alimentos){
      for(let i = 0 ; i <= tamanho  ; i++){
        teste[i] = alimentos[i]
      }
      setNomes(teste)
    }
    console.log(nomes)
    
  },[alimentos])

  // useEffect(() => {
  //   for(let i = 0 ; i <= tamanho ; i++){
  //     console.log('aqui')
  //     console.log(nomes)
  //   }
  // }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
        <LinearGradient
          colors={['#FEA617', '#FD7E52']}
          style={styles.container}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>In(fo)od</Text>
              <Text style={styles.text}>Seu app de informções nutricionais.</Text>
          </View>
          <View style={styles.subContainer}>
            <Autocomplete
              data={alimentos}
              
            />
          </View>
        </LinearGradient>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex:1,
    paddingTop: 30,
    justifyContent: 'center',
  },

  mainContainer: {
    paddingTop: 50
  },
  subContainer: {
    marginHorizontal: 50,
    marginTop: '10%',
  },
  title: {
    fontSize: 22,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  }
});
