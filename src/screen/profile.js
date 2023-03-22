import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
  } from 'react-native';

const Profile = ()=>{
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={{fontFamily: 'CarterOne', fontSize: 45,  textAlign: 'center', borderRadius: 20, margin: 30,flexDirection: 'row',
                        padding: 15,
                        backgroundColor: '#a9a9a9',
                        color:'#00ced1',
                       }}>
            Curt.ly
          </Text>
          <View style={{fontFamily: 'ChunkFive', fontSize: 18,  textAlign: 'center', borderRadius: 8, marginBottom: 30,
                        padding: 10,
                        margin: 10,
                        backgroundColor: '#a65959',
                        color:'#000',
                       }}>

            <View style={{marginTop: 30, alignItems: 'center'}}>
              <Image source={require('../../assets/fotodiri.jpg')} style={{ width: 100, height: 100}} resizeMode='contain'/>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{color: '#000', fontSize: 18, textAlign: 'center'}}>Arum Rahmawati</Text>
              <Text style={{color: '#000', fontSize: 18, textAlign: 'center'}}>120140085</Text>
              <Text style={{color: '#000', fontSize: 18, textAlign: 'center'}}>Teknik Informatika</Text>
              <Text style={{color: '#000', fontSize: 18, textAlign: 'center'}}>Teluk Betung, Bandar Lampung</Text>
            </View>

          </View>
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

export default Profile;
