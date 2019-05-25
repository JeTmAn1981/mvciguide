import React from 'react';
import {
    AppRegistry,
    Button,
    View,
    ScrollView,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
    Linking
  } from 'react-native';

import MoveFrameData from './moveframedata';
import FrameDataGrid from './framedatagrid';
import MultipleNormals from './multiplenormals';
import StyledText, { SubheaderText } from './styledtext';
import {MarvelColor, CapcomColor, legend} from './variables';

  var headingStyle = { padding:10,backgroundColor: 'black', color:'white', fontSize: 25};
  
export class Players extends React.Component
{
  
  render()
  {
    
    return <View style={{padding:10}}>
        <StyledText style={{marginBottom:20}}>This is a list of notable {this.props.characterName} players.  Tap a player's name to view match footage.</StyledText>
     
    {this.props.data.map((player, index) => 
    {
     var uri = "https://www.youtube.com/results?search_query=marvel+vs+capcom+infinite+mvci+" + this.props.characterName + "+" + player + "+matches";
        
     return <TouchableHighlight key={player} onPress={ () => { 
        Linking.openURL(uri);
        }}>
    <View style={{flex:1, flexDirection:'column', flexWrap:'wrap'}}>
    <StyledText style={{padding:5, backgroundColor: index % 2 == 0 ? MarvelColor : CapcomColor, color:'white', fontSize:20}}>{player.toUpperCase()}</StyledText>
    </View>
    </TouchableHighlight>;
})}
    </View>;
  }
}

