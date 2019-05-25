import React from 'react';
import {  AppRegistry,  Button,  View, WebView, Modal,ScrollView,  Image,StyleSheet,  Text,  TouchableHighlight  } from 'react-native';
import {Normals, Specials} from './moves';
import StyledText, { SubheaderText, BulletText } from './styledtext';
import { FadeInScrollView } from './fadeinview';

export default class StoneScreen extends React.Component {
  static navigationOptions = {
       
  };

  
constructor(props)
{
super(props);

}

  render() {

    const { navigate } = this.props.navigation;
    const { params }  = this.props.navigation.state;
    var headingStyle = { backgroundColor: 'black', color:'white', fontSize: 25};
    
    return (
      <FadeInScrollView style={{padding:10}}>
          
        <StyledText style={{textAlign:'center', marginBottom:20, fontWeight:'bold',fontSize:35}}>{params.details.name}</StyledText>
        
        <SubheaderText>Infinity Surge</SubheaderText>
          <BulletText>{params.details.surge}</BulletText>
        <View style={{marginTop:20,marginBottom:50}}>
          <SubheaderText>Infinity Storm</SubheaderText>
          <BulletText >{params.details.storm}</BulletText>
          </View>
      </FadeInScrollView>
    );
  }
}