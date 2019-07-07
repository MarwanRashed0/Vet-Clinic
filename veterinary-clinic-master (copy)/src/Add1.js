import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { Appbar } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

export default class Add extends Component {
  _renderItem(text, onPress, icon, style) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
          left: -width * 0.07,
          ...style
          // padding: 10,
          // height: 70,
          // borderBottomColor: 'grey',
          // borderTopColor: 'grey',
          // borderWidth: 0.25,
        }}
        onPress={onPress}
      >
        <View
          style={{
            borderRadius: 50,
            width: 45,
            height: 45,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            margin: 5
          }}
        >
          <MaterialIcons name={icon} size={30} color={"black"} />
        </View>
        <Text style={{ color: "white", fontSize: 15 }}>{text}</Text>
      </TouchableOpacity>
    );
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
          {/* <Appbar.Header
                        style={{
                            backgroundColor: '#8e0e00',
                            color: '#eddcdc'
                        }}
                    >
                        <Appbar.Content
                            title="Search"
                        />
                    </Appbar.Header> */}

          <View
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                width: width * 1.2,
                height: width * 1.2,
                padding: 30,
                borderRadius: 300,
                left: -(width / 2),
                borderColor: "white",
                borderWidth: 1.5
              }}
            >
              <Image
                source={require("./imges/pets.jpg")}
                style={{
                  width: width * 1.2 - 60,
                  height: width * 1.2 - 60,
                  // margin: 10,
                  borderRadius: 200
                  // left: -(width/2)
                }}
              />
            </View>

            <View
              style={{
                alignItems: "flex-start",
                left: -(width / 2)
              }}
            >
              {this._renderItem(
                "Add new pet",
                () => {
                  this.props.navigation.navigate("AddNewPet");
                },
                "pets",
                { left: -width * 0.1 }
              )}
              {this._renderItem(
                "Backup",
                () => {
                  this.props.navigation.navigate("Backup");
                },
                "backup"
              )}
              {this._renderItem(
                "Restore",
                () => {
                  this.props.navigation.navigate("Restore");
                },
                "restore",
                { left: -width * 0.1 }
              )}
            </View>
          </View>

          {/*                     
                    {this._renderItem('Add new pet', () => {
                        this.props.navigation.navigate('AddNewPet')
                    }, 'backup' )}
                    {this._renderItem('Add new medical record', () => {
                        this.props.navigation.navigate('AddNewRecord')
                    }, 'restore')} */}
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
