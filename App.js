import React from 'react';
//import ImageButton from "react-native-img-button";
import {  StackNavigator } from 'react-navigation';
import {  AppRegistry,  Button,  View,  ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
//import ImageHeader from 'react-native-image-header';
import MainScreen from './mainscreen';
import ProfileScreen from './profilescreen';
import { SideMenu} from 'react-native-side-menu';

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

const logo = require('./img/logosmall.png');
let vh=12;


const ImageHeader = props => {
  return(
    <View style={{height: 10*vh, justifyContent: 'flex-end', padding: 5, backgroundColor: 'transparent'}}>
      <Image
        style={{width:'100%', height: 10*vh, position: 'absolute', top: 0, left: 0}}
        source={require('./img/logo.png')}
        
      />
      
    </View>
  );
}

export default SimpleApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
},
{
  navigationOptions: {
    headerTitleStyle: { color: '#fff' },
    header: props => <View style={{flexDirection:'row'}}>
      <Image style={{height:50, width:50, flex:1}} source={require('./img/logosmall.png')} />
      <Text style={{fontSize:30, flex:3}}>Marvel Vs. Capcom Infinite</Text>
      
      </View>,
  }
});

AppRegistry.registerComponent('MVCIGuide', () => SimpleApp);