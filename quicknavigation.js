import React from 'react';
import {  AppRegistry,  StyleSheet,Button,  View,  ScrollView,  Image, Modal, Text,  TouchableHighlight  } from 'react-native';
import { menuOptions } from './menuoptions';
import NavigationButton from './navigationbutton';
import StyledText from './styledtext';
import AdBanner from './adbanner';

let xbutton = require('./img/x.png');

export default class QuickNavigation extends React.Component
{
    render()
    {

        let options = menuOptions.map((menuOption) => {
            let imageSource = menuOption.quickNavigationImage ? menuOption.quickNavigationImage : menuOption.image;
            const { navigate } = this.props.navigation;

            return (
                <TouchableHighlight key={menuOption.name} onPress={() => {
                     navigate(menuOption.navigationName);
                     this.props.hideMenu();
                    }}>
                    <View  style={{alignItems:'center',justifyContent:'center', flex:1, flexDirection:'row',marginBottom:10}}> 
    <Image resizeMode='contain' style={{marginRight:-25,flex:1, width:75,height:75}} source={imageSource} />
                        <StyledText style={{fontSize:20,flex:1}}>{menuOption.name}</StyledText>
                    </View>
                </TouchableHighlight>)});
          
        return (<Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.showMenu}
          onRequestClose={() => this.props.hideMenu()} style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
          <AdBanner />
          <View style={{alignItems:'flex-start',marginBottom:0,marginTop:15,flexDirection:'row'}}>
            <StyledText style={{flex:6, textDecorationLine:'underline', textAlign:'center', fontWeight:'bold',fontSize:35}}>
                Quick Navigation
                </StyledText>
                <TouchableHighlight style={{flex:1,marginTop:10,marginRight:5}} onPress={() => {
                     this.props.hideMenu();
                    }}>
                    <Image resizeMode="contain" style={{width:30,height:30}} source={xbutton} />
                    </TouchableHighlight>
                
           </View>
        <ScrollView contentContainerStyle={{marginTop:40}}>
            {options}
          </ScrollView>  
        </Modal>);
    }
    
}