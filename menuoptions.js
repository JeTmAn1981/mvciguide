import MainScreen from './mainscreen';
import StrategyScreen from './strategyscreen';
import ProfileScreen from './profilescreen';
import CharactersScreen from './charactersscreen';
import SystemsScreen from './systemsscreen';
import AboutScreen from './aboutscreen';
import InfinityStonesScreen from './infinitystonesscreen';
import StoneScreen from './stonescreen';
import ActiveSwitchScreen from './activeswitchscreen';
import CounterSwitchScreen from './counterswitchscreen';
import AdvancingGuardScreen from './advancingguardscreen';
import {production} from './variables';

const logo = production ? require('./img/mvci.png') : require('./img/logosmall.png');

const homeImage = require('./img/home.png');

const charactersImage = production ? require('./img/fightingcharacters.png') : require('./img/cover.png');

const systemsImage = require('./img/mechanics.png');
const strategyImage = require('./img/strategy.jpg');
const aboutImage = require('./img/about.png');

const infinityStonesImage = require('./img/infinitystones.jpg');
const soulStoneImage = require('./img/soulstone.jpg');
const mindStoneImage = require('./img/mindstone.jpg');
const realityStoneImage = require('./img/realitystone.jpg');
const powerStoneImage = require('./img/powerstone.png');
const timeStoneImage = require('./img/timestone.png');
const spaceStoneImage = require('./img/spacestone.png');

const activeSwitchImage = require('./img/activeswitch.jpg');
const counterSwitchImage = require('./img/counterswitch.jpg');
const advancingGuardImage = require('./img/advancingguard.jpg');

const homeOption = {name: "Home", navigationName: "Main", screen: MainScreen, image: logo, quickNavigationImage: homeImage};
const charactersOption = {name: "Characters", navigationName: "Characters", screen: CharactersScreen, image: charactersImage};
const systemsOption = {name: "Systems", navigationName: "Systems", screen: SystemsScreen, image: systemsImage};
const strategyOption =   {name: "Strategy", navigationName: "Strategy", screen: StrategyScreen, image: strategyImage}
const triviaOption =   {name: "Trivia", navigationName: "Trivia", screen: MainScreen, image: logo}
const aboutOption =   {name: "About", navigationName: "About", screen: AboutScreen, image: aboutImage}

const infinityStonesMainOption = {name: "Infinity Stones", navigationName: "Stones", screen: InfinityStonesScreen, image: infinityStonesImage};
const soulStoneOption = {name: "Soul Stone", navigationName: "Stone", screen: StoneScreen, image: soulStoneImage, surge:"Shoots an energy pulse that absorbs the opponent's energy into his own life bar.", storm: "Duo Team Attack Mode from Marvel vs. Capcom: Clash of Super Heroes. If the player's teammate is death upon activating Soul Infinity Storm, the player's teammate will be revived with 20% Health bar."};
const mindStoneOption = {name: "Mind Stone", navigationName: "Stone", screen: StoneScreen, image: mindStoneImage, surge:"Grabs the opponent.  After the grab lands, the opponent is dizzied and open for a combo.", storm: "Refill the Hyper Combo gauge to maximum."};
const realityStoneOption = {name: "Reality Stone", navigationName: "Stone", screen: StoneScreen, image: realityStoneImage, surge:"Projects a projectile following the opponent's direction for a few seconds.", storm: "Each attack button triggers an elemental power:\n\nLight Punch: Projects a little wind blade.\n\nLight Kick: Projects an ice floor, causing the opponents freezed. However, the opponent can shake out the freeze effect.\n\nHard Punch: Projects a delayed fire beam, targeting the opponent's last position.\n\nHard Kick: Projects an incoming lightning bolt from above, targeting the opponent's last position."};
const powerStoneOption = {name: "Power Stone", navigationName: "Stone", screen: StoneScreen, image: powerStoneImage, surge:"Pushback Burst. While not in Infinity Storm, wall-bounce based moves cannot wall bounce after using Power Infinity Surge as a starter combo.", storm: "Increases damage, obtains untechable and infinite bounce move properties causing the opponent unable to recovered from combos, and causing the opponent pushes themselves while they are using Advancing Guard against opponents' attacks."};
const timeStoneOption = {name: "Time Stone", navigationName: "Stone", screen: StoneScreen, image: timeStoneImage, surge:"Teleport. Can be directed.", storm: "Repeatable and chainable moves on all normals and specials."};
const spaceStoneOption = {name: "Space Stone", navigationName: "Stone", screen: StoneScreen, image: spaceStoneImage, surge:"Pulls the opponents closer to the player.", storm: "Traps the opponent inside the Space Infinity Storm's box on their last positions, thus unable to Tag-In with their teammates and go to other positions, except when the opponent uses an Air Combo after Crouching HP Launcher."};
const infinityStonesOptions = [soulStoneOption,mindStoneOption,realityStoneOption,powerStoneOption,timeStoneOption,spaceStoneOption];

const activeSwitchOption =   {name: "Active Switch", navigationName: "ActiveSwitch", screen: ActiveSwitchScreen, image: activeSwitchImage}
const counterSwitchOption =   {name: "Counter Switch", navigationName: "CounterSwitch", screen: CounterSwitchScreen, image: counterSwitchImage}
const advancingGuardOption =   {name: "Advancing Guard", navigationName: "AdvancingGuard", screen: AdvancingGuardScreen, image: advancingGuardImage}

const menuOptions = [
    homeOption,
    charactersOption,
    systemsOption,
    aboutOption];

export {menuOptions, 
    homeOption, 
    charactersOption, 
    systemsOption, 
    aboutOption, 
    infinityStonesMainOption, 
    infinityStonesOptions, 
    activeSwitchOption, 
    counterSwitchOption, 
    advancingGuardOption,
    logo};