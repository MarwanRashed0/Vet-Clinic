import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { label, onPress, style } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[{
                    borderColor: '#eddcdc',
                    borderRadius: 7,
                    borderWidth: 1.5,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 10
                }, {...style}]}
            >
                <Text style={{
                    color: '#eddcdc',
                    fontSize: 18,
                    fontWeight: '400',
                }} >
                    {label}
                </Text> 
            </TouchableOpacity>
        );
    }
}