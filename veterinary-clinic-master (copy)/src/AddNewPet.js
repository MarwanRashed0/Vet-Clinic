import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  DatePickerAndroid,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { RadioButton, Appbar } from "react-native-paper";

import TextInput from "./common/TextInput";
import Button from "./common/Button";

export default class AddNewPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      sex: "",
      breed: "",
      dateOfBirth: "",
      ownerName: "",
      ownerPhone: "",
      dateOfBirth: "",
      day: "",
      month: "",
      year: "",
      species: ""
    };
  }

  async selectDate() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        console.log(action, year, month, day);
        this.setState({ year, month, day });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  render() {
    const {
      petName,
      sex,
      breed,
      species,
      ownerName,
      ownerPhone,
      year,
      month,
      day
    } = this.state;
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
            <Appbar.Content
              title="Add new pet"
              // subtitle="Subtitle"
            />
            {/* <Appbar.Action icon="search" onPress={this._onSearch} />
                        <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
          </Appbar.Header>

          <ScrollView style={{ padding: 20 }}>
            {/* <TextInputt 
                            placeholder='some placeholder'
                            label='some label'
                            onChangeText={petName => this.setState({ petName })}
                            value={petName}
                        /> */}

            <TextInput
              // mode='outlined'
              style={{ marginVertical: 10 }}
              label="Pet name"
              value={petName}
              onChangeText={petName => this.setState({ petName })}
            />

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignSelf: "flex-start"
              }}
            >
              <RadioButton
                color="#eddcdc"
                value="Male"
                status={sex === "Male" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ sex: "Male" });
                }}
              />
              <Text style={{ color: "#eddcdc", fontSize: 18 }}>Male</Text>
            </View>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <RadioButton
                color="#eddcdc"
                value="Female"
                status={sex === "Female" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ sex: "Female" });
                }}
              />
              <Text style={{ color: "#eddcdc", fontSize: 18 }}>Female</Text>
            </View>

            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Species"
              value={species}
              color="#eddcdc"
              onChangeText={species => this.setState({ species })}
            />

            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Breed"
              value={breed}
              color="#eddcdc"
              onChangeText={breed => this.setState({ breed })}
            />

            <TouchableOpacity
              style={{
                width: "100%",
                marginVertical: 10,
                borderRadius: 7,
                borderColor: "#eddcdc",
                borderWidth: 1,
                height: 55,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.selectDate()}
            >
              <Text style={{ color: "#eddcdc", fontSize: 18 }}>
                {day === ""
                  ? "Tap to select birthdate"
                  : day + "/" + month + "/" + year}
              </Text>
            </TouchableOpacity>

            <TextInput
              mode="outlined"
              style={{ width: "100%", marginVertical: 10 }}
              label="Owner Name"
              value={ownerName}
              onChangeText={ownerName => this.setState({ ownerName })}
            />

            <TextInput
              mode="outlined"
              style={{ width: "100%", marginVertical: 10 }}
              label="Owner phone"
              keyboardType="phone-pad"
              value={ownerPhone}
              onChangeText={ownerPhone => this.setState({ ownerPhone })}
            />
            <Button
              label="Submit"
              onPress={() => {}}
              style={{ marginBottom: 50 }}
            />
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    marginVertical: 10
    // color: '#eddcdc',
    // : '#eddcdc'
  },
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
