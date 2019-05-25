import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText, {BulletText} from './styledtext';
import { infinityStonesMainOption, infinityStonesOptions  } from './menuoptions';
import NavigationButton from './navigationbutton';
import {FadeInScrollView} from './fadeinview';

export default class ActiveSwitchScreen extends React.Component {
  static navigationOptions = {
    
  };
  render() {
    let bulletStyle = {marginTop:20,fontSize:25};

    return (
        <FadeInScrollView style={{margin:20}}>
            <StyledText style={{textAlign:'center', fontWeight:'bold', fontSize:35}}>Active Switch</StyledText>
            <BulletText>{'\u2022 You can press the Tag button at any time to switch in your partner to fight.  You assume control of your partner immediately, but your other character will attempt to complete any actions such as special moves or hyper combos that they were in the process of completing.'}</BulletText>
            <BulletText>{'\u2022 The tagged-out character will be vulnerable immediately after you tag in, so be sure to keep up the offense and keep your opponent on guard until your partner has tagged out.'}</BulletText>
            <BulletText>{'\u2022 Use the opportunity provided by the active actions of a tagged-out character to open up your opponent!  For instance, execute an attack that must be blocked high, tag out immediately and attack low with your partner for a tricky mixup!  Hyper combos that make your opponent block for long periods of time can also be good opportunities to tag in and change up your offense.  Have fun with the possibilities!'}</BulletText>
  </FadeInScrollView>
    );
  }
}
