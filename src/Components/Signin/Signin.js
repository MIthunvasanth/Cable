import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,Image } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

const Inputs = (()=>{
const [mobilenumber,setmobilenumber]=useState();
const [password,setpassword]=useState();
const [stage,setstage]=useState(0)
     return (
      <SafeAreaView  style = {styles.container}>
          <View>
          <Image source={require('../../Assets/login.png')}  style = {styles.image}/>
          </View>         
          <View style ={styles.innercontainerinput}>
            <TextInput style = {styles.input}
               label={stage === 0 ? "Mobile Number" : "Password"}
               mode='outlined'
               onChangeText = {stage===0? setmobilenumber: setpassword}/>
          </View>  
          <View style={styles.buttoncontainer}>
            {stage ===1 ?
          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {()=>setstage(stage-1)}>
              <Text style = {styles.submitButtonText}> Go Back </Text>
          </TouchableOpacity> 
          :<></>}   
          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {()=>setstage(stage+1)}>
              <Text style = {styles.submitButtonText}>{stage===0 ?"Contnue" : 'Login' }</Text>
          </TouchableOpacity>
          </View> 
      </SafeAreaView>
      )
})
export default Inputs

const styles = StyleSheet.create({
   container: {
      backgroundColor:'white',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
   },
   number:{
    color:'red'
   },
   image:{

    height:300,
    width:300
    
   },
   input: {
      margin: 15,
      height: 50,
      borderRadius:5
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      height: 45,
      width:'43%',
   },
   submitButtonText:{
      color: 'white',
      textAlign:'center',
      fontSize:20,
      fontFamily:'poppins',
   },
   buttoncontainer:{
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:30,
    flexDirection:'row'

   },
   innercontainerinput:{
    width:'100%'
   }
})