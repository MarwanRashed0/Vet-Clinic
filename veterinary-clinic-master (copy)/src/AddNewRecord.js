import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  DatePickerAndroid,
  TouchableOpacity,
  TimePickerAndroid,
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
      hour: "",
      minute: ""
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

  async selectTime() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        console.log(action, hour, minute);
        this.setState({ hour, minute });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  render() {
    const {
      petName,
      sex,
      breed,
      minute,
      hour,
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
            <Appbar.Content title="Add new Record" />
          </Appbar.Header>

          <ScrollView style={{ padding: 20 }}>
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
                  ? "Select next examin date"
                  : day + "/" + month + "/" + year}
              </Text>
            </TouchableOpacity>

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
              onPress={() => this.selectTime()}
            >
              <Text style={{ color: "#eddcdc", fontSize: 18 }}>
                {minute === ""
                  ? "Select next examin Time"
                  : hour + ":" + minute}
              </Text>
            </TouchableOpacity>

            <TextInput
              style={{
                height: 200,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 7,
                textAlignVertical: "top"
              }}
              label="Notes..."
              value={petName}
              underlineColorAndroid="transparent"
              onChangeText={petName => this.setState({ petName })}
            />
            <Button label="Submit" onPress={() => {}} />
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
