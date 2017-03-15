/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Image,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native';
import Quotes from './Quotes'
import NextQuotesButton from './NextQuotesButton'
const bgImages = require('./assets/bg.png')
const tranquil = {
  duration:500,
  create:{
    duration:1000,
    delay:300,
    type:LayoutAnimation.Types.easeIn,
    property:LayoutAnimation.Properties.opacity,
  },
  update:{
    type:LayoutAnimation.Types.easeInEaseOut,
    property:LayoutAnimation.Properties.opacity,
  },
  delete:{
    duration:200,
    type:LayoutAnimation.Types.easeOut,
    property:LayoutAnimation.Properties.opacity,
  },
}

class QuotesScreen extends Component {
  constructor(){
    super()
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}
  }
  ComponentWillUpdate(){
    LayoutAnimation.configureNext(tranquil);
  }
  render() {
    return (
      <Image source={bgImages} style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Quotes
          key={this.props.qId}
          quoteText={this.props.text}
          quoteSource={this.props.source}/>
        <NextQuotesButton onPress={this.props.onNextQuotesPress}/>
      </View>
      </Image>
    );
  }
}

QuotesScreen.propTypes= {
  text: PropTypes.string.isRequired,
  source:PropTypes.string.isRequired,
  onNextQuotesPress:PropTypes.func.isRequired,
  qId:PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode:'cover',
    width:undefined,
    height:undefined,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuotesScreen
