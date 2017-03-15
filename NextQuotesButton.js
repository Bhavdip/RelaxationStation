import React,{Component, PropTypes} from 'React'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

class NextQuotesButton extends Component{
    render(){
      return(
        <TouchableOpacity style={sceneStyle.NextThoughtButton} onPress={this.props.onPress}>
          <Text style={sceneStyle.NextThoughtText}>
            Next Quotes
          </Text>
        </TouchableOpacity>
      )
    }
}

NextQuotesButton.propTypes = {
  onPress:PropTypes.func.isRequired,
}

const sceneStyle = StyleSheet.create({
  NextThoughtButton:{
    borderWidth :2,
    borderRadius:3,
    borderColor:'#ffffff',
    padding:10,
    marginBottom:20,
  },
  NextThoughtText:{
    color:'#ffffff',
    fontSize:18,
  }
})

export default NextQuotesButton
