import {
  createStackNavigator,
  createAppContainer,
  createTabNavigator,
  createBottomTabNavigator,
  NavigationActions
} from "react-navigation";

import React from "react";
import { Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from "./Home";
import Pet from "./Pet";
import AddNewPet from "./AddNewPet";
import AddNewRecord from "./AddNewRecord";
import Search from "./Search";
import Record from "./Record";
import Add from "./Add1";
import Backup from "./Backup";
import Restore from "./Restore";

const HomeStack = createStackNavigator(
  {
    TabStack: {
      screen: createBottomTabNavigator(
        {
          Search: { screen: Search },
          Home: { screen: Home },
          Add: { screen: Add }
        },
        {
          initialRouteName: "Home",
          swipeEnabled: true,
          animationEnabled: true,
          defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === "Home") {
                return (
                  <MaterialIcons
                    name={"timeline"}
                    size={30}
                    color={tintColor}
                  />
                );
                // return <Image source={require('./src/imges/timeline.svg')} style={{width:50, height:50}} />;
              } else if (routeName === "Add") {
                iconName = `add`;
                return (
                  <MaterialIcons name={iconName} size={30} color={tintColor} />
                );
              } else if (routeName === "Search") {
                iconName = `search`;
                return (
                  <MaterialIcons name={iconName} size={30} color={tintColor} />
                );
              }
            }
          }),
          tabBarOptions: {
            activeTintColor: "white",
            inactiveTintColor: "gray",
            style: {
              backgroundColor: "rgba(31, 28, 24, 0.9)",
              borderTopWidth: 0.5,
              borderTopColor: "gray"
            },
            showLabel: false
          },
          navigationOptions: {
            swipeEnabled: true
          }
        }
      )
    },
    Record: {
      screen: Record
    },
    Pet: {
      screen: Pet
    },
    AddNewRecord: {
      screen: AddNewRecord
    },
    AddNewPet: {
      screen: AddNewPet
    },
    Backup: {
      screen: Backup
    },
    Restore: {
      screen: Restore
    }
  },
  {
    headerMode: "none"
  }
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
    headerMode: "none"
  }
);
/*
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
  */
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
    }
  },
  {
    headerMode: "none"
  }
);

const TabStack = createBottomTabNavigator(
  {
    Search: { screen: () => <Search /> },
    Home: { screen: () => <Home /> }
    // Add: { screen: Add },
  },
  {
    initialRouteName: "Home",
    swipeEnabled: true,
    animationEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          return (
            <MaterialIcons name={"timeline"} size={30} color={tintColor} />
          );
          // return <Image source={require('./src/imges/timeline.svg')} style={{width:50, height:50}} />;
        } else if (routeName === "Add") {
          iconName = `add`;
          return <MaterialIcons name={iconName} size={30} color={tintColor} />;
        } else if (routeName === "Search") {
          iconName = `search`;
          return <MaterialIcons name={iconName} size={30} color={tintColor} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#1f1c18",
        borderTopWidth: 0.5,
        borderTopColor: "gray"
      },
      showLabel: false
    },
    navigationOptions: {
      swipeEnabled: true
    }
  }
);

const Nav = createAppContainer(HomeStack);
export default Nav;
