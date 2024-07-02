import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,Image } from 'react-native'
import { TextInput } from 'react-native-paper';

const Inputs = (()=>{
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
     return (
      <SafeAreaView  style = {styles.container}>
          <View>
          <Image source={require('../../Assets/login.png')}  style = {styles.image}/>
          </View>         
          <View style ={styles.innercontainerinput}>
            <TextInput style = {styles.input}
               label="Mobile Number"
               mode='outlined'
               onChangeText = {this.handleEmail}/>
          </View>  
          <View style={styles.buttoncontainer}>  
          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                () => this.login(this.state.email, this.state.password)
              }>
              <Text style = {styles.submitButtonText}> Continue </Text>
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