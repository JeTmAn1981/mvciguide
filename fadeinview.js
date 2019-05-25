import React from 'react';
import {  Animated } from 'react-native';

const {fadeInTime} = 100;

export class FadeInScrollView extends React.Component {
    constructor(props)
    {
      super(props);

      this.state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
      }
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
          this.state.fadeAnim,            // The animated value to drive
          {
            toValue: 1,                   // Animate to opacity: 1 (opaque)
            duration: fadeInTime,              // Make it take a while
          }
        ).start();                        // Starts the animation
      }
    
    render()
    {
      let { fadeAnim } = this.state;
        
      return (<Animated.ScrollView contentContainerStyle={{ ...this.props.contentContainerStyle}} style={{opacity:fadeAnim, ...this.props.style}}>
            {this.props.children}
        </Animated.ScrollView>);
    }
 }  

 export class FadeInView extends React.Component {
    constructor(props)
    {
      super(props);

      this.state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
      }
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
          this.state.fadeAnim,            // The animated value to drive
          {
            toValue: 1,                   // Animate to opacity: 1 (opaque)
            duration: fadeInTime,              // Make it take a while
          }
        ).start();                        // Starts the animation
      }
    
    render()
    {
      let { fadeAnim } = this.state;
        
      return (<Animated.View contentContainerStyle={{ ...this.props.contentContainerStyle}} style={{...this.props.style, opacity:fadeAnim}}>
            {this.props.children}
        </Animated.View>);
    }
 }  

