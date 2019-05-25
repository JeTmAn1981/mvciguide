import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText from './styledtext';
//import RCTYouTubeExample from './rctyoutubeexample';


export default class StrategyScreen extends React.Component {
  static navigationOptions = {
    
  };
  render() {
return (<Text>Mixups</Text>);

    return (
      <ScrollView>
        <View>
        <StyledText style={{textAlign:'center', fontWeight:'bold',fontSize:35}}>Characters</StyledText>
        </View>
          <View style={{ flexWrap: "wrap", flexDirection:'row'}}>
      {characterListing}
    </View>
</ScrollView>
    );
  }
}
