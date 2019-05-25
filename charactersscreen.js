import React from 'react';
import {  Animated,  Button,  View, WebView, ScrollView,  Image,  Text,  TouchableHighlight  } from 'react-native';
import { characters} from './characters';
import StyledText from './styledtext';
import { FadeInScrollView } from './fadeinview';
import {production, MarvelColor, CapcomColor} from './variables';

//import RCTYouTubeExample from './rctyoutubeexample';


export default class CharactersScreen extends React.Component {
  static navigationOptions = {
    
  };

constructor(props)
{
  super(props);
  
}

  render() {
    const { navigate } = this.props.navigation;
    let production=false;    
    
    let characterListing =  characters.sort(function(a, b) {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
  }).map((element) => 
    {
      
      let characterImageBlock = <View><Image resizeMode='cover' source={ element.image } /><StyledText style={{textAlign:'center', fontSize:15,fontWeight:'bold'}}>{element.name}</StyledText></View>;
      let characterTextBlock = <StyledText style={{textAlign:'center',padding:10,borderWidth:3,borderColor: (element.side == "Capcom" ? CapcomColor : MarvelColor), width:100,height:100,fontSize:18,fontWeight:'bold'}}>{element.name}</StyledText>

      let characterBlock = production ? characterTextBlock : characterImageBlock;
      
    return (<TouchableHighlight style={{padding:5}}  key={element.name + 'Button'}  onPress={() =>
      {
     navigate('Profile', { details: element});
      }
      }>
      <View>  

        {characterBlock}
   {element.moveList.normals[0].FrameData.length  > 0 ? <StyledText style={{color:MarvelColor, textAlign:'center'}}>Frame Data!</StyledText> : null}
   
   </View>
    </TouchableHighlight>);
    
        }
   );

    return (
      
      <FadeInScrollView>
        <View>
        <StyledText style={{textAlign:'center', fontWeight:'bold',fontSize:35}}>Characters</StyledText>
        </View>
          <View style={{justifyContent:'center', flexWrap: "wrap", flexDirection:'row'}}>
            {characterListing}
        </View>
      </FadeInScrollView>
    );
  }
}
