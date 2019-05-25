import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import StyledText from './styledtext';
import {production, CapcomColor} from './variables';

export default class PlainNavigationButton extends React.Component
{
  
  render()
  {
    
    const { navigate } = this.props.navigation;
    
   
    return (<TouchableHighlight activeOpacity={.1} style={{padding:10, width:'50%'}}  onPress={() =>
      {
        
     navigate(this.props.data.navigationName, {details: this.props.data});

        if (this.props.additionalAction != null)
        {
          this.props.additionalAction();
        }
      }
      }>
      <View style={{borderColor:CapcomColor,margin:10,paddingTop:50,borderWidth:3, height:150, ...this.props.style}}>  
   <StyledText style={{textAlign:'center', fontSize:18,fontWeight:'bold'}}>{ this.props.data.name}</StyledText>
   </View>
    </TouchableHighlight>
);
  }
}
