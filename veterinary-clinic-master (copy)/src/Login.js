import React, { Component } from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationActions } from "react-navigation";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <LinearGradient
          colors={["#8e0e00", "#1f1c18"]}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#FFFFFF",
              flex: 0.5,
              borderBottomLeftRadius: 200,
              borderBottomRightRadius: 200
            }}
          >
            <Image
              style={{
                //flexDirection:'column',
                //alignItems:'center',
                //justifyContent:'flex-start',
                flex: 1,
                borderBottomLeftRadius: 200,
                borderBottomRightRadius: 200,
                width: "100%",
                height: "100%"
              }}
              source={require("./imges/dog1.jpeg")}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginTop: 30
              }}
            >
              Welcome Back Doctor
            </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#761105",
                borderRadius: 40,
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 30
              }}
            >
              <TextInput
                placeholder="password..."
                placeholderTextColor="white"
                secureTextEntry={true}
                style={{
                  fontSize: 18,
                  color: "white",
                  flex: 0.8,
                  marginLeft: 10
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={
                  //  this.props.navigation.navigate('TabNavigator')
                  this.props.onLoginPress
                }
              >
                <MaterialIcons
                  name={"arrow-forward"}
                  size={27}
                  color={"black"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
