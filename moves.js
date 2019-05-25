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
    SectionList
  } from 'react-native';

import MoveFrameData from './moveframedata';
import FrameDataGrid from './framedatagrid';
import MultipleNormals from './multiplenormals';
import StyledText, { SubheaderText } from './styledtext';
import {MarvelColor, CapcomColor, legend, UpdateSpecialMovesType, specialMovesType, tabButtonStyle} from './variables';

let headingStyle = { padding:10,backgroundColor: 'black', color:'white', fontSize: 25};
 
  export class SpecialMoves extends React.Component
  {

    constructor(props)
    {
      super(props);
      this.state = { specialMovesType: specialMovesType};
    }

    render()
    {
      let moveList = this.props.data;
      
      let normalMoveListing =  (<View>
<SectionList
stickySectionHeadersEnabled={true}
renderItem={({item}) => <MoveDetails data={item} />}
renderSectionHeader={({section}) => <Text style={ headingStyle }>{section.title}</Text>}
keyExtractor={(item) => item.ID}
sections= {[
{ data: moveList.commandNormals, key: "CommandNormals", title:"Command Normals" },
{ data: moveList.specials, key: "Specials", title:"Specials" },
{ data: moveList.hypers, key: "Hypers", title:"Hypers" }

]}
/>
</View>);

  let advancedMoveListing = <MoveFrameDataGrid alternateStates={this.props.alternateStates} data={moveList.specials.concat(moveList.commandNormals).concat(moveList.hypers)} />;

      return  <View>
        
    <View  style={{flexDirection:'row', justifyContent:'center', margin:5}}>
            <View style={{borderColor:'black', borderWidth: this.state.specialMovesType == "Commands" ? 2 : 2}}>
          <Button  style={tabButtonStyle}  color={specialMovesType == "Commands" ? MarvelColor : CapcomColor} onPress={() => { this.setState({specialMovesType: "Commands"}); UpdateSpecialMovesType("Commands") }} title="Commands" />
            </View>
            <View style={{borderColor:'black', borderWidth: this.state.specialMovesType == "Frames" ? 2 : 2}}>
          <Button  style={tabButtonStyle}  color={specialMovesType == "Frames" ? MarvelColor : CapcomColor} onPress={() => { this.setState({specialMovesType: "Frames"}); UpdateSpecialMovesType("Frames") }} title="Frames" />
            </View>
     
     </View>
     <ScrollView>
     {this.state.specialMovesType == "Commands" ? normalMoveListing : null} 
     {this.state.specialMovesType == "Frames" ? advancedMoveListing : null} 
</ScrollView>
     </View>;   
      
    }
  }

export class Normals extends React.Component
{
  
  render()
  {
    let normalsListing = {};
    let frameData = [];
    
    if (this.props.alternateStates.length > 0)
    {
      normalsListing = <MultipleNormals alternateStates={this.props.alternateStates} data={this.props.data} />;
    }
    else
    {
      for (var i = 0; i < this.props.data.length; i++)
      {
        frameData.push(this.props.data[i].FrameData[0]);        
      }

      normalsListing = <FrameDataGrid data={frameData} />;
    }
    

  return normalsListing;
  }
}

export class MoveFrameDataGrid extends React.Component
{
  
  render()
  {
    let normalsListing = {};
    let frameData = [];
    
    if (this.props.alternateStates.length > 0)
    {
      normalsListing = <MultipleNormals alternateStates={this.props.alternateStates} data={this.props.data} />;
    }
    else
    {
      console.log(this.props.data);
      
      for (var i = 0; i < this.props.data.length; i++)
      {
        for (var j = 0; j < this.props.data[i].FrameData.length; j++)
        {
          let fd = this.props.data[i].FrameData[j];
          fd.moveName = this.props.data[i].name;
          frameData.push(fd);        
          console.log('added');
          console.log(this.props.data[i]);
        }
        
      }

  normalsListing = <FrameDataGrid data={frameData} />;
    }
    

  return normalsListing;
  }
}


export class MoveDetails extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { showFrameData: false};
    this.showFrameData = this.showFrameData.bind(this);
    this.hideFrameData = this.hideFrameData.bind(this);
  }

  showFrameData()
  {
    this.setState({ showFrameData: true});
  }

  hideFrameData()
  {
    this.setState({ showFrameData: false});
  }

  render()
  {
    return (<View>
      <TouchableHighlight key={this.props.data.name} onPress={() => {
       this.showFrameData();
     }}>
      <View style={{alignItems:'center',flexDirection:'row',paddingBottom:5, flex:1,borderWidth: 2, borderColor: MarvelColor}}>
      <StyledText style={{flex:1, fontSize:25, paddingLeft:5}} key={this.props.data.name}>{this.props.data.name}</StyledText>
      <StyledText style={{flex:1}}>{this.props.data.input.map((currentInput) => currentInput.map((inputComponent) => 
          <Text>{inputComponent} </Text>))}</StyledText>
      </View>
    </TouchableHighlight>
    { (this.state.showFrameData && this.props.data.FrameData.length > 0) ? <MoveFrameData hideFrameData={this.hideFrameData} data={this.props.data} /> : null }
    </View>
    );
  }
}

export class Specials extends React.Component
{
  render()
  {
  
    let specialList = this.props.data ? (this.props.data.map((special) => 
  <MoveDetails data={special} />)) : <StyledText>None listed</StyledText>;
  return (<View>
    <SubheaderText>{this.props.type}</SubheaderText>
    {specialList}
  </View>);
  }
}
