import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Appbar } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

export default class Restore extends Component {
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
            <Appbar.Content title={"Backup"} />
          </Appbar.Header>
          <ScrollView>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 20
              }}
            >
              <MaterialIcons name="backup" size={150} color="#8e0e00" />
              <Text
                style={{
                  color: "white",
                  fontSize: 40
                }}
              >
                Backup
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
                  placeholder="password.."
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    color: "white",
                    flex: 0.9
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
                  onPress={() => {}}
                >
                  <MaterialIcons
                    name={"arrow-upward"}
                    size={27}
                    color={"black"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
