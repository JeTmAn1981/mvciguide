import React from 'react';
import {  StackNavigator,DrawerNavigator } from 'react-navigation';
import {  AppRegistry,  StyleSheet,Button,  View,  ScrollView,  Image, Modal, Text,  TouchableHighlight  } from 'react-native';
import MainScreen from './mainscreen';
import ProfileScreen from './profilescreen';
import CharactersScreen from './charactersscreen';
import SystemsScreen from './systemsscreen';
import StrategyScreen from './strategyscreen';
import TriviaScreen from './triviascreen';
import InfinityStonesScreen from './infinitystonesscreen';
import StoneScreen from './stonescreen';
import AboutScreen from './aboutscreen';
import ActiveSwitchScreen from './activeswitchscreen';
import CounterSwitchScreen from './counterswitchscreen';
import AdvancingGuardScreen from './advancingguardscreen';
import NavigationHeader from './navigationheader';

// Import the react-native-sound module
var Sound = require('react-native-sound');

// Enable playback in silence mode (iOS only)
Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
whoosh = new Sound('cecilia.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    alert('failed to load the sound', error);
    return;
  }
  // loaded successfully
  //alert('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
});

  // whoosh.play((success) => {
  //   if (success) {
  //     alert('successfully finished playing');
  //   } else {
  //     alert('playback failed due to audio decoding errors');
  //     // reset the player to its uninitialized state (android only)
  //     // this is the only option to recover after an error occured and use the player again
  //     //whoosh.reset();
  //   }
  // });
  
//setTimeout(() => whoosh.play(), 1000);

//styles.navigationItem =  {...styles.heading};


export default SimpleApp = StackNavigator({
  Main: {screen: MainScreen},
  Characters: {screen: CharactersScreen},
  Systems: {screen: SystemsScreen},
  Profile: {screen: ProfileScreen},
  Strategy: {screen: StrategyScreen},
  About: {screen: AboutScreen},
  Trivia: {screen: TriviaScreen},
  Stones: {screen: InfinityStonesScreen},
  Stone: {screen:StoneScreen},
  ActiveSwitch: {screen:ActiveSwitchScreen},
  CounterSwitch: {screen:CounterSwitchScreen},
  AdvancingGuard: {screen:AdvancingGuardScreen}
},
{
  navigationOptions: {
    headerTitleStyle: { color: '#fff' },
    
    header: props => <NavigationHeader headerProps={props} />,
    footer: props => <Text>Footer</Text>
  }
});





AppRegistry.registerComponent('MVCIGuide', () => SimpleApp);
