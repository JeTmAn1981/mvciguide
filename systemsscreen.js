import React from 'react';
import {  AppRegistry,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText from './styledtext';
import { infinityStonesMainOption, activeSwitchOption, counterSwitchOption,advancingGuardOption } from './menuoptions';
import NavigationButton from './navigationbutton';
import PlainNavigationButton from './plainnavigationbutton';
import { FadeInScrollView } from './fadeinview';
import {production,CapcomColor, MarvelColor} from './variables';

export default class SystemsScreen extends React.Component {
  static navigationOptions = {
    
  };
  render() {
     const { navigate } = this.props.navigation;
  
    var systemsOptions;

    if (production)
      {
        let buttonStyle = {textAlign:'center',borderColor:CapcomColor,margin:10,paddingTop:50,borderWidth:3, width:'40%',height:150,fontSize:18,fontWeight:'bold'};

        systemsOptions = 
        <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-between'}}>
          <PlainNavigationButton navigation={this.props.navigation} data={infinityStonesMainOption} />
        <PlainNavigationButton style={{borderColor:MarvelColor}} navigation={this.props.navigation} data={activeSwitchOption} />
        <PlainNavigationButton navigation={this.props.navigation} data={counterSwitchOption} />
        <PlainNavigationButton style={{borderColor:MarvelColor}} navigation={this.props.navigation} data={advancingGuardOption} />
          
        </View>;

      }
      else
      {
      systemsOptions = 
      <View style={{flexDirection:'row',justifyContent:'center', flexWrap:'wrap'}}>
        <NavigationButton navigation={this.props.navigation} data={infinityStonesMainOption} />
        <NavigationButton navigation={this.props.navigation} data={activeSwitchOption} />
        <NavigationButton navigation={this.props.navigation} data={counterSwitchOption} />
        <NavigationButton navigation={this.props.navigation} data={advancingGuardOption} />
      </View>;
      }

    return (
      <FadeInScrollView>
      <View>
      <StyledText style={{textAlign:'center', fontWeight:'bold',fontSize:35}}>Systems</StyledText>
      </View>

        {systemsOptions}

  
  </FadeInScrollView>
    );
  }
}
