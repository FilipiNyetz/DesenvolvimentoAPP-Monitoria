import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {auth} from "../FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const registrarUsuario=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      Alert.alert("Usuario registrado com sucesso!", `ID usuario ${userCredential.user.uid}`)
    })
    .catch((error)=>{
      Alert.alert("Erro ao registrar",error.message);
    })
  };
  const conferirLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Login bem-sucedido!", `UID: ${userCredential.user.uid}`);
      })
      .catch((error) => {
        Alert.alert("Erro no login", error.message);
      });
  };

  return (
    <View style={style.body}>
      <View style={style.container}>
      <Text style={style.titulo}>Email:</Text>
      <TextInput
        style={style.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={style.titulo}>Senha:</Text>
      <TextInput
        style={style.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <View style={style.botoes}>
          <TouchableOpacity style={style.bt1} onPress={registrarUsuario}>
            <Text style={style.textBT}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.bt1}>
            <Text style={style.textBT} onPress={conferirLogin}>Login</Text>
          </TouchableOpacity>
      </View>
    </View>
    </View>
    
  );
}

const style=StyleSheet.create({
  body:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
  },
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:300,  
    width:400,
    backgroundColor:"#93B4DB",
    borderRadius:25
  },
  titulo:{
    color:"#00000",
    fontSize:24,
    marginBottom:7,
    fontWeight:'bold'
  },
  input:{
    width:'70%',
    backgroundColor:"#000000",
    color:"#FFFF",
    height:50,
    borderRadius:20,
    padding:15,
    fontWeight:'500'
  },
  botoes:{
    width:'70%',
    marginTop:25,
  },
  bt1:{
    backgroundColor: "#537FE7",
    marginBottom:15,
    height:32,
    justifyContent:'center',
    alignItems:'center',  
    borderRadius:8,
    
  },
  textBT:{
    fontSize:20,
    color:"#ffff"
  }
  
})