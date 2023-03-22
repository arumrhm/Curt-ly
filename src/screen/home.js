import React , {useCallback, useEffect, useState} from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Share,
} from 'react-native';

export default function Home({navigation}){
  const [inputValue, setInputValue] = useState('');
  const [fontsLoaded] = useFonts({
    'ChunkFive': require('../../assets/fonts/ChunkFive-Regular.otf'),
    'CarterOne': require('../../assets/fonts/Carter-One.ttf'),
    'JosefinSans': require('../../assets/fonts/JosefinSans-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await new Promise(resolve => setTimeout(resolve, 4000));
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const getDataUsingGet = () => {
    fetch(
      'https://tinyurl.com/api-create.php?url='+ inputValue.toString(),
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        Share.share({
          message:
            'Halo Kamu Telah Menerima Link Yang Telah Di Bagikan Lewat Aplikasi Curt.ly! Berikut Meupakan Linknya ' + responseJson + ' Terima Kasih!',
        })
          .then((result) => console.log(result))
          .catch((errorMsg) => console.log(errorMsg));
      })
      .catch((error) => {
        alert('Error -> ' + JSON.stringify(error));
        console.error(error);
      });
  };
  
  return (
      <SafeAreaView style={styles.container}>
        <View
          onLayout={onLayoutRootView}>
        </View>
        <View style={styles.container}>
          <Text style={{fontFamily: 'CarterOne', fontSize: 45,  textAlign: 'center', borderRadius: 20, margin: 30,flexDirection: 'row',
                        marginTop: 30,
                        padding: 15,
                        backgroundColor: '#a9a9a9',
                        color:'#00ced1',
                       }}>
            Curt.ly
          </Text>
          <Text style={{fontFamily: 'JosefinSans', fontSize: 20,  textAlign: 'center', borderRadius: 20, marginBottom: 30,flexDirection: 'row',
                        padding: 10,
                        margin: 10,
                        backgroundColor: '#a65959',
                        color:'#1a0000',
                       }}>
            Masukkan Link Yang Akan Di Persingkat!
          </Text>
          <TextInput  
            value={inputValue}
            onChangeText={
              (inputValue) => setInputValue(inputValue)
            }
            placeholder={'Masukkan Link'}
            style={styles.textInput}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={getDataUsingGet}>
            <Text style={{fontFamily: 'JosefinSans', fontSize: 25,  textAlign: 'center', borderRadius: 20, margin: 30,flexDirection: 'row',
                        marginTop: 10,
                        padding: 20,
                        backgroundColor: '#a65959',
                        color:'#1a0000',
                       }}>
              Bagikan Link Yang Telah Di Persingkat (Tekan Tombol)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    ); 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afeeee',
    padding:20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'ChunkFive'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    padding: 5,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    padding: 15,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: '#e9967a',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

