import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {

        const { label, value, keyboardType, onChangeText, style, underlineColorAndroid } = this.props;
        // const label = navigation.getParam('label', '');
        // const placeholder = navigation.getParam('placeholder', '');
        // const value = navigation.getParam('value', '');

        console.log('textInput props: ', this.props);

        const { text } = this.state;

        return (
            <View >
                {/* <Text style={{
                    color: '#eddcdc',
                    fontSize: 18,
                    fontWeight: '400',
                }} >
                    {label}
                </Text> */}

                <TextInput
                    style={[{
                        height: 55, color: '#eddcdc', fontSize: 18
                    }, {...style}]}
                    underlineColorAndroid={underlineColorAndroid || '#eddcdc'}
                    placeholder={label}
                    placeholderTextColor='#eddcdc'
                    value={value}
                    keyboardType={keyboardType || 'default'}
                    onChangeText={onChangeText}
                    multiline
                />
            </View>
        );
    }
}