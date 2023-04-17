import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
const screenHeight = Dimensions.get('window').height;
const image = require("../assets/bg-body.png"); 


const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'ADMIN' && password === 'ADMIN') {
      navigation.navigate('Customer');
    } else {
      setError('Invalid username or password');
    }
  };

  return (

    <View style={styles.container}> 
        {/* <ImageBackground  source={image}  resizeMode="contain" style={styles.bgimg}>  */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.logoImage} source={require('../assets/deco-window.png')} /> 
              </View>  
              <View style={styles.cardBody}>  
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="username"
                    placeholderTextColor="#333"
                    onChangeText={setUsername}
                    value={username}
                  /> 
                </View> 
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#333"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                  /> 
                </View> 
                <TouchableOpacity  onPress={handleLogin} style={styles.loginBtn}>
                  <Text style={styles.loginText}>LOGIN</Text> 
                </TouchableOpacity> 
                {error !== '' && <Text>{error}</Text>}
              </View>  
            </View>  
        {/* </ImageBackground> */}
      </View> 
  );
};

export default LoginPage;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      marginTop:50,
    },
    cardHeader:{
      alignItems: "center",
      justifyContent: "center",
    },
    logoImage: {
      marginBottom: 40,
      width: 200,
      height:50,
      resizeMode: "contain",
      alignItems: "center",
    },
    inputView: {
      backgroundColor: "#fff",
      borderRadius: 5,
      width: "100%",
      height: 45,
      marginBottom: 20,
      color: "#fff",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 10,
      color: "#fff",
    },
    loginBtn: {
      width: "100%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#373737",
    },
    loginText: {
      color: "#fff",
    },
    bgimg: {
      height: screenHeight,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    card:{
      width: "85%",
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 3,
    }
  });
  