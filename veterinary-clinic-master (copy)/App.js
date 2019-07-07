import { createStackNavigator, createAppContainer, createTabNavigator, createBottomTabNavigator, NavigationActions } from "react-navigation";

import React, {Component} from 'react';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from "./src/Home";
import Pet from "./src/Pet";
import AddNewPet from "./src/AddNewPet";
import AddNewRecord from "./src/AddNewRecord";
import Search from "./src/Search";
import Record from "./src/Record";
import Add from "./src/Add1";
import Backup from "./src/Backup";
import Restore from "./src/Restore";
import Login from "./src/Login";
import Nav from "./src/Nav";

/* const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Record: {
      screen: Record
    },
  },
  {
    headerMode: 'none'
  },
);
const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search
    },

    Pet: {
      screen: Pet
    },
    AddNewRecord: {
      screen: AddNewRecord
    }
  },
  {
    headerMode: 'none'
  },
);

const MainStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    // TabNavigator: {screen: TabStack}
  },
  {
    headerMode: 'none'
  },
);

const AddStack = createStackNavigator(
  {
    Add: {
      screen: Add
    },
    AddNewPet: {
      screen: AddNewPet
    },
    Backup: {
      screen: Backup
    },
    Restore: {
      screen: Restore
    },
  },
  {
    headerMode: 'none'
  },
);

const TabStack = createBottomTabNavigator(
  {
     SearchStack: { screen: SearchStack },
    HomeStack: { screen: HomeStack },
     AddStack: { screen: AddStack },
  },
  {
    initialRouteName: 'HomeStack',
    swipeEnabled: true,
    animationEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeStack') {
          return <MaterialIcons name={'timeline'} size={30} color={tintColor} />;
          // return <Image source={require('./src/imges/timeline.svg')} style={{width:50, height:50}} />;
        } else if (routeName === 'AddStack') {
          iconName = `add`;
          return <MaterialIcons name={iconName} size={30} color={tintColor} />;
        } else if (routeName === 'SearchStack') {
          iconName = `search`;
          return <MaterialIcons name={iconName} size={30} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#1f1c18',
        borderTopWidth: 0.5,
        borderTopColor: 'gray'
      },
      showLabel: false,
    },
    navigationOptions: {
      swipeEnabled: true,

    }
  }
);

export default createAppContainer(MainStack);
*/
export default class App extends Component {
  state = {
    LoggedIn : false
  }
  render() {
    if (this.state.LoggedIn)
        return <Nav/>
    else 
        return <Login onLoginPress={()=>{
          this.setState({LoggedIn:true})
          console.log('login preed');
          
        } }
        />
  }
}