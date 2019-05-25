import { AsyncStorage } from 'react-native';

const production = false;
const proVersion = true;
const CapcomColor = '#518cca';
const MarvelColor = '#e23636';
const adID = production ? "ca-app-pub-5188308652186762/5459142919" : "ca-app-pub-3940256099942544/6300978111";
const specialMovesTypeKey = 'specialMovesType';
let specialMovesType = 'Commands';

AsyncStorage.getItem(specialMovesTypeKey).then((value) => {
    specialMovesType = value;
  });

let tabButtonStyle = {color:'red'};

var legend = [
    {Title:"Startup", Name:"Startup",  Abbreviation: "S", Include: false, SortOrder: 'asc'},
    {Title:"Active", Name:"Active", Abbreviation: "A", Include: false, SortOrder: 'desc'},
    {Title:"Recovery",Name:"Recovery", Abbreviation: "R", Include: false, SortOrder: 'asc',},
    // {Title:"Total", Name:"Total", Abbreviation: "T", Include: false, SortOrder:'asc'},
    // {Title:"Damage", Name:"Damage", Abbreviation: "D", Include: false, SortOrder:'desc'},
    {Title:"Block Advantage", Name:"BlockAdvantage", IsInteger:true, Abbreviation: "B.A.", Include: false, SortOrder:'desc'},
    {Title:"Hit Advantage", Name:"HitAdvantage", IsInteger:true, Abbreviation: "H.A.", Include: false, SortOrder:'desc'},
    {Title: "Ch Advantage", Name:"ChAdvantage", IsInteger:true, Abbreviation:"C.A.", Include: false, SortOrder:'desc'},
    // {Title: "Invincibility Frames", Name:"InvincibilityFrames", Abbreviation:"I.F.", Include:false, SortOrder:'desc'}
];

function UpdateSpecialMovesType(smt)
{
    specialMovesType = smt;
    AsyncStorage.setItem(specialMovesTypeKey, smt);
}

export {production, CapcomColor, MarvelColor, legend, adID, proVersion, specialMovesType, UpdateSpecialMovesType, tabButtonStyle};