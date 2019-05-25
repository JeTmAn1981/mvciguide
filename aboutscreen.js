import React from 'react';
import {  AppRegistry,  Linking,Button,  ListView,View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText, { BulletText} from './styledtext';
import { infinityStonesMainOption  } from './menuoptions';
import NavigationButton from './navigationbutton';
import { FadeInScrollView } from './fadeinview';

export default class AboutScreen extends React.Component {
  
    constructor(props)
    {
        super(props);
        
        // this.state = {
        //     dataSource: new ListView.DataSource({
        //       rowHasChanged: (row1, row2) => row1 !== row2,
        //     }).cloneWithRows([
        //     'The Marvel Vs. Capcom Infinite Guide was developed by Road To Juneau Software (tm). All characters are property of Marvel Worldwide Inc. and/or Capcom.', 
        //     'Comments? Suggestions? Encounter an error or inaccurate information?  Please email jetman81@gmail.com.']),
        //   };
    }

    renderRow(data) 
    {
        return (<StyledText style={{marginTop:20}}>{`\u2022 ${data}`}</StyledText>);
    }

    render() 
    {
     const { navigate } = this.props.navigation;
     let bulletStyle = {marginTop:20,fontSize:25};

     return (
      <FadeInScrollView>
      <View>
      <StyledText style={{textAlign:'center', fontWeight:'bold',fontSize:35}}>About</StyledText>
      </View>
      <View style={{margin:20}}>
      <BulletText>{`\u2022 The Marvel Vs. Capcom Infinite Guide was developed by Road To Juneau Software (tm). All characters are property of Marvel Worldwide Inc. and/or Capcom.`}</BulletText>
      <BulletText onPress={() => Linking.openURL('mailto:jetman81@gmail.com?subject=MVCI Guide App')} >{`\u2022 Comments? Suggestions? Encounter an error or inaccurate information?  Please email jetman81@gmail.com.`}</BulletText>
      </View>
  
  </FadeInScrollView>
    );
  }
}
