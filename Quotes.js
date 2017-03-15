import React,{Component,PropTypes} from 'React'
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'

class Quotes extends Component{
  render(){
    const quoteText = this.props.quoteText
    const quoteSource = this.props.quoteSource
    return(
      <View style={styles.quoteContainer}>
      <Text style={styles.quotesText}> "{this.props.quoteText}"</Text>
      <Text style={styles.sourceText}> - {this.props.quoteSource}</Text>
      </View>
    )
  }
}

Quotes.propTypes= {
  quoteText: PropTypes.string.isRequired,
  quoteSource:PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  quoteContainer:{
    flex:1,
    justifyContent:'center'
  },
  quotesText: {
    fontFamily:(Platform.OS === 'ios')? 'AvenirNext-Bold':'Roboto',
    fontSize:30,
    color:'#ffff',
    marginLeft:15,
    marginRight:15,
  },
  sourceText: {
    fontFamily:(Platform.OS === 'ios') ? 'AvenirNext-Bold':'Roboto',
    fontSize:30,
    color:'#F8F8F8',
    textAlign:'right',
    fontStyle:'italic',
  },
});


export default Quotes
