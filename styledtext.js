import React from 'react';
import {  Text } from 'react-native';

export default class StyledText extends React.Component {
    constructor(props)
    {
      super(props);
    }

    render()
    {
      return (<Text onPress={this.props.onPress} style={{color:'black', fontFamily:"Lato-Semibold",...this.props.style}}>{this.props.children}</Text>);
    }
 }  

 export class SubheaderText extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (<StyledText   style={{padding:10,backgroundColor: 'black', color:'white', fontSize: 25}}>{this.props.children}</StyledText>);
  }
}  


export class BulletText extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (<StyledText onPress={this.props.onPress}   style={{marginTop:20,fontSize:25}}>{this.props.children}</StyledText>);
  }
}  
