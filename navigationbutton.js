import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import StyledText from './styledtext';
import {production} from './variables';
export default class NavigationButton extends React.Component
{
  
  render()
  {
    
    const { navigate } = this.props.navigation;
    
    let imageHeight = this.props.imageHeight ? this.props.imageHeight : 150;
    let imageWidth = this.props.imageWidth ? this.props.imageHeight : '100%';

    return (<TouchableHighlight activeOpacity={.1} style={{padding:10, width:'50%'}}  onPress={() =>
      {
        
     navigate(this.props.data.navigationName, {details: this.props.data});

        if (this.props.additionalAction != null)
        {
          this.props.additionalAction();
        }
      }
      }>
      <View>  
   <Image resizeMode='contain' style={{width:imageWidth,height:imageHeight}} source={ this.props.image ? this.props.image : this.props.data.image } />
   <StyledText style={{textAlign:'center', fontSize:25}}>{ this.props.data.name}</StyledText>
   </View>
    </TouchableHighlight>
);
  }
}
