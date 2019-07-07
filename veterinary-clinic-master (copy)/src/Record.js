import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { Appbar } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import OptionsMenu from "react-native-options-menu";
// import {Swiper} from "react-native-deck-swipe";

// import TextInput from './common/TextInput';
import Button from "./common/Button";

const { width, height } = Dimensions.get("screen");

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: 0,
      data: [
        {
          body:
            "Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.",
          header: "15/12/2018"
        },
        {
          body:
            "Study and get a paid internship as a software developer in the USA.We offer a masters degree program with FULL-TIME PAID INTERNSHIPS with IT companies in the USA. A computer degree is necessary to apply.",
          header: "22/12/2018"
        },
        {
          body: "Done..",
          header: "29/12/2018"
        }
      ]
    };
  }

  renderCard(label, content) {
    return (
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
          height: "80%",
          backgroundColor: "white",
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "grey",
          padding: 5
        }}
      >
        <View style={{ height: 15 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <View style={{ height: 1, backgroundColor: '#8e0e00', width: 20 }} /> */}

          <Text
            style={{
              color: "#8e0e00",
              fontSize: 18,
              marginHorizontal: 3
            }}
          >
            {content}
          </Text>
          {/* <View style={{ height: 1, backgroundColor: '#8e0e00', width: 20 }} /> */}
        </View>

        <Text
          style={{
            color: "grey",
            fontSize: 13,
            marginHorizontal: 3
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
  render() {
    const { data, card } = this.state;
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
              color: "#eddcdc",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
            {/* <Appbar.Content title='Pet Name' /> */}
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
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: 20
              }}
            >
              <Image
                source={require("./imges/dog2.jpg")}
                style={{
                  width: width * 0.35,
                  height: width * 0.35,
                  borderRadius: 200
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  margin: 10
                }}
              >
                Luna
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: height * 0.4,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 80
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => {
                  switch (card) {
                    case 0:
                      break;

                    default:
                      this.setState({ card: card - 1 });
                      break;
                  }
                }}
              >
                <MaterialIcons
                  name={"keyboard-arrow-left"}
                  size={35}
                  color={"white"}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: width * 0.75,
                  height: "100%",
                  backgroundColor: "white",
                  borderRadius: 12,
                  borderColor: "grey",
                  borderWidth: 1,
                  padding: 15
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "rgba(142, 14, 0,0.7)",
                    paddingBottom: 5
                  }}
                >
                  {data[card].header}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                    color: "grey",
                    paddingBottom: 5
                  }}
                >
                  {data[card].body}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  padding: 10,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => {
                  switch (card) {
                    /* case 0:
                                            this.setState({ card: card + 1 })
                                            break; */
                    case data.length - 1:
                      break;
                    default:
                      this.setState({ card: card + 1 });
                      break;
                  }
                }}
              >
                <MaterialIcons
                  name={"keyboard-arrow-right"}
                  size={30}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
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
    // flex: 1,
    // padding: 5,
    width: "100%",
    height: "100%"
    // overflow: 'visible',
    // alignItems: 'center',
    // alignSelf: 'stretch',
  }
});
