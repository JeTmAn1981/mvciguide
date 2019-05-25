import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText, {BulletText} from './styledtext';
import { infinityStonesMainOption, infinityStonesOptions  } from './menuoptions';
import NavigationButton from './navigationbutton';
import {FadeInScrollView} from './fadeinview';

export default class AdvancingGuardScreen extends React.Component {
  static navigationOptions = {
    
  };
  render() {
    let bulletStyle = {marginTop:20,fontSize:25};

    return (
        <FadeInScrollView style={{margin:20}}>
            <StyledText style={{textAlign:'center', fontWeight:'bold', fontSize:35}}>Advancing Guard</StyledText>
            <BulletText>{'\u2022 Advancing Guard is a technique which pushes the opponent back and almost totally nullifies chip damage when blocking. It also helps you recover faster from block stun. Advancing Guard can also reflect non-beam projectiles. Press any two punch or kick buttons while in block stun to use Advancing Guard.'}</BulletText>
            <BulletText>{'\u2022 Using Advancing Guard also minimizes chip damage. Beware, aggressors can counter Advancing Guard by changing the timing of their attacks to allow defenders to come out of block stun, causing them to drop their guard altogether.'}</BulletText>
  </FadeInScrollView>
    );
  }
}
