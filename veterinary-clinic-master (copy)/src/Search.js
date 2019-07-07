import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { Appbar } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import OptionsMenu from "react-native-options-menu";

// import TextInput from './common/TextInput';
import Button from "./common/Button";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchType: "",
      data: [
        {
          image: require("./imges/dog2.jpg"),
          petName: "zozo",
          ownerName: "Darsh",
          time: "7:15"
        },
        {
          image: require("./imges/dog1.jpeg"),
          petName: "Max",
          ownerName: "Ibrahim",
          time: "2:15"
        },
        {
          image: require("./imges/dog2.jpg"),
          petName: "ssss",
          ownerName: "Marwan",
          time: "5:15"
        },
        {
          image: require("./imges/dog1.jpeg"),
          petName: "Pop",
          ownerName: "Madkour",
          time: "7:15"
        },
        {
          image: require("./imges/dog2.jpg"),
          petName: "lucy",
          ownerName: "Mahmoud",
          time: "9:30"
        }
      ]
    };
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = id => {
    // updater functions are preferred for transactional updates
    this.setState(state => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return { selected };
    });
  };

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        height: 70
      }}
      onPress={() => {
        this.props.navigation.navigate("Pet", {
          owner: item.ownerName,
          pet: item.petName,
          picture: item.image
        });
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <Image
          source={item.image}
          style={{
            borderRadius: 90,
            width: 55,
            height: 55
          }}
        />
        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            paddingLeft: 7
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>{item.petName}</Text>
          <Text style={{ color: "#e5c9c9", fontSize: 16 }}>
            {item.ownerName}
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{
            padding: 5
          }}
        >
          <OptionsMenu
            customButton={
              <MaterialIcons name={"more-vert"} size={25} color={"#e5c9c9"} />
            }
            destructiveIndex={1}
            // buttonStyle={{ width: 25, height: 25, resizeMode: "" }}
            options={["Add Record", "View"]}
            actions={[
              () => {
                this.props.navigation.navigate("AddNewRecord");
              },
              () => {}
            ]}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { searchType, search } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("./imges/dog2.jpg")}
      >
        <LinearGradient
          colors={["rgba(142, 14, 0,0.9)", "rgba(31, 28, 24,0.9)"]}
          style={styles.contentContainer}
        >
          <View
            style={{
              padding: 5
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#761105",
                borderRadius: 40,
                justifyContent: "space-between",
                alignItems: "center",
                margin: 7
              }}
            >
              <TextInput
                placeholder="search..."
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  color: "white"
                }}
                placeholderTextColor="white"
                value={search}
                onChangeText={search => this.setState({ search })}
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
                <MaterialIcons name={"search"} size={27} color={"black"} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={this.state.data}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              style={{
                marginBottom: 100
              }}
            />
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

export default Search;
