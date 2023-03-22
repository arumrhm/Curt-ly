import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
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
          <Text style={{fontFamily: 'JosefinSans', fontSize: 18,  textAlign: 'center', borderRadius: 8, marginBottom: 30,flexDirection: 'row',
                        padding: 10,
                        margin: 10,
                        backgroundColor: '#a65959',
                        color:'#000',
                       }}>
            Curt.ly merupakan aplikasi mempersingkat link. Aplikasi ini dapat membuat URL atau link sangat pendek, sehingga tidak menganggu penglihatan. Dengan begitu, bisa dengan mudah dibagikan di media sosial.
          </Text>
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
