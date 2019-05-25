import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText, {BulletText} from './styledtext';
import { infinityStonesMainOption, infinityStonesOptions  } from './menuoptions';
import NavigationButton from './navigationbutton';
import {FadeInScrollView} from './fadeinview';

export default class CounterSwitchScreen extends React.Component {
  static navigationOptions = {
    
  };
  render() {
    let bulletStyle = {marginTop:20,fontSize:25};
    
    return (
        <FadeInScrollView style={{margin:20}}>
            <StyledText style={{textAlign:'center', fontWeight:'bold', fontSize:35}}>Counter Switch</StyledText>
            <BulletText>{'\u2022 Is your fighter getting comboed and on the edge of a KO?  As long as your partner is still available and you\'ve got two meters available, you can hold the Tag button to bring in your partner for a rescue!  Your first character can still get comboed after your partner tags in, so be sure to attack your opponent to get your partner off the hook.'}</BulletText>
            
  </FadeInScrollView>
    );
  }
}
