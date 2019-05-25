import React from 'react';
import {Image,Text} from 'react-native';

const Air = (<Image style={{width:60,height:60}} source={require('./img/moves/air.png')} />);
const QCF = (<Image style={{width:125,height:135}} source={require('./img/moves/qcf.png')} />);
const Plus = (<Image style={{width:70,height:95}} source={require('./img/moves/plus.png')} />);
const Punch = (<Image style={{width:95,height:95}} source={require('./img/moves/punch.png')} />);
const Kick = (<Image style={{width:95,height:95}} source={require('./img/moves/kick.png')} />);
const Down = (<Image style={{width:105,height:135}} source={require('./img/moves/down.png')} />);
const QCB = (<Image style={{width:125,height:135}} source={require('./img/moves/qcb.png')} />);
const DoubleKick = (<Image style={{width:145,height:95}} source={require('./img/moves/doublekick.png')} />);
const DoublePunch = (<Image style={{width:145,height:95}} source={require('./img/moves/doublepunch.png')} />);
const Right = (<Image style={{width:117.5,height:135}} source={require('./img/moves/right.png')} />);
const LightKick = (<Image style={{width:95,height:95}} source={require('./img/moves/lightkick.png')} />);
const HardPunch = (<Image style={{width:95,height:95}} source={require('./img/moves/hardpunch.png')} />);
const DownRight = (<Image style={{width:107.5,height:135}} source={require('./img/moves/downright.png')} />);
const LightPunch = (<Image style={{width:95,height:95}} source={require('./img/moves/lightpunch.png')} />);
const HardKick = (<Image style={{width:95,height:95}} source={require('./img/moves/hardkick.png')} />);
const HCB = (<Image style={{width:122.5,height:135}} source={require('./img/moves/hcb.png')} />);
const DragonPunch = (<Image style={{width:120,height:135}} source={require('./img/moves/dragonpunch.png')} />);
const Left = (<Image style={{width:122.5,height:135}} source={require('./img/moves/left.png')} />);
const Up = (<Image style={{width:105,height:135}} source={require('./img/moves/up.png')} />);
const UpRight = (<Image style={{width:102.5,height:135}} source={require('./img/moves/upright.png')} />);
const ChargeBack = (<Image style={{width:137.5,height:135}} source={require('./img/moves/chargeback.png')} />);
const ChargeDownUp = (<Image style={{width:105,height:135}} source={require('./img/moves/chargedownup.png')} />);
const Jump = (<Image style={{width:122.5,height:135}} source={require('./img/moves/jump.png')} />);

const characters = [
{name: "Arthur",
image: require('./img/characters/arthur.jpg'), 
portraitImage: require('./img/characters/arthurportrait.png'),
side: "Capcom",
vitality: "9000", alternateStates:["Golden Armor"],
players:["Sacktap","Bum"],
moveList: {normals:
[{ID: "4047",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"15",Active:"6",Recovery:"23",Total:"43",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"51",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4048",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"9",Active:"3",Recovery:"32",Total:"43",Damage:"600",BlockAdvantage:"-13",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4049",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"9",Active:"8",Recovery:"13",Total:"29",Damage:"400",BlockAdvantage:"-6",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4050",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"6",Active:"3",Recovery:"14",Total:"22",Damage:"200",BlockAdvantage:"-5",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4051",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"6",Active:"4",Recovery:"10",Total:"19",Damage:"200",BlockAdvantage:"-2",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4052",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"14",Active:"4",Recovery:"23",Total:"40",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4053",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"9",Active:"3",Recovery:"26",Total:"37",Damage:"400",BlockAdvantage:"-14",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4054",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"12",Active:"3",Recovery:"30",Total:"44",Damage:"600",BlockAdvantage:"-14",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4055",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"7",Active:"3",Recovery:"13",Total:"22",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4056",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"14",Active:"3",Recovery:"22",Total:"38",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4057",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"9",Recovery:"12",Total:"29",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4058",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"11",Active:"25",Recovery:"6",Total:"41",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4326",name: "c.HK (Golden Armor)", input: [],
FrameData:
[
{Version:"c.HK Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4327",name: "c.HP (Golden Armor)", input: [],
FrameData:
[
{Version:"c.HP Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4328",name: "c.LK (Golden Armor)", input: [],
FrameData:
[
{Version:"c.LK Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"480",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4329",name: "c.LP (Golden Armor)", input: [],
FrameData:
[
{Version:"c.LP Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"240",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4330",name: "LP (Golden Armor)", input: [],
FrameData:
[
{Version:"LP Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"240",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4331",name: "HP (Golden Armor)", input: [],
FrameData:
[
{Version:"HP Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4332",name: "LK (Golden Armor)", input: [],
FrameData:
[
{Version:"LK Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"480",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4333",name: "HK (Golden Armor)", input: [],
FrameData:
[
{Version:"HK Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4334",name: "j.LP (Golden Armor)", input: [],
FrameData:
[
{Version:"j.LP Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"240",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4335",name: "j.HP (Golden Armor)", input: [],
FrameData:
[
{Version:"j.HP Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4336",name: "j.LK (Golden Armor)", input: [],
FrameData:
[
{Version:"j.LK Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"480",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4337",name: "j.HK (Golden Armor)", input: [],
FrameData:
[
{Version:"j.HK Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3531",name: "Lance Charge", input: [[Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"16",Recovery:"18",Total:"51",Damage:"100*5\n(460)",BlockAdvantage:"-3",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"120*5\n(552)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3532",name: "Cross Sword", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"24",Active:"27",Recovery:"0",Total:"50",Damage:"600",BlockAdvantage:"-2",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3533",name: "Lance Impale", input: [[Jump,Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"10",Active:"8",Recovery:"15",Total:"32",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"480",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3534",name: "Lance Thrust", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"12",Active:"6",Recovery:"20",Total:"37",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3527",name: "Goddess' Bracelet", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"22",Active:"119",Recovery:"0",Total:"140",Damage:"200*20\n(3100)",BlockAdvantage:"12",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"240*20\n(3504)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3528",name: "Goddess' Bracelet > Movements", input: [["Any directions (during Goddess' Bracelet)",],],
FrameData:
[]  },
{ID: "3529",name: "Golden Armor", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"22",Active:"0",Recovery:"0",Total:"22",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-22"},]  },
{ID: "3530",name: "For the Princess! (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"23",Active:"135",Recovery:"87",Total:"244",Damage:"800*10\n(4880)",BlockAdvantage:"-73",HitAdvantage:"35",ChAdvantage:"",InvincibilityFrames:"FRAME 1-30"},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"960*10\n(5568)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3518",name: "Dagger Toss (air ok)", input: [[QCF,Plus,LightPunch,"/Tap",LightPunch,],],
FrameData:
[
{Version:"",Startup:"9",Active:"41",Recovery:"0",Total:"49",Damage:"300",BlockAdvantage:"-16",HitAdvantage:"-17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2nd",Startup:"9",Active:"51",Recovery:"0",Total:"59",Damage:"300*2",BlockAdvantage:"-16",HitAdvantage:"-17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3rd",Startup:"9",Active:"61",Recovery:"0",Total:"69",Damage:"300*3\n(870)",BlockAdvantage:"-16",HitAdvantage:"-17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"9",Active:"41",Recovery:"0",Total:"49",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air 2nd",Startup:"9",Active:"49",Recovery:"0",Total:"57",Damage:"300*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air 3rd",Startup:"9",Active:"49",Recovery:"0",Total:"57",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2nd Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3rd Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360*3\n(1044)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air 2nd Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air 3rd Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360*3\n(1044)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3519",name: "Lance Toss (air ok)", input: [[QCF,Plus,HardPunch,"/Tap",HardPunch,],],
FrameData:
[
{Version:"",Startup:"1",Active:"1",Recovery:"2",Total:"3",Damage:"500",BlockAdvantage:"-13",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2nd",Startup:"12",Active:"53",Recovery:"0",Total:"64",Damage:"500*2",BlockAdvantage:"-13",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"12",Active:"38",Recovery:"0",Total:"49",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air 2nd",Startup:"12",Active:"46",Recovery:"0",Total:"57",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3520",name: "Heavenly Slash", input: [[Down,Down,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"7",Active:"8",Recovery:"32",Total:"46",Damage:"1000",BlockAdvantage:"-21",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3521",name: "Hellbound Slash", input: [[Down,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"7(16)6",Recovery:"28",Total:"72",Damage:"800+500\n(1250)",BlockAdvantage:"-15",HitAdvantage:"49",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3522",name: "Shield Deflect", input: [[Down,Down,Plus,Kick,],],
FrameData:
[
{Version:"",Startup:"4",Active:"26",Recovery:"16",Total:"45",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"8",Active:"26",Recovery:"26",Total:"59",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3523",name: "Scatter Crossbow (air ok)", input: [[QCB,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"15",Active:"35",Recovery:"0",Total:"49",Damage:"400*2",BlockAdvantage:"-9",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"15",Active:"25",Recovery:"0",Total:"39",Damage:"400*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360*3\n(1044)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"360*3\n(1044)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3524",name: "Fire Bottle Toss (air ok)", input: [[QCB,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"20",Active:"33(1)1",Recovery:"0",Total:"54",Damage:"700/150*6\n(870)",BlockAdvantage:"-16",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"20",Active:"6",Recovery:"0",Total:"25",Damage:"700/150*6\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"600+96*10\n(1430)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"600+96*10\n(1430)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3525",name: "Scythe Toss (air ok)", input: [[QCB,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"20",Active:"41",Recovery:"0",Total:"60",Damage:"400*2",BlockAdvantage:"-4",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"20",Active:"18",Recovery:"0",Total:"37",Damage:"400*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"240*3+480\n(1152)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"240*3+480\n(1152)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3526",name: "Ax Toss (air ok)", input: [[QCB,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"20",Active:"38",Recovery:"0",Total:"57",Damage:"1200",BlockAdvantage:"-12",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"21",Active:"12",Recovery:"0",Total:"32",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"120*20\n(2076)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Golden Armor",Startup:"",Active:"",Recovery:"",Total:"",Damage:"120*20\n(2076)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Sir Arthur (Japanese: ???? Hepburn: Asa) is a fictional character and the primary protagonist from Capcom's Ghosts 'n Goblins video game series. He first appeared in the 1985 video game Ghosts 'n Goblins, and has been well received since then. The character is also featured in several other Capcom video games outside the Ghosts 'n Goblins series.",

biographyURL:"https://en.wikipedia.org/wiki/Arthur_(Ghosts_%27n_Goblins)"},

{name: "Black Panther",
image: require('./img/characters/blackpanther.jpg'), 
portraitImage: require('./img/characters/blackpantherportrait.png'),
side: "Marvel",
vitality: "9000", alternateStates:[],
players:[],
moveList: {normals:
[{ID: "4215",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4216",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4217",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4218",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4219",name: "LP", input: [],
FrameData:
[]  },
{ID: "4220",name: "HP", input: [],
FrameData:
[]  },
{ID: "4221",name: "LK", input: [],
FrameData:
[]  },
{ID: "4222",name: "HK", input: [],
FrameData:
[]  },
{ID: "4223",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4224",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4225",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4226",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3808",name: "Slash Claw", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3810",name: "Wild Arch", input: [[Right,Plus,HardKick,],],
FrameData:
[]  },
{ID: "3811",name: "Sliding Hook", input: [[DownRight,Plus,HardKick,],],
FrameData:
[]  },
],

hypers:
[{ID: "3825",name: "Hazard Zone", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3826",name: "Sudden Death", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3827",name: "Air Interceptor (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3828",name: "Law of the Jungle (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
],

specials:
[{ID: "3812",name: "Chain of Hunting (Brandishing Claw)", input: [[QCF,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3813",name: "Chain of Hunting (Vertical Claw)", input: [[QCF,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3814",name: "Advance Claw", input: [["(during first stage of Chain of Hunting)",LightPunch,],],
FrameData:
[]  },
{ID: "3815",name: "Dual Claw", input: [["(during second stage of Chain of Hunting)",LightPunch,],],
FrameData:
[]  },
{ID: "3816",name: "Curved Claw", input: [["(during first stage of Chain of Hunting)",HardPunch,],],
FrameData:
[]  },
{ID: "3817",name: "Divine Claw", input: [["(during second stage of Chain of Hunting)",HardPunch,],],
FrameData:
[]  },
{ID: "3818",name: "Predator Arts (air ok)", input: [[QCF,LightKick,"or",HardKick,],],
FrameData:
[]  },
{ID: "3819",name: "Dual Claw", input: [["(during Predator Arts)",LightPunch,],],
FrameData:
[]  },
{ID: "3820",name: "Divine Claw", input: [["(during Predator Arts)",HardPunch,],],
FrameData:
[]  },
{ID: "3821",name: "Panther Bite", input: [[QCB,LightPunch,"or",HardPunch,],],
FrameData:
[]  },
{ID: "3822",name: "Wall Cling", input: [["(during jump, in screen corner)",Left,Left,],],
FrameData:
[]  },
{ID: "3823",name: "Wall Cling (air ok)", input: [[QCB,LightKick,"or",HardKick,],],
FrameData:
[]  },
{ID: "3824",name: "Wall Jump", input: [["(during Wall Cling)",LightPunch,"or",HardPunch,"or",LightKick,"or",HardKick,],],
FrameData:
[]  },
],

},
biographyIntro:"The Black Panther (T'Challa) is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and penciller and co-plotter Jack Kirby, he first appeared in Fantastic Four #52 (July 1966). The character was the first black superhero in mainstream American comics, debuting years before such early African-American superheroes as the Falcon (1969), Luke Cage (1972), Green Lantern John Stewart (1971) and Black Lightning (1977). Black Panther is depicted as the king and protector of Wakanda, a fictional African nation. Chadwick Boseman portrays Black Panther in Captain America: Civil War and will reprise the role in Black Panther and Avengers: Infinity War, set in the Marvel Cinematic Universe.",

biographyURL:"https://en.wikipedia.org/wiki/Black_Panther_(comics)"},

{name: "Black Widow",
image: require('./img/characters/blackwidow.jpg'), 
portraitImage: require('./img/characters/blackwidowportrait.png'),
side: "Marvel",
vitality: "9000", alternateStates:[],
players:[],
moveList: {normals:
[{ID: "4559",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4560",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4561",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4562",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4563",name: "LP", input: [],
FrameData:
[]  },
{ID: "4564",name: "HP", input: [],
FrameData:
[]  },
{ID: "4565",name: "LK", input: [],
FrameData:
[]  },
{ID: "4566",name: "HK", input: [],
FrameData:
[]  },
{ID: "4567",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4568",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4569",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4570",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "4553",name: "Straight Shot", input: [[Right,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "4554",name: "Twirl Strike", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "4555",name: "Twirl Kick", input: [[Right,Plus,HardKick,],],
FrameData:
[]  },
{ID: "4556",name: "Slide", input: [[DownRight,Plus,HardKick,],],
FrameData:
[]  },
{ID: "4557",name: "Shot (air only)", input: [[Down,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "4558",name: "Quick Line (air only)", input: [[Down,Plus,HardKick,],],
FrameData:
[]  },
],

hypers:
[{ID: "4550",name: "Shock Therapy", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "4551",name: "Hyper Covert Catch (air ok)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "4552",name: "Secure the Target (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
],

specials:
[{ID: "4544",name: "Gauntlets (Widow's Bite) (air ok)", input: [[QCF,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "4594",name: "Gauntlets (Widow's Kiss) (air ok)", input: [[QCF,Plus,LightKick,],],
FrameData:
[]  },
{ID: "4595",name: "Gauntlets (Widowmaker) (air ok)", input: [[QCF,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "4596",name: "Gauntlets (Widow's Line) (air ok)", input: [[QCF,Plus,HardKick,],],
FrameData:
[]  },
{ID: "4546",name: "Shock Bite", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "4548",name: "Strike Vector (air ok)", input: [[DoubleKick," (can be directed)",],],
FrameData:
[]  },
{ID: "4549",name: "Strike Vector > Gauntlets (Widow's Bite)", input: [[LightPunch,"(from Strike Vector)",],],
FrameData:
[]  },
{ID: "4597",name: "Strike Vector > Gauntlets (Widow's Kiss)", input: [[LightKick,"(from Strike Vector)",],],
FrameData:
[]  },
{ID: "4598",name: "Strike Vector > Gauntlets (Widowmaker)", input: [[HardPunch,"(from Strike Vector)",],],
FrameData:
[]  },
{ID: "4599",name: "Strike Vector > Quick Line", input: [[HardKick,"(from Strike Vector)",],],
FrameData:
[]  },
{ID: "4545",name: "Spark Rush", input: [[Down,Down,Plus,Punch,],],
FrameData:
[]  },
{ID: "4547",name: "Covert Catch (air ok)", input: [[QCB,Plus,Kick,],],
FrameData:
[]  },
],

},
biographyIntro:"Natalia Alianovna 'Natasha' Romanova,[1] (Russian: Наталья Альяновна 'Наташа' Романова; alias: Natasha Romanoff; colloquial: Black Widow (Russian: Чёрная вдова; transliterated Chyornaya Vdova) is a fictional superhero appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character first appeared in Tales of Suspense No. 52 (April 1964). The character was first introduced as a Russian spy, an antagonist of the superhero Iron Man. She later defected to the United States, becoming an agent of the fictional spy agency S.H.I.E.L.D., and a member of the superhero team the Avengers.",

biographyURL:"https://en.wikipedia.org/wiki/Black_Widow_(Natasha_Romanova)"},

{name: "Captain America",
image: require('./img/characters/captainamerica.jpg'), 
portraitImage: require('./img/characters/captainamericaportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:["Sacktap"],
moveList: {normals:
[{ID: "3867",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "3868",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "3869",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "3870",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "3871",name: "LP", input: [],
FrameData:
[]  },
{ID: "3872",name: "HP", input: [],
FrameData:
[]  },
{ID: "3873",name: "LK", input: [],
FrameData:
[]  },
{ID: "3874",name: "HK", input: [],
FrameData:
[]  },
{ID: "3875",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "3876",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "3877",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "3878",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3315",name: "Leap Kick", input: [[Right,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3316",name: "Power Swing", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3317",name: "Shield Bash", input: [[DownRight,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3318",name: "Air Chop", input: [[Jump,Down,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3319",name: "Air Raid Kick", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[]  },
{ID: "3320",name: "Middle Kick", input: [[LightKick,">",LightKick,"(only if first attack hits)",],],
FrameData:
[]  },
],

hypers:
[{ID: "3312",name: "Hyper Charging Star", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3313",name: "Hyper Stars & Stripes", input: [[Down,Down,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3314",name: "Unyielding Justice (level 3)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
],

specials:
[{ID: "3306",name: "Shield Slash (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3307",name: "Trick Shield", input: [[QCF,Plus,Kick,],],
FrameData:
[]  },
{ID: "3308",name: "Stars > Stripes", input: [[Down,Down,Plus,Punch,],],
FrameData:
[]  },
{ID: "3309",name: "Charging Star", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "3310",name: "Liberty Shock", input: [[QCB,Plus,Kick,],],
FrameData:
[]  },
{ID: "3311",name: "Backflip", input: [[DoubleKick,],],
FrameData:
[]  },
],

},
biographyIntro:"Captain America is a fictional character appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.",

biographyURL:"https://en.wikipedia.org/wiki/Captain_America"},

{name: "Captain Marvel",
image: require('./img/characters/captainmarvel.jpg'), 
portraitImage: require('./img/characters/captainmarvelportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:["Binary Ignition"],
players:["Filipino Champ"],
moveList: {normals:
[{ID: "3879",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"13",Active:"12",Recovery:"21",Total:"45",Damage:"700",BlockAdvantage:"-14",HitAdvantage:"45",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3880",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"10",Active:"6",Recovery:"32",Total:"47",Damage:"700",BlockAdvantage:"-17",HitAdvantage:"13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3881",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"3",Recovery:"25",Total:"35",Damage:"500",BlockAdvantage:"-13",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3882",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"6",Active:"2",Recovery:"13",Total:"20",Damage:"300",BlockAdvantage:"-2",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3883",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"6",Active:"3",Recovery:"10",Total:"18",Damage:"300",BlockAdvantage:"0",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3884",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"10",Active:"2",Recovery:"39",Total:"50",Damage:"700",BlockAdvantage:"-20",HitAdvantage:"-16",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3885",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"7",Active:"2",Recovery:"28",Total:"36",Damage:"500",BlockAdvantage:"-14",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3886",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"10",Active:"2",Recovery:"34",Total:"45",Damage:"700",BlockAdvantage:"-16",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3887",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"3",Recovery:"18",Total:"25",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3888",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"11",Active:"3",Recovery:"32",Total:"45",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3889",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"8",Active:"11",Recovery:"17",Total:"35",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3890",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"13",Active:"6",Recovery:"22",Total:"40",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4266",name: "c.HK (Binary Ignition)", input: [],
FrameData:
[
{Version:"c.HK Binary Ignition",Startup:"13",Active:"12",Recovery:"21",Total:"45",Damage:"910",BlockAdvantage:"-14",HitAdvantage:"45",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4267",name: "c.HP (Binary Ignition)", input: [],
FrameData:
[
{Version:"c.HP Binary Ignition",Startup:"10",Active:"6",Recovery:"32",Total:"47",Damage:"910",BlockAdvantage:"-17",HitAdvantage:"13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4268",name: "c.LK (Binary Ignition)", input: [],
FrameData:
[
{Version:"c.LK Binary Ignition",Startup:"8",Active:"3",Recovery:"25",Total:"35",Damage:"650",BlockAdvantage:"-13",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4269",name: "c.LP (Binary Ignition)", input: [],
FrameData:
[
{Version:"c.LP Binary Ignition",Startup:"6",Active:"2",Recovery:"13",Total:"20",Damage:"390",BlockAdvantage:"-2",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4270",name: "LP (Binary Ignition)", input: [],
FrameData:
[
{Version:"LP Binary Ignition",Startup:"6",Active:"3",Recovery:"10",Total:"18",Damage:"390",BlockAdvantage:"0",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4271",name: "HP (Binary Ignition)", input: [],
FrameData:
[
{Version:"HP Binary Ignition",Startup:"10",Active:"2",Recovery:"39",Total:"50",Damage:"910",BlockAdvantage:"-20",HitAdvantage:"-16",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4272",name: "LK (Binary Ignition)", input: [],
FrameData:
[
{Version:"LK Binary Ignition",Startup:"7",Active:"2",Recovery:"28",Total:"36",Damage:"650",BlockAdvantage:"-14",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4273",name: "HK (Binary Ignition)", input: [],
FrameData:
[
{Version:"HK Binary Ignition",Startup:"10",Active:"2",Recovery:"34",Total:"45",Damage:"910",BlockAdvantage:"-16",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4274",name: "j.LP (Binary Ignition)", input: [],
FrameData:
[
{Version:"j.LP Binary Ignition",Startup:"5",Active:"3",Recovery:"18",Total:"25",Damage:"390",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4275",name: "j.HP (Binary Ignition)", input: [],
FrameData:
[
{Version:"j.HP Binary Ignition",Startup:"11",Active:"3",Recovery:"32",Total:"45",Damage:"910",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4276",name: "j.LK (Binary Ignition)", input: [],
FrameData:
[
{Version:"j.LK Binary Ignition",Startup:"8",Active:"11",Recovery:"17",Total:"35",Damage:"650",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4277",name: "j.HK (Binary Ignition)", input: [],
FrameData:
[
{Version:"j.HK Binary Ignition",Startup:"13",Active:"6",Recovery:"22",Total:"40",Damage:"910",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3330",name: "Sliding Straight", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"3",Recovery:"43",Total:"59",Damage:"500",BlockAdvantage:"-29",HitAdvantage:"-26",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Binary Ignition",Startup:"14",Active:"3",Recovery:"43",Total:"59",Damage:"650",BlockAdvantage:"-29",HitAdvantage:"-26",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3331",name: "Smash Hook", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"13",Active:"10",Recovery:"27",Total:"49",Damage:"700",BlockAdvantage:"-17",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Binary Ignition",Startup:"13",Active:"10",Recovery:"27",Total:"49",Damage:"910",BlockAdvantage:"-17",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3332",name: "Turn Kick", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"21",Active:"5",Recovery:"25",Total:"50",Damage:"700",BlockAdvantage:"-10",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Binary Ignition",Startup:"21",Active:"5",Recovery:"25",Total:"50",Damage:"910",BlockAdvantage:"-10",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3333",name: "Photon Impact", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"3",Recovery:"37",Total:"53",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Binary Ignition",Startup:"14",Active:"3",Recovery:"37",Total:"53",Damage:"910",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3327",name: "Power Blaster (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"81",Recovery:"79",Total:"173",Damage:"66*35\n(1674)-132*39\n(3658)",BlockAdvantage:"-62",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"14",Active:"80",Recovery:"60",Total:"153",Damage:"66*35\n(1674)-132*39\n(3658)",BlockAdvantage:"-42",HitAdvantage:"10",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Binary Ignition",Startup:"14",Active:"81",Recovery:"79",Total:"173",Damage:"84*35\n(1946)-169*39\n(4211)",BlockAdvantage:"-62",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Binary Ignition",Startup:"14",Active:"80",Recovery:"60",Total:"153",Damage:"84*35\n(1946)-169*39\n(4211)",BlockAdvantage:"-42",HitAdvantage:"10",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3328",name: "Binary Ignition (air ok)", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"11",Active:"0",Recovery:"0",Total:"11",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3329",name: "Stellar Stream (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"22",Active:"3",Recovery:"36",Total:"60",Damage:"5340\n(30 HITS)",BlockAdvantage:"-19",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:"FRAME 1-24"},
{Version:"Binary Ignition",Startup:"22",Active:"3",Recovery:"36",Total:"60",Damage:"5694\n(30 HITS)",BlockAdvantage:"-19",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:"FRAME 1-24"},]  },
],

specials:
[{ID: "3321",name: "Photon Blast (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"17",Active:"18",Recovery:"20",Total:"54",Damage:"150-300*4\n(1140)",BlockAdvantage:"8",HitAdvantage:"6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"17",Active:"18",Recovery:"20",Total:"54",Damage:"150-300*4\n(1140)",BlockAdvantage:"8",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"17",Active:"18",Recovery:"26",Total:"60",Damage:"150-300*4\n(1140)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"17",Active:"18",Recovery:"26",Total:"60",Damage:"150-300*4\n(1140)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Binary Ignition",Startup:"17",Active:"18",Recovery:"20",Total:"54",Damage:"130*3-260*8\n(1872)",BlockAdvantage:"8",HitAdvantage:"6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Binary Ignition",Startup:"17",Active:"18",Recovery:"20",Total:"54",Damage:"130*3-260*8\n(1872)",BlockAdvantage:"8",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air Binary Ignition",Startup:"17",Active:"18",Recovery:"26",Total:"60",Damage:"130*3-260*8\n(1872)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Binary Ignition",Startup:"17",Active:"18",Recovery:"26",Total:"60",Damage:"130*3-260*8\n(1872)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3322",name: "Photon Absorber (air ok)", input: [[Down,Down,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"60",Active:"0",Recovery:"0",Total:"60",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"60",Active:"0",Recovery:"0",Total:"60",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Binary Ignition",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Binary Ignition",Startup:"60",Active:"0",Recovery:"0",Total:"60",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air Binary Ignition",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air Binary Ignition",Startup:"60",Active:"0",Recovery:"0",Total:"60",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3323",name: "Strike Flurry (air ok)", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"17",Active:"2",Recovery:"30",Total:"48",Damage:"1140\n(4 HITS)",BlockAdvantage:"-12",HitAdvantage:"11",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"17",Active:"2",Recovery:"30",Total:"48",Damage:"1100\n(2 HITS)",BlockAdvantage:"-12",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"17",Active:"2",Recovery:"47",Total:"65",Damage:"1140\n(4 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"17",Active:"2",Recovery:"47",Total:"65",Damage:"1100\n(2 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Binary Ignition",Startup:"17",Active:"2",Recovery:"30",Total:"48",Damage:"1482\n(4 HITS)",BlockAdvantage:"-12",HitAdvantage:"31",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Binary Ignition",Startup:"17",Active:"2",Recovery:"30",Total:"48",Damage:"1430\n(2 HITS)",BlockAdvantage:"-12",HitAdvantage:"93",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air Binary Ignition",Startup:"17",Active:"2",Recovery:"47",Total:"65",Damage:"1482\n(4 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Binary Ignition",Startup:"17",Active:"2",Recovery:"47",Total:"65",Damage:"1430\n(2 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3324",name: "Takeoff", input: [[HCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"6",Active:"2",Recovery:"39",Total:"46",Damage:"1200",BlockAdvantage:"33",HitAdvantage:"33",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"11",Active:"2",Recovery:"39",Total:"51",Damage:"1800",BlockAdvantage:"71",HitAdvantage:"71",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Binary Ignition",Startup:"6",Active:"2",Recovery:"39",Total:"46",Damage:"1560",BlockAdvantage:"33",HitAdvantage:"33",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Binary Ignition",Startup:"11",Active:"2",Recovery:"39",Total:"51",Damage:"1950",BlockAdvantage:"110",HitAdvantage:"110",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3325",name: "Blitz Blow (air ok)", input: [[DoubleKick,"(can be directed)",],],
FrameData:
[
{Version:"Forward",Startup:"16",Active:"15",Recovery:"22",Total:"52",Damage:"800",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward",Startup:"16",Active:"15",Recovery:"22",Total:"52",Damage:"800",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up",Startup:"16",Active:"15",Recovery:"88",Total:"118",Damage:"800",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Forward",Startup:"16",Active:"15",Recovery:"88",Total:"118",Damage:"800",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Backward",Startup:"16",Active:"15",Recovery:"88",Total:"118",Damage:"800",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Forward Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Backward Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Forward Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Backward Air",Startup:"16",Active:"15",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Forward Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Backward Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"0",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Forward Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Backward Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Forward Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Backward Air Binary Ignition",Startup:"16",Active:"15",Recovery:"15",Total:"45",Damage:"1040",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3326",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"17",Active:"119",Recovery:"0",Total:"135",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"17",Active:"119",Recovery:"0",Total:"135",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"20",Active:"0",Recovery:"0",Total:"20",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Binary Ignition",Startup:"17",Active:"119",Recovery:"0",Total:"135",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Binary Ignition",Startup:"17",Active:"119",Recovery:"0",Total:"135",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel Binary Ignition",Startup:"20",Active:"0",Recovery:"0",Total:"20",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Carol Danvers is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Roy Thomas and designed by artist Gene Colan, Major Carol Danvers first appeared as a member of the United States Air Force in Marvel Super-Heroes #13 (March 1968) and debuted as the first incarnation of Ms. Marvel in Ms. Marvel #1 (January 1977) after a fusion of alien Kree and human genes gives her superhuman powers, which occurred in Captain Marvel #18 (November 1969). Debuting in the Silver Age of comics, the character was featured in a self-titled series in the late 1970s before becoming associated with superhero teams the Avengers and the X-Men. The character has also been known as Binary, Warbird, and Captain Marvel at various points in her history, and has been featured in other Marvel licensed products including video games, animated television series, and merchandise such as trading cards.",

biographyURL:"https://en.wikipedia.org/wiki/Carol_Danvers"},

{name: "Chris Redfield",
image: require('./img/characters/chrisredfield.jpg'), 
portraitImage: require('./img/characters/chrisredfieldportrait.png'),
side: "Capcom",
vitality: "10000", alternateStates:[],
players:[],
moveList: {normals:
[{ID: "4059",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4060",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4061",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4062",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4063",name: "LP", input: [],
FrameData:
[]  },
{ID: "4064",name: "HP", input: [],
FrameData:
[]  },
{ID: "4065",name: "LK", input: [],
FrameData:
[]  },
{ID: "4066",name: "HK", input: [],
FrameData:
[]  },
{ID: "4067",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4068",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4069",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4070",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3546",name: "Stun Rod", input: [[Right,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3547",name: "Flamethrower", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3548",name: "Slide", input: [[DownRight,"+",HardKick,],],
FrameData:
[]  },
{ID: "3549",name: "Elbow Drop", input: [[Jump,Down,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3550",name: "Prone Position", input: [[Down,Down,Plus,Punch,"(Varied follow-up)",],],
FrameData:
[]  },
{ID: "3551",name: "Prone Position > Prone Shot", input: [[LightPunch,"or",Kick,"(from Prone Position)",],],
FrameData:
[]  },
{ID: "3552",name: "Prone Position > Shoulder Tackle", input: [[HardPunch,"(from Prone Position)",],],
FrameData:
[]  },
],

hypers:
[{ID: "3543",name: "Grenade Launcher", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3544",name: "Sweep Combo", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3545",name: "Satellite Laser (level 3)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[]  },
],

specials:
[{ID: "3535",name: "Gun Fire (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3536",name: "Reload (air ok)", input: [[QCF,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3537",name: "Magnum Shot (air ok)", input: [[QCF,Plus,HardKick,"(Goes to Reload if out of ammo)",],],
FrameData:
[]  },
{ID: "3538",name: "Grenade Toss", input: [[Down,Down,Plus,Kick,],],
FrameData:
[]  },
{ID: "3539",name: "Combination Punch", input: [[QCB,Plus,Punch,"(Varied follow-up)",],],
FrameData:
[]  },
{ID: "3540",name: "Combination Punch L > Straight Punch", input: [[LightPunch,"(from",LightPunch,"Combination Punch)",],],
FrameData:
[]  },
{ID: "3541",name: "Straight Punch > Magnum", input: [[LightPunch,"(from Straight Punch)",],],
FrameData:
[]  },
{ID: "3542",name: "Combination Punch H > Shotgun", input: [[HardPunch,"(from",HardPunch,"Combination Punch)",],],
FrameData:
[]  },
],

},
biographyIntro:"Chris Redfield (???·???????? Kurisu Reddofirudo) is a playable character and one of the main protagonists in Capcom's Resident Evil (Biohazard in Japan) horror video game series. Chris debuted as the protagonist of the original Resident Evil video game, where he is depicted as a member of the Raccoon City police departments Special Tactics And Rescue Service (STARS) team, along with his partner Jill Valentine.",

biographyURL:"https://en.wikipedia.org/wiki/Chris_Redfield"},

{name: "Chun-Li",
image: require('./img/characters/chunli.jpg'), 
portraitImage: require('./img/characters/chunliportrait.png'),
side: "Capcom",
vitality: "9000", alternateStates:[],
players:["RyanLV"],
moveList: {normals:
[{ID: "4071",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4072",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4073",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4074",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4075",name: "LP", input: [],
FrameData:
[]  },
{ID: "4076",name: "HP", input: [],
FrameData:
[]  },
{ID: "4077",name: "LK", input: [],
FrameData:
[]  },
{ID: "4078",name: "HK", input: [],
FrameData:
[]  },
{ID: "4079",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4080",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4081",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4082",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3566",name: "Yoshirenken", input: [[Jump,Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3567",name: "Kakukyakuraku", input: [[Right,Plus,HardKick,],],
FrameData:
[]  },
{ID: "3568",name: "Kakukyakuda", input: [[Jump,Right,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3569",name: "Yosodokyaku", input: [[Jump,Down,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3570",name: "Kakuyokuda", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[]  },
],

hypers:
[{ID: "3562",name: "Kikosho", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3563",name: "Hoyokusen", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3564",name: "Gekko Senkukyaku", input: [[Jump,QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3565",name: "Shichisei Ranka (level 3)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[]  },
],

specials:
[{ID: "3553",name: "Kikoken", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3554",name: "Hyakuretsukyaku (air ok)", input: [[QCF,Plus,Kick,"(Can be followed up)",],],
FrameData:
[]  },
{ID: "3555",name: "Ground Hyakuretsukyaku > Sotengeki", input: [[HardKick,"(from Ground Hyakuretsukyaku)",],],
FrameData:
[]  },
{ID: "3556",name: "Aerial Hyakuretsukyaku > Rechisu", input: [[HardKick,"(from Aerial Hyakuretsukyaku)",],],
FrameData:
[]  },
{ID: "3557",name: "Kikoanken", input: [[ChargeBack,Right,Plus,Punch,],],
FrameData:
[]  },
{ID: "3558",name: "EX Spinning Bird Kick (air ok)", input: [[ChargeDownUp,Plus,Kick,],],
FrameData:
[]  },
{ID: "3559",name: "Tenshokyaku (air ok)", input: [[Down,Down,Plus,Kick,],],
FrameData:
[]  },
{ID: "3560",name: "Spinning Bird Kick (air ok)", input: [[QCB,Plus,Kick,],],
FrameData:
[]  },
{ID: "3561",name: "Spinning Bird Kick > Hajinkyaku", input: [[HardKick,"(from Spinning Bird Kick)",],],
FrameData:
[]  },
],

},
biographyIntro:"Chun-Li (??, also ???·?? Chun Ri, simplified Chinese: ??; traditional Chinese: ??; pinyin: Chun Lì)[1] is a character in Capcom's Street Fighter series.[2] The first female fighter of the series, she made her first appearance in Street Fighter II: The World Warrior in 1991. In the series, she is an expert martial artist and Interpol officer who restlessly seeks revenge for the death of her father at the hands of the nefarious M. Bison, leader of the Shadaloo crime syndicate.",

biographyURL:"https://en.wikipedia.org/wiki/Chun-Li"},

{name: "Dante",
image: require('./img/characters/dante.jpg'), 
portraitImage: require('./img/characters/danteportrait.png'),
side: "Capcom",
vitality: "9000", alternateStates:["Devil Trigger"],
players:["Cloud 805","Flux","Richard Nguyen","Alioune"],
moveList: {normals:
[{ID: "4083",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"16",Active:"4(16)3",Recovery:"47",Total:"85",Damage:"500+400",BlockAdvantage:"-31",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4084",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"12",Active:"4",Recovery:"35",Total:"50",Damage:"700",BlockAdvantage:"-18",HitAdvantage:"12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4085",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"3",Recovery:"17",Total:"27",Damage:"350",BlockAdvantage:"-5",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4086",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"12",Active:"2",Recovery:"33",Total:"46",Damage:"400",BlockAdvantage:"-19",HitAdvantage:"-17",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4087",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"9",Active:"3",Recovery:"14",Total:"25",Damage:"350",BlockAdvantage:"-1",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4088",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"13",Active:"3",Recovery:"35",Total:"50",Damage:"700",BlockAdvantage:"-17",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4089",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"9",Active:"2(4)2(3)2(3)2",Recovery:"17",Total:"43",Damage:"100*4\n(370)",BlockAdvantage:"1",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4090",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"13",Active:"5(7)5(7)5(7)5",Recovery:"17",Total:"70",Damage:"200*4\n(780)",BlockAdvantage:"-2",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4091",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"8",Active:"2",Recovery:"21",Total:"30",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4092",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"14",Active:"3",Recovery:"34",Total:"50",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4093",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"16",Active:"2(3)2",Recovery:"18",Total:"40",Damage:"100*2\n(190)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4094",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"14",Active:"3",Recovery:"43",Total:"59",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3600",name: "Raise the Flag", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"4",Recovery:"23",Total:"36",Damage:"500",BlockAdvantage:"-9",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3601",name: "Stinger", input: [[Right,Plus,HardPunch,"(Varied follow-up)",],],
FrameData:
[
{Version:"",Startup:"16",Active:"6",Recovery:"30",Total:"51",Damage:"800",BlockAdvantage:"-16",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3602",name: "Stinger > Million Stabs", input: [[HardPunch,"(from Stinger)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*6\n(1650)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3603",name: "Million Stabs > Air Trick", input: [[LightPunch,"(from Million Stabs)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3604",name: "Million Stabs > Million Stabs Quick", input: [[HardPunch,"(from Million Stabs)",],],
FrameData:
[
{Version:"QUICK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*6\n(1650)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3605",name: "Million Stabs > Drive", input: [[LightKick,"(from Million Stabs)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"600+900\n(1410)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3606",name: "Million Stabs > Volcano", input: [[HardKick,"(from Million Stabs)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3608",name: "Clay Pigeon", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"9",Active:"42",Recovery:"0",Total:"50",Damage:"100*4\n(370)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3609",name: "Reverse Edge", input: [[Jump,Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"11",Active:"3",Recovery:"38",Total:"51",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3610",name: "Helm Breaker", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"21",Active:"9",Recovery:"48",Total:"77",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3611",name: "Rain Storm", input: [[Jump,Down,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"17",Active:"20",Recovery:"1",Total:"37",Damage:"60*12\n(708)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3597",name: "Million Dollars", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"217",Recovery:"55",Total:"285",Damage:"100*26+150+500*2\n(2975)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3598",name: "Devil Trigger", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"14",Active:"0",Recovery:"0",Total:"14",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3599",name: "Devil Must Die (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"9",Recovery:"69",Total:"95",Damage:"5450\n(6 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3571",name: "Scatter Shot", input: [[QCF,Plus,LightPunch,"/Tap",LightPunch,"(varied follow-up)",],],
FrameData:
[
{Version:"4 HITS",Startup:"17",Active:"2(5)2(4)2(5)2",Recovery:"28",Total:"66",Damage:"100*4\n(370)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6 HITS",Startup:"",Active:"",Recovery:"",Total:"",Damage:"100*6\n(550)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"8 HITS",Startup:"",Active:"",Recovery:"",Total:"",Damage:"100*8\n(712)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"9 HITS",Startup:"",Active:"",Recovery:"",Total:"",Damage:"100*9\n(793)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3572",name: "Scatter Shot Tap > Run 'N' Gun", input: [[Left,"or",Right,"(during Scatter Shot Tap)",],],
FrameData:
[
{Version:"Forward 4 HITS",Startup:"17",Active:"2(5)2(4)4(6)2(5)2",Recovery:"26",Total:"74",Damage:"100*4\n(370)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward 6 HITS",Startup:"",Active:"",Recovery:"",Total:"",Damage:"100*6\n(550)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward 8 HITS",Startup:"",Active:"",Recovery:"",Total:"",Damage:"100*8\n(712)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward 4 HITS",Startup:"17",Active:"2(5)2(4)2(1)2(5)2(5)2",Recovery:"26",Total:"74",Damage:"100*4\n(370)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward 6 HITS",Startup:"",Active:"",Recovery:"",Total:"",Damage:"100*6\n(550)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward 8 HITS",Startup:"",Active:"",Recovery:"",Total:"",Damage:"100*8\n(712)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3573",name: "Scatter Shot (Tap) > Prop Shredder", input: [[HardPunch,"(from Scatter Shot (Tap))",],],
FrameData:
[
{Version:"",Startup:"17",Active:"2(11)6(0)6(0)6(0)6(0)6(0)1",Recovery:"0",Total:"60",Damage:"125*5+550\n(1120)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3574",name: "The Hammer", input: [[Jump,QCF,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"18",Active:"5",Recovery:"",Total:"",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3575",name: "Crystal", input: [[QCF,Plus,HardPunch,"(Can be followed up)",],],
FrameData:
[
{Version:"",Startup:"30",Active:"35",Recovery:"6",Total:"70",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3576",name: "Crystal > Revolver", input: [[HardPunch,"(from Crystal)",],],
FrameData:
[
{Version:"",Startup:"25",Active:"9(0)15(0)3(0)12(0)3(1)1(0)3",Recovery:"27",Total:"98",Damage:"300*4+500\n(1590)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3577",name: "Revolver > Million Carats", input: [[HardPunch,"(from Revolver)",],],
FrameData:
[
{Version:"",Startup:"35",Active:"11",Recovery:"31",Total:"76",Damage:"1300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3578",name: "Sky Dance", input: [[Jump,QCF,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"18",Active:"5(3)3(9)29",Recovery:"35",Total:"101",Damage:"300+200+110*4+350\n(1222)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3579",name: "Multi-Lock", input: [[QCF,Plus,LightKick,"/","Hold and release",LightKick,],],
FrameData:
[
{Version:"LVL 1",Startup:"9",Active:"2(4)2(3)2(3)2",Recovery:"17",Total:"43",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"200*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 3",Startup:"",Active:"",Recovery:"",Total:"",Damage:"200*3",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 4",Startup:"",Active:"",Recovery:"",Total:"",Damage:"200*4\n(780)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 5",Startup:"",Active:"",Recovery:"",Total:"",Damage:"200*5\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3580",name: "Multi-Lock Charge > Movements", input: [["Any directions before releases",LightKick,"(during Multi-Lock Charge)",],],
FrameData:
[]  },
{ID: "3581",name: "Air Play", input: [[Jump,QCF,Plus,LightKick,"/Hold",LightKick,],],
FrameData:
[
{Version:"",Startup:"17",Active:"1",Recovery:"",Total:"",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"400+300*2\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 3",Startup:"46",Active:"1",Recovery:"",Total:"",Damage:"250*5\n(1200)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3582",name: "Acid Rain", input: [[QCF,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"45",Active:"28(4)9",Recovery:"0",Total:"85",Damage:"450*3+120*10\n(2217)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3583",name: "Killer Bee", input: [[Jump,QCF,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"1",Recovery:"",Total:"",Damage:"1100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3584",name: "Reverb Shock", input: [[Down,Down,Plus,LightPunch,"(Can be followed up)",],],
FrameData:
[
{Version:"",Startup:"7",Active:"3(0)3(0)3(0)1(1)4",Recovery:"28",Total:"49",Damage:"120*4+250",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3585",name: "Reverb Shock > Jam Session", input: [[LightPunch,"(from Reverb Shock)",],],
FrameData:
[
{Version:"",Startup:"18",Active:"4(0)4(0)4(0)4(0)4(0)4(0)4(0)4(0)4(0)7",Recovery:"24",Total:"84",Damage:"100*9+200\n(1050)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3586",name: "Volcano", input: [[Down,Down,Plus,HardPunch,"(Can be followed up)",],],
FrameData:
[
{Version:"",Startup:"16",Active:"10",Recovery:"55",Total:"80",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3587",name: "Volcano > Beehive", input: [[HardPunch,"(from Volcano)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"250*8+700\n(2290)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"13",Active:"6(0)6(0)6(0)6(0)6(0)6(0)6(0)7(19)2(0)4",Recovery:"24",Total:"110",Damage:"250*8+700\n(2290)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3588",name: "Air Trick", input: [[QCB,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"24",Active:"26",Recovery:"6",Total:"55",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 14-16"},]  },
{ID: "3589",name: "Jet Stream", input: [[QCB,Plus,HardPunch,"(Varied follow-up)",],],
FrameData:
[
{Version:"",Startup:"20",Active:"2(5)4(2)4(4)4(2)4(14)4",Recovery:"33",Total:"101",Damage:"100+300*4+400\n(1560)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3590",name: "Jet Stream > Crazy Dance", input: [[LightPunch,"(from Jet Stream)",],],
FrameData:
[
{Version:"",Startup:"17",Active:"9",Recovery:"16",Total:"41",Damage:"1925\n(10 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3591",name: "Jet Stream > Twister", input: [[HardPunch,"(from Jet Stream)",],],
FrameData:
[
{Version:"",Startup:"24",Active:"9(3)12",Recovery:"24",Total:"71",Damage:"100*7\n(690)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3592",name: "Twister > Tempest", input: [[HardPunch,"(from Twister)",],],
FrameData:
[
{Version:"",Startup:"24",Active:"9(15)33",Recovery:"22",Total:"102",Damage:"100*7+200*3\n(1230)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3593",name: "Bold Move", input: [[DoubleKick,],],
FrameData:
[
{Version:"",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3594",name: "Thunder Bolt (air only)", input: [[QCB,Plus,LightKick,"(in Devil Trigger only)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"55*4-110*8\n(858)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3595",name: "Vortex (air only)", input: [[QCB,Plus,HardKick,"(in Devil Trigger only)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"165*4+330\n(957)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3596",name: "Air Raid (air ok)", input: [[QCB,Plus,DoubleKick,"(in Devil Trigger only)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Dante (???) is a fictional character and the primary protagonist of the Devil May Cry series created and published by Capcom.[3] In the first four games, Dante is a mercenary, private investigator and demon hunting vigilante dedicated to exterminating them and other malevolent supernatural foes, a mission he follows in pursuit of those that killed his mother and corrupted his brother. He is the son of Sparda, a demon of great power and as a result of his heritage, he possesses numerous powers beyond that of any human, which he uses in combination with a variety of weapons to accomplish his goals. The character also appears in several Devil May Cry novels and manga volumes; and is featured in the 2007 anime television series. A reboot of the series by Ninja Theory features him in an alternate universe as a young adult fighting against demons. Dante has also appeared as a guest character in multiple crossover games. Multiple voice actors have played him across the franchise.",

biographyURL:"https://en.wikipedia.org/wiki/Dante_(Devil_May_Cry)"},

{name: "Doctor Strange",
image: require('./img/characters/doctorstrange.jpg'), 
portraitImage: require('./img/characters/doctorstrangeportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:["Flash Metroid"],
moveList: {normals:
[{ID: "3891",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"10",Active:"3",Recovery:"38",Total:"50",Damage:"700",BlockAdvantage:"-21",HitAdvantage:"38",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3892",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"11",Active:"3",Recovery:"37",Total:"50",Damage:"700",BlockAdvantage:"-19",HitAdvantage:"11",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3893",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"10",Recovery:"18",Total:"35",Damage:"500",BlockAdvantage:"-12",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3894",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"6",Active:"3",Recovery:"14",Total:"22",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3895",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"6",Active:"3",Recovery:"14",Total:"22",Damage:"300",BlockAdvantage:"-4",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3896",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"11",Active:"4",Recovery:"34",Total:"48",Damage:"700",BlockAdvantage:"-18",HitAdvantage:"-14",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3897",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"3",Recovery:"25",Total:"35",Damage:"500",BlockAdvantage:"-11",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3898",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"12",Active:"3",Recovery:"36",Total:"50",Damage:"700",BlockAdvantage:"-19",HitAdvantage:"-15",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3899",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"6",Active:"3",Recovery:"14",Total:"22",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3900",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"11",Active:"5",Recovery:"27",Total:"42",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3901",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"3",Recovery:"24",Total:"35",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3902",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"9",Active:"3",Recovery:"36",Total:"47",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3351",name: "Mysterious Slice (air ok)", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"8",Active:"3",Recovery:"20",Total:"30",Damage:"500",BlockAdvantage:"-6",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"9",Active:"3",Recovery:"26",Total:"37",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3352",name: "Spirit Circle", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"4",Recovery:"19",Total:"32",Damage:"500",BlockAdvantage:"-5",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3353",name: "Impact Palm (air ok)", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"7",Active:"4",Recovery:"40",Total:"50",Damage:"700",BlockAdvantage:"-24",HitAdvantage:"122",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3354",name: "Illusion", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"4",Active:"18",Recovery:"9",Total:"30",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3348",name: "Spell of Vishanti (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"17",Active:"49",Recovery:"48",Total:"113",Damage:"300*10\n(2520)",BlockAdvantage:"-30",HitAdvantage:"15",ChAdvantage:"",InvincibilityFrames:"FRAME 11"},
{Version:"Air",Startup:"17",Active:"49",Recovery:"48",Total:"113",Damage:"300*10\n(2520)",BlockAdvantage:"-30",HitAdvantage:"15",ChAdvantage:"",InvincibilityFrames:"FRAME 11"},]  },
{ID: "3349",name: "Seven Rings of Raggadorr", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"11",Active:"24",Recovery:"38",Total:"72",Damage:"150*23\n(2190)-300*27\n(4839)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-11.5"},]  },
{ID: "3350",name: "Crimson Band of Cytorrak (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"16",Active:"30",Recovery:"50",Total:"95",Damage:"5250\n(17 HITS)",BlockAdvantage:"-21",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:"FRAME 1-20"},]  },
],

specials:
[{ID: "3334",name: "Flames of the Faltine (air ok)", input: [[QCF,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"11",Active:"40",Recovery:"0",Total:"50",Damage:"500",BlockAdvantage:"12",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"11",Active:"40",Recovery:"0",Total:"50",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1 GRACE",Startup:"11",Active:"6(3)31",Recovery:"0",Total:"50",Damage:"250*3",BlockAdvantage:"15",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2 GRACES",Startup:"11",Active:"6(3)8(3)20",Recovery:"0",Total:"50",Damage:"200*5\n(960)",BlockAdvantage:"90",HitAdvantage:"110",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3 GRACES",Startup:"11",Active:"7(3)6(3)5(2)14",Recovery:"0",Total:"50",Damage:"1300",BlockAdvantage:"43",HitAdvantage:"124",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3335",name: "Bolts of Balthakk", input: [[QCF,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"21",Active:"18(29)24",Recovery:"34",Total:"125",Damage:"200*8\n(1480)",BlockAdvantage:"-22",HitAdvantage:"50",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3336",name: "Daggers of Denak (air ok)", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"35",Active:"16",Recovery:"0",Total:"50",Damage:"800",BlockAdvantage:"21",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"70",Active:"0",Recovery:"0",Total:"70",Damage:"400*3\n(1160)",BlockAdvantage:"65",HitAdvantage:"69",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"35",Active:"16",Recovery:"0",Total:"50",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"70",Active:"0",Recovery:"0",Total:"70",Damage:"400*3\n(1160)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3337",name: "Mystic Sword - Duel Slash", input: [[DragonPunch,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"8",Active:"3(3)3(7)3",Recovery:"24",Total:"50",Damage:"200*2+500",BlockAdvantage:"-7",HitAdvantage:"30",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"11",Active:"3(42)3(3)3(7)3(19)6",Recovery:"26",Total:"125",Damage:"200*3+600\n(1140)",BlockAdvantage:"-12",HitAdvantage:"70",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3338",name: "Mystic Sword - Shockwave", input: [[DragonPunch,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"12",Active:"34",Recovery:"5",Total:"50",Damage:"200+900",BlockAdvantage:"-18",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"12",Active:"39",Recovery:"0",Total:"50",Damage:"200+900",BlockAdvantage:"-18",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3339",name: "Grace of Hoggoth (air ok)", input: [[QCB,Plus,Punch,"(Varied follow-up)",],],
FrameData:
[
{Version:"LP",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP DETONATION",Startup:"11",Active:"5(1)34",Recovery:"0",Total:"50",Damage:"500",BlockAdvantage:"2",HitAdvantage:"78",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3340",name: "Grace of Hoggoth > Spatial Magic - Cast A", input: [[Punch,"(from Grace of Hoggoth)",],],
FrameData:
[
{Version:"LP",Startup:"61",Active:"0",Recovery:"0",Total:"61",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"61",Active:"0",Recovery:"0",Total:"61",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6LP",Startup:"61",Active:"0",Recovery:"0",Total:"61",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6HP",Startup:"61",Active:"0",Recovery:"0",Total:"61",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"66",Active:"0",Recovery:"0",Total:"66",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"66",Active:"0",Recovery:"0",Total:"66",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6LP Air",Startup:"66",Active:"0",Recovery:"0",Total:"66",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6HP Air",Startup:"66",Active:"0",Recovery:"0",Total:"66",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3341",name: "Grace of Hoggoth > Spatial Magic - Cast B", input: [[Punch,">",Punch,"(from Grace of Hoggoth)",],],
FrameData:
[
{Version:"LP",Startup:"87",Active:"0",Recovery:"0",Total:"87",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"87",Active:"0",Recovery:"0",Total:"87",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"92",Active:"0",Recovery:"0",Total:"92",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"92",Active:"0",Recovery:"0",Total:"92",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6LP Air",Startup:"92",Active:"0",Recovery:"0",Total:"92",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6HP Air",Startup:"92",Active:"0",Recovery:"0",Total:"92",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6LP",Startup:"87",Active:"0",Recovery:"0",Total:"87",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"6HP",Startup:"87",Active:"0",Recovery:"0",Total:"87",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3342",name: "Spatial Magic - Cast B > Scatter", input: [[LightPunch,"or",LightKick,"(from Spatial Magic - Cast B)",],],
FrameData:
[
{Version:"LP Air",Startup:"128",Active:"0",Recovery:"0",Total:"128",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"128",Active:"0",Recovery:"0",Total:"128",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"123",Active:"0",Recovery:"0",Total:"123",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"123",Active:"0",Recovery:"0",Total:"123",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3343",name: "Spatial Magic - Cast B > Gather", input: [[HardPunch,"or",HardKick,"(from Spatial Magic - Cast B)",],],
FrameData:
[
{Version:"LK Air",Startup:"128",Active:"0",Recovery:"0",Total:"128",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"128",Active:"0",Recovery:"0",Total:"128",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"123",Active:"0",Recovery:"0",Total:"123",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"123",Active:"0",Recovery:"0",Total:"123",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3344",name: "Tears of Agamotto (air ok)", input: [[QCB,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"45",Active:"0",Recovery:"0",Total:"45",Damage:"1300",BlockAdvantage:"12",HitAdvantage:"71",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"45",Active:"0",Recovery:"0",Total:"45",Damage:"1300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"IMPACT PALM",Startup:"7",Active:"4",Recovery:"40",Total:"50",Damage:"1300",BlockAdvantage:"-24",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},
{Version:"IMPACT PALM Air",Startup:"1",Active:"25",Recovery:"0",Total:"25",Damage:"1300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3345",name: "Eye of Agamotto (air ok)", input: [[QCB,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"32",Active:"14",Recovery:"0",Total:"45",Damage:"100*5",BlockAdvantage:"44",HitAdvantage:"48",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"32",Active:"14",Recovery:"0",Total:"45",Damage:"100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"IMPACT PALM",Startup:"1",Active:"50",Recovery:"0",Total:"50",Damage:"100*5",BlockAdvantage:"1",HitAdvantage:"5",ChAdvantage:"",InvincibilityFrames:""},
{Version:"IMPACT PALM Air",Startup:"1",Active:"22",Recovery:"0",Total:"22",Damage:"100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3346",name: "Teleportation (air ok)", input: [[Down,Down,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"11",Active:"6",Recovery:"24",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},
{Version:"HP",Startup:"11",Active:"6",Recovery:"24",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},
{Version:"LK",Startup:"11",Active:"6",Recovery:"24",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},
{Version:"HK",Startup:"11",Active:"6",Recovery:"24",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},
{Version:"LP Air",Startup:"11",Active:"6",Recovery:"24",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},
{Version:"HP Air",Startup:"18",Active:"1",Recovery:"22",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},
{Version:"LK Air",Startup:"11",Active:"6",Recovery:"24",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},
{Version:"HK Air",Startup:"11",Active:"6",Recovery:"24",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11-20"},]  },
{ID: "3347",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Doctor Strange (Stephen Vincent Strange, M.D.) is a fictional superhero appearing in American comic books published by Marvel Comics. Created by artist Steve Ditko and writer Stan Lee,[1] the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.",

biographyURL:"https://en.wikipedia.org/wiki/Doctor_Strange"},

{name: "Dormammu",
image: require('./img/characters/dormammu.jpg'), 
portraitImage: require('./img/characters/dormammuportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:["Filipino Champ","Richard Nguyen","Alioune","Teemo","Angelic"],
moveList: {normals:
[{ID: "3903",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"13",Active:"2",Recovery:"26",Total:"40",Damage:"700",BlockAdvantage:"-8",HitAdvantage:"51",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3904",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"10",Active:"20",Recovery:"11",Total:"40",Damage:"700",BlockAdvantage:"-9",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3905",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"10",Active:"5",Recovery:"21",Total:"35",Damage:"500",BlockAdvantage:"-11",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3906",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"7",Active:"5",Recovery:"22",Total:"33",Damage:"500",BlockAdvantage:"-11",HitAdvantage:"8",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3907",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"7",Active:"3",Recovery:"24",Total:"33",Damage:"500",BlockAdvantage:"-11",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3908",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"14",Active:"3(0)3(0)3(0)3(0)19",Recovery:"3",Total:"47",Damage:"150*5\n(735)",BlockAdvantage:"0",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3909",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"9",Active:"5",Recovery:"22",Total:"35",Damage:"500",BlockAdvantage:"-11",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3910",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"13",Active:"5",Recovery:"21",Total:"38",Damage:"700",BlockAdvantage:"-4",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3911",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"7",Active:"4",Recovery:"24",Total:"34",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3912",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"12",Active:"5",Recovery:"24",Total:"40",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3913",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"3",Recovery:"29",Total:"40",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3914",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"14",Active:"5",Recovery:"27",Total:"45",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3366",name: "Dark Matter", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"21",Active:"2",Recovery:"23",Total:"45",Damage:"700",BlockAdvantage:"-5",HitAdvantage:"46",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3367",name: "Chaos Ripper", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[
{Version:"Air",Startup:"11",Active:"4",Recovery:"29",Total:"43",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3363",name: "Chaotic Flame", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"9",Active:"90",Recovery:"36",Total:"134",Damage:"90*26\n(1719)-180*29\n(3690)",BlockAdvantage:"-17",HitAdvantage:"48",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3364",name: "Stalking Flare", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"31",Active:"67",Recovery:"0",Total:"97",Damage:"150*20\n(2490)",BlockAdvantage:"69",HitAdvantage:"73",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3365",name: "Dark Dimension (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"12",Active:"40",Recovery:"54",Total:"105",Damage:"5700\n(2 HITS)",BlockAdvantage:"-52",HitAdvantage:"73",ChAdvantage:"",InvincibilityFrames:"FRAME 1-18"},]  },
],

specials:
[{ID: "3355",name: "Dark Hole (air ok)", input: [[QCF,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"-1",HitAdvantage:"27",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"-1",HitAdvantage:"27",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"-1",HitAdvantage:"27",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"-1",HitAdvantage:"27",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"20",Active:"36",Recovery:"19",Total:"74",Damage:"120*9\n(1032)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3356",name: "Purification", input: [[DragonPunch,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"26",Active:"31",Recovery:"14",Total:"70",Damage:"330*4\n(1254)",BlockAdvantage:"-1",HitAdvantage:"37",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"26",Active:"31",Recovery:"14",Total:"70",Damage:"330*4\n(1254)",BlockAdvantage:"-1",HitAdvantage:"37",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"26",Active:"31",Recovery:"14",Total:"70",Damage:"330*4\n(1254)",BlockAdvantage:"-1",HitAdvantage:"37",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"26",Active:"31",Recovery:"14",Total:"70",Damage:"330*4\n(1254)",BlockAdvantage:"-1",HitAdvantage:"37",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Liberation 3D",Startup:"26",Active:"25(0)14",Recovery:"21",Total:"85",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Liberation 2D1C",Startup:"26",Active:"70",Recovery:"0",Total:"95",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Liberation 1D2C",Startup:"26",Active:"50",Recovery:"0",Total:"75",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Liberation 3C",Startup:"26",Active:"94",Recovery:"0",Total:"119",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3357",name: "Mass Change (air ok)", input: [[Down,Down,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"",Startup:"12",Active:"1",Recovery:"17",Total:"29",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"12",Active:"1",Recovery:"17",Total:"29",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3358",name: "Dark Spell - Destruction (air ok)", input: [[QCB,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3359",name: "Dark Spell - Creation (air ok)", input: [[QCB,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"35",Active:"0",Recovery:"0",Total:"35",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3360",name: "Liberation (air ok)", input: [[QCB,Plus,HardPunch,"or",HardKick,],],
FrameData:
[
{Version:"Dark Hole  3D",Startup:"20",Active:"35(0)14",Recovery:"21",Total:"89",Damage:"",BlockAdvantage:"-15",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Dark Hole  2D1C",Startup:"20",Active:"36(4)40",Recovery:"0",Total:"99",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Dark Hole  1D2C",Startup:"20",Active:"60",Recovery:"0",Total:"79",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Dark Hole  3C",Startup:"20",Active:"36(1)67",Recovery:"0",Total:"123",Damage:"",BlockAdvantage:"54",HitAdvantage:"56",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Dark Hole  3D Air",Startup:"20",Active:"36(11)14",Recovery:"21",Total:"101",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Dark Hole  2D1C Air",Startup:"20",Active:"36(16)40",Recovery:"0",Total:"111",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Dark Hole  1D2C Air",Startup:"20",Active:"36(5)31",Recovery:"0",Total:"91",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Dark Hole  3C Air",Startup:"20",Active:"36(13)67",Recovery:"0",Total:"135",Damage:"",BlockAdvantage:"54",HitAdvantage:"135",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"14",Active:"8",Recovery:"19",Total:"40",Damage:"1000",BlockAdvantage:"-7",HitAdvantage:"8",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1D",Startup:"21",Active:"5",Recovery:"15",Total:"40",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1C",Startup:"10",Active:"36",Recovery:"0",Total:"45",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2D",Startup:"16",Active:"9",Recovery:"16",Total:"40",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1D1C",Startup:"10",Active:"41",Recovery:"0",Total:"50",Damage:"150*12\n(1635)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2C",Startup:"10",Active:"38",Recovery:"0",Total:"47",Damage:"500*3\n(1450)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3D",Startup:"16",Active:"14",Recovery:"21",Total:"50",Damage:"1500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2D1C",Startup:"21",Active:"40",Recovery:"0",Total:"60",Damage:"300+10*32\n(2790)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1D2C",Startup:"10",Active:"31",Recovery:"0",Total:"40",Damage:"1300+150*7\n(2005)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3C",Startup:"18",Active:"67",Recovery:"0",Total:"84",Damage:"100*10\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"26",Active:"8",Recovery:"19",Total:"52",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1D Air",Startup:"33",Active:"5",Recovery:"15",Total:"52",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1C Air",Startup:"22",Active:"36",Recovery:"0",Total:"57",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2D Air",Startup:"28",Active:"9",Recovery:"16",Total:"52",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1D1C Air",Startup:"22",Active:"41",Recovery:"0",Total:"62",Damage:"150*12\n(1635)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2C Air",Startup:"22",Active:"38",Recovery:"0",Total:"59",Damage:"500*3\n(1450)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3D Air",Startup:"28",Active:"14",Recovery:"21",Total:"62",Damage:"1500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"2D1C Air",Startup:"33",Active:"40",Recovery:"0",Total:"72",Damage:"300+10*32\n(2790)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"1D2C Air",Startup:"22",Active:"31",Recovery:"0",Total:"52",Damage:"1300+150*7\n(2005)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3C Air",Startup:"30",Active:"67",Recovery:"0",Total:"96",Damage:"100*10\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3361",name: "Dimension Fang", input: [[Left,"or",Down,"or",Right,Plus,DoubleKick,],],
FrameData:
[
{Version:"Destruction",Startup:"14",Active:"2(22)19",Recovery:"49",Total:"105",Damage:"0+300*4+600\n(1680)",BlockAdvantage:"-32",HitAdvantage:"45",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Destruction 3D",Startup:"14",Active:"2(22)19(29)14",Recovery:"21",Total:"120",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Destruction 2D1C",Startup:"14",Active:"2(22)19(34)40",Recovery:"0",Total:"130",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Destruction 1D2C",Startup:"14",Active:"2(22)19(23)31",Recovery:"0",Total:"110",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Destruction 3C",Startup:"14",Active:"2(22)19(31)67",Recovery:"0",Total:"154",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Creation",Startup:"14",Active:"2(22)19",Recovery:"49",Total:"105",Damage:"0+300*4+600\n(1680)",BlockAdvantage:"-32",HitAdvantage:"54",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Creation 3D",Startup:"14",Active:"2(22)19(29)14",Recovery:"21",Total:"120",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Creation 2D1C",Startup:"14",Active:"2(22)19(34)40",Recovery:"0",Total:"130",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Creation 1D2C",Startup:"14",Active:"2(22)19(23)31",Recovery:"0",Total:"110",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Creation 3C",Startup:"14",Active:"2(22)19(31)67",Recovery:"0",Total:"154",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation",Startup:"14",Active:"2(23)19(26)8",Recovery:"19",Total:"110",Damage:"0+300*4+600+1000\n(2480)",BlockAdvantage:"-17",HitAdvantage:"7",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation",Startup:"14",Active:"2(23)19(26)8",Recovery:"19",Total:"110",Damage:"0+300*4+600\n(1680)",BlockAdvantage:"-17",HitAdvantage:"45",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation",Startup:"14",Active:"2(23)19(26)8",Recovery:"19",Total:"110",Damage:"0+300*4+600\n(1680)",BlockAdvantage:"-44",HitAdvantage:"43",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 1D",Startup:"14",Active:"2(23)19(33)5",Recovery:"15",Total:"110",Damage:"",BlockAdvantage:"-13",HitAdvantage:"42",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 1C",Startup:"14",Active:"2(23)19(22)36",Recovery:"0",Total:"115",Damage:"",BlockAdvantage:"5",HitAdvantage:"30",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 2D",Startup:"14",Active:"2(23)19(28)9",Recovery:"16",Total:"110",Damage:"",BlockAdvantage:"-5",HitAdvantage:"56",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 1D1C",Startup:"14",Active:"2(23)19(22)41",Recovery:"0",Total:"120",Damage:"",BlockAdvantage:"46",HitAdvantage:"35",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 2C",Startup:"14",Active:"2(23)19(22)38",Recovery:"0",Total:"117",Damage:"",BlockAdvantage:"40",HitAdvantage:"58",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 3D",Startup:"14",Active:"2(23)19(28)14",Recovery:"21",Total:"120",Damage:"",BlockAdvantage:"-15",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 2D1C",Startup:"14",Active:"2(23)19(33)40",Recovery:"0",Total:"130",Damage:"",BlockAdvantage:"47",HitAdvantage:"29",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 1D2C",Startup:"14",Active:"2(23)19(22)31",Recovery:"0",Total:"110",Damage:"",BlockAdvantage:"73",HitAdvantage:"70",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Revelation 3C",Startup:"14",Active:"2(23)19(30)67",Recovery:"0",Total:"154",Damage:"",BlockAdvantage:"54",HitAdvantage:"105",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3362",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Dormammu (/dərˈmɑːmuː/) is a fictional character appearing in American comic books published by Marvel Comics. The character first appeared in Strange Tales #126 (November 1964), and was created by Stan Lee and Steve Ditko.",

biographyURL:"https://en.wikipedia.org/wiki/Dormammu"},

{name: "Firebrand",
image: require('./img/characters/firebrand.jpg'), 
portraitImage: require('./img/characters/firebrandportrait.png'),
side: "Capcom",
vitality: "10000", alternateStates:["Luminous Body"],
players:["ApologyMan","Angelic"],
moveList: {normals:
[{ID: "4095",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"10",Active:"12",Recovery:"24",Total:"45",Damage:"700",BlockAdvantage:"-17",HitAdvantage:"42",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4096",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"12",Active:"6",Recovery:"28",Total:"45",Damage:"700",BlockAdvantage:"-13",HitAdvantage:"20",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4097",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"6",Active:"5",Recovery:"30",Total:"40",Damage:"400",BlockAdvantage:"-16",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4098",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"5",Active:"3",Recovery:"12",Total:"19",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4099",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"6",Active:"2",Recovery:"11",Total:"18",Damage:"300",BlockAdvantage:"-1",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4100",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"11",Active:"3(7)4",Recovery:"26",Total:"50",Damage:"300+400",BlockAdvantage:"-10",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4101",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"5",Recovery:"21",Total:"33",Damage:"400",BlockAdvantage:"-7",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4102",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"14",Active:"6",Recovery:"47",Total:"66",Damage:"700",BlockAdvantage:"-31",HitAdvantage:"-26",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4103",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"6",Active:"5",Recovery:"22",Total:"32",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4104",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"11",Active:"5",Recovery:"32",Total:"47",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4105",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"6",Recovery:"21",Total:"35",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4106",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"10",Active:"3(6)3",Recovery:"33",Total:"54",Damage:"300+400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4282",name: "LP (Luminous Body)", input: [],
FrameData:
[
{Version:"LP Luminous Body",Startup:"5",Active:"2",Recovery:"8",Total:"14",Damage:"300",BlockAdvantage:"2",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"5",Active:"2",Recovery:"9",Total:"15",Damage:"300",BlockAdvantage:"1",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4283",name: "HP (Luminous Body)", input: [],
FrameData:
[
{Version:"HP Luminous Body",Startup:"9",Active:"2(6)3",Recovery:"21",Total:"40",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"9",Active:"3(5)3",Recovery:"21",Total:"40",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"9",Active:"3(5)4",Recovery:"20",Total:"40",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"9",Active:"3(5)4",Recovery:"21",Total:"41",Damage:"300+400",BlockAdvantage:"-5",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"10",Active:"2(6)3",Recovery:"21",Total:"41",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4284",name: "LK (Luminous Body)", input: [],
FrameData:
[
{Version:"LK Luminous Body",Startup:"6",Active:"4",Recovery:"17",Total:"26",Damage:"400",BlockAdvantage:"-2",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"7",Active:"4",Recovery:"17",Total:"27",Damage:"400",BlockAdvantage:"-2",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4285",name: "HK (Luminous Body)", input: [],
FrameData:
[
{Version:"HK Luminous Body",Startup:"11",Active:"5",Recovery:"38",Total:"53",Damage:"700",BlockAdvantage:"-21",HitAdvantage:"49~50",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"12",Active:"5",Recovery:"37",Total:"53",Damage:"700",BlockAdvantage:"-21",HitAdvantage:"49~50",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"12",Active:"4",Recovery:"38",Total:"53",Damage:"700",BlockAdvantage:"-21",HitAdvantage:"49~50",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4286",name: "j.LP (Luminous Body)", input: [],
FrameData:
[
{Version:"j.LP Luminous Body",Startup:"5",Active:"4",Recovery:"17",Total:"25",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4287",name: "j.HP (Luminous Body)", input: [],
FrameData:
[
{Version:"j.HP Luminous Body",Startup:"9",Active:"4",Recovery:"25",Total:"37",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4288",name: "j.LK (Luminous Body)", input: [],
FrameData:
[
{Version:"j.LK Luminous Body",Startup:"8",Active:"5",Recovery:"16",Total:"28",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4289",name: "j.HK (Luminous Body)", input: [],
FrameData:
[
{Version:"j.HK Luminous Body",Startup:"9",Active:"2(5)2",Recovery:"27",Total:"44",Damage:"300+400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4290",name: "c.HK (Luminous Body)", input: [],
FrameData:
[
{Version:"c.HK Luminous Body",Startup:"8",Active:"10",Recovery:"19",Total:"36",Damage:"700",BlockAdvantage:"-10",HitAdvantage:"49",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.HK Luminous Body",Startup:"9",Active:"9",Recovery:"19",Total:"36",Damage:"700",BlockAdvantage:"-9",HitAdvantage:"50",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4291",name: "c.HP (Luminous Body)", input: [],
FrameData:
[
{Version:"c.HP Luminous Body",Startup:"10",Active:"4",Recovery:"23",Total:"36",Damage:"700",BlockAdvantage:"-7",HitAdvantage:"25~26",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.HP Luminous Body",Startup:"10",Active:"5",Recovery:"22",Total:"36",Damage:"700",BlockAdvantage:"-6",HitAdvantage:"25~26",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4292",name: "c.LK (Luminous Body)", input: [],
FrameData:
[
{Version:"c.LK Luminous Body",Startup:"5",Active:"4",Recovery:"24",Total:"32",Damage:"400",BlockAdvantage:"-10",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4293",name: "c.LP (Luminous Body)", input: [],
FrameData:
[
{Version:"c.LP Luminous Body",Startup:"4",Active:"2",Recovery:"10",Total:"15",Damage:"300",BlockAdvantage:"0",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.LP Luminous Body",Startup:"4",Active:"3",Recovery:"9",Total:"15",Damage:"300",BlockAdvantage:"0",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.LP Luminous Body",Startup:"5",Active:"2",Recovery:"10",Total:"16",Damage:"300",BlockAdvantage:"0",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4294",name: "LP (Luminous Body)", input: [],
FrameData:
[
{Version:"LP Luminous Body",Startup:"5",Active:"2",Recovery:"8",Total:"14",Damage:"300",BlockAdvantage:"2",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"5",Active:"2",Recovery:"9",Total:"15",Damage:"300",BlockAdvantage:"1",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4295",name: "HP (Luminous Body)", input: [],
FrameData:
[
{Version:"HP Luminous Body",Startup:"9",Active:"2(6)3",Recovery:"21",Total:"40",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"9",Active:"3(5)3",Recovery:"21",Total:"40",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"9",Active:"3(5)4",Recovery:"20",Total:"40",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"9",Active:"3(5)4",Recovery:"21",Total:"41",Damage:"300+400",BlockAdvantage:"-5",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"10",Active:"2(6)3",Recovery:"21",Total:"41",Damage:"300+400",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4296",name: "LK (Luminous Body)", input: [],
FrameData:
[
{Version:"LK Luminous Body",Startup:"6",Active:"4",Recovery:"17",Total:"26",Damage:"400",BlockAdvantage:"-2",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"7",Active:"4",Recovery:"17",Total:"27",Damage:"400",BlockAdvantage:"-2",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4297",name: "HK (Luminous Body)", input: [],
FrameData:
[
{Version:"HK Luminous Body",Startup:"11",Active:"5",Recovery:"38",Total:"53",Damage:"700",BlockAdvantage:"-21",HitAdvantage:"49~50",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"12",Active:"5",Recovery:"37",Total:"53",Damage:"700",BlockAdvantage:"-21",HitAdvantage:"49~50",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"12",Active:"4",Recovery:"38",Total:"53",Damage:"700",BlockAdvantage:"-21",HitAdvantage:"49~50",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4298",name: "j.LP (Luminous Body)", input: [],
FrameData:
[
{Version:"j.LP Luminous Body",Startup:"5",Active:"4",Recovery:"17",Total:"25",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4299",name: "j.HP (Luminous Body)", input: [],
FrameData:
[
{Version:"j.HP Luminous Body",Startup:"9",Active:"4",Recovery:"25",Total:"37",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4300",name: "j.LK (Luminous Body)", input: [],
FrameData:
[
{Version:"j.LK Luminous Body",Startup:"8",Active:"5",Recovery:"16",Total:"28",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4301",name: "j.HK (Luminous Body)", input: [],
FrameData:
[
{Version:"j.HK Luminous Body",Startup:"9",Active:"2(5)2",Recovery:"27",Total:"44",Damage:"300+400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3624",name: "Demonic Knife", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"8",Active:"4",Recovery:"26",Total:"37",Damage:"500",BlockAdvantage:"-14",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"6",Active:"4",Recovery:"20",Total:"29",Damage:"500",BlockAdvantage:"-9",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"7",Active:"3",Recovery:"21",Total:"30",Damage:"500",BlockAdvantage:"-8",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3625",name: "Twin Fang", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"9",Active:"7",Recovery:"15",Total:"30",Damage:"500",BlockAdvantage:"-3",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"7",Active:"6",Recovery:"12",Total:"24",Damage:"500",BlockAdvantage:"1",HitAdvantage:"6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"8",Active:"5",Recovery:"12",Total:"24",Damage:"500",BlockAdvantage:"2",HitAdvantage:"7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3626",name: "Devil's Claw", input: [[Jump,Down,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"19",Active:"23",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"15-16",Active:"19",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3620",name: "Dark Fire (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"17",Active:"35",Recovery:"53",Total:"104",Damage:"250*17\n(3250)",BlockAdvantage:"-41",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:"FRAME 13-14"},
{Version:"Air",Startup:"17",Active:"35",Recovery:"58",Total:"109",Damage:"250*17\n(3250)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 13"},
{Version:"Luminous Body",Startup:"14-15",Active:"28",Recovery:"42",Total:"84",Damage:"250*17\n(3250)",BlockAdvantage:"-29",HitAdvantage:"56",ChAdvantage:"",InvincibilityFrames:"FRAME 11-12"},
{Version:"Air Luminous Body",Startup:"13-14",Active:"28",Recovery:"46",Total:"87",Damage:"250*17\n(3250)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 11"},]  },
{ID: "3621",name: "Luminous Body (air ok)", input: [[Down,Down,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"0",Recovery:"0",Total:"14",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-12"},]  },
{ID: "3622",name: "Chaos Tide", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"34",Active:"0",Recovery:"0",Total:"34",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-34"},
{Version:"Luminous Body",Startup:"27",Active:"0",Recovery:"0",Total:"27",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-27"},]  },
{ID: "4264",name: "Chaos Tide > Hell Spitfire", input: [[LightPunch,"or",LightKick,],],
FrameData:
[
{Version:"LP",Startup:"17",Active:"1",Recovery:"",Total:"",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"27",Active:"1",Recovery:"",Total:"",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"17",Active:"1",Recovery:"",Total:"",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"27",Active:"1",Recovery:"",Total:"",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4265",name: "Chaos Tide > Demon Missile", input: [[HardPunch,"or",HardKick,],],
FrameData:
[
{Version:"HP",Startup:"16",Active:"1",Recovery:"",Total:"",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"3",Active:"1",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"16",Active:"1",Recovery:"",Total:"",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"3",Active:"1",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3623",name: "Red Blaze (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"14",Active:"23",Recovery:"75",Total:"111",Damage:"5069\n(18 HITS)",BlockAdvantage:"-75",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"11",Active:"19",Recovery:"60",Total:"89",Damage:"5069\n(18 HITS)",BlockAdvantage:"-56~-57",HitAdvantage:"35",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"12",Active:"18",Recovery:"60",Total:"89",Damage:"5069\n(18 HITS)",BlockAdvantage:"-56~-57",HitAdvantage:"35",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3612",name: "Hell Spitfire (air ok)", input: [[QCF,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"16",Active:"33",Recovery:"0",Total:"48",Damage:"900",BlockAdvantage:"-8",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"17",Active:"31",Recovery:"0",Total:"47",Damage:"900",BlockAdvantage:"-6",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"26",Active:"13(1)27",Recovery:"0",Total:"66",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"4",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"25",Active:"36",Recovery:"0",Total:"60",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"-11",HitAdvantage:"22",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"17",Active:"31",Recovery:"0",Total:"47",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"17",Active:"31",Recovery:"0",Total:"47",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"27",Active:"28",Recovery:"0",Total:"54",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"26",Active:"31",Recovery:"0",Total:"56",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"13",Active:"27",Recovery:"0",Total:"39",Damage:"900",BlockAdvantage:"-2~-1",HitAdvantage:"-3~-2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"13",Active:"25",Recovery:"0",Total:"37",Damage:"900",BlockAdvantage:"0~1",HitAdvantage:"0~-1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"21",Active:"13(1)19",Recovery:"0",Total:"53",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"12~13",HitAdvantage:"25~26",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"20",Active:"29",Recovery:"0",Total:"48",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"-4",HitAdvantage:"29",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air Luminous Body",Startup:"13",Active:"25",Recovery:"0",Total:"37",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Luminous Body",Startup:"14",Active:"25",Recovery:"0",Total:"38",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air Luminous Body",Startup:"21",Active:"23",Recovery:"0",Total:"43",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air Luminous Body",Startup:"21",Active:"25",Recovery:"0",Total:"45",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3613",name: "Demon Missile (air ok)", input: [[DragonPunch,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"16",Active:"22",Recovery:"20",Total:"57",Damage:"900",BlockAdvantage:"-3",HitAdvantage:"57",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"21",Active:"22",Recovery:"20",Total:"62",Damage:"1000",BlockAdvantage:"-23",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"16",Active:"24",Recovery:"0",Total:"39",Damage:"800",BlockAdvantage:"-1",HitAdvantage:"93",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Charged",Startup:"67",Active:"24",Recovery:"0",Total:"90",Damage:"1300",BlockAdvantage:"-1",HitAdvantage:"146",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"14",Active:"14",Recovery:"30",Total:"57",Damage:"1410\n(12 HITS)",BlockAdvantage:"-25",HitAdvantage:"86",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"16",Active:"22",Recovery:"8",Total:"45",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"16",Active:"22",Recovery:"9",Total:"46",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"23",Active:"24",Recovery:"0",Total:"46",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air Charged",Startup:"63",Active:"24",Recovery:"0",Total:"86",Damage:"1300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"14",Active:"20",Recovery:"",Total:"",Damage:"1480\n(11 HITS)",BlockAdvantage:"5",HitAdvantage:"80",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"13",Active:"18",Recovery:"16",Total:"46",Damage:"900",BlockAdvantage:"1",HitAdvantage:"62",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP HIT Luminous Body",Startup:"13",Active:"1",Recovery:"96",Total:"109",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"13",Active:"17~18",Recovery:"16",Total:"",Damage:"1000",BlockAdvantage:"-15~-14",HitAdvantage:"72",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"13",Active:"19",Recovery:"0",Total:"31",Damage:"800",BlockAdvantage:"3",HitAdvantage:"97",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Charged Luminous Body",Startup:"53",Active:"20",Recovery:"0",Total:"72",Damage:"1300",BlockAdvantage:"3",HitAdvantage:"150",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"15",Active:"11",Recovery:"24",Total:"49",Damage:"1410\n(12 HITS)",BlockAdvantage:"-16",HitAdvantage:"86",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air Luminous Body",Startup:"13",Active:"17",Recovery:"7",Total:"36",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Luminous Body",Startup:"13",Active:"17",Recovery:"8",Total:"37",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air Luminous Body",Startup:"19",Active:"19",Recovery:"0",Total:"37",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Charged Air Luminous Body",Startup:"50",Active:"20",Recovery:"0",Total:"69",Damage:"1300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air Luminous Body",Startup:"16",Active:"16",Recovery:"18",Total:"49",Damage:"1480\n(11 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3614",name: "Tornado", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"16",Active:"17",Recovery:"14",Total:"46",Damage:"200*3",BlockAdvantage:"3",HitAdvantage:"28",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"12",Active:"17(4)38",Recovery:"0",Total:"70",Damage:"200*3+150*6\n(1395)",BlockAdvantage:"11",HitAdvantage:"45",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"13",Active:"17",Recovery:"8",Total:"37",Damage:"200*3",BlockAdvantage:"9",HitAdvantage:"34",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"9~10",Active:"47~48",Recovery:"0",Total:"56",Damage:"200*3+150*6\n(1395)",BlockAdvantage:"18~19",HitAdvantage:"50",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3615",name: "Hell's Elevator", input: [[QCB,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"20",Active:"0",Recovery:"0",Total:"42786",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"116",Active:"0",Recovery:"0",Total:"116",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"126",Active:"0",Recovery:"0",Total:"126",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Cancel",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"115",Active:"0",Recovery:"0",Total:"115",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"16",Active:"0",Recovery:"0",Total:"16",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"111",Active:"0",Recovery:"0",Total:"111",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"119",Active:"0",Recovery:"0",Total:"119",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Cancel Luminous Body",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"110",Active:"0",Recovery:"0",Total:"110",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3616",name: "Hell Dive", input: [[Jump,QCB,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"2-20",Active:"0",Recovery:"0",Total:"42786",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"27",Active:"0",Recovery:"0",Total:"27",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"126",Active:"0",Recovery:"0",Total:"126",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"27",Active:"0",Recovery:"0",Total:"27",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"2-16",Active:"0",Recovery:"0",Total:"42782",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"21-22",Active:"0",Recovery:"0",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"119",Active:"0",Recovery:"0",Total:"119",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Luminous Body",Startup:"21-22",Active:"0",Recovery:"0",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3617",name: "Wall Cling", input: [[Jump,Left,Left,"(Near corner; Varied follow-up)",],],
FrameData:
[
{Version:"",Startup:"63",Active:"0",Recovery:"0",Total:"63",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"50",Active:"0",Recovery:"0",Total:"50",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3618",name: "Wall Cling > Hell Spitfire", input: [[Punch,"or",LightKick,"(during Wall Cling)",],],
FrameData:
[
{Version:"LP",Startup:"22",Active:"7",Recovery:"0",Total:"28",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"25",Active:"1",Recovery:"0",Total:"25",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"35",Active:"1",Recovery:"0",Total:"35",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Luminous Body",Startup:"18",Active:"5",Recovery:"0",Total:"22",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Luminous Body",Startup:"20",Active:"1",Recovery:"0",Total:"20",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Luminous Body",Startup:"28",Active:"1",Recovery:"0",Total:"28",Damage:"400*3\n(1160)/100*5",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3619",name: "Wall Cling > Wall Cling Drop", input: [[HardKick,"(during Wall Cling)",],],
FrameData:
[
{Version:"",Startup:"4",Active:"0",Recovery:"0",Total:"4",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Luminous Body",Startup:"3-4",Active:"0",Recovery:"0",Total:"42798",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Known as The Red Arremer in Japan, Firebrand is the primary protagonist of the Gargoyle's Quest series. He belongs to a race of gargoyle demons known as the Red Arremer Tribe, considered the elite warriors of the demon king Astaroth. He is considered a hero among his peers, and as such he has been nicknamed Red Blaze (a title shared with his ancestor in Gargoyle's Quest II, also named Firebrand) due to his bright red skin and prowess with fiery magic. The Red Arremer tribe appear as standard enemies in the main Ghosts 'n Goblins series, while a fiery blue silhouette of a Red Arremer serves as the series' logo.",

biographyURL:"https://en.wikipedia.org/wiki/Ghosts_%27n_Goblins#Firebrand"},

{name: "Frank West",
image: require('./img/characters/frankwest.jpg'), 
portraitImage: require('./img/characters/frankwestportrait.png'),
side: "Capcom",
vitality: "10000", alternateStates:[],
players:[],
moveList: {normals:
[{ID: "4107",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4108",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4109",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4110",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4111",name: "LP", input: [],
FrameData:
[]  },
{ID: "4112",name: "HP", input: [],
FrameData:
[]  },
{ID: "4113",name: "LK", input: [],
FrameData:
[]  },
{ID: "4114",name: "HK", input: [],
FrameData:
[]  },
{ID: "4115",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4116",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4117",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4118",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3640",name: "This Looks Useful", input: [[Right,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3641",name: "Crude Sweep", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3642",name: "Object Throw", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3643",name: "Knee Drop", input: [[Jump,Down,Plus,HardKick,],],
FrameData:
[]  },
],

hypers:
[{ID: "3636",name: "Case West", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3637",name: "Blue Light Special", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3638",name: "Funny Face Crusher", input: [[QCB,Plus,DoublePunch,"(with post-Skill Lv. 3)",],],
FrameData:
[]  },
{ID: "3639",name: "Say CHEESE! (level 3)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[]  },
],

specials:
[{ID: "3627",name: "Tools of Survival (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3628",name: "Hammer Throw", input: [[QCF,Plus,Kick,],],
FrameData:
[]  },
{ID: "3629",name: "Outside the Box", input: [[DragonPunch,Plus,Punch,"(Varied follow-up with post-Skill Lv. 1 ver.)",],],
FrameData:
[]  },
{ID: "3630",name: "Outside the Box (Post-Skill Lv. 1) > Roundhouse Kick", input: [[DragonPunch,Plus,Kick,"(from Outside the Box (Post-Skill Lv. 1))",],],
FrameData:
[]  },
{ID: "3631",name: "Outside the Box (Post-Skill Lv. 1) > Barrel Role", input: [[DoubleKick,"(from Outside the Box (Post-Skill Lv. 1))",],],
FrameData:
[]  },
{ID: "3632",name: "Bottoms Up", input: [[Down,Down,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3633",name: "Shot Time", input: [[Down,Down,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3634",name: "Snapshot (air ok)", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "3635",name: "Giant Swing", input: [[QCB,Plus,Kick,],],
FrameData:
[]  },
],

},
biographyIntro:"Frank West (Japanese: フランク・ウェスト Hepburn: Furanku Wesuto) is a fictional character from Capcom's Dead Rising video game series. He first appeared in the 2006 video game Dead Rising as the protagonist. In the series, West is a freelancer photographer and photojournalist turned a zombie hunter. The character has been well received by video game publications as well as by the fans, mainly in the West, leading Frank to appear in several more games in and outside the Dead Rising series.",

biographyURL:"https://en.wikipedia.org/wiki/Frank_West_(Dead_Rising)"},

{name: "Gamora",
image: require('./img/characters/gamora.jpg'), 
portraitImage: require('./img/characters/gamoraportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:["Shadow Combination"],
players:["Brian Kasugano","RayRay","Clockw0rk"],
moveList: {normals:
[{ID: "3915",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "3916",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "3917",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "3918",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "3919",name: "LP", input: [],
FrameData:
[]  },
{ID: "3920",name: "HP", input: [],
FrameData:
[]  },
{ID: "3921",name: "LK", input: [],
FrameData:
[]  },
{ID: "3922",name: "HK", input: [],
FrameData:
[]  },
{ID: "3923",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "3924",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "3925",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "3926",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3379",name: "Dagger Throw", input: [[Right,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3380",name: "Twin Shot", input: [[Jump,Right,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3381",name: "Dagger Flip", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[]  },
],

hypers:
[{ID: "3376",name: "Slash Rush", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3377",name: "Shadow Combination", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3378",name: "Celestial Barrage (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
],

specials:
[{ID: "3368",name: "Godslayer", input: [[QCF,Plus,Punch,"(Can be followed up)",],],
FrameData:
[]  },
{ID: "3369",name: "Godslayer > Divine Slide", input: [[HardPunch,"(from Godslayer)",],],
FrameData:
[]  },
{ID: "3370",name: "Shoot & Slash", input: [[QCF,Plus,Kick,"(Varied follow-up)",],],
FrameData:
[]  },
{ID: "3371",name: "Shoot & Slash > Godslayer", input: [[LightPunch,],],
FrameData:
[]  },
{ID: "3372",name: "Shoot & Slash > Divine Slide", input: [[HardPunch,],],
FrameData:
[]  },
{ID: "3373",name: "Shoot & Slash > Arch Shot", input: [[Kick,],],
FrameData:
[]  },
{ID: "3374",name: "Fatal Rise", input: [[Down,Down,Plus,Punch,],],
FrameData:
[]  },
{ID: "3375",name: "Arch Shot (air ok)", input: [[QCB,Plus,Kick,],],
FrameData:
[]  },
],

},
biographyIntro:"Gamora Zen Whoberi Ben Titan (/ɡə.ˈmɔːr.ə/) is a fictional character appearing in American comic books published by Marvel Comics. Created by Jim Starlin, the character first appeared in Strange Tales #180 (June 1975). Gamora is the adopted daughter of Thanos, and the last of her species. Her powers include superhuman strength and agility and an accelerated healing factor. She also is an elite combatant, being able to best most of the opponents in the galaxy. She is a member of the group known as the Infinity Watch. The character played a role in the 2007 crossover comic book event 'Annihilation: Conquest', and became a member of the titular team in its spin-off comic, Guardians of the Galaxy. She has been featured in a variety of associated Marvel merchandise. Zoe Saldana plays the character in the 2014 live-action film Guardians of the Galaxy and its sequel Guardians of the Galaxy Vol. 2.",

biographyURL:"https://en.wikipedia.org/wiki/Gamora"},

{name: "Ghost Rider",
image: require('./img/characters/ghostrider.jpg'), 
portraitImage: require('./img/characters/ghostriderportrait.png'),
side: "",
vitality: "10000", alternateStates:[],
players:["Filipino Champ"],
moveList: {normals:
[{ID: "3927",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"13",Active:"7",Recovery:"31",Total:"50",Damage:"700",BlockAdvantage:"-19",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3928",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"15",Active:"5",Recovery:"27",Total:"46",Damage:"700",BlockAdvantage:"-12",HitAdvantage:"18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3929",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"9",Active:"3",Recovery:"13",Total:"24",Damage:"500",BlockAdvantage:"-1",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3930",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"7",Active:"3",Recovery:"17",Total:"26",Damage:"300",BlockAdvantage:"-7",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3931",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"7",Active:"4",Recovery:"12",Total:"22",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3932",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"16",Active:"3",Recovery:"28",Total:"46",Damage:"700",BlockAdvantage:"-11",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3933",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"10",Active:"6",Recovery:"13",Total:"28",Damage:"500",BlockAdvantage:"-3",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3934",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"14",Active:"8",Recovery:"19",Total:"40",Damage:"700",BlockAdvantage:"-7",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3935",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"7",Active:"10",Recovery:"9",Total:"25",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3936",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"15",Active:"5",Recovery:"31",Total:"50",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3937",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"12",Active:"13",Recovery:"13",Total:"37",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3938",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"13",Active:"6",Recovery:"25",Total:"43",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3396",name: "Shoulder Slam", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"12",Active:"7",Recovery:"12",Total:"30",Damage:"500",BlockAdvantage:"-3",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3397",name: "Wraith Whip", input: [[DownRight,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"26",Active:"2",Recovery:"29",Total:"56",Damage:"700",BlockAdvantage:"-12",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3398",name: "Damnation Whip", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"21",Active:"9",Recovery:"38",Total:"67",Damage:"200*4\n(780)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3399",name: "Rage Whip", input: [[HardPunch,">",HardPunch,"(only if first attack hits)",],],
FrameData:
[
{Version:"",Startup:"16",Active:"",Recovery:"19",Total:"42",Damage:"300",BlockAdvantage:"-1",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3392",name: "Hellfire Maelstrom", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"15",Active:"",Recovery:"82",Total:"203",Damage:"100*17+100+500*3\n(3220)",BlockAdvantage:"-63",HitAdvantage:"59",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3393",name: "Spirit of Vengeance", input: [[QCF,Plus,DoubleKick,"(varied follow-ups)",],],
FrameData:
[
{Version:"",Startup:"23",Active:"81",Recovery:"56",Total:"159",Damage:"150*18+1000\n(2995)",BlockAdvantage:"-42",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:"FRAME 21"},
{Version:"CORNER",Startup:"23",Active:"49",Recovery:"56",Total:"127",Damage:"150*18+1000\n(2995)",BlockAdvantage:"-42",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:""},
{Version:"DRIFT",Startup:"23",Active:"",Recovery:"",Total:"",Damage:"50*2",BlockAdvantage:"LOL",HitAdvantage:"LOL",ChAdvantage:"",InvincibilityFrames:""},
{Version:"WHEELIE",Startup:"23",Active:"65",Recovery:"0",Total:"87",Damage:"50*5+800",BlockAdvantage:"82",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3395",name: "Penance Stare (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"5",Active:"2",Recovery:"46",Total:"52",Damage:"5525\n(18 HITS)",BlockAdvantage:"145",HitAdvantage:"145",ChAdvantage:"",InvincibilityFrames:"FRAME 1-6"},]  },
],

specials:
[{ID: "3382",name: "Chain of Rebuttal", input: [[QCF,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"5",Recovery:"31",Total:"51",Damage:"200*2+600",BlockAdvantage:"-12",HitAdvantage:"81",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3383",name: "Judgement Strike", input: [[QCF,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"25",Active:"13",Recovery:"36",Total:"73",Damage:"150*10\n(1395)",BlockAdvantage:"-23",HitAdvantage:"-22",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3384",name: "Hellfire", input: [[QCF,Plus,Kick,"/Hold",HardKick,"to adjust angle on",HardKick,"ver. only",],],
FrameData:
[
{Version:"LK",Startup:"19",Active:"21",Recovery:"27",Total:"66",Damage:"300*4\n(1140)",BlockAdvantage:"-14",HitAdvantage:"96",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"19",Active:"21",Recovery:"27",Total:"66",Damage:"300*4\n(1140)",BlockAdvantage:"-13",HitAdvantage:"96",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Hold",Startup:"23",Active:"21",Recovery:"23",Total:"66",Damage:"400*4\n(1520)",BlockAdvantage:"-7",HitAdvantage:"49",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3385",name: "Chain of Punishment", input: [[Down,Down,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"7",Recovery:"30",Total:"52",Damage:"200*3+600\n(1140)",BlockAdvantage:"-13",HitAdvantage:"82",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3386",name: "Hell's Embrace", input: [[Down,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"7",Recovery:"30",Total:"52",Damage:"2050\n(6 HITS)",BlockAdvantage:"-17",HitAdvantage:"100",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3387",name: "Chaos Bringer", input: [[QCB,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"3",Recovery:"46",Total:"64",Damage:"200\n(2 HITS)",BlockAdvantage:"-29",HitAdvantage:"83",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3388",name: "Conviction Slam", input: [[QCB,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"3",Recovery:"46",Total:"64",Damage:"1500\n(2 HITS)",BlockAdvantage:"-29",HitAdvantage:"56",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3389",name: "Seventh Circle - Punishment", input: [[QCB,Plus,Kick,"/Tap",Kick,"(varied follow-up)",],],
FrameData:
[
{Version:"LK 2 HITS",Startup:"13",Active:"",Recovery:"18",Total:"46",Damage:"300+100",BlockAdvantage:"0",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK 4 HITS",Startup:"13",Active:"",Recovery:"18",Total:"66",Damage:"300+100*3",BlockAdvantage:"0",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK 6 HITS",Startup:"13",Active:"",Recovery:"18",Total:"82",Damage:"300+100*5\n(780)",BlockAdvantage:"0",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK 8 HITS",Startup:"13",Active:"",Recovery:"18",Total:"94",Damage:"300+100*7\n(960)",BlockAdvantage:"0",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 4 HITS",Startup:"23",Active:"",Recovery:"31",Total:"90",Damage:"300+100*3",BlockAdvantage:"-14",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 6 HITS",Startup:"23",Active:"",Recovery:"31",Total:"108",Damage:"300+100*5\n(780)",BlockAdvantage:"-14",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 8 HITS",Startup:"23",Active:"",Recovery:"31",Total:"124",Damage:"300+100*7\n(960)",BlockAdvantage:"-14",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 10 HITS",Startup:"23",Active:"",Recovery:"31",Total:"138",Damage:"300+100*9\n(1140)",BlockAdvantage:"-14",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 12 HITS",Startup:"23",Active:"",Recovery:"31",Total:"150",Damage:"300+100*11\n(1310)",BlockAdvantage:"-14",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3390",name: "Seventh Circle - Punishment (Tap) > Seventh Circle - Whip", input: [[LightPunch,"(from Seventh Circle - Punishment)",],],
FrameData:
[
{Version:"",Startup:"10",Active:"",Recovery:"52",Total:"94",Damage:"100+500",BlockAdvantage:"-36",HitAdvantage:"54",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"13",Active:"",Recovery:"52",Total:"114",Damage:"",BlockAdvantage:"-36",HitAdvantage:"54",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3391",name: "Seventh Circle - Punishment (Tap) > Seventh Circle - Anchor", input: [[HardPunch,"(from Seventh Circle - Punishment)",],],
FrameData:
[
{Version:"",Startup:"10",Active:"",Recovery:"68",Total:"116",Damage:"1000",BlockAdvantage:"-54",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"13",Active:"",Recovery:"68",Total:"136",Damage:"",BlockAdvantage:"-54",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Ghost Rider is the name of many fictional supernatural antiheroes appearing in American Comic Books published by Marvel Comics. Marvel had previously used the name for a Western character whose name was later changed to Phantom Rider.",

biographyURL:"https://en.wikipedia.org/wiki/Ghost_Rider"},

{name: "Haggar",
image: require('./img/characters/haggar.jpg'), 
portraitImage: require('./img/characters/haggarportrait.png'),
side: "Capcom",
vitality: "11000", alternateStates:[],
players:["Bum","KaneBlueRiver","Jan"],
moveList: {normals:
[{ID: "4119",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4120",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4121",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4122",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4123",name: "LP", input: [],
FrameData:
[]  },
{ID: "4124",name: "HP", input: [],
FrameData:
[]  },
{ID: "4125",name: "LK", input: [],
FrameData:
[]  },
{ID: "4126",name: "HK", input: [],
FrameData:
[]  },
{ID: "4127",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4128",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4129",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4130",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3657",name: "Body Blow", input: [[Right,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3658",name: "Steel Pipe (air ok)", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3659",name: "Flying Bodyslam", input: [[Jump,Down,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "3660",name: "Headbutt", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[]  },
],

hypers:
[{ID: "3654",name: "Rapid Fire Fist", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3655",name: "Giant Haggar Press (air ok)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3656",name: "Max Back Breaker (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
],

specials:
[{ID: "3644",name: "Violent Ax", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3645",name: "Hoodlum Launcher", input: [[QCF,Plus,Kick,],],
FrameData:
[]  },
{ID: "3646",name: "Wild Swing", input: [[Jump,QCF,Plus,Kick,],],
FrameData:
[]  },
{ID: "3647",name: "Flying Piledriver", input: [[HCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "3648",name: "Sky-High Back Drop", input: [[Jump,HCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "3649",name: "Cleanin' Up The City (air ok)", input: [[QCB,Plus,Kick,"(Varied follow-up)",],],
FrameData:
[]  },
{ID: "3650",name: "Cleanin' Up The City > Move", input: [[Left,"or",Right,"(during Cleanin' Up The City)",],],
FrameData:
[]  },
{ID: "3651",name: "Cleanin' Up The City > Throw", input: [[Kick,"(from Cleanin' Up The City)",],],
FrameData:
[]  },
{ID: "3652",name: "Cleanin' Up The City > Drop", input: [[Punch,"(from Cleanin' Up The City)",],],
FrameData:
[]  },
{ID: "3653",name: "Double Lariat", input: [[DoubleKick,],],
FrameData:
[]  },
],

},
biographyIntro:"Michael Duncan 'Mike' Haggar (マイク・ハガー Maiku Hagā), also known simply as Haggar, is a fictional character in the Final Fight series of video games. Haggar first appeared in the 1989 Capcom arcade game Final Fight and its subsequent sequels, later appearing in the Saturday Night Slam Masters series of video games and various other video game appearances.",

biographyURL:"https://en.wikipedia.org/wiki/Mike_Haggar"},

{name: "Hawkeye",
image: require('./img/characters/hawkeye.jpg'), 
portraitImage: require('./img/characters/hawkeyeportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:["Chris G"],
moveList: {normals:
[{ID: "3939",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"11",Active:"4",Recovery:"26",Total:"40",Damage:"700",BlockAdvantage:"-11",HitAdvantage:"48",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3940",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"9",Active:"3",Recovery:"29",Total:"40",Damage:"700",BlockAdvantage:"-10",HitAdvantage:"22",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3941",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"7",Active:"4",Recovery:"16",Total:"26",Damage:"500",BlockAdvantage:"-5",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3942",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"5",Active:"3",Recovery:"12",Total:"19",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3943",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"3",Recovery:"10",Total:"17",Damage:"300",BlockAdvantage:"-1",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3944",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"10",Active:"23",Recovery:"9",Total:"41",Damage:"500",BlockAdvantage:"-7",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3945",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"5",Recovery:"18",Total:"30",Damage:"500",BlockAdvantage:"-8",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3946",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"9",Active:"3(14)3",Recovery:"26",Total:"54",Damage:"350*2",BlockAdvantage:"-10",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3947",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"6",Active:"5",Recovery:"10",Total:"20",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3948",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"9",Active:"5",Recovery:"27",Total:"40",Damage:"230*3",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3949",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"11",Recovery:"11",Total:"28",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3950",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"12",Active:"3",Recovery:"26",Total:"40",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3410",name: "Arrow Scratch", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"7",Active:"3",Recovery:"23",Total:"32",Damage:"500",BlockAdvantage:"-8",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3411",name: "Shock Value", input: [[Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"13",Active:"14(2)13",Recovery:"4",Total:"45",Damage:"225*3",BlockAdvantage:"5",HitAdvantage:"4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3412",name: "Slide", input: [[DownRight,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"12",Active:"14",Recovery:"23",Total:"48",Damage:"600",BlockAdvantage:"-18",HitAdvantage:"41",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3413",name: "Multi Shots", input: [["Hold and release",HardPunch,"(Aim",Up,",",UpRight,",",DownRight,", or",Down,"while holding or during release",HardPunch,")",],],
FrameData:
[
{Version:"2 Arrows",Startup:"18",Active:"26",Recovery:"6",Total:"49",Damage:"500*2",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"3 Arrows",Startup:"43",Active:"29",Recovery:"10",Total:"81",Damage:"500*3\n(1450)",BlockAdvantage:"-8",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down",Startup:"10",Active:"15",Recovery:"17",Total:"41",Damage:"500",BlockAdvantage:"-7",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down 2 Arrows",Startup:"18",Active:"24",Recovery:"8",Total:"49",Damage:"500*2",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down 3 Arrows",Startup:"43",Active:"24",Recovery:"11",Total:"77",Damage:"500*3\n(1450)",BlockAdvantage:"-8",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up",Startup:"10",Active:"22",Recovery:"10",Total:"41",Damage:"500",BlockAdvantage:"-7",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up 2 Arrows",Startup:"18",Active:"26",Recovery:"6",Total:"49",Damage:"500*2",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up 3 Arrows",Startup:"43",Active:"29",Recovery:"6",Total:"77",Damage:"500*3\n(1450)",BlockAdvantage:"-8",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3414",name: "Bow Sweep", input: [[DownRight,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"13",Active:"3",Recovery:"22",Total:"37",Damage:"750",BlockAdvantage:"-6",HitAdvantage:"53",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3415",name: "Thrust Shot", input: [[Jump,Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"8",Active:"3",Recovery:"20",Total:"30",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3407",name: "Gimlet (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"13",Active:"10",Recovery:"67",Total:"89",Damage:"2500",BlockAdvantage:"-43",HitAdvantage:"36",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"13",Active:"10",Recovery:"57",Total:"79",Damage:"2500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3408",name: "Kiss of Fire", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"22",Active:"73",Recovery:"0",Total:"94",Damage:"650*7\n(3445)",BlockAdvantage:"7",HitAdvantage:"122",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3409",name: "Circus Act (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"17",Active:"23",Recovery:"55",Total:"94",Damage:"5166\n(20 HITS)",BlockAdvantage:"-51",HitAdvantage:"79",ChAdvantage:"",InvincibilityFrames:"FRAME 1-52"},]  },
],

specials:
[{ID: "3400",name: "Quick Shot (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"GREYHOUND",Startup:"11",Active:"31",Recovery:"9",Total:"50",Damage:"300*3\n(870)",BlockAdvantage:"-7",HitAdvantage:"-15",ChAdvantage:"",InvincibilityFrames:""},
{Version:"GREYHOUND Air",Startup:"10",Active:"26",Recovery:"",Total:"",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"SPRITZER",Startup:"20",Active:"17",Recovery:"19",Total:"55",Damage:"1100",BlockAdvantage:"-11",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},
{Version:"SPRITZER Air",Startup:"21",Active:"17",Recovery:"3",Total:"40",Damage:"1100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3401",name: "Ragtime Shot", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"KAMIKAZE",Startup:"19",Active:"37",Recovery:"0",Total:"55",Damage:"150*10\n(1395)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"BALALAIKA",Startup:"22",Active:"43",Recovery:"0",Total:"64",Damage:"300*9\n(2310)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3402",name: "Trick Maneuver", input: [[QCB,Plus,Kick,"(Varied follow-up)",],],
FrameData:
[
{Version:"LK",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"37",Active:"0",Recovery:"0",Total:"37",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3403",name: "Trick Maneuver > Violet Fizz", input: [[LightPunch,],],
FrameData:
[
{Version:"Maneuver LK",Startup:"14",Active:"25",Recovery:"10",Total:"48",Damage:"600+610",BlockAdvantage:"-10",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Maneuver HK",Startup:"21",Active:"13",Recovery:"13",Total:"46",Damage:"600+610",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3404",name: "Trick Maneuver > Icebreaker", input: [[LightKick,],],
FrameData:
[
{Version:"Maneuver LK",Startup:"14",Active:"23",Recovery:"12",Total:"48",Damage:"1100",BlockAdvantage:"-10",HitAdvantage:"129",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Maneuver HK",Startup:"21",Active:"13",Recovery:"13",Total:"46",Damage:"1100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3405",name: "Trick Maneuver > Jack Rose", input: [[HardPunch,],],
FrameData:
[
{Version:"Maneuver LK",Startup:"14",Active:"10",Recovery:"25",Total:"48",Damage:"1200",BlockAdvantage:"-1",HitAdvantage:"75",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Maneuver HK",Startup:"21",Active:"13",Recovery:"13",Total:"46",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3406",name: "Trick Maneuver > Scorpion", input: [[HardKick,],],
FrameData:
[
{Version:"Maneuver LK",Startup:"14",Active:"10(10)23",Recovery:"0",Total:"56",Damage:"500+200*5\n(1400)",BlockAdvantage:"-18",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Maneuver HK",Startup:"21",Active:"13(10)8",Recovery:"0",Total:"51",Damage:"500+200*5\n(1400)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Hawkeye (Clinton Francis 'Clint' Barton) is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Don Heck, the character first appeared as a villain in Tales of Suspense #57 (Sept. 1964) and later joined the Avengers in The Avengers #16 (May 1965). He has been a prominent member of the team ever since. He was also ranked at #44 on IGN's Top 100 Comic Book Heroes list.[2]",

biographyURL:"https://en.wikipedia.org/wiki/Hawkeye_(comics)"},

{name: "Hulk",
image: require('./img/characters/hulk.jpg'), 
portraitImage: require('./img/characters/hulkportrait.png'),
side: "Marvel",
vitality: "11000", alternateStates:[],
players:["Airtola","RoyalFlush","Jan"],
moveList: {normals:
[{ID: "3951",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"12",Active:"10",Recovery:"26",Total:"47",Damage:"800",BlockAdvantage:"-17",HitAdvantage:"42",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3952",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"11",Active:"4",Recovery:"39",Total:"53",Damage:"800",BlockAdvantage:"-21",HitAdvantage:"9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3953",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"10",Active:"4",Recovery:"27",Total:"40",Damage:"600",BlockAdvantage:"-16",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3954",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"8",Active:"2",Recovery:"30",Total:"39",Damage:"600",BlockAdvantage:"-15",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3955",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"8",Active:"2",Recovery:"34",Total:"43",Damage:"600",BlockAdvantage:"-20",HitAdvantage:"-18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3956",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"16",Active:"2",Recovery:"50",Total:"67",Damage:"800",BlockAdvantage:"-31",HitAdvantage:"67",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3957",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"15",Active:"8",Recovery:"16",Total:"38",Damage:"800",BlockAdvantage:"-4",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3958",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"19",Active:"9",Recovery:"33",Total:"60",Damage:"800",BlockAdvantage:"-22",HitAdvantage:"-18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3959",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"7",Active:"12",Recovery:"4",Total:"22",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3960",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"15",Active:"6",Recovery:"23",Total:"43",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3961",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"8",Recovery:"14",Total:"30",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3962",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"16",Active:"5",Recovery:"29",Total:"49",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3423",name: "Gut Punch", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"9",Active:"5",Recovery:"24",Total:"37",Damage:"600",BlockAdvantage:"-13",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3424",name: "Impact Punch", input: [[Right,Plus,HardPunch,"/","Hold",HardPunch,],],
FrameData:
[
{Version:"LVL 1",Startup:"11",Active:"14",Recovery:"20",Total:"44",Damage:"800",BlockAdvantage:"-14",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 3",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 4",Startup:"104",Active:"2",Recovery:"50",Total:"155",Damage:"2000",BlockAdvantage:"-31",HitAdvantage:"86",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3425",name: "Incredible Punch", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"15",Active:"5",Recovery:"31",Total:"50",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3426",name: "Avalanche Leap (wall jump)", input: [[Jump,Right,"(next to wall)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3420",name: "Gamma Tsunami", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"24",Active:"60",Recovery:"17",Total:"100",Damage:"480*14\n(4368)",BlockAdvantage:"-5",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3421",name: "Gamma Crush", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"79",Recovery:"80",Total:"176",Damage:"1000+500*7+1000\n(3900)",BlockAdvantage:"-62",HitAdvantage:"36",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3422",name: "Gamma Quake (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"19(10)19(30)19",Recovery:"72",Total:"178",Damage:"2000*6\n(6540)",BlockAdvantage:"-54",HitAdvantage:"51",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3416",name: "Gamma Wave", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"15",Active:"8",Recovery:"16",Total:"38",Damage:"300*3\n(870)",BlockAdvantage:"-1",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"31",Active:"35",Recovery:"0",Total:"65",Damage:"300*5\n(1410)",BlockAdvantage:"-3",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3417",name: "Gamma Charge", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"12",Active:"16",Recovery:"21",Total:"48",Damage:"1200",BlockAdvantage:"-17",HitAdvantage:"18",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"19",Active:"21",Recovery:"42",Total:"81",Damage:"1200",BlockAdvantage:"-40",HitAdvantage:"64",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3418",name: "Gamma Air Charge", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"9",Active:"12",Recovery:"14",Total:"34",Damage:"1200",BlockAdvantage:"-6",HitAdvantage:"29",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"9",Active:"12",Recovery:"14",Total:"34",Damage:"1400",BlockAdvantage:"-6",HitAdvantage:"39",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3419",name: "Gamma Tornado", input: [[HCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"16",Active:"2",Recovery:"25",Total:"42",Damage:"1500",BlockAdvantage:"39",HitAdvantage:"39",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"18",Active:"2",Recovery:"25",Total:"44",Damage:"1500",BlockAdvantage:"74",HitAdvantage:"74",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as personalities independent and resenting of the other.",

biographyURL:"https://en.wikipedia.org/wiki/Hulk_(comics)"},

{name: "Iron Man",
image: require('./img/characters/ironman.jpg'), 
portraitImage: require('./img/characters/ironmanportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:["Chris G"],
moveList: {normals:
[{ID: "3963",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "3964",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "3965",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "3966",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "3967",name: "LP", input: [],
FrameData:
[]  },
{ID: "3968",name: "HP", input: [],
FrameData:
[]  },
{ID: "3969",name: "LK", input: [],
FrameData:
[]  },
{ID: "3970",name: "HK", input: [],
FrameData:
[]  },
{ID: "3971",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "3972",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "3973",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "3974",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3434",name: "Arm Missile", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3435",name: "Focus Shot", input: [[Jump,Down,"or",Up,Plus,HardPunch,],],
FrameData:
[]  },
],

hypers:
[{ID: "3432",name: "Proton Cannon", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3433",name: "Iron Avenger (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3793",name: "Proton Cannon (angled)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
],

specials:
[{ID: "3427",name: "Unibeam (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3428",name: "Repulsor Blade (air ok)", input: [[QCF,Plus,Kick,"(Can be followed up)",],],
FrameData:
[]  },
{ID: "3429",name: "Repulsor Blade > Homing Repulsor Blade", input: [[Kick,"(from Repulsor Ray)",],],
FrameData:
[]  },
{ID: "3430",name: "Smart Mine (air ok)", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "3431",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[]  },
],

},
biographyIntro:"Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963).",

biographyURL:"https://en.wikipedia.org/wiki/Iron_Man"},

{name: "Jedah",
image: require('./img/characters/jedah.jpg'), 
portraitImage: require('./img/characters/jedahportrait.png'),
side: "Capcom",
vitality: "10000", alternateStates:[],
players:["ApologyMan","Chris G","SonicFox"],
moveList: {normals:
[{ID: "3855",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"14",Active:"7",Recovery:"38",Total:"58",Damage:"700",BlockAdvantage:"-26",HitAdvantage:"33",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3856",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"10",Active:"4",Recovery:"32",Total:"45",Damage:"700",BlockAdvantage:"-13",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3857",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"4",Recovery:"25",Total:"36",Damage:"500",BlockAdvantage:"-14",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3858",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"5",Active:"3",Recovery:"11",Total:"18",Damage:"300",BlockAdvantage:"-1",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3859",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"3",Recovery:"13",Total:"20",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3860",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"13",Active:"2(2)2(2)2",Recovery:"48",Total:"70",Damage:"250+250+350",BlockAdvantage:"-33",HitAdvantage:"-29",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3861",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"3",Recovery:"24",Total:"34",Damage:"500",BlockAdvantage:"-10",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3862",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"25",Active:"5",Recovery:"31",Total:"60",Damage:"900",BlockAdvantage:"-18",HitAdvantage:"62",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3863",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"3",Recovery:"23",Total:"30",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3864",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"13",Active:"2(2)2(2)2",Recovery:"9",Total:"31",Damage:"250+250+350",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3865",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"8",Active:"4",Recovery:"31",Total:"42",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3866",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"13",Active:"6",Recovery:"28",Total:"46",Damage:"850",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3671",name: "Dita del Lamento", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"7",Active:"8",Recovery:"11",Total:"25",Damage:"550",BlockAdvantage:"-2",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3672",name: "Falce Mortale", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"6",Active:"7",Recovery:"11",Total:"23",Damage:"600",BlockAdvantage:"-2",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3673",name: "Dita della Pieta", input: [[DownRight,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"9",Active:"8",Recovery:"28",Total:"44",Damage:"550",BlockAdvantage:"-20",HitAdvantage:"-18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3674",name: "Colpo dell'Oscurita", input: [[DownRight,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"2(3)2(2)2",Recovery:"42",Total:"66",Damage:"300+300+350\n(915)",BlockAdvantage:"-27",HitAdvantage:"-23",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3675",name: "Dita della Calma", input: [[Jump,Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"7",Active:"4",Recovery:"27",Total:"37",Damage:"550",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3668",name: "Finale Rosso", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"2",Recovery:"77",Total:"88",Damage:"3230\n(14 HITS)",BlockAdvantage:"-49",HitAdvantage:"27",ChAdvantage:"",InvincibilityFrames:"FRAME 6 ?"},]  },
{ID: "3669",name: "Spirale Infernale", input: [[Jump,QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"17",Active:"69",Recovery:"41",Total:"126",Damage:"100*32+800\n(3090)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3670",name: "Sigillo del Servo (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"27",Recovery:"54",Total:"98",Damage:"5740\n(11 HITS)",BlockAdvantage:"-52",HitAdvantage:"58",ChAdvantage:"",InvincibilityFrames:"FRAME 1-31"},]  },
],

specials:
[{ID: "3661",name: "Spirale Divina (air ok)", input: [[QCF,Plus,Punch,"(Hold to charge)",],],
FrameData:
[
{Version:"HP",Startup:"34",Active:"2",Recovery:"0",Total:"35",Damage:"200*3",BlockAdvantage:"40",HitAdvantage:"44",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"34",Active:"1",Recovery:"0",Total:"34",Damage:"200*3",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Charge",Startup:"56",Active:"3",Recovery:"0",Total:"58",Damage:"300*5\n(1410)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Charge",Startup:"56",Active:"3",Recovery:"0",Total:"58",Damage:"300*5\n(1410)",BlockAdvantage:"69",HitAdvantage:"73",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"34",Active:"2",Recovery:"0",Total:"35",Damage:"200*3",BlockAdvantage:"40",HitAdvantage:"44",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"34",Active:"2",Recovery:"0",Total:"35",Damage:"200*3",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air Charge",Startup:"56",Active:"3",Recovery:"0",Total:"58",Damage:"300*5\n(1410)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Charge",Startup:"56",Active:"3",Recovery:"0",Total:"58",Damage:"300*5\n(1410)",BlockAdvantage:"69",HitAdvantage:"73",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3662",name: "Falce Inizio", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"HK",Startup:"22",Active:"3",Recovery:"28",Total:"52",Damage:"1100",BlockAdvantage:"-5",HitAdvantage:"86",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"12",Active:"3",Recovery:"30",Total:"44",Damage:"800",BlockAdvantage:"-7",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3663",name: "Sangue Sacrificale", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"HP",Startup:"19",Active:"23",Recovery:"23",Total:"64",Damage:"300+1200",BlockAdvantage:"-15",HitAdvantage:"92",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"12",Active:"15",Recovery:"26",Total:"52",Damage:"300+900",BlockAdvantage:"-11",HitAdvantage:"92",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3664",name: "Falce Primordiale", input: [[Jump,QCB,Plus,Punch,],],
FrameData:
[
{Version:"HP",Startup:"20",Active:"3",Recovery:"30",Total:"52",Damage:"200*6+500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"33",Active:"3",Recovery:"30",Total:"65",Damage:"200*6+500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3665",name: "Dolore Oscuro", input: [[Jump,QCF,Plus,Kick,],],
FrameData:
[
{Version:"HK",Startup:"24",Active:"20",Recovery:"21",Total:"64",Damage:"300*5\n(1410)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"11",Active:"10",Recovery:"31",Total:"51",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3666",name: "Turbine dell'Ira", input: [[Jump,QCB,Plus,Kick,],],
FrameData:
[
{Version:"HK",Startup:"30",Active:"23",Recovery:"25",Total:"77",Damage:"200*10\n(1800)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"21",Active:"21",Recovery:"25",Total:"66",Damage:"200*9\n(1640)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3667",name: "Flight (air ok)", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"Cancel",Startup:"15",Active:"0",Recovery:"0",Total:"15",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Ground",Startup:"15",Active:"134",Recovery:"0",Total:"134",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"15",Active:"134",Recovery:"0",Total:"134",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Jedah Dohma (Japanese: ジェダ・ドーマ Hepburn: Jeda Dōma) is a player and final boss character from the Darkstalkers fighting game franchise by Capcom. Serving as the main antagonist and title character of the 1997 third installment of the series, Darkstalkers 3 (Vampire Savior: The Lord of Vampire in Japan), he seeks to restore order to the demon dimension of Makai through extreme measures after it falls into chaos, thus setting up the events of the third tournament in the Darkstalkers storyline. The first explicitly graphic character in the series, Jedah has appeared on Darkstalkers merchandise and alternate media, as well as several Capcom crossover games. He has received positive critical reception for his gameplay, characterization and design.",

biographyURL:"https://en.wikipedia.org/wiki/Jedah_Dohma"},

{name: "Mega Man X",
image: require('./img/characters/megamanx.jpg'), 
portraitImage: require('./img/characters/megamanxportrait.png'),
side: "Capcom",
vitality: "9000", alternateStates:[],
players:["Maximilian"],
moveList: {normals:
[{ID: "4191",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"12",Active:"3",Recovery:"32",Total:"46",Damage:"700",BlockAdvantage:"-16",HitAdvantage:"43",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.HK",Startup:"12",Active:"3",Recovery:"32",Total:"46",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4192",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"10",Active:"8",Recovery:"23",Total:"40",Damage:"700",BlockAdvantage:"-10",HitAdvantage:"22",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.HP",Startup:"10",Active:"8",Recovery:"23",Total:"40",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4193",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"7",Active:"3",Recovery:"26",Total:"35",Damage:"500",BlockAdvantage:"-10",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.LK",Startup:"7",Active:"3",Recovery:"26",Total:"35",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4194",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"6",Active:"3",Recovery:"9",Total:"17",Damage:"300",BlockAdvantage:"0",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"c.LP",Startup:"6",Active:"3",Recovery:"9",Total:"17",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4195",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"2",Recovery:"11",Total:"17",Damage:"300",BlockAdvantage:"-1",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"5",Active:"2",Recovery:"11",Total:"17",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4196",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"9",Active:"5",Recovery:"26",Total:"39",Damage:"700",BlockAdvantage:"-10",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"9",Active:"5",Recovery:"26",Total:"39",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4197",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"4",Recovery:"19",Total:"30",Damage:"500",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"8",Active:"4",Recovery:"19",Total:"30",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4198",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"14",Active:"4",Recovery:"21",Total:"38",Damage:"700",BlockAdvantage:"-5",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"14",Active:"4",Recovery:"21",Total:"38",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4199",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"8",Recovery:"7",Total:"19",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"j.LP",Startup:"5",Active:"8",Recovery:"7",Total:"19",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4200",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"9",Active:"8",Recovery:"21",Total:"37",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"j.HP",Startup:"9",Active:"8",Recovery:"21",Total:"37",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4201",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"8",Active:"3",Recovery:"26",Total:"36",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"j.LK",Startup:"8",Active:"3",Recovery:"26",Total:"36",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4202",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"12",Active:"4",Recovery:"25",Total:"40",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"j.HK",Startup:"12",Active:"4",Recovery:"25",Total:"40",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3769",name: "Buster Blow", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"8",Active:"4",Recovery:"28",Total:"39",Damage:"700",BlockAdvantage:"-13",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"8",Active:"4",Recovery:"28",Total:"39",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3770",name: "Shoulder Tackle", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"19",Active:"3",Recovery:"27",Total:"48",Damage:"750",BlockAdvantage:"-11",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"19",Active:"3",Recovery:"27",Total:"48",Damage:"750",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3771",name: "Point Blank Buster", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"8",Recovery:"17",Total:"38",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"14",Active:"8",Recovery:"17",Total:"38",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3764",name: "Double Charge Shot (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*5+600*5\n(3880)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*5+600*5\n(3880)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3765",name: "Full Power Charge Shot (air ok)", input: [[QCF,Plus,DoublePunch,"(In Armor of Light only)",],],
FrameData:
[
{Version:"",Startup:"13",Active:"50",Recovery:"10",Total:"72",Damage:"750*5\n(3000)",BlockAdvantage:"-23",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"13",Active:"50",Recovery:"4",Total:"66",Damage:"750*5\n(3000)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3766",name: "Special Weapon Rush", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"143",Recovery:"0",Total:"160",Damage:"150*36\n(3750)",BlockAdvantage:"-49",HitAdvantage:"41",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"180*36\n(3978)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3767",name: "Armor of Light", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"19",Active:"0",Recovery:"0",Total:"19",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3768",name: "Ultimate Strike (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"7",Active:"9",Recovery:"54",Total:"69",Damage:"5686\n(33 HITS)",BlockAdvantage:"-44",HitAdvantage:"56",ChAdvantage:"",InvincibilityFrames:"FRAME 1-15"},
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"5686\n(33 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3755",name: "X Buster (air ok)", input: [[QCF,Plus,Punch,"/Hold",Punch,"(Varied follow-up)",],],
FrameData:
[
{Version:"LP",Startup:"11",Active:"31",Recovery:"0",Total:"41",Damage:"700",BlockAdvantage:"-6",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP LVL 2",Startup:"25",Active:"36",Recovery:"0",Total:"60",Damage:"500*2",BlockAdvantage:"-13",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP LVL 2 Hold",Startup:"95",Active:"36",Recovery:"0",Total:"130",Damage:"500*2",BlockAdvantage:"-13",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"11",Active:"31",Recovery:"0",Total:"41",Damage:"700",BlockAdvantage:"-6",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP LVL 2",Startup:"25",Active:"36",Recovery:"0",Total:"60",Damage:"500*2",BlockAdvantage:"-13",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP LVL 2 Hold",Startup:"95",Active:"36",Recovery:"0",Total:"130",Damage:"500*2",BlockAdvantage:"-13",HitAdvantage:"63",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"11",Active:"31",Recovery:"0",Total:"41",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"11",Active:"31",Recovery:"0",Total:"41",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"11",Active:"31",Recovery:"0",Total:"41",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP LVL 3",Startup:"",Active:"",Recovery:"",Total:"",Damage:"450*3\n(1305)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"",Active:"",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP LVL 3",Startup:"",Active:"",Recovery:"",Total:"",Damage:"450*3\n(1305)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air LVL 3",Startup:"",Active:"",Recovery:"",Total:"",Damage:"450*3\n(1305)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air LVL 2",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air LVL 3",Startup:"",Active:"",Recovery:"",Total:"",Damage:"450*3\n(1305)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3756",name: "X Buster > Buster Combo: Dash", input: [[LightPunch,"(from X Buster)",],],
FrameData:
[
{Version:"",Startup:"11",Active:"59",Recovery:"0",Total:"69",Damage:"",BlockAdvantage:"-4",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3757",name: "X Buster > Buster Combo: Buster Hammer", input: [[HardPunch,"(from X Buster)",],],
FrameData:
[
{Version:"",Startup:"11",Active:"62",Recovery:"0",Total:"72",Damage:"1200",BlockAdvantage:"-6",HitAdvantage:"77",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3758",name: "X Buster > Buster Combo: Backstep", input: [[LightKick,"(from X Buster)",],],
FrameData:
[
{Version:"",Startup:"11",Active:"53",Recovery:"0",Total:"63",Damage:"",BlockAdvantage:"-29",HitAdvantage:"-36",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3759",name: "X Buster > Buster Combo: Slide", input: [[HardKick,"(from X Buster)",],],
FrameData:
[
{Version:"",Startup:"11",Active:"47",Recovery:"0",Total:"57",Damage:"900",BlockAdvantage:"-17",HitAdvantage:"42",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3760",name: "Frost Shield", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"42",Active:"0",Recovery:"0",Total:"42",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"42",Active:"0",Recovery:"0",Total:"42",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"750+500\n(1200)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"750+500\n(1200)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"880",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"880",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"825+550\n(1320)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"825+550\n(1320)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3761",name: "Rising Fire", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"12",Active:"36",Recovery:"0",Total:"47",Damage:"1200",BlockAdvantage:"-17",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"12",Active:"36",Recovery:"0",Total:"47",Damage:"1200",BlockAdvantage:"-17",HitAdvantage:"20",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1320",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1320",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1430",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1430",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3762",name: "Sonic Slicer", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"12",Active:"33",Recovery:"0",Total:"44",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"-15",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"12",Active:"33",Recovery:"0",Total:"44",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"-15",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"400*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"400*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"",Active:"",Recovery:"",Total:"",Damage:"660",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"",Active:"",Recovery:"",Total:"",Damage:"660",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"440*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"440*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3763",name: "Boomerang Cutter", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"24",Active:"31",Recovery:"0",Total:"54",Damage:"250*3",BlockAdvantage:"-12",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"30",Active:"30",Recovery:"0",Total:"59",Damage:"250*3",BlockAdvantage:"-11",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*5\n(1410)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*5\n(1410)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*4\n(1140)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*4\n(1140)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"350*6\n(1890)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK 2nd",Startup:"",Active:"",Recovery:"",Total:"",Damage:"350*6\n(1890)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Mega Man X (after X4 stylized as Megaman X), known in Japan as Rockman X (?????X Rokkuman X), is a Mega Man series of action platform games released by Capcom. It was initially released on December 17, 1993 in Japan (January 1994 in North America) on the Super NES/Super Famicom and spawned sequels on several systems, most of which were later ported to the PC platform. The plot is a continuation of the preceding series, Mega Man. The game play introduced new elements to the Mega Man franchise including the ability to dash and climb walls.[1] The first six games in the series were compiled in the anthology Mega Man X Collection.",

biographyURL:"https://en.wikipedia.org/wiki/Mega_Man_X"},

{name: "Monster Hunter",
image: require('./img/characters/monsterhunter.jpg'), 
portraitImage: require('./img/characters/monsterhunterportrait.png'),
side: "Capcom",
vitality: "10000", alternateStates:["Demon Mode"],
players:["Clockw0rk","Chris G","Maximilian"],
moveList: {normals:
[{ID: "4239",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"24",Active:"3",Recovery:"64",Total:"90",Damage:"850",BlockAdvantage:"-44",HitAdvantage:"15",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4240",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"19",Active:"6",Recovery:"91",Total:"115",Damage:"850",BlockAdvantage:"-76",HitAdvantage:"-45",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4241",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"14",Active:"2",Recovery:"31",Total:"46",Damage:"550",BlockAdvantage:"-14",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4242",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"8",Active:"3(2)3",Recovery:"33",Total:"48",Damage:"300+300\n(570)",BlockAdvantage:"-20",HitAdvantage:"-18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4243",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"9",Active:"3(1)3",Recovery:"32",Total:"47",Damage:"300+300\n(570)",BlockAdvantage:"-18",HitAdvantage:"-15",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4244",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"21",Active:"3",Recovery:"59",Total:"82",Damage:"800",BlockAdvantage:"-39",HitAdvantage:"-34",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4245",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"10",Active:"3",Recovery:"33",Total:"45",Damage:"500",BlockAdvantage:"-16",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4246",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"10",Active:"2(2)3(21)3(2)3",Recovery:"43",Total:"88",Damage:"200*2+100+300",BlockAdvantage:"-26",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4247",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"11",Active:"2(4)3",Recovery:"22",Total:"41",Damage:"250*2\n(475)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4248",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"22",Active:"5",Recovery:"65",Total:"91",Damage:"850",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4249",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"3",Recovery:"21",Total:"32",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4250",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"15",Active:"2",Recovery:"29",Total:"45",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4314",name: "c.HK (Demon Mode)", input: [],
FrameData:
[
{Version:"c.HK Demon Mode",Startup:"24",Active:"3",Recovery:"64",Total:"90",Damage:"892",BlockAdvantage:"-44",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4315",name: "c.HP (Demon Mode)", input: [],
FrameData:
[
{Version:"c.HP Demon Mode",Startup:"19",Active:"6",Recovery:"91",Total:"115",Damage:"892",BlockAdvantage:"-76",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4316",name: "c.LK (Demon Mode)", input: [],
FrameData:
[
{Version:"c.LK Demon Mode",Startup:"14",Active:"2",Recovery:"31",Total:"46",Damage:"577",BlockAdvantage:"-14",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4317",name: "c.LP (Demon Mode)", input: [],
FrameData:
[
{Version:"c.LP Demon Mode",Startup:"8",Active:"3(2)3",Recovery:"33",Total:"48",Damage:"315*2\n(598)",BlockAdvantage:"-20",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4318",name: "LP (Demon Mode)", input: [],
FrameData:
[
{Version:"LP Demon Mode",Startup:"9",Active:"3(1)3",Recovery:"32",Total:"47",Damage:"315*2\n(598)",BlockAdvantage:"-18",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4319",name: "HP (Demon Mode)", input: [],
FrameData:
[
{Version:"HP Demon Mode",Startup:"21",Active:"3",Recovery:"59",Total:"82",Damage:"840",BlockAdvantage:"-39",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4320",name: "LK (Demon Mode)", input: [],
FrameData:
[
{Version:"LK Demon Mode",Startup:"10",Active:"3",Recovery:"33",Total:"45",Damage:"525",BlockAdvantage:"-16",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4321",name: "HK (Demon Mode)", input: [],
FrameData:
[
{Version:"HK Demon Mode",Startup:"10",Active:"2(2)3(21)3(2)3",Recovery:"43",Total:"88",Damage:"210*2+103+315",BlockAdvantage:"-26",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4322",name: "j.LP (Demon Mode)", input: [],
FrameData:
[
{Version:"j.LP Demon Mode",Startup:"11",Active:"2(4)3",Recovery:"22",Total:"41",Damage:"262*2\n(498)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4323",name: "j.HP (Demon Mode)", input: [],
FrameData:
[
{Version:"j.HP Demon Mode",Startup:"22",Active:"5",Recovery:"",Total:"",Damage:"892",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4324",name: "j.LK (Demon Mode)", input: [],
FrameData:
[
{Version:"j.LK Demon Mode",Startup:"9",Active:"3",Recovery:"21",Total:"32",Damage:"525",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4325",name: "j.HK (Demon Mode)", input: [],
FrameData:
[
{Version:"j.HK Demon Mode",Startup:"15",Active:"2",Recovery:"29",Total:"45",Damage:"735",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3850",name: "Circle Slash", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"24",Active:"2(3)3",Recovery:"33",Total:"64",Damage:"300+400\n(660)",BlockAdvantage:"-9",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"24",Active:"2(3)3",Recovery:"33",Total:"64",Damage:"315+420\n(693)",BlockAdvantage:"-9",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3851",name: "Overhead Slash", input: [[Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"31",Active:"10",Recovery:"93",Total:"133",Damage:"900",BlockAdvantage:"-81",HitAdvantage:"-76",ChAdvantage:"",InvincibilityFrames:""},
{Version:"*",Startup:"34",Active:"5(47)3(59)5",Recovery:"75",Total:"227",Damage:"1500",BlockAdvantage:"-59",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"31",Active:"10",Recovery:"93",Total:"133",Damage:"945",BlockAdvantage:"-81",HitAdvantage:"-76",ChAdvantage:"",InvincibilityFrames:""},
{Version:"*",Startup:"34",Active:"5(47)3(59)2(0)3",Recovery:"75",Total:"227",Damage:"1575",BlockAdvantage:"-59",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3852",name: "Lunging Strike", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"25",Active:"2(4)4",Recovery:"54",Total:"88",Damage:"300+400",BlockAdvantage:"-39",HitAdvantage:"23",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"25",Active:"2(4)4",Recovery:"54",Total:"88",Damage:"315+420",BlockAdvantage:"-39",HitAdvantage:"23",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3853",name: "Jumping Shot (air only)", input: [[Down,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"19",Active:"1",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"19",Active:"19",Recovery:"",Total:"",Damage:"735",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3846",name: "Tartarus Stampede", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"19",Active:"5",Recovery:"105",Total:"128",Damage:"3290\n(4 HITS)",BlockAdvantage:"-91",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:"FRAME 1-23"},
{Version:"",Startup:"19",Active:"5",Recovery:"105",Total:"128",Damage:"3454\n(4 HITS)",BlockAdvantage:"-91",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3847",name: "Meteor Fall", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"17",Active:"73",Recovery:"0",Total:"89",Damage:"800+200*?",BlockAdvantage:"130-135",HitAdvantage:"136-139",ChAdvantage:"",InvincibilityFrames:"FRAME 12"},
{Version:"",Startup:"17",Active:"73",Recovery:"0",Total:"89",Damage:"840+210*?",BlockAdvantage:"130-135",HitAdvantage:"136-139",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3848",name: "Demolisher Demon Dance (air ok)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"170",Recovery:"71",Total:"256",Damage:"210+420+105*13+315+630+210*3\n(2863)",BlockAdvantage:"-54",HitAdvantage:"28",ChAdvantage:"",InvincibilityFrames:"FRAME 6"},
{Version:"Air LOW",Startup:"20",Active:"115",Recovery:"51",Total:"181",Damage:"210*7+231*4+262+525\n(2649)",BlockAdvantage:"0+1F LAND",HitAdvantage:"54",ChAdvantage:"",InvincibilityFrames:"FRAME 6"},
{Version:"Air",Startup:"16",Active:"115",Recovery:"51",Total:"181",Damage:"210*7+231*4+262+525\n(2649)",BlockAdvantage:"0+1F LAND",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 6"},
{Version:"",Startup:"16",Active:"170",Recovery:"71",Total:"256",Damage:"210+420+105*13+315+630+210*3\n(2863)",BlockAdvantage:"-54",HitAdvantage:"28",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air LOW",Startup:"20",Active:"115",Recovery:"17",Total:"147",Damage:"210*7+231*4+262+525\n(2649)",BlockAdvantage:"0+1F LAND",HitAdvantage:"55",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"16",Active:"115",Recovery:"17",Total:"147",Damage:"210*7+231*4+262+525\n(2649)",BlockAdvantage:"0+1F LAND",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3849",name: "Hunter’s Pride (level 3)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"5",Recovery:"150",Total:"172",Damage:"5475\n(7 HITS)",BlockAdvantage:"-136",HitAdvantage:"12",ChAdvantage:"",InvincibilityFrames:"FRAME 1-22"},
{Version:"",Startup:"18",Active:"5",Recovery:"150",Total:"172",Damage:"5748\n(7 HITS)",BlockAdvantage:"-136",HitAdvantage:"12",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3839",name: "Draw Slash", input: [[QCF,Plus,Punch,"(",HardPunch,"version can be charged)",],],
FrameData:
[
{Version:"LP",Startup:"34",Active:"5",Recovery:"75",Total:"113",Damage:"1500",BlockAdvantage:"-59",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"62",Active:"4",Recovery:"91",Total:"156",Damage:"1600",BlockAdvantage:"-74",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Charged",Startup:"97",Active:"4",Recovery:"91",Total:"191",Damage:"1600",BlockAdvantage:"-74",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Charged Critical",Startup:"72",Active:"4",Recovery:"91",Total:"166",Damage:"3000",BlockAdvantage:"-66",HitAdvantage:"76",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP",Startup:"34",Active:"5",Recovery:"75",Total:"113",Damage:"1575",BlockAdvantage:"-59",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"57",Active:"4",Recovery:"91",Total:"151",Damage:"1680",BlockAdvantage:"-74",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Charged",Startup:"90",Active:"4",Recovery:"91",Total:"184",Damage:"1680",BlockAdvantage:"-74",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Charged Critical",Startup:"62",Active:"4",Recovery:"91",Total:"156",Damage:"3150",BlockAdvantage:"-66",HitAdvantage:"76",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3840",name: "Arrow Strike", input: [[QCF,Plus,LightKick,"(can be charged)",],],
FrameData:
[
{Version:"",Startup:"21",Active:"54",Recovery:"2",Total:"76",Damage:"1000",BlockAdvantage:"-30",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Charged",Startup:"61",Active:"47",Recovery:"9",Total:"116",Damage:"500*3\n(1450)",BlockAdvantage:"-31",HitAdvantage:"52",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"21",Active:"32",Recovery:"24",Total:"76",Damage:"1050",BlockAdvantage:"-23",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Charged",Startup:"56",Active:"23",Recovery:"33",Total:"111",Damage:"525*3\n(1522)",BlockAdvantage:"-31",HitAdvantage:"52",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3841",name: "Arc Shot", input: [[QCF,Plus,HardKick,"(can be charged)",],],
FrameData:
[
{Version:"",Startup:"16",Active:"47",Recovery:"0",Total:"62",Damage:"1000+200*6\n(1980)",BlockAdvantage:"59-65",HitAdvantage:"64-69",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Charged",Startup:"56",Active:"47",Recovery:"0",Total:"102",Damage:"1000+200*12\n(2760)",BlockAdvantage:"59-65",HitAdvantage:"64-69",ChAdvantage:"",InvincibilityFrames:""},
{Version:"",Startup:"16",Active:"47",Recovery:"0",Total:"62",Damage:"1050+210*6\n(2058)",BlockAdvantage:"59-65",HitAdvantage:"64-69",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Charged",Startup:"51",Active:"47",Recovery:"0",Total:"97",Damage:"1050+210*12\n(2877)",BlockAdvantage:"59-65",HitAdvantage:"64-69",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3842",name: "Demon Flurry (air ok)", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"15",Active:"3(2)3(11)6(11)4",Recovery:"59",Total:"113",Damage:"100+200+100+200+300\n(870)",BlockAdvantage:"-42",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"23",Active:"3(2)3(15)3(1)3(14)4",Recovery:"64",Total:"134",Damage:"100+200+100+200+400\n(960)",BlockAdvantage:"-47",HitAdvantage:"24",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air LOW",Startup:"22",Active:"2(5)2(9)2",Recovery:"23",Total:"64",Damage:"300*3\n(870)",BlockAdvantage:"-6",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air LOW",Startup:"26",Active:"3(6)3(8)3(11)3",Recovery:"24",Total:"82",Damage:"200*3+400\n(960)",BlockAdvantage:"-8",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"18",Active:"2(5)2(9)2",Recovery:"",Total:"",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"22",Active:"3(6)3(8)3(11)3",Recovery:"",Total:"",Damage:"200*3+400\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3843",name: "Demon Dance (air ok)", input: [["(in Demon Mode only)",QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"15",Active:"3(2)3(12)3(1)3(11)4(1)4(16)4",Recovery:"49",Total:"130",Damage:"105+210+105+210+105+210+315\n(1196)",BlockAdvantage:"-31",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"22",Active:"3(2)3(14)3(1)3(15)4(1)4(19)4",Recovery:"60",Total:"157",Damage:"105+210+105+210+105+210+420\n(1291)",BlockAdvantage:"-42",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air LOW",Startup:"20",Active:"4(11)2(2)2(6)2",Recovery:"24",Total:"72",Damage:"157*2+210*2+315\n(1017)",BlockAdvantage:"-5",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air LOW",Startup:"24",Active:"4(10)2(6)2(8)2(10)2",Recovery:"24",Total:"83",Damage:"210+157+157+210*2+315\n(1206)",BlockAdvantage:"-7",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"16",Active:"4(11)2(2)2(6)2",Recovery:"",Total:"",Damage:"157*2+210*2+315\n(1017)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"20",Active:"4(10)2(6)2(8)2(10)2",Recovery:"",Total:"",Damage:"210+157+157+210*2+315\n(1206)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3844",name: "Dodge", input: [[DoubleKick,"(can be directed)",],],
FrameData:
[
{Version:"Forward",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 6-24"},
{Version:"SLASH Forward",Startup:"43",Active:"4",Recovery:"35",Total:"81",Damage:"400",BlockAdvantage:"-18",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:"FRAME 6-24"},
{Version:"Backward",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 6-24"},
{Version:"SLASH Backward",Startup:"43",Active:"4",Recovery:"35",Total:"81",Damage:"400",BlockAdvantage:"-18",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:"FRAME 6-24"},]  },
{ID: "3845",name: "Demon Dodge", input: [["(in Demon Mode only)",DoubleKick,"(can be directed)",],],
FrameData:
[
{Version:"Forward",Startup:"1",Active:"21",Recovery:"16",Total:"37",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 5-24"},
{Version:"SLASH Forward",Startup:"30",Active:"4",Recovery:"35",Total:"68",Damage:"420",BlockAdvantage:"-18",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:"FRAME 5-23"},
{Version:"Backward",Startup:"1",Active:"21",Recovery:"16",Total:"37",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 5-24"},
{Version:"SLASH Backward",Startup:"30",Active:"4",Recovery:"35",Total:"68",Damage:"420",BlockAdvantage:"-18",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:"FRAME 5-23"},]  },
],

},
biographyIntro:"The Monster Hunter (モンスターハンター Monsutā Hantā) franchise is a series of fantasy-themed action role-playing video games that started with the game Monster Hunter for PlayStation 2, released in 2004. Titles have been released across a variety of platforms, including personal computer, home console, portable consoles, and mobile devices. The series is developed and published by Capcom.",

biographyURL:"https://en.wikipedia.org/wiki/Monster_Hunter"},

{name: "Morrigan",
image: require('./img/characters/morrigan.jpg'), 
portraitImage: require('./img/characters/morriganportrait.png'),
side: "Capcom",
vitality: "9000", alternateStates:["Astral Vision"],
players:["RyanLV","Chris G"],
moveList: {normals:
[{ID: "4131",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"10",Active:"2",Recovery:"25",Total:"36",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"51",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4132",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"9",Active:"6",Recovery:"25",Total:"39",Damage:"600",BlockAdvantage:"-11",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4133",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"3",Recovery:"16",Total:"26",Damage:"400",BlockAdvantage:"-4",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4134",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"5",Active:"2(3)2",Recovery:"9",Total:"20",Damage:"200+200\n(360)",BlockAdvantage:"2",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4135",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"2",Recovery:"9",Total:"15",Damage:"200",BlockAdvantage:"2",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4136",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"10",Active:"8",Recovery:"18",Total:"35",Damage:"600",BlockAdvantage:"-6",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4137",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"4",Recovery:"12",Total:"23",Damage:"400",BlockAdvantage:"0",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4138",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"11",Active:"5",Recovery:"23",Total:"38",Damage:"300+300",BlockAdvantage:"-6",HitAdvantage:"13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4139",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"6",Recovery:"10",Total:"20",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4140",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"10",Active:"6",Recovery:"21",Total:"36",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4141",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"10",Recovery:"14",Total:"30",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4142",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"11",Active:"3",Recovery:"18",Total:"31",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4302",name: "c.HK (Astral Vision)", input: [],
FrameData:
[
{Version:"c.HK Astral Vision",Startup:"10",Active:"2",Recovery:"25",Total:"36",Damage:"600*2\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4303",name: "c.HP (Astral Vision)", input: [],
FrameData:
[
{Version:"c.HP Astral Vision",Startup:"9",Active:"6",Recovery:"25",Total:"39",Damage:"480*2\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4304",name: "c.LK (Astral Vision)", input: [],
FrameData:
[
{Version:"c.LK Astral Vision",Startup:"8",Active:"3",Recovery:"16",Total:"26",Damage:"320*2\n(608)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4305",name: "c.LP (Astral Vision)", input: [],
FrameData:
[
{Version:"c.LP Astral Vision",Startup:"5",Active:"2(3)2",Recovery:"9",Total:"20",Damage:"160*4\n(544)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4306",name: "LP (Astral Vision)", input: [],
FrameData:
[
{Version:"LP Astral Vision",Startup:"5",Active:"2",Recovery:"9",Total:"15",Damage:"160*2\n(288)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4307",name: "HP (Astral Vision)", input: [],
FrameData:
[
{Version:"HP Astral Vision",Startup:"10",Active:"8",Recovery:"18",Total:"35",Damage:"480*2\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4308",name: "LK (Astral Vision)", input: [],
FrameData:
[
{Version:"LK Astral Vision",Startup:"8",Active:"4",Recovery:"12",Total:"23",Damage:"320*2\n(608)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4309",name: "HK (Astral Vision)", input: [],
FrameData:
[
{Version:"HK Astral Vision",Startup:"11",Active:"5",Recovery:"23",Total:"38",Damage:"240*4\n(936)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4310",name: "j.LP (Astral Vision)", input: [],
FrameData:
[
{Version:"j.LP Astral Vision",Startup:"5",Active:"6",Recovery:"10",Total:"20",Damage:"160*2\n(288)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4311",name: "j.HP (Astral Vision)", input: [],
FrameData:
[
{Version:"j.HP Astral Vision",Startup:"10",Active:"6",Recovery:"21",Total:"36",Damage:"480*2\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4312",name: "j.LK (Astral Vision)", input: [],
FrameData:
[
{Version:"j.LK Astral Vision",Startup:"7",Active:"10",Recovery:"14",Total:"30",Damage:"320*2\n(576)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4313",name: "j.HK (Astral Vision)", input: [],
FrameData:
[
{Version:"j.HK Astral Vision",Startup:"11",Active:"3",Recovery:"18",Total:"31",Damage:"480*2\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3685",name: "Heart Piercing", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"18",Recovery:"7",Total:"34",Damage:"100*8\n(712)",BlockAdvantage:"5",HitAdvantage:"7",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Astral Vision",Startup:"10",Active:"18",Recovery:"7",Total:"34",Damage:"80*16\n(1096)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3686",name: "Necro Desire", input: [[Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"10",Active:"10",Recovery:"13",Total:"32",Damage:"100*4\n(370)",BlockAdvantage:"1",HitAdvantage:"-2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Astral Vision",Startup:"10",Active:"10",Recovery:"13",Total:"32",Damage:"80*8\n(584)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3687",name: "Mystery Arc", input: [[DownRight,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"3",Recovery:"20",Total:"36",Damage:"600",BlockAdvantage:"-4",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Astral Vision",Startup:"14",Active:"3",Recovery:"20",Total:"36",Damage:"600*2\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3688",name: "Shell Kick", input: [[Jump,Down,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"7",Active:"24",Recovery:"20",Total:"50",Damage:"150*8\n(1140)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Astral Vision",Startup:"7",Active:"24",Recovery:"20",Total:"50",Damage:"120*16\n(1728)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3681",name: "Finishing Shower (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"19",Active:"110",Recovery:"0",Total:"128",Damage:"250*30\n(4600)",BlockAdvantage:"-10",HitAdvantage:"38",ChAdvantage:"",InvincibilityFrames:"FRAME 6-7"},
{Version:"Air",Startup:"19",Active:"110",Recovery:"0",Total:"128",Damage:"250*30\n(4600)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 6-7"},
{Version:"Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"250*30\n(4600)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"250*30\n(4600)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3682",name: "Shadow Servant", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"",Startup:"21",Active:"53",Recovery:"13",Total:"86",Damage:"800*5+500\n(3450)",BlockAdvantage:"-33",HitAdvantage:"35",ChAdvantage:"",InvincibilityFrames:"FRAME 1-22"},
{Version:"Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"800*5+500\n(3450)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3683",name: "Astral Vision", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"32",Active:"0",Recovery:"0",Total:"32",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 13-14"},]  },
{ID: "3684",name: "Darkness Illusion (air ok) (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"21",Active:"47",Recovery:"12",Total:"79",Damage:"5230\n(16 HITS)",BlockAdvantage:"-8",HitAdvantage:"83",ChAdvantage:"",InvincibilityFrames:"FRAME 1-30"},
{Version:"Air",Startup:"21",Active:"47",Recovery:"0",Total:"67",Damage:"5230\n(16 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-30"},
{Version:"Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"5230\n(16 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"5230\n(16 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3676",name: "Soul Fist (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"15",Active:"2",Recovery:"34",Total:"50",Damage:"800",BlockAdvantage:"-10",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"15",Active:"2",Recovery:"34",Total:"50",Damage:"800",BlockAdvantage:"-10",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"10",Active:"36",Recovery:"0",Total:"45",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"10",Active:"36",Recovery:"0",Total:"45",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"640*2\n(1216)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"640*2\n(1216)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"640*2\n(1216)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"640*2\n(1216)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3677",name: "Harmonious Spear (air ok)", input: [[QCF,Plus,Kick,"/Hold",Kick,],],
FrameData:
[
{Version:"LK",Startup:"47",Active:"9",Recovery:"15",Total:"70",Damage:"900",BlockAdvantage:"1",HitAdvantage:"78",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Charged",Startup:"70",Active:"0",Recovery:"0",Total:"70",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"42",Active:"9",Recovery:"20",Total:"70",Damage:"900",BlockAdvantage:"-4",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Charged",Startup:"70",Active:"0",Recovery:"0",Total:"70",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"27",Active:"9",Recovery:"15",Total:"50",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air Charged",Startup:"50",Active:"0",Recovery:"0",Total:"50",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"22",Active:"9",Recovery:"20",Total:"50",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air Charged",Startup:"50",Active:"0",Recovery:"0",Total:"50",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Charged Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Charged Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air Charged Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air Charged Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"720*2\n(1368)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3678",name: "Shadow Blade (air ok)", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"4",Active:"10",Recovery:"18",Total:"31",Damage:"1100",BlockAdvantage:"-8",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"4",Active:"17",Recovery:"37",Total:"57",Damage:"1200",BlockAdvantage:"-34",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"4",Active:"10",Recovery:"18",Total:"31",Damage:"1100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"4",Active:"15",Recovery:"31",Total:"49",Damage:"1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"880*2\n(1672)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"960*2\n(1824)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"880*2\n(1672)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"960*2\n(1824)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3679",name: "Vector Drain", input: [[HCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"4",Active:"1",Recovery:"24",Total:"28",Damage:"1200",BlockAdvantage:"38",HitAdvantage:"38",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"13",Active:"1",Recovery:"27",Total:"40",Damage:"1800",BlockAdvantage:"55",HitAdvantage:"55",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"960",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1440",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3680",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel Astral Vision",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Morrigan Aensland[note 1] (Japanese: ????·??????? Hepburn: Morigan Ansurando) is the main protagonist of Capcom's Darkstalkers series. Making her first appearance in Darkstalkers: The Night Warriors in 1994, she has since appeared in every game in the series and in various related media and merchandise, as well as in multiple video games outside the Darkstalkers line, including in most entries in both Marvel vs. Capcom and SNK vs. Capcom. In the series, she is a succubus and a powerful princess (later queen) of the demon realm Makai, who is very vain and lives for little more than the excitement of battle, but slowly takes up more of her royal responsibilities seriously despite her obsessive fascination with the human world. She has a sister-like split part named Lilith and a rival in Demitri Maximoff, and her moveset is reminiscent of Ryu and Ken from Street Fighter. She is central to the extended Darkstalkers franchise and is widely perceived as one of the most iconic Capcom characters as well as one of the most popular female characters in video gaming.",

biographyURL:"https://en.wikipedia.org/wiki/Morrigan_Aensland"},

{name: "Nemesis",
image: require('./img/characters/nemesis.jpg'), 
portraitImage: require('./img/characters/nemesisportrait.png'),
side: "Capcom",
vitality: "11000", alternateStates:[],
players:["Sacktap","Airtola","Jan"],
moveList: {normals:
[{ID: "4143",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4144",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4145",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4146",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4147",name: "LP", input: [],
FrameData:
[]  },
{ID: "4148",name: "HP", input: [],
FrameData:
[]  },
{ID: "4149",name: "LK", input: [],
FrameData:
[]  },
{ID: "4150",name: "HK", input: [],
FrameData:
[]  },
{ID: "4151",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4152",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4153",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4154",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3697",name: "Deadly Reach", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[]  },
],

hypers:
[{ID: "3694",name: "Biohazard Rush", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3695",name: "Bioweapon Assault", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3696",name: "Fatal Mutation (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
],

specials:
[{ID: "3689",name: "Clothesline Rocket", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3690",name: "Rocket Launcher (air ok)", input: [[QCF,Plus,Kick,"(can be charged on ground only)",],],
FrameData:
[]  },
{ID: "3691",name: "Ground Rocket Launcher > Reload", input: [[Kick,"(during Ground Rocket Launcher)",],],
FrameData:
[]  },
{ID: "3692",name: "Launcher Slam", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "3693",name: "Tentacle Slam", input: [[HCB,Plus,Kick,],],
FrameData:
[]  },
],

},
biographyIntro:"The Nemesis, also called the Pursuer[2] or Chaser (追跡者 Tsuisekisha),[3][4] is a fictional character in Capcom's Resident Evil franchise. Although smaller than other tyrant models, the creature dwarfs a typical human, and possesses vastly superior intelligence and physical dexterity than its undead peers. It features in Resident Evil 3: Nemesis as a titular main villain before later emerging in other titles and cameo roles. It is also featured on various merchandise and in the 2004 film Resident Evil: Apocalypse. The character is voiced by Tony Rosato in the original game and Gregg Berger in Resident Evil: Operation Raccoon City, and portrayed by Matthew G. Taylor in the film.",

biographyURL:"https://en.wikipedia.org/wiki/Nemesis_(Resident_Evil)"},

{name: "Nova",
image: require('./img/characters/nova.jpg'), 
portraitImage: require('./img/characters/novaportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:["Teemo","Justin Wong","Coach Steve"],
moveList: {normals:
[{ID: "3975",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"13",Active:"3",Recovery:"23",Total:"38",Damage:"700",BlockAdvantage:"-7",HitAdvantage:"52",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3976",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"12",Active:"7",Recovery:"21",Total:"39",Damage:"700",BlockAdvantage:"-8",HitAdvantage:"24",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3977",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"4",Recovery:"15",Total:"26",Damage:"500",BlockAdvantage:"-4",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3978",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"5",Active:"3",Recovery:"13",Total:"20",Damage:"300",BlockAdvantage:"-4",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3979",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"3",Recovery:"13",Total:"20",Damage:"300",BlockAdvantage:"-4",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3980",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"9",Active:"3",Recovery:"22",Total:"33",Damage:"700",BlockAdvantage:"-6",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3981",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"2",Recovery:"17",Total:"26",Damage:"500",BlockAdvantage:"-4",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3982",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"11",Active:"3",Recovery:"24",Total:"37",Damage:"700",BlockAdvantage:"-8",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3983",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"2",Recovery:"14",Total:"20",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3984",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"11",Active:"4",Recovery:"24",Total:"38",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3985",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"2",Recovery:"19",Total:"29",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3986",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"13",Active:"3",Recovery:"15",Total:"30",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3444",name: "Shooting Punch", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"11",Active:"8",Recovery:"20",Total:"38",Damage:"500",BlockAdvantage:"-13",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3445",name: "Nova Slam", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"24",Active:"4",Recovery:"27",Total:"54",Damage:"700",BlockAdvantage:"-12",HitAdvantage:"56",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3446",name: "Moon Tracer Kick", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"15",Active:"4",Recovery:"26",Total:"44",Damage:"700",BlockAdvantage:"-11",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3447",name: "Aerial Uppercut", input: [[Jump,Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"8",Active:"4",Recovery:"18",Total:"29",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3448",name: "Slash Kick", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"10",Active:"7",Recovery:"24",Total:"40",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3449",name: "Backstep Kick", input: [[HardKick,">",HardKick,"(only if first attack hits)",],],
FrameData:
[
{Version:"",Startup:"11",Active:"1(13)1+2",Recovery:"23",Total:"50",Damage:"700",BlockAdvantage:"-7",HitAdvantage:"29",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3441",name: "Gravimetric Blaster (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"12",Active:"74",Recovery:"46",Total:"131",Damage:"60*28\n(1350)-120*36\n(3240)",BlockAdvantage:"-29",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"12",Active:"74",Recovery:"46",Total:"131",Damage:"60*28\n(1350)-120*36\n(3240)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"With 3 hyper meters",Startup:"12",Active:"74",Recovery:"46",Total:"131",Damage:"60*28\n(1350)-120*36\n(3240)",BlockAdvantage:"-29",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air With 3 hyper meters",Startup:"12",Active:"74",Recovery:"46",Total:"131",Damage:"60*28\n(1350)-120*36\n(3240)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3442",name: "Super Nova (air ok)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"33",Recovery:"57",Total:"103",Damage:"140*33\n(3402)",BlockAdvantage:"-39",HitAdvantage:"44",ChAdvantage:"",InvincibilityFrames:"FRAME 1-13"},
{Version:"Air",Startup:"14",Active:"33",Recovery:"57",Total:"103",Damage:"140*33\n(3402)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-13"},]  },
{ID: "3443",name: "Nova Prime (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"15",Active:"25",Recovery:"31",Total:"70",Damage:"5230\n(8 HITS)",BlockAdvantage:"-37",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:"FRAME 1-25"},]  },
],

specials:
[{ID: "3436",name: "Gravimetric Pulse (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"16",Active:"8",Recovery:"32",Total:"55",Damage:"1000",BlockAdvantage:"-14",HitAdvantage:"8",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"16",Active:"8",Recovery:"32",Total:"55",Damage:"1000",BlockAdvantage:"-14",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"17",Active:"8",Recovery:"33",Total:"57",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"17",Active:"8",Recovery:"33",Total:"57",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP With 3 hyper meters",Startup:"16",Active:"8",Recovery:"32",Total:"55",Damage:"500+700",BlockAdvantage:"-19",HitAdvantage:"39",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP With 3 hyper meters",Startup:"16",Active:"8",Recovery:"32",Total:"55",Damage:"500+700",BlockAdvantage:"-19",HitAdvantage:"45",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air With 3 hyper meters",Startup:"17",Active:"8",Recovery:"33",Total:"57",Damage:"500+700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air With 3 hyper meters",Startup:"17",Active:"8",Recovery:"33",Total:"57",Damage:"500+700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3437",name: "Nova Strike (air ok)", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"19",Active:"10",Recovery:"13",Total:"41",Damage:"900",BlockAdvantage:"-4",HitAdvantage:"23",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"19",Active:"10",Recovery:"25",Total:"53",Damage:"900",BlockAdvantage:"-16",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"19",Active:"12",Recovery:"16",Total:"46",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"19",Active:"11",Recovery:"25",Total:"54",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3438",name: "Centurion Rush (air ok)", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"13",Active:"16",Recovery:"23",Total:"51",Damage:"1000",BlockAdvantage:"-20",HitAdvantage:"39",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"29",Active:"15",Recovery:"9",Total:"52",Damage:"1000",BlockAdvantage:"-3",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"13",Active:"15",Recovery:"10",Total:"37",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"45",Active:"9",Recovery:"20",Total:"73",Damage:"1000",BlockAdvantage:"-10",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3439",name: "Energy Javelin (air ok)", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"25",Active:"31",Recovery:"0",Total:"55",Damage:"400+800",BlockAdvantage:"32",HitAdvantage:"58",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"33",Active:"28",Recovery:"0",Total:"60",Damage:"500+1000",BlockAdvantage:"28",HitAdvantage:"54",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"25",Active:"31",Recovery:"0",Total:"55",Damage:"400+800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"33",Active:"28",Recovery:"0",Total:"60",Damage:"500+1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP With 3 hyper meters",Startup:"25",Active:"21",Recovery:"0",Total:"45",Damage:"250*2+500/500+500",BlockAdvantage:"45",HitAdvantage:"131",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP With 3 hyper meters",Startup:"36",Active:"18",Recovery:"0",Total:"53",Damage:"350*2+700/700+700",BlockAdvantage:"41",HitAdvantage:"127",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air With 3 hyper meters",Startup:"25",Active:"21",Recovery:"0",Total:"45",Damage:"250*2+500/500+500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air With 3 hyper meters",Startup:"33",Active:"18",Recovery:"0",Total:"50",Damage:"350*2+700/700+700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3440",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"134",Active:"0",Recovery:"0",Total:"134",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Nova (Richard Rider) is a fictional superhero appearing in American comic books published by Marvel Comics. The character appeared historically as the star of his own series, and at other times, as a supporting character in team books such as The New Warriors. He is a member of the intergalactic police force known as the Nova Corps, for which he gained superhuman abilities including enhanced strength, flight and resistance to injury.",

biographyURL:"https://en.wikipedia.org/wiki/Nova_(Richard_Rider)"},

{name: "Rocket Raccoon",
image: require('./img/characters/rocketraccoon.jpg'), 
portraitImage: require('./img/characters/rocketraccoonportrait.png'),
side: "Marvel",
vitality: "9000", alternateStates:[],
players:["SonicFox"],
moveList: {normals:
[{ID: "3987",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"11",Active:"17",Recovery:"31",Total:"58",Damage:"600",BlockAdvantage:"-29",HitAdvantage:"30",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3988",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"11",Active:"3",Recovery:"24",Total:"37",Damage:"600",BlockAdvantage:"-7",HitAdvantage:"23",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3989",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"7",Active:"2",Recovery:"16",Total:"24",Damage:"400",BlockAdvantage:"-3",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3990",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"4",Active:"3",Recovery:"9",Total:"15",Damage:"200",BlockAdvantage:"1",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3991",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"4",Active:"3",Recovery:"8",Total:"14",Damage:"200",BlockAdvantage:"2",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3992",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"13",Active:"3",Recovery:"30",Total:"45",Damage:"600",BlockAdvantage:"-10",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3993",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"4",Recovery:"19",Total:"30",Damage:"400",BlockAdvantage:"-1",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3994",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"12",Active:"29",Recovery:"0",Total:"40",Damage:"600",BlockAdvantage:"-3",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3995",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"3",Recovery:"12",Total:"19",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3996",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"10",Active:"9",Recovery:"15",Total:"33",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3997",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"7",Recovery:"9",Total:"22",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3998",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"9",Active:"18(1)3",Recovery:"5",Total:"35",Damage:"100+500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3462",name: "Sucker Punch", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"8",Active:"2",Recovery:"13",Total:"22",Damage:"400",BlockAdvantage:"1",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3463",name: "Wild Ripper", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"11",Active:"12",Recovery:"20",Total:"42",Damage:"600",BlockAdvantage:"-12",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3459",name: "Rock 'n' Roll", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"13",Active:"77(66)11",Recovery:"105",Total:"271",Damage:"100*36+700\n(3270)",BlockAdvantage:"-89",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3460",name: "Mad Hopper", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"SET",Startup:"49",Active:"0",Recovery:"0",Total:"49",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"SET HIT",Startup:"17",Active:"23",Recovery:"10",Total:"49",Damage:"500*8\n(3150)",BlockAdvantage:"9",HitAdvantage:"95",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3461",name: "Animal Combination (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"22",Active:"66",Recovery:"80",Total:"167",Damage:"5350\n(11 HITS)",BlockAdvantage:"-61",HitAdvantage:"88",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3450",name: "Spitfire (air ok)", input: [[QCF,Plus,Punch,"(Can be followed up)",],],
FrameData:
[
{Version:"LP",Startup:"15",Active:"35",Recovery:"0",Total:"49",Damage:"600",BlockAdvantage:"-9",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"15",Active:"35",Recovery:"0",Total:"49",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"-10",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"15",Active:"1",Recovery:"",Total:"",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"15",Active:"1",Recovery:"",Total:"",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3451",name: "Spitfire > Spitfire Twice", input: [[Punch,"(from Spitfire)",],],
FrameData:
[
{Version:"LP",Startup:"15",Active:"1",Recovery:"",Total:"",Damage:"600",BlockAdvantage:"-15",HitAdvantage:"-17",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"15",Active:"1",Recovery:"",Total:"",Damage:"600",BlockAdvantage:"-10",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"15",Active:"1",Recovery:"",Total:"",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"15",Active:"1",Recovery:"",Total:"",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3452",name: "Spitspark (air ok)", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"26",Active:"41",Recovery:"0",Total:"66",Damage:"700",BlockAdvantage:"-15",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"26",Active:"41",Recovery:"0",Total:"66",Damage:"700",BlockAdvantage:"-14",HitAdvantage:"48",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3453",name: "Angel Gift", input: [[QCB,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"30",Active:"0",Recovery:"0",Total:"30",Damage:"400*3\n(1160)",BlockAdvantage:"40",HitAdvantage:"102",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3454",name: "Grab Bag", input: [[QCB,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"100*10\n(960)",BlockAdvantage:"58",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3455",name: "Groot Slam", input: [[QCB,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"31",Active:"3",Recovery:"2",Total:"35",Damage:"500+800",BlockAdvantage:"60",HitAdvantage:"151",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500+800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3456",name: "Groot Splinter", input: [[QCB,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"40",Active:"0",Recovery:"0",Total:"40",Damage:"300*5\n(1410)",BlockAdvantage:"53",HitAdvantage:"142",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*5\n(1410)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3457",name: "Tunnel Rat", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"16",Active:"7",Recovery:"24",Total:"46",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 16-23"},
{Version:"HP/Hold",Startup:"16",Active:"120",Recovery:"24",Total:"159",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 16-136"},
{Version:"HP HP RELEASE",Startup:"39",Active:"0",Recovery:"0",Total:"39",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3458",name: "Rocket Skate (air ok)", input: [[DoubleKick,"(can be directed)",],],
FrameData:
[
{Version:"Forward",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up-Forward",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up-Backward",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up-Forward Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up-Backward Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down-Forward Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down-Backward Air",Startup:"36",Active:"0",Recovery:"0",Total:"36",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Rocket Raccoon is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Bill Mantlo and artist Keith Giffen, the character first appeared in Marvel Preview #7 (Summer 1976). He is an intelligent, anthropomorphic raccoon, who is an expert marksman and master tactician. His name and aspects of his character are a nod to The Beatles' 1968 song 'Rocky Raccoon'.",

biographyURL:"https://en.wikipedia.org/wiki/Rocket_Raccoon"},

{name: "Ryu",
image: require('./img/characters/ryu.jpg'), 
portraitImage: require('./img/characters/ryuportrait.png'),
side: "Capcom",
vitality: "10000", alternateStates:[],
players:[],
moveList: {normals:
[{ID: "4155",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"10",Active:"4",Recovery:"33",Total:"46",Damage:"700",BlockAdvantage:"-18",HitAdvantage:"41",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4156",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"10",Active:"5",Recovery:"21",Total:"35",Damage:"700",BlockAdvantage:"-6",HitAdvantage:"24",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4157",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"4",Recovery:"15",Total:"26",Damage:"500",BlockAdvantage:"-4",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4158",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"5",Active:"2",Recovery:"14",Total:"20",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4159",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"3",Recovery:"7",Total:"14",Damage:"300",BlockAdvantage:"3",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4160",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"11",Active:"3",Recovery:"21",Total:"34",Damage:"700",BlockAdvantage:"-4",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4161",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"2",Recovery:"21",Total:"30",Damage:"500",BlockAdvantage:"-7",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4162",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"12",Active:"6",Recovery:"17",Total:"34",Damage:"700",BlockAdvantage:"-3",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4163",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"10",Recovery:"5",Total:"19",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4164",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"9",Active:"5",Recovery:"17",Total:"30",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4165",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"7",Recovery:"17",Total:"30",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4166",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"8",Active:"6",Recovery:"17",Total:"30",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3710",name: "Collarbone Breaker", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"24",Active:"4(0)4",Recovery:"20",Total:"51",Damage:"300+300",BlockAdvantage:"-4",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3711",name: "Sukui Tsuki", input: [[Jump,Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"8",Recovery:"11",Total:"28",Damage:"250+250\n(475)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3712",name: "Aerial Hiza Geri", input: [[Jump,Down,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"8",Active:"11",Recovery:"7",Total:"25",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3713",name: "Aerial Mawashi Geri", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"8",Active:"6",Recovery:"17",Total:"30",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3714",name: "Shoken Tsuki", input: [["(on hit)",LightPunch,">",Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"5",Active:"1(5)6",Recovery:"16",Total:"32",Damage:"500",BlockAdvantage:"-6",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3715",name: "Hiza Geri", input: [["(on hit)",LightPunch,"or",LightKick,">",Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"5",Active:"1(7)2",Recovery:"21",Total:"35",Damage:"500",BlockAdvantage:"-12",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3703",name: "Shinku Hadoken (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"13",Active:"66",Recovery:"47",Total:"125",Damage:"72*28\n(1547)-145*32\n(3400)",BlockAdvantage:"-29",HitAdvantage:"23",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Straight Up",Startup:"",Active:"",Recovery:"",Total:"",Damage:"145*28\n(3057)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"13",Active:"65",Recovery:"67",Total:"144",Damage:"72*27\n(1511)-145*31\n(3328)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Straight Down Air",Startup:"13",Active:"65",Recovery:"67",Total:"143",Damage:"72-145*31\n(3328)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3704",name: "Shinku Hadoken (no input) > Direct Up/Down Shot", input: [["Hold",Up,"or",Down,"during the shot",],],
FrameData:
[]  },
{ID: "3705",name: "Ground Shinku Hadoken > Aim Up", input: [["Hold",Up,"to aim before the shot",],],
FrameData:
[]  },
{ID: "3706",name: "Aerial Shinku Hadoken > Aim Down", input: [["Hold",Down,"to aim before the shot",],],
FrameData:
[]  },
{ID: "3707",name: "Shinku Hadoken (Aim Up/Down) > Direct Left/Right Shot", input: [["Hold",Left,"or",Right,"during the shot",],],
FrameData:
[]  },
{ID: "3708",name: "Shinku Tatsumaki Senpukyaku", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"12",Active:"109",Recovery:"31",Total:"151",Damage:"240*17+1000\n(3644)",BlockAdvantage:"-23",HitAdvantage:"54",ChAdvantage:"",InvincibilityFrames:"FRAME 1-12"},]  },
{ID: "3709",name: "Shin Shoryuken (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"16",Active:"41",Recovery:"41",Total:"97",Damage:"5440\n(4 HITS)",BlockAdvantage:"-39",HitAdvantage:"49",ChAdvantage:"",InvincibilityFrames:"FRAME 1-24"},
{Version:"SATSUI NO HADO",Startup:"16",Active:"41",Recovery:"41",Total:"97",Damage:"6490\n(4 HITS)",BlockAdvantage:"-39",HitAdvantage:"43",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3698",name: "Hadoken (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"7",Active:"2",Recovery:"42",Total:"50",Damage:"1000",BlockAdvantage:"-18",HitAdvantage:"-14",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"11",Active:"2",Recovery:"43",Total:"55",Damage:"1000",BlockAdvantage:"-19",HitAdvantage:"-15",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"7",Active:"2",Recovery:"42",Total:"50",Damage:"1000",BlockAdvantage:"-18",HitAdvantage:"-14",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"11",Active:"2",Recovery:"43",Total:"55",Damage:"1000",BlockAdvantage:"-19",HitAdvantage:"-15",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3699",name: "Sen Hadoken (air ok)", input: [[QCF,"+Hold",HardPunch,],],
FrameData:
[
{Version:"HP Charged",Startup:"93",Active:"21",Recovery:"24",Total:"137",Damage:"125*5\n(599)-250*9\n(1975)",BlockAdvantage:"-7",HitAdvantage:"8",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air Charged",Startup:"93",Active:"21",Recovery:"24",Total:"137",Damage:"125*5\n(599)-250*9\n(1975)",BlockAdvantage:"-7",HitAdvantage:"8",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3700",name: "Jodan Sokuto Geri", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"17",Active:"12",Recovery:"22",Total:"50",Damage:"1000",BlockAdvantage:"-14",HitAdvantage:"35",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"20",Active:"12",Recovery:"34",Total:"65",Damage:"1000",BlockAdvantage:"-26",HitAdvantage:"69",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3701",name: "Shoryuken", input: [[DragonPunch,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"4",Active:"14",Recovery:"34",Total:"51",Damage:"1000/1200",BlockAdvantage:"-28",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:"FRAME 1-13"},
{Version:"HP",Startup:"5",Active:"22",Recovery:"57",Total:"83",Damage:"1000/1500",BlockAdvantage:"-55",HitAdvantage:"-14",ChAdvantage:"",InvincibilityFrames:"FRAME 1-14"},]  },
{ID: "3702",name: "Tatsumaki Senpukyaku (air ok)", input: [[QCB,"or",Jump,QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"4",Active:"1(8)3",Recovery:"25",Total:"40",Damage:"200+800",BlockAdvantage:"-8",HitAdvantage:"91",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"13",Active:"3(9)3(9)3",Recovery:"25",Total:"64",Damage:"400+400+400\n(1160)",BlockAdvantage:"-8",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},
{Version:"AERIAL  Forward LK",Startup:"7",Active:"3",Recovery:"30",Total:"39",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"AERIAL  Forward HK",Startup:"7",Active:"3(9)3(9)3",Recovery:"30",Total:"63",Damage:"400+400+400\n(1160)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"AERIAL  Down LK",Startup:"7",Active:"3(3)3(3)2",Recovery:"15",Total:"35",Damage:"1100+1100\n(2090)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"AERIAL  Down HK",Startup:"7",Active:"3(3)3(3)3(3)3(3)3",Recovery:"2",Total:"35",Damage:"400+400+400\n(1160)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Ryu (Japanese: ??? Hepburn: Ryu, named Takashi (?) in the original Street Fighter) is a fictional character and the main protagonist of Capcom's Street Fighter series.[4] He was created by Manabu Takemura and Takashi Nishiyama.",

biographyURL:"https://en.wikipedia.org/wiki/Ryu_(Street_Fighter)"},

{name: "Sigma",
image: require('./img/characters/sigma.jpg'), 
portraitImage: require('./img/characters/sigmaportrait.png'),
side: "Capcom",
vitality: "11000", alternateStates:[],
players:["Jan","UA|Stone"],
moveList: {normals:
[{ID: "4227",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"13",Active:"6",Recovery:"34",Total:"52",Damage:"800",BlockAdvantage:"-17",HitAdvantage:"38",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4228",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"14",Active:"4",Recovery:"48",Total:"65",Damage:"800",BlockAdvantage:"-32",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4229",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"9",Active:"6",Recovery:"29",Total:"43",Damage:"600",BlockAdvantage:"-19",HitAdvantage:"-16",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4230",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"7",Active:"6",Recovery:"20",Total:"32",Damage:"600",BlockAdvantage:"-11",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4231",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"8",Active:"3",Recovery:"16",Total:"26",Damage:"600",BlockAdvantage:"-4",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4232",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"13",Active:"4",Recovery:"30",Total:"46",Damage:"800",BlockAdvantage:"-14",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4233",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"10",Active:"7",Recovery:"25",Total:"41",Damage:"600",BlockAdvantage:"-15",HitAdvantage:"-12",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4234",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"12",Active:"5",Recovery:"45",Total:"61",Damage:"800",BlockAdvantage:"-28",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4235",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"6",Recovery:"26",Total:"36",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4236",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"14",Active:"4",Recovery:"47",Total:"64",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4237",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"4",Recovery:"44",Total:"54",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4238",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"14",Active:"6",Recovery:"38",Total:"57",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3838",name: "Overload Laser", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"18",Active:"9",Recovery:"24",Total:"50",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"71",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3835",name: "Doom Buster (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"12",Active:"34",Recovery:"23",Total:"68",Damage:"500*5\n(2200)",BlockAdvantage:"-12",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:"FRAME 6"},
{Version:"Air",Startup:"12",Active:"32",Recovery:"28",Total:"71",Damage:"500*5\n(2200)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 6"},]  },
{ID: "3836",name: "Blazing Line", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"15",Active:"65",Recovery:"0",Total:"79",Damage:"500*?+600*?",BlockAdvantage:"2-20",HitAdvantage:"58-76",ChAdvantage:"",InvincibilityFrames:"FRAME 11"},]  },
{ID: "3837",name: "Rave Divide", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"21",Active:"3(26)4(17)2(30)6(22)3(8)3",Recovery:"62",Total:"206",Damage:"800*4+600+900\n(3530)",BlockAdvantage:"-46",HitAdvantage:"28",ChAdvantage:"",InvincibilityFrames:"FRAME 11"},]  },
{ID: "4263",name: "Final Sigma (level 3)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"14",Active:"3",Recovery:"68",Total:"84",Damage:"5635\n(9 HITS)",BlockAdvantage:"-52",HitAdvantage:"24",ChAdvantage:"",InvincibilityFrames:"FRAME 1-17"},]  },
],

specials:
[{ID: "3829",name: "Arc Divide", input: [[QCF,Plus,Punch,"or",Kick,"(Can be followed up)",],],
FrameData:
[
{Version:"LP",Startup:"18",Active:"2",Recovery:"33",Total:"52",Damage:"700+200*3\n(1132)",BlockAdvantage:"14",HitAdvantage:"38",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"19",Active:"2",Recovery:"37",Total:"57",Damage:"700+200*3\n(1132)",BlockAdvantage:"-20",HitAdvantage:"42",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"26",Active:"4",Recovery:"37",Total:"66",Damage:"800+200*3\n(1232)",BlockAdvantage:"-22",HitAdvantage:"13 / 74",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"25",Active:"3",Recovery:"48",Total:"75",Damage:"800+200*3\n(1232)",BlockAdvantage:"-32",HitAdvantage:"23 / 32",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3830",name: "Arc Divide > Second Divide", input: [[Kick,"(from Arc Divide)",],],
FrameData:
[
{Version:"LK",Startup:"26",Active:"4",Recovery:"37",Total:"66",Damage:"800+200*3\n(1232)",BlockAdvantage:"-21",HitAdvantage:"74",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"25",Active:"3",Recovery:"48",Total:"75",Damage:"800+200*3\n(1232)",BlockAdvantage:"1",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"18",Active:"2(6)0(25)4",Recovery:"37",Total:"91",Damage:"800+200*3\n(1232)",BlockAdvantage:"-21",HitAdvantage:"74",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"18",Active:"2(13)0(24)3",Recovery:"48",Total:"107",Damage:"800+200*3\n(1232)",BlockAdvantage:"1",HitAdvantage:"32",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3831",name: "Mirage Claw", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"7",Active:"3",Recovery:"52",Total:"61",Damage:"1500",BlockAdvantage:"50",HitAdvantage:"50",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"18",Active:"3",Recovery:"53",Total:"73",Damage:"2000",BlockAdvantage:"79",HitAdvantage:"79",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3832",name: "Counter Teleport", input: [[Down,Down,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"6",Active:"25",Recovery:"19",Total:"49",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"12",Active:"26",Recovery:"15",Total:"52",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3833",name: "Straight Divide (air ok)", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"20",Active:"20(6)5",Recovery:"24",Total:"74",Damage:"500+800",BlockAdvantage:"-36",HitAdvantage:"37",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"20",Active:"17(6)6",Recovery:"24",Total:"72",Damage:"500+800",BlockAdvantage:"-4",HitAdvantage:"65",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"18",Active:"20(10)5",Recovery:"20",Total:"72",Damage:"500+800",BlockAdvantage:"0",HitAdvantage:"43",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"18",Active:"17(6)6",Recovery:"23",Total:"69",Damage:"500+800",BlockAdvantage:"-3",HitAdvantage:"70",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3834",name: "Reflector Magnum", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"20",Active:"32",Recovery:"0",Total:"51",Damage:"400*2",BlockAdvantage:"-7",HitAdvantage:"15",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"20",Active:"32",Recovery:"0",Total:"51",Damage:"400*2",BlockAdvantage:"-7",HitAdvantage:"15",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Sigma (シグマShiguma) is the primary antagonist of the Mega Man X series, considered to be the finest reploid of the time with circuitry designs meant to keep him from going Maverick. He was once the leader of the Maverick Hunters, but during a mission, he came into contact with Zero, who at the time was a Maverick. During their battle, Zero leaves Sigma badly damaged and infected with the Zero Virus. Although Sigma was initially stable after the incident, he soon became a Maverick and declared war on humans. He was defeated by X and Zero numerous times before being finally defeated on the moon in Mega Man X8, where they believed the Zero Virus will eventually die out. He is voiced by Mugihito from Mega Man X4 through Maverick Hunter X in Japanese, Charlie Fontana in the English adaptation of X4, Walter Roberts in the English adaptation of X7, Dave Pettitt in the English adaptation of X8, and Gerald Matthews in the English adaptation of Maverick Hunter X.",

biographyURL:"https://en.wikipedia.org/wiki/List_of_Mega_Man_X_characters#Sigma"},

{name: "Spencer",
image: require('./img/characters/spencer.jpg'), 
portraitImage: require('./img/characters/spencerportrait.png'),
side: "Capcom",
vitality: "10000", alternateStates:[],
players:["Coach Steve"],
moveList: {normals:
[{ID: "4167",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"15",Active:"4",Recovery:"34",Total:"52",Damage:"700",BlockAdvantage:"-19",HitAdvantage:"40",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4168",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"10",Active:"4",Recovery:"25",Total:"38",Damage:"700",BlockAdvantage:"-4",HitAdvantage:"25",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4169",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"4",Recovery:"9",Total:"20",Damage:"500",BlockAdvantage:"2",HitAdvantage:"5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4170",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"6",Active:"3",Recovery:"16",Total:"24",Damage:"300",BlockAdvantage:"-7",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4171",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"6",Active:"3",Recovery:"11",Total:"19",Damage:"300",BlockAdvantage:"-2",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4172",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"12",Active:"9",Recovery:"15",Total:"35",Damage:"700",BlockAdvantage:"-5",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4173",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"9",Active:"6",Recovery:"18",Total:"32",Damage:"500",BlockAdvantage:"-9",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4174",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"10",Active:"2",Recovery:"49",Total:"60",Damage:"700",BlockAdvantage:"-32",HitAdvantage:"-27",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4175",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"6",Active:"5",Recovery:"13",Total:"23",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4176",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"10",Active:"4",Recovery:"22",Total:"35",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4177",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"9",Active:"9",Recovery:"16",Total:"33",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4178",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"9",Active:"7",Recovery:"31",Total:"46",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3730",name: "Throat Shock", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"9",Active:"4",Recovery:"20",Total:"32",Damage:"500",BlockAdvantage:"-9",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3731",name: "Right Hook", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"25",Active:"3",Recovery:"21",Total:"48",Damage:"800",BlockAdvantage:"-2",HitAdvantage:"4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3732",name: "Leg Breaker", input: [[DownRight,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"2",Recovery:"21",Total:"36",Damage:"750",BlockAdvantage:"-4",HitAdvantage:"23",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3733",name: "Head Smasher", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"4",Recovery:"22",Total:"35",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3727",name: "Bionic Maneuvers", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"15",Active:"27",Recovery:"29",Total:"67",Damage:"3430\n(6 HITS)",BlockAdvantage:"-9",HitAdvantage:"58",ChAdvantage:"",InvincibilityFrames:"FRAME 11"},]  },
{ID: "3728",name: "Bionic Lancer", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"11",Active:"9",Recovery:"53",Total:"72",Damage:"2300",BlockAdvantage:"-41",HitAdvantage:"30",ChAdvantage:"",InvincibilityFrames:"FRAME 1-14"},]  },
{ID: "3729",name: "Coup de Grace (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"11",Active:"2",Recovery:"68",Total:"80",Damage:"5190\n(2 HITS)",BlockAdvantage:"26",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:"FRAME 1-13"},]  },
],

specials:
[{ID: "3716",name: "Wire Grapple (air ok)", input: [[QCF,Plus,Punch,"or",Kick,"(Varied follow-up on ground ver. only)",],],
FrameData:
[
{Version:"LP",Startup:"12",Active:"25",Recovery:"43",Total:"79",Damage:"100",BlockAdvantage:"-25",HitAdvantage:"-43",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"12",Active:"25",Recovery:"43",Total:"79",Damage:"100",BlockAdvantage:"-25",HitAdvantage:"-43",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"12",Active:"25",Recovery:"43",Total:"79",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"12",Active:"25",Recovery:"43",Total:"79",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"14",Active:"15",Recovery:"26",Total:"54",Damage:"990\n(2 HITS)",BlockAdvantage:"-8",HitAdvantage:"71",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"14",Active:"15",Recovery:"26",Total:"54",Damage:"990\n(2 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"14",Active:"15",Recovery:"26",Total:"54",Damage:"990\n(2 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"14",Active:"15",Recovery:"26",Total:"54",Damage:"990\n(2 HITS)",BlockAdvantage:"-8",HitAdvantage:"71",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3717",name: "Ground Wire Grapple > Wire Grapple", input: [["No input (from Wire Grapple)",],],
FrameData:
[]  },
{ID: "3718",name: "Ground Wire Grapple > Reel In Punch", input: [[LightPunch,"(from Wire Grapple)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"910\n(2 HITS)",BlockAdvantage:"",HitAdvantage:"65",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3719",name: "Ground Wire Grapple > Come 'ere!", input: [[HardPunch,"(from Wire Grapple)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"",BlockAdvantage:"",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3720",name: "Jaw Breaker", input: [[Down,Down,Plus,Kick,"(Can be followed up)",],],
FrameData:
[
{Version:"LK",Startup:"6",Active:"2",Recovery:"30",Total:"37",Damage:"500",BlockAdvantage:"37",HitAdvantage:"37",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"6",Active:"3",Recovery:"29",Total:"37",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3721",name: "Jaw Breaker > Critical Kick", input: [[HardKick,"(from Jaw Breaker)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"1175\n(2 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3722",name: "Jaw Breaker (Just Frame) > Smash Kick", input: [["(on the hit)",HardKick,"(from Jaw Breaker (Just Frame))",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"725\n(2 HITS)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3723",name: "Armor Piercer", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"3",Active:"4",Recovery:"30",Total:"36",Damage:"800",BlockAdvantage:"-15",HitAdvantage:"79",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"24",Active:"6",Recovery:"29",Total:"58",Damage:"1300",BlockAdvantage:"-16",HitAdvantage:"82",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3724",name: "Hand Grenade", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"27",Active:"21",Recovery:"0",Total:"47",Damage:"800",BlockAdvantage:"56",HitAdvantage:"79",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"33",Active:"21",Recovery:"0",Total:"53",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3725",name: "Bionic Bomber", input: [[Jump,QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"20",Active:"23",Recovery:"26",Total:"68",Damage:"600+700\n(1230)",BlockAdvantage:"-11",HitAdvantage:"60",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"38",Active:"18",Recovery:"16",Total:"71",Damage:"600+1000\n(1500)",BlockAdvantage:"-1",HitAdvantage:"74",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3726",name: "Zip Line", input: [[Jump,DoubleKick,"(can be directed)",],],
FrameData:
[
{Version:"Forward Full Screen",Startup:"11",Active:"18",Recovery:"36",Total:"64",Damage:"200",BlockAdvantage:"-26",HitAdvantage:"-14",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward",Startup:"11",Active:"1",Recovery:"19",Total:"30",Damage:"200",BlockAdvantage:"-12",HitAdvantage:"0",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward",Startup:"11",Active:"1",Recovery:"19",Total:"30",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up",Startup:"11",Active:"9",Recovery:"17",Total:"36",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up-Forward",Startup:"11",Active:"1",Recovery:"9",Total:"20",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up-Backward",Startup:"11",Active:"1",Recovery:"9",Total:"20",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward Air",Startup:"11",Active:"18",Recovery:"26",Total:"54",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward Air",Startup:"11",Active:"1",Recovery:"9",Total:"20",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward Air",Startup:"11",Active:"1",Recovery:"9",Total:"20",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Air",Startup:"29",Active:"0",Recovery:"0",Total:"29",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down Air",Startup:"11",Active:"1",Recovery:"",Total:"",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down-Forward Air",Startup:"11",Active:"1",Recovery:"",Total:"",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Down-Backward Air",Startup:"11",Active:"1",Recovery:"",Total:"",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Nathan 'Rad' Spencer is a fictional character created by Capcom and the protagonist of the Bionic Commando series. Nathan Spencer is a prototype bionics-enhanced soldier who is mainly noted by video game reviewers due to his 'Bionic Arm' (one of the earliest grappling hooks in video games) and (for most of his early video games) his inability to jump.[1] Outside the Bionic Commando series, the character appeared in the Marvel vs. Capcom series. Nathan's design changed since his introduction, receiving both praise and criticism.",

biographyURL:"https://en.wikipedia.org/wiki/Rad_Spencer"},

{name: "Spider-Man",
image: require('./img/characters/spiderman.jpg'), 
portraitImage: require('./img/characters/spidermanportrait.png'),
side: "Marvel",
vitality: "9000", alternateStates:[],
players:["Chris G"],
moveList: {normals:
[{ID: "3999",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"10",Active:"6",Recovery:"31",Total:"46",Damage:"550",BlockAdvantage:"-18",HitAdvantage:"41",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4000",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"9",Active:"6",Recovery:"21",Total:"35",Damage:"550",BlockAdvantage:"-6",HitAdvantage:"24",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4001",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"7",Active:"3",Recovery:"11",Total:"20",Damage:"350",BlockAdvantage:"-3",HitAdvantage:"4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4002",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"4",Active:"3",Recovery:"11",Total:"17",Damage:"150",BlockAdvantage:"-1",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4003",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"4",Active:"3",Recovery:"9",Total:"15",Damage:"150",BlockAdvantage:"1",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4004",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"10",Active:"3",Recovery:"27",Total:"39",Damage:"550",BlockAdvantage:"-10",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4005",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"9",Recovery:"7",Total:"23",Damage:"350",BlockAdvantage:"0",HitAdvantage:"2",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4006",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"10",Active:"4",Recovery:"24",Total:"37",Damage:"550",BlockAdvantage:"-8",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4007",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"9",Recovery:"11",Total:"24",Damage:"150",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4008",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"9",Active:"5",Recovery:"31",Total:"44",Damage:"550",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4009",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"4",Recovery:"16",Total:"26",Damage:"350",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4010",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"10",Active:"3",Recovery:"15",Total:"27",Damage:"550",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3475",name: "Hidden Kick", input: [[DownRight,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"6",Active:"3",Recovery:"15",Total:"23",Damage:"350",BlockAdvantage:"-3",HitAdvantage:"17",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3476",name: "Straight Arrow", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"6",Recovery:"21",Total:"40",Damage:"550",BlockAdvantage:"-7",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3477",name: "Flying Roundhouse", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"10",Active:"8",Recovery:"15",Total:"32",Damage:"550",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3471",name: "Crawler Assault", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"17",Active:"3(5)3(5)3(5)4(4)3(5)3(4)3(23)4",Recovery:"50",Total:"143",Damage:"500+300*2+400+200*2+500+1500\n(3200)",BlockAdvantage:"-34",HitAdvantage:"54",ChAdvantage:"",InvincibilityFrames:"FRAME 1-19"},]  },
{ID: "3472",name: "Ultimate Web Throw (air ok)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"37",Active:"3",Recovery:"49",Total:"88",Damage:"3500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 1-30"},]  },
{ID: "3473",name: "Maximum Spider (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"27",Active:"11",Recovery:"0",Total:"37",Damage:"3630\n(15 HITS)",BlockAdvantage:"-23",HitAdvantage:"46",ChAdvantage:"",InvincibilityFrames:"FRAME 1-24"},
{Version:"Air",Startup:"30",Active:"13",Recovery:"0",Total:"42",Damage:"3630\n(15 HITS)",BlockAdvantage:"-25",HitAdvantage:"46",ChAdvantage:"",InvincibilityFrames:"FRAME 1-22"},]  },
{ID: "3474",name: "Watch Out Spidey (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"11",Recovery:"31",Total:"59",Damage:"5370\n(7 HITS)",BlockAdvantage:"-22",HitAdvantage:"48",ChAdvantage:"",InvincibilityFrames:"FRAME 1-28"},]  },
],

specials:
[{ID: "3464",name: "Web Ball (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"18",Active:"2",Recovery:"26",Total:"45",Damage:"700",BlockAdvantage:"-1",HitAdvantage:"66",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"30",Active:"2",Recovery:"35",Total:"66",Damage:"900",BlockAdvantage:"-10",HitAdvantage:"137",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"",Active:"",Recovery:"",Total:"",Damage:"900",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3465",name: "Spider Cannon", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"18",Active:"5",Recovery:"27",Total:"49",Damage:"800",BlockAdvantage:"-12",HitAdvantage:"75",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"30",Active:"17",Recovery:"31",Total:"77",Damage:"1200",BlockAdvantage:"-12",HitAdvantage:"89",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3466",name: "Spider Sting", input: [[Down,Down,Plus,Punch,"(can be followed)",],],
FrameData:
[
{Version:"LP",Startup:"7",Active:"9",Recovery:"20",Total:"35",Damage:"600",BlockAdvantage:"-9",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"11",Active:"12",Recovery:"44",Total:"66",Damage:"1000",BlockAdvantage:"-36",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3467",name: "Spider Sting > Spider Bite", input: [[Punch,"(from Spider Sting)",],],
FrameData:
[
{Version:"LP",Startup:"7",Active:"9(9)3",Recovery:"13",Total:"40",Damage:"600+200\n(780)",BlockAdvantage:"4",HitAdvantage:"79",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"11",Active:"12(8)3",Recovery:"19",Total:"52",Damage:"1000+200\n(1180)",BlockAdvantage:"-27",HitAdvantage:"80",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3468",name: "Web Swing (air ok)", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"12",Active:"9",Recovery:"35",Total:"55",Damage:"700",BlockAdvantage:"-24",HitAdvantage:"9",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"20",Active:"19",Recovery:"31",Total:"69",Damage:"1000",BlockAdvantage:"-29",HitAdvantage:"5",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"12",Active:"10",Recovery:"17",Total:"38",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"20",Active:"19",Recovery:"36",Total:"74",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3469",name: "Web Throw", input: [[HCB,Plus,Punch,"/Hold",HardPunch,"to adjust angle on",HardPunch,"ver. only",],],
FrameData:
[
{Version:"LP",Startup:"20",Active:"2",Recovery:"52",Total:"73",Damage:"200+1000",BlockAdvantage:"-34",HitAdvantage:"90",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"16",Active:"2",Recovery:"33",Total:"50",Damage:"200+1100",BlockAdvantage:"-15",HitAdvantage:"96",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Hold",Startup:"15",Active:"37",Recovery:"0",Total:"51",Damage:"200+1200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3470",name: "Web Glide", input: [[Jump,DoubleKick,"(can be directed)",],],
FrameData:
[
{Version:"Forward",Startup:"16",Active:"1",Recovery:"2",Total:"18",Damage:"100",BlockAdvantage:"15",HitAdvantage:"24",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward",Startup:"16",Active:"1",Recovery:"2",Total:"18",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up",Startup:"16",Active:"9",Recovery:"12",Total:"36",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Forward Air",Startup:"18",Active:"1",Recovery:"",Total:"",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Backward Air",Startup:"18",Active:"1",Recovery:"",Total:"",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up Air",Startup:"18",Active:"1",Recovery:"",Total:"",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Up-Backward Air",Startup:"18",Active:"1",Recovery:"",Total:"",Damage:"100",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and writer-artist Steve Ditko, and first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. Lee and Ditko conceived the character as an orphan being raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker were killed in a plane crash, and as a teenager, having to deal with the normal struggles of adolescence in addition to those of a costumed crime-fighter. Spider-Man's creators gave him super strength and agility, the ability to cling to most surfaces, shoot spider-webs using wrist-mounted devices of his own invention, which he calls 'web-shooters', and react to danger quickly with his 'spider-sense', enabling him to combat his foes.",

biographyURL:"https://en.wikipedia.org/wiki/Spider-Man"},

{name: "Strider",
image: require('./img/characters/strider.jpg'), 
portraitImage: require('./img/characters/striderportrait.png'),
side: "Capcom",
vitality: "9000", alternateStates:[],
players:["Richard Nguyen","Clockw0rk"],
moveList: {normals:
[{ID: "4179",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4180",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4181",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4182",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4183",name: "LP", input: [],
FrameData:
[]  },
{ID: "4184",name: "HP", input: [],
FrameData:
[]  },
{ID: "4185",name: "LK", input: [],
FrameData:
[]  },
{ID: "4186",name: "HK", input: [],
FrameData:
[]  },
{ID: "4187",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4188",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4189",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4190",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "3750",name: "Arch Cut", input: [[DownRight,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3751",name: "Formation A1", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "3752",name: "Formation A2", input: [[Right,Plus,HardKick,],],
FrameData:
[]  },
{ID: "3753",name: "Slide", input: [[DownRight,Plus,HardKick,],],
FrameData:
[]  },
{ID: "3754",name: "Lateral Slice (air ok)", input: [[Right,Plus,LightPunch,],],
FrameData:
[]  },
],

hypers:
[{ID: "3746",name: "Legion", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3747",name: "Brionac", input: [[Jump,QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "3748",name: "Ouroboros", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "3749",name: "Ragnarok (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
],

specials:
[{ID: "3734",name: "Ame-no-Murakumo", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "3735",name: "Excalibur", input: [[Jump,QCF,Plus,Punch,"or",Kick,],],
FrameData:
[]  },
{ID: "3736",name: "Wall Cling", input: [[QCF,Plus,LightKick,"(Varied follow-up)",],],
FrameData:
[]  },
{ID: "3737",name: "Wall Cling > Cypher Lateral Strike", input: [[LightPunch,"(during Wall Cling)",],],
FrameData:
[]  },
{ID: "3738",name: "Wall Cling > Raikiri Slash", input: [[HardPunch,"(during Wall Cling)",],],
FrameData:
[]  },
{ID: "3739",name: "Wall Cling > Ladder Kick", input: [[LightKick,"(during Wall Cling)",],],
FrameData:
[]  },
{ID: "3740",name: "Wall Cling > Leaping Kick", input: [[HardKick,"(during Wall Cling)",],],
FrameData:
[]  },
{ID: "3741",name: "Vajra", input: [[Down,Down,Plus,Punch,"or",Kick,],],
FrameData:
[]  },
{ID: "3742",name: "Gram (air ok)", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "3743",name: "Formation C", input: [[QCB,Plus,LightKick,],],
FrameData:
[]  },
{ID: "3744",name: "Formation B", input: [[QCB,Plus,HardKick,"(Can be followed up)",],],
FrameData:
[]  },
{ID: "3745",name: "Formation B > Shot", input: [[QCB,Plus,HardKick,"(from Formation B)",],],
FrameData:
[]  },
],

},
biographyIntro:"Strider Hiryu (???????? Sutoraida Hiryu) is a fictional character jointly owned by Capcom and Moto Kikaku. Although primarily known as a game character, Hiryu (??, 'Flying Dragon') debuted in 1988 as the protagonist of a Japan-exclusive manga titled Strider Hiryu, published by Kadokawa Shoten.",

biographyURL:"https://en.wikipedia.org/wiki/Strider_Hiryu"},

{name: "Thanos",
image: require('./img/characters/thanos.jpg'), 
portraitImage: require('./img/characters/thanosportrait.png'),
side: "Marvel",
vitality: "11000", alternateStates:[],
players:["Brian Kasugano","KaneBlueRiver","Joey D"],
moveList: {normals:
[{ID: "4011",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"15",Active:"11",Recovery:"31",Total:"56",Damage:"300*3\n(870)",BlockAdvantage:"-15",HitAdvantage:"22 / 52",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4012",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"13",Active:"3",Recovery:"26",Total:"41",Damage:"800",BlockAdvantage:"-10",HitAdvantage:"6 / 21",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4013",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"9",Active:"5",Recovery:"33",Total:"46",Damage:"300*2\n(570)",BlockAdvantage:"-21",HitAdvantage:"-18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4014",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"6",Active:"4",Recovery:"14",Total:"23",Damage:"400",BlockAdvantage:"-6",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4015",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"4",Recovery:"14",Total:"22",Damage:"400",BlockAdvantage:"-6",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4016",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"10",Active:"3",Recovery:"27",Total:"39",Damage:"800",BlockAdvantage:"-11",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4017",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"9",Active:"6",Recovery:"29",Total:"43",Damage:"300*2\n(570)",BlockAdvantage:"-17",HitAdvantage:"-14",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4018",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"15",Active:"2(3)2",Recovery:"40",Total:"61",Damage:"400*2",BlockAdvantage:"-23",HitAdvantage:"-18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4019",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"6",Recovery:"21",Total:"31",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4020",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"9",Active:"4",Recovery:"33",Total:"45",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4021",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"11",Active:"7",Recovery:"34",Total:"51",Damage:"300*2\n(570)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4022",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"14",Active:"8",Recovery:"30",Total:"51",Damage:"400*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3486",name: "Hand Bomb", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"11",Recovery:"20",Total:"40",Damage:"700",BlockAdvantage:"-12",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3487",name: "Insolence Crusher", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"25",Active:"3",Recovery:"33",Total:"60",Damage:"900",BlockAdvantage:"-15",HitAdvantage:"39 / 78",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3488",name: "Titan's Gaze", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"17",Active:"20",Recovery:"19",Total:"55",Damage:"208*3\n(603)-336*3\n(974)",BlockAdvantage:"-3",HitAdvantage:"36 / 66",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3489",name: "Palm Breaker", input: [[Jump,Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"15",Active:"8",Recovery:"22",Total:"44",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3483",name: "Final Judgement", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"22",Active:"100",Recovery:"57",Total:"178",Damage:"700+100*44\n(3630)-700*39\n(2040)",BlockAdvantage:"-40",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3484",name: "Sovereign Decree", input: [[Jump,QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"11",Active:"25",Recovery:"28",Total:"63",Damage:"800*5+1900\n(4150)-800*12+1900\n(6204)",BlockAdvantage:"-28+1F LAND",HitAdvantage:"37 / 67",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3485",name: "Cosmic Fall (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"10",Recovery:"55",Total:"80",Damage:"5940\n(6 HITS)",BlockAdvantage:"-46",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:"FRAME 1-25"},]  },
],

specials:
[{ID: "3478",name: "Titan Charge", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"18",Active:"7",Recovery:"19",Total:"43",Damage:"1600",BlockAdvantage:"-6",HitAdvantage:"41 / 71",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"33",Active:"3",Recovery:"31",Total:"66",Damage:"800+1300\n(1970)",BlockAdvantage:"-21",HitAdvantage:"37 / 67",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3479",name: "Emperor's Stance", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"19",Active:"6",Recovery:"38",Total:"62",Damage:"1000",BlockAdvantage:"-13",HitAdvantage:"92 / 122",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"20",Active:"5",Recovery:"29",Total:"53",Damage:"1100",BlockAdvantage:"-3",HitAdvantage:"48 / 78",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3480",name: "Titan's Deceit", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"17",Active:"14",Recovery:"16",Total:"46",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 6-35"},
{Version:"HP",Startup:"16",Active:"19",Recovery:"3",Total:"37",Damage:"",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:"FRAME 6-34"},]  },
{ID: "3481",name: "Titan's Shield", input: [[QCB,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"20",Active:"24",Recovery:"0",Total:"43",Damage:"250*3-250*5\n(1200)",BlockAdvantage:"34",HitAdvantage:"33",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"11",Active:"20",Recovery:"27",Total:"57",Damage:"800*3\n(2160)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3482",name: "Insurrection's End", input: [[HCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"9",Active:"3",Recovery:"33",Total:"44",Damage:"1600",BlockAdvantage:"24 / 54",HitAdvantage:"24 / 54",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"19",Active:"2",Recovery:"36",Total:"56",Damage:"1900",BlockAdvantage:"10 / 40",HitAdvantage:"10 / 40",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Thanos (UK: /'?æn?s/, US: /'?æno?s/) is a fictional supervillain appearing in American comic books published by Marvel Comics. Created by writer Mike Friedrich and writer-artist Jim Starlin, the character first appeared in Iron Man #55 (February 1973).",

biographyURL:"https://en.wikipedia.org/wiki/Thanos"},

{name: "Thor",
image: require('./img/characters/thor.jpg'), 
portraitImage: require('./img/characters/thorportrait.png'),
side: "Marvel",
vitality: "11000", alternateStates:[],
players:["RoyalFlush","Keits"],
moveList: {normals:
[{ID: "4023",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"15",Active:"3",Recovery:"33",Total:"50",Damage:"800",BlockAdvantage:"-17",HitAdvantage:"42",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4024",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"12",Active:"2",Recovery:"27",Total:"40",Damage:"800",BlockAdvantage:"-9",HitAdvantage:"21",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4025",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"3",Recovery:"23",Total:"33",Damage:"600",BlockAdvantage:"-11",HitAdvantage:"-8",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4026",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"7",Active:"3",Recovery:"21",Total:"30",Damage:"400",BlockAdvantage:"-11",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4027",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"7",Active:"3",Recovery:"21",Total:"30",Damage:"400",BlockAdvantage:"-11",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4028",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"15",Active:"3",Recovery:"34",Total:"51",Damage:"800",BlockAdvantage:"-15",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4029",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"3",Recovery:"33",Total:"43",Damage:"600",BlockAdvantage:"-20",HitAdvantage:"-18",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4030",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"14",Active:"10",Recovery:"23",Total:"46",Damage:"800",BlockAdvantage:"-13",HitAdvantage:"-9",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4031",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"7",Active:"7",Recovery:"17",Total:"30",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4032",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"15",Active:"5",Recovery:"34",Total:"53",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4033",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"12",Recovery:"14",Total:"32",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4034",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"14",Active:"7",Recovery:"25",Total:"45",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3500",name: "Hammer Straight", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"4",Recovery:"28",Total:"41",Damage:"600",BlockAdvantage:"-16",HitAdvantage:"-14",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3501",name: "Spinning Thunder", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"13",Active:"5(0)6(0)6",Recovery:"14",Total:"43",Damage:"400*3\n(1160)",BlockAdvantage:"0",HitAdvantage:"4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3502",name: "Lightning Swipe", input: [[DownRight,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"17",Active:"4",Recovery:"31",Total:"51",Damage:"800",BlockAdvantage:"-16",HitAdvantage:"43",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3503",name: "Divine Drop", input: [[Jump,Down,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"1",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3504",name: "Mighty Speech", input: [[Down,Down,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"74",Active:"0",Recovery:"0",Total:"74",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3497",name: "Mighty Tornado (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"23",Active:"79",Recovery:"58",Total:"159",Damage:"300*13+1000\n(3560)",BlockAdvantage:"-27",HitAdvantage:"99",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"23",Active:"79",Recovery:"58",Total:"159",Damage:"300*13+1000\n(3560)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3498",name: "Mighty Punish", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"6",Active:"1",Recovery:"40",Total:"46",Damage:"4150\n(2 HITS)",BlockAdvantage:"19",HitAdvantage:"19",ChAdvantage:"",InvincibilityFrames:"FRAME 1-6"},]  },
{ID: "3499",name: "God of Thunder (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"21",Active:"2",Recovery:"66",Total:"88",Damage:"5710\n(5 HITS)",BlockAdvantage:"-48",HitAdvantage:"47",ChAdvantage:"",InvincibilityFrames:"FRAME 1-23"},]  },
],

specials:
[{ID: "3490",name: "Mighty Spark (air ok)", input: [[QCF,Plus,Punch,"(Can be followed up)",],],
FrameData:
[
{Version:"LP",Startup:"15",Active:"5(0)5(0)15",Recovery:"22",Total:"61",Damage:"300*3\n(870)",BlockAdvantage:"-17",HitAdvantage:"-13",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"23",Active:"5(0)5(0)25",Recovery:"29",Total:"86",Damage:"300*3\n(870)",BlockAdvantage:"-26",HitAdvantage:"-30",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"11",Active:"25",Recovery:"13",Total:"48",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"18",Active:"35",Recovery:"3",Total:"55",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3491",name: "Ground Mighty Spark > Mjolnir", input: [[Punch,"(from Ground Mighty Spark)",],],
FrameData:
[]  },
{ID: "3492",name: "Mighty Blow", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"21",Active:"3",Recovery:"37",Total:"60",Damage:"1000",BlockAdvantage:"-14",HitAdvantage:"79",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"31",Active:"3",Recovery:"39",Total:"72",Damage:"1500",BlockAdvantage:"-21",HitAdvantage:"38",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3493",name: "Mighty Strike", input: [[Jump,QCF,Plus,Kick,"(can be charged)",],],
FrameData:
[
{Version:"LK",Startup:"20",Active:"15",Recovery:"10",Total:"44",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Charge",Startup:"35",Active:"15",Recovery:"10",Total:"59",Damage:"1500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"20",Active:"10",Recovery:"14",Total:"43",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Charge",Startup:"35",Active:"15",Recovery:"9",Total:"58",Damage:"1500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3494",name: "Mighty Smash", input: [[Down,Down,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"37",Active:"3",Recovery:"30",Total:"69",Damage:"1200",BlockAdvantage:"-1",HitAdvantage:"59",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Charge",Startup:"76",Active:"4(1)9",Recovery:"24",Total:"113",Damage:"1000+1500\n(2350)",BlockAdvantage:"-13",HitAdvantage:"84",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"52",Active:"8",Recovery:"30",Total:"89",Damage:"1200",BlockAdvantage:"-4",HitAdvantage:"56",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Charge",Startup:"76",Active:"6(1)9",Recovery:"24",Total:"115",Damage:"1000+1500\n(2350)",BlockAdvantage:"-13",HitAdvantage:"84",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3495",name: "Mighty Hurricane (air ok)", input: [[HCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"6",Active:"2",Recovery:"33",Total:"40",Damage:"1500",BlockAdvantage:"97",HitAdvantage:"97",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"16",Active:"2",Recovery:"38",Total:"55",Damage:"2400",BlockAdvantage:"109",HitAdvantage:"109",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"6",Active:"2",Recovery:"38",Total:"45",Damage:"1500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"2",Active:"2",Recovery:"42",Total:"45",Damage:"2400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3496",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"149",Active:"0",Recovery:"0",Total:"149",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"149",Active:"0",Recovery:"0",Total:"149",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Thor (Thor Odinson) is a fictional superhero appearing in American comic books published by Marvel Comics. The character, based on the Norse mythological deity of the same name, is the Asgardian god of thunder and possesses the enchanted hammer Mjolnir, which grants him the ability of flight and weather manipulation amongst his other superhuman attributes.",

biographyURL:"https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)"},

{name: "Ultron",
image: require('./img/characters/ultron.jpg'), 
portraitImage: require('./img/characters/ultronportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:["Filipino Champ","RayRay","Justin Wong"],
moveList: {normals:
[{ID: "4035",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"13",Active:"3",Recovery:"25",Total:"40",Damage:"700",BlockAdvantage:"-9",HitAdvantage:"50",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4036",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"12",Active:"5",Recovery:"25",Total:"41",Damage:"700",BlockAdvantage:"-9",HitAdvantage:"21",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4037",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"7",Active:"6",Recovery:"18",Total:"30",Damage:"500",BlockAdvantage:"-9",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4038",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"5",Active:"7",Recovery:"9",Total:"20",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4039",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"6",Recovery:"10",Total:"20",Damage:"300",BlockAdvantage:"-3",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4040",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"10",Active:"4",Recovery:"27",Total:"40",Damage:"700",BlockAdvantage:"-11",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4041",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"9",Active:"5",Recovery:"17",Total:"30",Damage:"500",BlockAdvantage:"-6",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4042",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"11",Active:"5",Recovery:"27",Total:"42",Damage:"700",BlockAdvantage:"-10",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4043",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"5",Active:"6",Recovery:"10",Total:"20",Damage:"300",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4044",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"11",Active:"4",Recovery:"21",Total:"35",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4045",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"7",Active:"8",Recovery:"16",Total:"30",Damage:"500",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4046",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"11",Active:"3",Recovery:"31",Total:"44",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3515",name: "Spear Needle", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"5",Recovery:"19",Total:"33",Damage:"300",BlockAdvantage:"-8",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3516",name: "Raid Slash", input: [[Right,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"8",Recovery:"14",Total:"39",Damage:"500",BlockAdvantage:"-6",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3517",name: "Eraser", input: [[DownRight,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"10",Active:"21",Recovery:"20",Total:"50",Damage:"127*3-232*4\n(905)",BlockAdvantage:"-1",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3512",name: "Destruction Wave (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"13",Active:"100",Recovery:"59",Total:"171",Damage:"50*44\n(1640)-100*48\n(3472)",BlockAdvantage:"-36",HitAdvantage:"27",ChAdvantage:"",InvincibilityFrames:"FRAME 11"},]  },
{ID: "3513",name: "Encephalo-Ray", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"13",Active:"2",Recovery:"83",Total:"97",Damage:"1440",BlockAdvantage:"192",HitAdvantage:"192",ChAdvantage:"",InvincibilityFrames:"FRAME 1-14"},]  },
{ID: "3514",name: "Sentry Legion (level 3)", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"22",Active:"4",Recovery:"58",Total:"83",Damage:"5488\n(52 HITS)",BlockAdvantage:"-42",HitAdvantage:"24",ChAdvantage:"",InvincibilityFrames:"FRAME 1-25"},]  },
],

specials:
[{ID: "3505",name: "Death Ray (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"17",Active:"21",Recovery:"34",Total:"71",Damage:"100*4\n(390)-200*8\n(1421)",BlockAdvantage:"-12",HitAdvantage:"-21",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"17",Active:"21",Recovery:"34",Total:"71",Damage:"100*4\n(390)-200*8\n(1421)",BlockAdvantage:"-11",HitAdvantage:"-20",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"17",Active:"21",Recovery:"34",Total:"71",Damage:"100*4\n(390)-200*8\n(1421)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"17",Active:"21",Recovery:"34",Total:"71",Damage:"100*4\n(390)-200*8\n(1421)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3506",name: "Melt Blast", input: [[QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"7",Active:"14",Recovery:"39",Total:"59",Damage:"1060\n(3 HITS)",BlockAdvantage:"-33",HitAdvantage:"70",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"9",Active:"14",Recovery:"48",Total:"70",Damage:"1340\n(3 HITS)",BlockAdvantage:"-42",HitAdvantage:"78",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3507",name: "Fatal Swipe", input: [[Jump,QCF,Plus,Kick,],],
FrameData:
[
{Version:"LK",Startup:"13",Active:"2",Recovery:"25",Total:"39",Damage:"1070\n(3 HITS)",BlockAdvantage:"-7",HitAdvantage:"66",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"21",Active:"3",Recovery:"30",Total:"53",Damage:"1320\n(3 HITS)",BlockAdvantage:"-13",HitAdvantage:"53",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"14",Active:"2",Recovery:"25",Total:"40",Damage:"1070\n(3 HITS)",BlockAdvantage:"-7",HitAdvantage:"66",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"22",Active:"3",Recovery:"30",Total:"54",Damage:"1320\n(3 HITS)",BlockAdvantage:"-13",HitAdvantage:"53",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3508",name: "Protonium Emitter", input: [[QCB,Plus,Punch,],],
FrameData:
[
{Version:"LP",Startup:"28",Active:"20",Recovery:"3",Total:"50",Damage:"100*10\n(960)",BlockAdvantage:"25",HitAdvantage:"23",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"41",Active:"39",Recovery:"1",Total:"80",Damage:"60*20\n(1140)",BlockAdvantage:"38",HitAdvantage:"36",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3509",name: "Smash Drone (air ok)", input: [[QCB,Plus,LightKick,],],
FrameData:
[
{Version:"",Startup:"29",Active:"0",Recovery:"0",Total:"29",Damage:"700",BlockAdvantage:"70",HitAdvantage:"124",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"29",Active:"0",Recovery:"0",Total:"29",Damage:"700",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3510",name: "Blaster Drone (air ok)", input: [[QCB,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"29",Active:"0",Recovery:"0",Total:"29",Damage:"150-300*4\n(1140)",BlockAdvantage:"77",HitAdvantage:"51",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"29",Active:"0",Recovery:"0",Total:"29",Damage:"150-300*4\n(1140)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3511",name: "Flight (air ok)", input: [[QCB,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"1",Active:"134",Recovery:"0",Total:"134",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Air",Startup:"1",Active:"134",Recovery:"0",Total:"134",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"Cancel",Startup:"1",Active:"0",Recovery:"0",Total:"1",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

},
biographyIntro:"Ultron (/'?ltr?n/) is a fictional supervillain appearing in American comic books published by Marvel Comics. He is most recognized as a nemesis of the Avengers, and has a quasi-familial relationship with his creator Hank Pym. He was the first Marvel Comics character to wield the fictional metal alloy adamantium.[1]",

biographyURL:"https://en.wikipedia.org/wiki/Ultron"},

{name: "Venom",
image: require('./img/characters/venom.jpg'), 
portraitImage: require('./img/characters/venomportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:[],
moveList: {normals:
[{ID: "4582",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4583",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4584",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4585",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4586",name: "LP", input: [],
FrameData:
[]  },
{ID: "4587",name: "HP", input: [],
FrameData:
[]  },
{ID: "4588",name: "LK", input: [],
FrameData:
[]  },
{ID: "4589",name: "HK", input: [],
FrameData:
[]  },
{ID: "4590",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4591",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4592",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4593",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "4580",name: "Venom Predate", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "4581",name: "Venom Creep (air only)", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
],

hypers:
[{ID: "4577",name: "Venom Web (air ok)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "4578",name: "Death Bite", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "4579",name: "Venom Bash (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
],

specials:
[{ID: "4571",name: "Venom Fang (air ok)", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "4572",name: "Venom Rush", input: [[QCF,Plus,Kick,],],
FrameData:
[]  },
{ID: "4573",name: "Venom Trap", input: [[Down,Down,Plus,Kick,"/Hold and release ",HardKick," on ",HardKick," ver. only",],],
FrameData:
[]  },
{ID: "4574",name: "Venom Barrel (air only)", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "4575",name: "Venom Throw", input: [[HCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "4576",name: "Venom Glide (air ok)", input: [[DoubleKick,"(can be directed)",],],
FrameData:
[]  },
],

},
biographyIntro:"Venom Symbiote is a fictional character appearing in American comic books published by Marvel Comics, commonly in association with Spider-Man. Venom made his first appearance in The Amazing Spider-Man #300 (May 1988).[1] Venom was originally conceived as a supervillain, but has since become more of an antihero. Venom is a Symbiote, a sentient alien, with a gooey, almost liquid-like form. As with real-world symbiotes, it requires a host, usually human, to bond with for its survival. After bonding, the Symbiote endows its enhanced powers upon the host. When the Venom Symbiote bonds with a human, that new dual-life form refers to itself as 'Venom'.",

biographyURL:"https://en.wikipedia.org/wiki/Venom_(comics)"},

{name: "Winter Soldier",
image: require('./img/characters/wintersoldier.jpg'), 
portraitImage: require('./img/characters/wintersoldierportrait.png'),
side: "Marvel",
vitality: "10000", alternateStates:[],
players:[],
moveList: {normals:
[{ID: "4532",name: "c.HK", input: [],
FrameData:
[]  },
{ID: "4533",name: "c.HP", input: [],
FrameData:
[]  },
{ID: "4534",name: "c.LK", input: [],
FrameData:
[]  },
{ID: "4535",name: "c.LP", input: [],
FrameData:
[]  },
{ID: "4536",name: "LP", input: [],
FrameData:
[]  },
{ID: "4537",name: "HP", input: [],
FrameData:
[]  },
{ID: "4538",name: "LK", input: [],
FrameData:
[]  },
{ID: "4539",name: "HK", input: [],
FrameData:
[]  },
{ID: "4540",name: "j.LP", input: [],
FrameData:
[]  },
{ID: "4541",name: "j.HP", input: [],
FrameData:
[]  },
{ID: "4542",name: "j.LK", input: [],
FrameData:
[]  },
{ID: "4543",name: "j.HK", input: [],
FrameData:
[]  },
],

commandNormals:
[{ID: "4525",name: "Sharp Strike", input: [[DownRight,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "4526",name: "Pistol Shot (air ok)", input: [[Right,Plus,HardPunch,],],
FrameData:
[]  },
{ID: "4528",name: "Flip Kick", input: [[Right,Plus,HardKick,],],
FrameData:
[]  },
{ID: "4529",name: "Quick Slice (air only)", input: [[Right,Plus,LightPunch,],],
FrameData:
[]  },
{ID: "4530",name: "Air Raid Kick (air only)", input: [[Right,Plus,HardKick,],],
FrameData:
[]  },
{ID: "4531",name: "Middle Kick", input: [[LightKick,">",LightKick,],],
FrameData:
[]  },
],

hypers:
[{ID: "4521",name: "Silver Patriot", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "4522",name: "Mag Purge", input: [[QCF,Plus,DoubleKick,],],
FrameData:
[]  },
{ID: "4523",name: "Unyielding Justice (level 3)", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[]  },
{ID: "4524",name: "Unyielding Justice (level 3)", input: [[QCF,Plus,DoublePunch,"(if Captain America is his partner)",],],
FrameData:
[]  },
],

specials:
[{ID: "4508",name: "Hard Blow", input: [[QCF,Plus,Punch,],],
FrameData:
[]  },
{ID: "4509",name: "Rifle Burst (air ok)", input: [[QCF,Plus,Kick,],],
FrameData:
[]  },
{ID: "4510",name: "Metal Shield", input: [[Down,Down,Plus,Punch,],],
FrameData:
[]  },
{ID: "4511",name: "Metal Shield > Move", input: [[Left," or ",Right,"/Hold",Left," or Hold ",Right," (during Metal Shield)",],],
FrameData:
[]  },
{ID: "4513",name: "Metal Shield > Counter Thrust", input: [[LightPunch,"(during Metal Shield)",],],
FrameData:
[]  },
{ID: "4514",name: "Metal Shield > Air Raid", input: [[HardPunch,"(during Metal Shield)",],],
FrameData:
[]  },
{ID: "4515",name: "Metal Shield > Pistol Shot", input: [[Kick,"(during Metal Shield)",],],
FrameData:
[]  },
{ID: "4517",name: "Metal Shield > Rifle Burst", input: [[QCF,Plus,Kick,"(during Metal Shield)",],],
FrameData:
[]  },
{ID: "4518",name: "Metal Shield > Grenade Toss", input: [[QCB,Plus,Kick,"(during Metal Shield)",],],
FrameData:
[]  },
{ID: "4519",name: "Patriot", input: [[QCB,Plus,Punch,],],
FrameData:
[]  },
{ID: "4520",name: "Grenade Toss (air ok)", input: [[QCB,Plus,Kick,],],
FrameData:
[]  },
],

},
biographyIntro:"James Buchanan 'Bucky' Barnes is a fictional superhero that appears in American comic books published by Marvel Comics. Originally introduced as a sidekick to Captain America, the character was created by Joe Simon and Jack Kirby and first appeared in Captain America Comics #1 (cover-dated March 1941) (which was published by Marvel's predecessor) as the original and most well-known incarnation of 'Bucky'.[1] The character is brought back from supposed death as the brainwashed assassin Winter Soldier (Russian: Зимний Солдат, translit. Zimnij Soldát), and later assumed the role of Captain America when Steve Rogers was presumed to be dead.",

biographyURL:"https://en.wikipedia.org/wiki/Bucky_Barnes#Winter_Soldier"},

{name: "Zero",
image: require('./img/characters/zero.jpg'), 
portraitImage: require('./img/characters/zeroportrait.png'),
side: "Capcom",
vitality: "9000", alternateStates:["Sougenmu"],
players:["Cloud 805","Flux","Joey D"],
moveList: {normals:
[{ID: "4203",name: "c.HK", input: [],
FrameData:
[
{Version:"c.HK",Startup:"14",Active:"9",Recovery:"18",Total:"40",Damage:"600",BlockAdvantage:"-8",HitAdvantage:"51",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4204",name: "c.HP", input: [],
FrameData:
[
{Version:"c.HP",Startup:"12",Active:"7",Recovery:"17",Total:"35",Damage:"600",BlockAdvantage:"-4",HitAdvantage:"26",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4205",name: "c.LK", input: [],
FrameData:
[
{Version:"c.LK",Startup:"8",Active:"5",Recovery:"23",Total:"35",Damage:"400",BlockAdvantage:"-9",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4206",name: "c.LP", input: [],
FrameData:
[
{Version:"c.LP",Startup:"9",Active:"5",Recovery:"19",Total:"32",Damage:"200",BlockAdvantage:"-8",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4207",name: "LP", input: [],
FrameData:
[
{Version:"LP",Startup:"5",Active:"3",Recovery:"12",Total:"19",Damage:"200",BlockAdvantage:"-2",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4208",name: "HP", input: [],
FrameData:
[
{Version:"HP",Startup:"12",Active:"9",Recovery:"18",Total:"38",Damage:"200*3",BlockAdvantage:"-1",HitAdvantage:"3",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4209",name: "LK", input: [],
FrameData:
[
{Version:"LK",Startup:"8",Active:"4",Recovery:"19",Total:"30",Damage:"400",BlockAdvantage:"-3",HitAdvantage:"1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4210",name: "HK", input: [],
FrameData:
[
{Version:"HK",Startup:"13",Active:"6",Recovery:"24",Total:"42",Damage:"600",BlockAdvantage:"-10",HitAdvantage:"-6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4211",name: "j.LP", input: [],
FrameData:
[
{Version:"j.LP",Startup:"7",Active:"7",Recovery:"13",Total:"26",Damage:"200",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4212",name: "j.HP", input: [],
FrameData:
[
{Version:"j.HP",Startup:"13",Active:"2(2)2(2)2(4)9",Recovery:"7",Total:"42",Damage:"200*3\n(560)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4213",name: "j.LK", input: [],
FrameData:
[
{Version:"j.LK",Startup:"6",Active:"5",Recovery:"18",Total:"28",Damage:"400",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "4214",name: "j.HK", input: [],
FrameData:
[
{Version:"j.HK",Startup:"16",Active:"5",Recovery:"20",Total:"40",Damage:"600",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

commandNormals:
[{ID: "3787",name: "Youdantotsu", input: [[Right,Plus,LightPunch,],],
FrameData:
[
{Version:"",Startup:"8",Active:"4",Recovery:"14",Total:"25",Damage:"250",BlockAdvantage:"2",HitAdvantage:"6",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3788",name: "Shippuuga", input: [[Right,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"14",Active:"9",Recovery:"28",Total:"50",Damage:"250*3",BlockAdvantage:"-11",HitAdvantage:"-7",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3789",name: "Koketsuga", input: [[DownRight,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"10",Active:"3",Recovery:"23",Total:"35",Damage:"700",BlockAdvantage:"-7",HitAdvantage:"52",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3790",name: "Reshoukyaku", input: [[Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"10",Active:"5",Recovery:"47",Total:"61",Damage:"600",BlockAdvantage:"-32",HitAdvantage:"-5",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3791",name: "Kuuenzan", input: [[Jump,Left,Plus,HardPunch,],],
FrameData:
[
{Version:"",Startup:"12",Active:"2(1)2(2)3(3)3(1)2",Recovery:"7",Total:"37",Damage:"250*3",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3792",name: "Rasenkyaku", input: [[Jump,Right,Plus,HardKick,],],
FrameData:
[
{Version:"",Startup:"11",Active:"3",Recovery:"28",Total:"41",Damage:"650",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
],

hypers:
[{ID: "3783",name: "Rekkoha", input: [[QCF,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"17",Active:"70",Recovery:"29",Total:"115",Damage:"360*13+450\n(3681)",BlockAdvantage:"-13",HitAdvantage:"81",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3784",name: "Raijinshou", input: [[Down,Down,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"16",Active:"106",Recovery:"57",Total:"178",Damage:"300+250+220*12+500",BlockAdvantage:"-51",HitAdvantage:"46",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3785",name: "Sougenmu", input: [[Down,Down,Plus,DoubleKick,],],
FrameData:
[
{Version:"",Startup:"18",Active:"0",Recovery:"0",Total:"18",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3786",name: "Genmu Zero (level 3)", input: [[QCB,Plus,DoublePunch,],],
FrameData:
[
{Version:"",Startup:"20",Active:"59",Recovery:"0",Total:"78",Damage:"1500*5\n(4800)",BlockAdvantage:"2",HitAdvantage:"96",ChAdvantage:"",InvincibilityFrames:""},]  },
],

specials:
[{ID: "3772",name: "Hadangeki", input: [[QCF,Plus,Punch,"(Can be followed up)",],],
FrameData:
[
{Version:"LP",Startup:"18",Active:"8",Recovery:"19",Total:"44",Damage:"1000",BlockAdvantage:"-1",HitAdvantage:"-3",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"18",Active:"16",Recovery:"11",Total:"44",Damage:"550*2",BlockAdvantage:"7",HitAdvantage:"-1",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3773",name: "Hadangeki w/ Max Hyper Zero Buster Charging > Rakuhouha", input: [["Release",Punch,"or",Kick,"(from Hadangeki during Max Hyper Zero Buster Charging)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*3\n(1450)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3774",name: "Raikousen", input: [[Jump,QCF,Plus,Punch,"(Can be followed up)",],],
FrameData:
[
{Version:"LP",Startup:"32",Active:"20",Recovery:"",Total:"",Damage:"200*5\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"35",Active:"20",Recovery:"",Total:"",Damage:"200*5\n(960)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3775",name: "Raikousen w/ Max Hyper Zero Buster Charging > C-Sword", input: [["Release",Punch,"or",Kick,"(from Raikousen during Max Hyper Zero Buster Charging)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"300*3\n(870)",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3776",name: "Sentsuizan", input: [[Jump,QCF,Plus,Kick,"(Can be followed up)",],],
FrameData:
[
{Version:"LK",Startup:"15",Active:"1",Recovery:"",Total:"",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"20",Active:"1",Recovery:"",Total:"",Damage:"1000",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3777",name: "Sentsuizan w/ Max Hyper Zero Buster Charging > F-Splasher", input: [["Release",Punch,"or",Kick,"(from Sentsuizan during Max Hyper Zero Buster Charging)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"800",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3778",name: "Ryuuenjin", input: [[Down,Down,Plus,Punch,"(Can be followed up)",],],
FrameData:
[
{Version:"LP",Startup:"5",Active:"1(4)1(6)1(6)4",Recovery:"16",Total:"43",Damage:"1000",BlockAdvantage:"-26",HitAdvantage:"16",ChAdvantage:"",InvincibilityFrames:"FRAME 1-4"},
{Version:"HP",Startup:"5",Active:"27",Recovery:"31",Total:"62",Damage:"150*5\n(735)/500+150*4\n(1055)",BlockAdvantage:"-29",HitAdvantage:"5",ChAdvantage:"",InvincibilityFrames:"FRAME 1-4"},]  },
{ID: "3779",name: "Ryuuenjin w/ Max Hyper Zero Buster Charging > Hyouretsuzan", input: [["Release",Punch,"or",Kick,"(from Ryuuenjin during Max Hyper Zero Buster Charging)",],],
FrameData:
[
{Version:"",Startup:"",Active:"",Recovery:"",Total:"",Damage:"500*2",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3780",name: "Hienkyaku (air ok)", input: [[QCB,Plus,Punch,"or",Kick,],],
FrameData:
[
{Version:"LP",Startup:"7",Active:"12",Recovery:"18",Total:"36",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP",Startup:"7",Active:"21",Recovery:"18",Total:"45",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK",Startup:"7",Active:"22",Recovery:"16",Total:"44",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK",Startup:"7",Active:"22",Recovery:"16",Total:"44",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LP Air",Startup:"7",Active:"10",Recovery:"2",Total:"18",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HP Air",Startup:"7",Active:"23",Recovery:"2",Total:"31",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LK Air",Startup:"9",Active:"12",Recovery:"6",Total:"26",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},
{Version:"HK Air",Startup:"7",Active:"22",Recovery:"",Total:"",Damage:"-",BlockAdvantage:"",HitAdvantage:"",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3781",name: "Hyper Zero Blaster (air ok)", input: [["Hold and release",Punch,"or",Kick,],],
FrameData:
[
{Version:"LVL 1",Startup:"9",Active:"22",Recovery:"0",Total:"30",Damage:"800",BlockAdvantage:"4",HitAdvantage:"-11",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 2",Startup:"9",Active:"22",Recovery:"0",Total:"30",Damage:"900",BlockAdvantage:"4",HitAdvantage:"-4",ChAdvantage:"",InvincibilityFrames:""},
{Version:"LVL 3",Startup:"9",Active:"22",Recovery:"0",Total:"30",Damage:"1000",BlockAdvantage:"4",HitAdvantage:"80",ChAdvantage:"",InvincibilityFrames:""},]  },
{ID: "3782",name: "Hyper Zero Blaster Charging > Movements", input: [["Any directions (during Hyper Zero Buster Charging)",],],
FrameData:
[]  },
],

},
biographyIntro:"Zero (??) is a video game character present throughout Capcom's Mega Man franchise. First developed by Keiji Inafune for the 1993 game Mega Man X for the Super NES when he was attempting to create a new design for Mega Man for the X series, Zero was instead used as a secondary character. In the Mega Man X series, Zero is a Maverick Hunter, a mechanical soldier in charge of defeating Mavericks, robots who turned against humanity. He continues his job as the main character of the Mega Man Zero series. Zero has also played a supporting role in other game series such as the Mega Man ZX series and appeared in crossover video games as a guest character.",

biographyURL:"https://en.wikipedia.org/wiki/Zero_(Mega_Man)"},

];

export { characters};