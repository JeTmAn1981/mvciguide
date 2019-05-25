import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import StyledText from './styledtext';
import { menuOptions, charactersOption, systemsOption, aboutOption,strategyOption } from './menuoptions';
import NavigationButton from './navigationbutton';
import {FadeInScrollView} from './fadeinview';

const charactersImage = require('./img/cover.png');
const systemImage = require('./img/mechanics.png');


export default class MainScreen extends React.Component {
  static navigationOptions = {
    
  };

  render() {
     const { navigate } = this.props.navigation;

     

      

     return (    
     <FadeInScrollView contentContainerStyle={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row', flexWrap:'wrap', paddingTop:20}}>
       <NavigationButton navigation={this.props.navigation} data={charactersOption} />
       <NavigationButton navigation={this.props.navigation} data={systemsOption} />
       <NavigationButton navigation={this.props.navigation} data={aboutOption} />
       
       {/* <Text onPress={() => whoosh.play()}>Play</Text>
       <Text onPress={() => whoosh.pause()}>Pause</Text> */}
      </FadeInScrollView>);
  }
}
