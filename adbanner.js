import React from 'react';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'react-native-admob'
import {adID, proVersion} from './variables';

export default class AdBanner extends React.Component
{
    render()
    {
        return  proVersion ? null : 
        <AdMobBanner
       adSize="fullBanner"
        adUnitID={adID}
        ref={el => (this._basicExample = el)}
        onAdFailedToLoad={error => console.log(error)}/>;
    }
}