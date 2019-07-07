import OptionsMenu from "react-native-options-menu";
import call from "react-native-phone-call";
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";

import { Toolbar } from "react-native-material-ui";
import LinearGradient from "react-native-linear-gradient";
import { Appbar } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class Pet extends Component {
  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./imges/dog2.jpg")}
      >
        <LinearGradient
          colors={["rgba(142, 14, 0,0.9)", "rgba(31, 28, 24,0.9)"]}
          style={styles.contentContainer}
        >
          <Appbar.Header
            style={{
              backgroundColor: "rgba(142, 14, 0,0)",
              color: "#eddcdc"
            }}
          >
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
            <Appbar.Content title={this.params.pet + "'s profile"} />
            <OptionsMenu
              customButton={
                <MaterialIcons name={"more-vert"} size={25} color={"white"} />
              }
              destructiveIndex={1}
              // buttonStyle={{ width: 25, height: 25, resizeMode: "" }}
              options={["Add Record", "Edit profile", "Delete profile"]}
              actions={[
                () => {
                  this.props.navigation.navigate("AddNewRecord");
                },
                () => {},
                () => {}
              ]}
            />
          </Appbar.Header>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              justifyContent: "space-evenly"
            }}
          >
            <View
              style={{
                flex: 0.25,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Last</Text>
              <Text style={{ color: "white", fontSize: 10 }}>8/11/2018</Text>
            </View>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF"
              }}
            >
              <Image
                style={{ width: 120, height: 120, borderRadius: 60 }}
                source={this.params.picture}
              />
            </View>
            <View
              style={{
                flex: 0.25,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
              <Text style={{ color: "white", fontSize: 10 }}>20/12/2018</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: 30
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              {this.params.pet}
            </Text>
            <Text style={{ color: "white", fontSize: 10 }}>
              {this.params.owner}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: 30,
              marginLeft: 30
            }}
          >
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                borderRadius: 20,
                borderColor: "#efefef",
                borderWidth: 2,
                backgroundColor: "#FFFFFF",
                height: 90,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: "#8e0e00" }}>Male</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.3,
                borderRadius: 20,
                borderColor: "#efefef",
                borderWidth: 2,
                backgroundColor: "#FFFFFF",
                height: 90,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "#8e0e00" }}>Dog</Text>
                <View
                  style={{
                    borderColor: "#8e0e00",
                    borderWidth: 0.5,
                    width: 60,
                    margin: 10
                  }}
                />
                <Text style={{ color: "#8e0e00" }}>Husky</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.3,
                borderRadius: 20,
                borderColor: "#efefef",
                borderWidth: 2,
                backgroundColor: "#FFFFFF",
                height: 90,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ color: "#8e0e00" }}>2</Text>
              </View>
              <Text style={{ color: "#8e0e00" }}>Years</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 20,
                borderColor: "#efefef",
                borderWidth: 2,
                backgroundColor: "#FFFFFF",
                height: 90,
                width: 90,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <MaterialIcons name="restore" size={50} color="#8e0e00" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                borderColor: "#efefef",
                borderWidth: 2,
                backgroundColor: "#FFFFFF",
                height: 90,
                width: 90,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => {
                const args = {
                  number: "0000000", // String value with the number to call
                  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
                };

                call(args).catch(console.error);
              }}
            >
              <MaterialIcons name="call" size={50} color="#8e0e00" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%"
  },
  contentContainer: {
    width: "100%",
    height: "100%"
  }
});
