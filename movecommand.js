import React from 'react';
import {  AppRegistry,  StyleSheet,Button,  View,  ScrollView,  Image, Modal, Text,  TouchableHighlight  } from 'react-native';
import { menuOptions } from './menuoptions';
import NavigationButton from './navigationbutton';
import StyledText from './styledtext';
import FrameDataGrid from './framedatagrid';
import {legend} from './variables';
import AdBanner from './adbanner';
let xbutton = require('./img/x.png');

export default class MoveCommand extends React.Component
{
        render()
    {
       
        return (<Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.showMenu}
          onRequestClose={() => this.props.hideMoveCommand()} style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
            <AdBanner />
          <View style={{alignItems:'flex-start',marginTop:15,flexDirection:'row'}}>
            <StyledText style={{flex:6, textDecorationLine:'underline', textAlign:'center', fontWeight:'bold',fontSize:35}}>
                {this.props.data.name}
                </StyledText>
                <TouchableHighlight style={{flex:1,marginTop:10,marginRight:5}} onPress={() => {
                     this.props.hideMoveCommand();
                    }}>
                    <Image resizeMode="contain" style={{width:30,height:30}} source={xbutton} />
                    </TouchableHighlight>
           </View>
          
          <Text>Details here</Text>
        </Modal>);
    }
    
}