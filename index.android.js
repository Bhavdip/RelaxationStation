/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigaor,
} from 'react-native';
import StartScreen from './StartScreen'
import QuotesScreen from './QuotesScreen'

const { appQuotes } = require('./quotes.json')

export default class RelaxationStation extends Component {
  constructor(props){
    super(props)
    this.state = {
      quoteIndex:0,
    }
    this._incementQuoteIndex = this._incementQuoteIndex.bind(this)
  }
  _incementQuoteIndex(){
      let newIndex
      if(this.state.quoteIndex + 1 === appQuotes.length){
          newIndex = 0
      }else{
        newIndex = this.state.quoteIndex + 1
      }
      this.setState({
        quoteIndex: newIndex,
      })
  }

  render() {
    const paramQuotes = appQuotes[this.state.quoteIndex]
    return (
      <Navigator
      initialRoute={{ name: 'StartScreen'}}
      renderScene={(route, navigator) =>{
         switch (route.name) {
           case 'StartScreen':
           return <StartScreen onStartHandler={ () => navigator.push({name:'QuotesScreen'})} />
           case 'QuotesScreen':
           return <QuotesScreen
             qId={this.state.quoteIndex}
             text={paramQuotes.text}
             source={paramQuotes.source}
             onNextQuotesPress={this._incementQuoteIndex}/>
         }}
        }
      />
    );
  }
}

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
