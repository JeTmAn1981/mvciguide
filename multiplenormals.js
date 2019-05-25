import React from 'react';
import {
    AppRegistry,
    Button,
    Picker,
    View,
    ScrollView,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet
  } from 'react-native';
  import FrameDataGrid from './framedatagrid';
  import StyledText, { SubheaderText } from './styledtext';
  import {MarvelColor, CapcomColor, legend} from './variables';
  
export default class MultipleNormals extends React.Component
{

    constructor(props)
    {
        super(props);
        this.getFrameData = this.getFrameData.bind(this);
        this.selectStandardFrameData = this.selectStandardFrameData.bind(this);

        let frameData = this.getFrameData(this.selectStandardFrameData);
        let alternateStatesFrameData = this.props.alternateStates.map(alternateState => {
            return {type:alternateState, frameData: this.getFrameData(normal => normal.FrameData[0].Version.includes(alternateState))};
        });

        this.state = {selectedGrid:'Standard', frameData: frameData, alternateStatesFrameData: alternateStatesFrameData};
    }

    getFrameData(filterFunction)
    {
        return this.props.data.filter(filterFunction).map(normal => normal.FrameData[0]);
    }

    selectStandardFrameData(normal)
    {
        for (var i = 0; i < this.props.alternateStates.length; i++)
        {
            if (normal.FrameData[0].Version.includes(this.props.alternateStates[i]))
            {
                return false;
            }
        }

        return true;
    }

    
    render()
    {

//         return <View>
//             <StyledText>State</StyledText>
// <Picker
//   selectedValue={this.state.selectedGrid}
//   onValueChange={(itemValue, itemIndex) => this.setState({selectedGrid: itemValue})}
//   >
//   <Picker.Item label="Standard" value="Standard" />
//   {this.props.alternateStates.map(alternateState => <Picker.Item key={alternateState} label={alternateState} value={alternateState} />)}
  
// </Picker>

//          <View style={{flexDirection:'row'}}>
//           <TouchableHighlight style={{borderWidth:3,  borderColor:'black', flex:1}} onPress={() => this.setState({selectedGrid:'Standard'})}>
//              <View>
//          <StyledText style={{textAlign:'center', alignItems:'center',height:25,backgroundColor: this.state.selectedGrid == 'Standard' ? MarvelColor : CapcomColor,color:'white', fontWeight:'bold'}}>STANDARD</StyledText>
//          </View>
//          </TouchableHighlight>

// {this.props.alternateStates.map(alternateState => {
//     return 
//     (<TouchableHighlight style={{borderWidth:3,  borderColor:'black', flex:1}} onPress={() => this.setState({selectedGrid:alternateState})}>
//     <View>
// {/* <StyledText style={{textAlign:'center', alignItems:'center',height:25,backgroundColor: this.state.selectedGrid == alternateState ? MarvelColor : CapcomColor,color:'white', fontWeight:'bold'}}>{alternateState}</StyledText> */}
// <Text>sadfdsf</Text>
// </View>
// </TouchableHighlight>);

//  })}
//          </View>


//  {this.state.selectedGrid == 'Standard' ? <FrameDataGrid data={this.state.frameData} /> : null }
//  {this.state.alternateStatesFrameData.map(asfd => {
//     return this.state.selectedGrid == asfd.type ? <FrameDataGrid key={asfd.type} data={asfd.frameData} /> : null;
//  })}
//         </View>;

        return (<View style={{paddingTop:10}}>
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={{borderWidth:3,  borderColor:'black', flex:1}} onPress={() => this.setState({selectedGrid:'Standard'})}>
            <View>
        <StyledText style={{textAlign:'center', alignItems:'center',height:25,backgroundColor: this.state.selectedGrid == 'Standard' ? MarvelColor : CapcomColor,color:'white', fontWeight:'bold'}}>STANDARD</StyledText>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={{borderWidth:3, borderColor:'black', flex:1}}  onPress={() => this.setState({selectedGrid:this.state.alternateStatesFrameData[0].type})}>
            <View>
        <StyledText style={{textAlign:'center', alignItems:'center', height:25,backgroundColor:this.state.selectedGrid == 'Standard' ? CapcomColor: MarvelColor,color:'white', fontWeight:'bold'}}>{this.state.alternateStatesFrameData[0].type.toUpperCase()}</StyledText>
        </View>
        </TouchableHighlight>
        </View>

        {this.state.selectedGrid == 'Standard' ? <FrameDataGrid data={this.state.frameData} /> : null }
        {this.state.selectedGrid == this.state.alternateStatesFrameData[0].type ? <FrameDataGrid data={this.state.alternateStatesFrameData[0].frameData} /> : null }  
        </View>);
    }
}