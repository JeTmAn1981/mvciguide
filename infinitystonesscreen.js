import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText from './styledtext';
import { infinityStonesMainOption, infinityStonesOptions  } from './menuoptions';
import NavigationButton from './navigationbutton';
import PlainNavigationButton from './plainnavigationbutton';
import {FadeInScrollView} from './fadeinview';
import {production, CapcomColor, MarvelColor} from './variables';
export default class InfinityStonesScreen extends React.Component {
  static navigationOptions = {
    
  };
  render() {
      
     const stoneButtons = infinityStonesOptions.map((stone,index) => {
         
         if (production)
            return <PlainNavigationButton style={{borderColor: (index % 2 == 0) ? CapcomColor : MarvelColor }} key={stone.name} navigation={this.props.navigation} data={stone}  />;
         else
            return <NavigationButton key={stone.name} navigation={this.props.navigation} data={stone}  />;
     });

    return (
        <FadeInScrollView>
            <View>
        <StyledText style={{textAlign:'center', fontWeight:'bold', fontSize:35}}>Infinity Stones</StyledText>
        </View>
        <StyledText style={{padding:15, fontSize:25}}>
            There are six Infinity Stones available for selection.  All Stones have an Infinity Surge ability, which can be triggered by pressing the Stone button.  They also have an Infinity Storm ability.  This ability can only be activated when the Infinity meter is at least 50% full, and is activated by pressing the Stone and Tag buttons at the same time.   Select a Stone below to view its individual capabilities.
        </StyledText>
<View style={{flexDirection:'row', flexWrap:'wrap'}}>
    {stoneButtons}
  </View>
  </FadeInScrollView>
    );
  }
}
