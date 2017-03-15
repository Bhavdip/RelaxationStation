/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'

const zenImage = require('./assets/zen.png')

class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
        <Image source={zenImage} style={styles.buttonImage}/>
        </TouchableOpacity>
        <Text style={styles.simpleText}>
            I am ready to Relax...
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },
  simpleText: {
    fontSize: 20,
    fontStyle:'italic',
    color:'#ffffff',
  },
  button:{
    backgroundColor:'#889dad',
    borderRadius:20,
    padding:10,
    marginBottom:20,
    shadowColor:'#303838',
    shadowRadius:10,
    shadowOpacity:0.35,
  },
  buttonImage:{
    width : 200,
    height:200,
  },
});

export default StartScreen
