import React from 'react';
import {NetInfo, Header, SectionList, Linking, AppRegistry,  Button,  PureComponent, View, WebView, Modal,ScrollView,  Image,StyleSheet,  Text,  TouchableHighlight  } from 'react-native';
import { TabNavigator } from 'react-navigation';
import {Normals, Specials, MoveDetails, MoveFrameDataGrid, SpecialMoves} from './moves';
import StyledText from './styledtext';
import { FadeInView } from './fadeinview';
import { Players } from './players';
import FrameDataGrid from './framedatagrid';
import {production, MarvelColor, CapcomColor, tabButtonStyle} from './variables';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
       
  };

  
constructor(props)
{
super(props);

this.state = { selectedTab: "Moves"};
this.ShowTab = this.ShowTab.bind(this);
}

state = {
  showBiography: false,
}

numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  GetCharacterLetter(name, side)
  {
    
    let letterColor = (side == 'Capcom' ? CapcomColor : MarvelColor);
    let borderColor = (side == 'Capcom' ? MarvelColor : CapcomColor);

    return <StyledText style={{color:letterColor, borderColor:borderColor, fontSize:50, borderWidth:3,marginLeft:20,textAlign:'center',justifyContent:'center', height:'100%',width:'100%'}}>{name.substring(0,1)}</StyledText>;
  }

  ShowTab(tabName)
  {
this.setState({selectedTab: tabName});
  }

  render() {

    const { navigate } = this.props.navigation;
    const { params }  = this.props.navigation.state;

    let production = false;
    
    let headingStyle = { padding:10,backgroundColor: 'black', color:'white', fontSize: 25};
    let blackBottomBorderStyle = {borderBottomColor:'black',borderBottomWidth:3};
    let networkConnected = true;

    NetInfo.isConnected.fetch().then(isConnected => {
      networkConnected = isConnected;
      
    });

    let moveList  = params.details.moveList;
    let biographyIntro = params.details.biographyIntro;
    let characterImage = production ? null : <View style={{flex:1}}><Image resizeMode='contain'  style={{width:90, height:70}} source={ params.details.portraitImage } /></View>;


var uri = "https://www.youtube.com/results?search_query=marvel+vs+capcom+infinite+" + params.details.name + "+combos";
  
let comboListing = (<WebView  onNavigationStateChange={(event) => {
  if (event.url !== uri) {
    Linking.openURL(event.url);
  }
}} startInLoadingState={true}  renderLoading={() => <StyledText style={{fontSize:30}}>Loading Combos...</StyledText>} style={{height:2400}}
  source={{uri: uri}}

/>);

let normalsListing = <Normals alternateStates={params.details.alternateStates} data={moveList.normals} />;
let moveListing = <SpecialMoves alternateStates={params.details.alternateStates} data={moveList} />;

<View>
  <StyledText>View Type:</StyledText>
<View  style={{flexDirection:'row'}}>
        <View style={{borderColor:'black', borderWidth: this.state.selectedTab == "Moves" ? 2 : 2}}>
      <Button  style={tabButtonStyle}  color={this.state.selectedTab == "Moves" ? MarvelColor : CapcomColor} onPress={() => this.ShowTab("Moves")} title="Normal" />
        </View>
        <View style={{borderColor:'black', borderWidth: this.state.selectedTab == "Moves" ? 2 : 2}}>
      <Button  style={tabButtonStyle}  color={this.state.selectedTab == "Moves" ? MarvelColor : CapcomColor} onPress={() => this.ShowTab("Moves")} title="Advanced" />
        </View>
 </View>    

<MoveFrameDataGrid alternateStates={params.details.alternateStates} data={moveList.specials.concat(moveList.commandNormals).concat(moveList.hypers)} />
</View>;

    return (
      <FadeInView style={{flex:1,justifyContent:'flex-end',flexDirection:'column'}}>
        <View style={{...blackBottomBorderStyle}}>
          <View style={{paddingRight:20,paddingLeft:20,alignItems:'flex-end',justifyContent:'center', flexDirection:'row'}}>
            <StyledText style={{textAlign:'left',  fontSize: 35,flex:3  }}>{params.details.name}</StyledText>
            <StyledText style={{textAlign:'right', flex:1}}>{this.numberWithCommas(params.details.vitality)}{" HP\n"}</StyledText>
          </View>
          <View style={{height:80,flexDirection:'row'}}>
              {characterImage}
              
            <TouchableHighlight style={{flex:6}} onPress={ () => { 
                  Linking.openURL(params.details.biographyURL);
                  }}>
              <View style={{marginLeft: production ? -7 : 0,flex:1, flexDirection:'column', flexWrap:'wrap'}}>
                
                <Text ellipsizeMode='tail' numberOfLines={4} style={{marginLeft:40,marginRight:20, flex:1,fontSize:12, textAlign:'center', maxWidth:500}} >
                  {biographyIntro}
                  </Text>
              </View>
            </TouchableHighlight>
            
          </View>   
          
        </View>
      
      <View  style={{flexDirection:'row'}}>
        <View style={{borderColor:'black', borderWidth: this.state.selectedTab == "Moves" ? 2 : 2}}>
      <Button  style={tabButtonStyle}  color={this.state.selectedTab == "Moves" ? MarvelColor : CapcomColor} onPress={() => this.ShowTab("Moves")} title="Special Moves" />
        </View>
        { moveList.normals[0].FrameData.length > 0 ? <View style={{borderColor:'black', borderWidth: this.state.selectedTab == "Normals" ? 2 : 2}}>
      <Button  style={tabButtonStyle}  color={this.state.selectedTab == "Normals" ? MarvelColor : CapcomColor} onPress={() => this.ShowTab("Normals")} title="Normals" />
        </View> : null}
        <View style={{borderColor:'black', borderWidth: this.state.selectedTab == "Combos" ? 2 : 2}}>
      <Button style={tabButtonStyle} style={{borderColor:'black'}} color={this.state.selectedTab == "Combos" ? MarvelColor : CapcomColor} onPress={() => this.ShowTab("Combos")} style={{flex:1}} title="Combos" />
      </View>
      { params.details.players.length > 0 ? <View style={{borderColor:'black', borderWidth: this.state.selectedTab == "Players" ? 2 : 2}}>
      <Button  style={tabButtonStyle}  color={this.state.selectedTab == "Players" ? MarvelColor : CapcomColor} onPress={() => this.ShowTab("Players")} title="Players" />
        </View> : null}
        </View>   
        
<ScrollView>

  {  this.state.selectedTab == "Moves" ? moveListing : null }
  {  (this.state.selectedTab == "Normals" && moveList.normals[0].FrameData.length > 0) ? normalsListing : null }
  {  this.state.selectedTab == "Combos" ? (networkConnected ? comboListing : <Text>No connection.</Text>) : null }
  {  this.state.selectedTab == "Players" ? <Players characterName={params.details.name} data={params.details.players} /> : null }
  {/* {  this.state.selectedTab == "FrameData" ? frameDataListing : null } */}
  <Button color={params.details.side == "Marvel" ? MarvelColor : CapcomColor}
            title="Go back"
      onPress={() => navigate('Characters')
      }
    />
      </ScrollView>
      </FadeInView>
    );
  }
}