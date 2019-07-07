import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, DatePickerAndroid, TouchableOpacity, Image } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class Add extends Component {

    _renderItem(text, onPress) {
        return (

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: 'center',
                    padding: 10,
                    height: 70,
                    borderBottomColor: 'grey',
                    borderTopColor: 'grey',
                    borderWidth: 0.25,

                }}
                onPress={onPress}
            >
                <Text style={{ color: 'white', fontSize: 22 }} >{text}</Text>

            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View>
                <LinearGradient colors={['#8e0e00', '#1f1c18']}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >

                    <Appbar.Header
                        style={{
                            backgroundColor: '#8e0e00',
                            color: '#eddcdc'
                        }}
                    >
                        <Appbar.Content
                            title="Search"
                        />
                    </Appbar.Header>
                    {this._renderItem('Add new pet', () => {
                        this.props.navigation.navigate('AddNewPet')
                    })}
                    {this._renderItem('Add new medical record', () => {
                        this.props.navigation.navigate('AddNewRecord')
                    })}
                </LinearGradient>
            </View>
        );
    }
}

