import React from 'react';
import {  AppRegistry,  StyleSheet,Button,  View,  ScrollView,  Image, Modal, Text,  TouchableHighlight  } from 'react-native';
import StyledText from './styledtext';
import QuickNavigation from './quicknavigation';
import {production,MarvelColor,CapcomColor} from './variables';
import {logo} from './menuoptions';
import AdBanner from './adbanner';

const mainStyle = {fontFamily:'Lato-Heavy', color:'black'};

const styles = {
  heading: { textAlign:'center', fontWeight:'bold', fontSize:35},
  mainStyle: {fontFamily:'Lato-Heavy', color:'black'}
};


export default class NavigationHeader extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {showMenu:false};
    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu()
  {
    this.setState({showMenu:false});
  }

  render() {
    let borderWidth = 3;
    const { navigate } = this.props.headerProps.navigation;

    return (

      <View>
      <AdBanner />
      <View style={{flexDirection:'row', justifyContent:'center',alignContent:'center', height:80, 
      borderBottomColor:MarvelColor, 
      borderBottomWidth:borderWidth, 
      borderTopWidth:(borderWidth + 2),
      borderTopColor:CapcomColor, 
      /*borderLeftColor:MarvelColor,
      borderLeftWidth:borderWidth,
      borderRightColor:CapcomColor,
      borderRightWidth:borderWidth,*/
      marginBottom:5}}>

<TouchableHighlight style={{flex:1}} onPress={() =>
      {
     navigate('Main');
      }
      }>
    {/* {production ? 
        <Text style={{fontSize:30}}>MV{"\n"}CI</Text> : 
        <Image resizeMode='contain' style={{height:54,width:84, flex:1}} source={require('./img/logosmall.png')} />} */}
      <View style={{padding:5, flex:1}}>
        <Image resizeMode='contain' style={{ height:54,width:84, flex:1}} source={logo} />
      </View>
       {/* <Image resizeMode='contain' style={{height:54,width:54, flex:1}} source={require('./img/mvcicon.png')} /> */}
      
    </TouchableHighlight>
        
      
      <StyledText style={{...styles.mainStyle, fontSize:22, fontWeight:'bold',textAlign:'center',paddingTop:25, flex:2}}>MVC Infinite Guide</StyledText>


      <TouchableHighlight style={{flex:1, alignItems:'flex-end', paddingTop:15}} onPress={() =>
      {
     this.setState({showMenu:true});
      }
      }>

      <Image resizeMode='contain'  style={{ paddingLeft:100, height:50, width:50}}  source={require('./img/hamburger.png')} />
      
    </TouchableHighlight>

      <QuickNavigation navigation={this.props.headerProps.navigation} hideMenu={this.hideMenu} showMenu={this.state.showMenu}  />
          </View>
</View>
    );
  }
}
