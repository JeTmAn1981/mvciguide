import React from 'react';
import {  AppRegistry,  StyleSheet,Button,  View,  ScrollView,  Image, Modal, Text,  TouchableHighlight  } from 'react-native';
import { menuOptions } from './menuoptions';
import MoveCommand from './movecommand';
import NavigationButton from './navigationbutton';
import StyledText from './styledtext';
import {legend, MarvelColor} from './variables';
let xbutton = require('./img/x.png');

export default class FrameDataGrid extends React.Component
{
    constructor(props)
    {
        super(props);
        this.updateLegend = this.updateLegend.bind(this);
        
        this.sortData = this.sortData.bind(this);
        this.showMoveCommand = this.showMoveCommand.bind(this);
        this.hideMoveCommand = this.hideMoveCommand.bind(this);

        let data = this.props.data;
        
        data.sortByColumn = (column,direction) => 
        {
            let sortAscending = (direction == "asc") ? true : false;
            
            data.sort((a,b) => 
            {
              let aColumn = parseInt(a[column]);
              let bColumn = parseInt(b[column]);
              
              if ((!aColumn || aColumn == "") && bColumn != "")
              {
                  return 1;
              }

              if (aColumn != "" && (!bColumn || bColumn == ""))
              {
                  return -1;
              }

              if (aColumn < bColumn) {
                return sortAscending ? -1 : 1;
              }
              if (aColumn > bColumn) {
                return sortAscending ? 1 : -1;
              }
              
              return 0;
            });
        };

        data.sortByColumn('Startup','asc');

        this.state = {data: data, sortColumn: 'Startup', sortDirection: 'asc', showMoveCommand: false};
        this.updateLegend();
        
    }

    showMoveCommand()
    {
      this.setState({ showMoveCommand: true});
    }
  
    hideMoveCommand()
    {
      this.setState({ showMoveCommand: false});
    }
  

    resetLegend()
    {
        for (var j = 0; j < legend.length; j++)
        {
            legend[j].Include = false;
        }
    }

    updateLegend()
    {
        this.resetLegend();
        
        if (this.state.data)
        {
        for (var i = 0; i < this.state.data.length; i++)
        {
            for (var j = 0; j < legend.length; j++)
            {
                try
                {
                    if (this.state.data[i][legend[j].Name] != undefined && this.state.data[i][legend[j].Name] != "")
                    {
                        legend.filter(detail => detail.Name == legend[j].Name)[0].Include = true;
                    }    
                }
                catch(ex)
                {
                    alert(ex);
                    alert(legend[j].Name);
                    break;
                }
            }
       
            if (legend.filter(detail => detail.Include).length == legend.length)
            {
                break;
            }
        }
    }
    }

    sortData(column,sortOrder)
    {
        let sortDirection = "";
        
        if (this.state.sortColumn == column)
        {
            sortDirection = (this.state.sortDirection == "asc") ? "desc" : "asc";    
        }
        else
        {
            sortDirection = sortOrder;
        }
        
        let data = this.state.data;
        data.sortByColumn(column, sortDirection);
        
        this.setState({data: data, sortColumn: column, sortDirection: sortDirection}); 
    }

    render()
    {
        let paddingValue = 4;
        let chAdvantageExists = false;
        let invFramesExists = false;
        let dataStyle = {textAlign:'center', padding: paddingValue, borderWidth:1, borderColor:'black', flex:1};
        let headingStyle = {...dataStyle, fontWeight:'bold'};
                       
        let frameData = this.state.data.map(version => {
            let fullMoveName = version.Version;

            if (version && version.moveName)
            {
                fullMoveName = version.moveName + ((version.Version || '').length > 0 ? '\n' + version.Version : '');
            }
            
            return <View>
                <TouchableHighlight key={fullMoveName} onPress={() => { this.showMoveCommand();}}>
            <View  style={{flexDirection:'row'}}>
            
                {this.state.data.length > 1 ? <StyledText style={{...dataStyle,fontWeight:'bold', flex:1}}>{fullMoveName}</StyledText> : null}
                {legend.filter(detail => detail.Include).map(detail => 
                {
                    let currentColor = ((detail.IsInteger || false) && parseInt(version[detail.Name]) < 0) ? 'red' : 'black';
                    
                return <StyledText key={detail.Name} style={{...dataStyle, color: currentColor}}>{version[detail.Name]}</StyledText>;
                }
                )}
                
                </View></TouchableHighlight>
                { (this.state.showMoveCommand) ? <MoveCommand hideMoveCommand={this.hideMoveCommand} data={this.props.data} /> : null }
                </View>;
        });    
       
        var lastLegendColumnIndex = 0;

        for (var i = 0; i < legend.length; i++)
        {
            if (legend[i].Include)
                lastLegendColumnIndex = i;
        }

        let legendListing = <StyledText style={{marginBottom:20}}>
        {legend.filter(detail => detail.Include).map(detail => <StyledText key={detail.Title}><StyledText style={{fontWeight:'bold'}}>{detail.Abbreviation}</StyledText> = {detail.Title}{detail.Name != legend[lastLegendColumnIndex].Name ? "," : null} </StyledText>)}
        </StyledText> ;

        let headings = <View style={{flexDirection:'row'}}>
        {this.state.data.length > 1 ? <StyledText style={{...headingStyle,fontWeight:'bold', flex:1}}></StyledText> : null}
        {legend.filter(detail => detail.Include).map(detail => 
        <TouchableHighlight style={{padding: paddingValue, borderWidth:1, borderColor:'black', flex:1}} key={detail.Abbreviation} onPress={() => 
            { 
                this.sortData(detail.Name,detail.SortOrder);
            }
            }>
            <View>
        <StyledText style={{textAlign:'center', fontWeight:'bold'}}>{detail.Abbreviation}</StyledText>
        </View>
        </TouchableHighlight>
        )}
        </View>;

        return (<ScrollView style={{ marginBottom:20}}>
           <View style={{marginTop:15}}>
           <View style={{marginLeft:5, marginRight: 5}}>
           <StyledText style={{color:MarvelColor,marginBottom:10}}>Tap a heading to reorder.</StyledText>
           {legendListing}
                </View>
                {headings}    
                {frameData}
           </View>
           </ScrollView>
        );
    }
    
}