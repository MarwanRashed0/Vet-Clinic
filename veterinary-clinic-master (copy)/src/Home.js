import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, DatePickerAndroid, TouchableOpacity, Image, ImageBackground } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import { RadioButton, Appbar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionsMenu from "react-native-options-menu";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: '',
            month: '',
            year: '',
            data: [
                { image: require('./imges/dog2.jpg'), petName: 'zozo', ownerName: 'Darsh', time: '7:15' },
                { image: require('./imges/dog1.jpeg'), petName: 'Max', ownerName: 'Ibrahim', time: '2:15' },
                { image: require('./imges/dog2.jpg'), petName: 'ssss', ownerName: 'Marwan', time: '5:15' },
                { image: require('./imges/dog1.jpeg'), petName: 'Pop', ownerName: 'Madkour', time: '7:15' },
                { image: require('./imges/dog2.jpg'), petName: 'lucy', ownerName: 'Mahmoud', time: '9:30' },
            ]

        };
    }

    async selectDate() {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                console.log(action, year, month, day);
                this.setState({ year, month, day })
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }


    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return { selected };
        });
    };

    _renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',
                padding: 10,
                height: 70
            }}
            onPress={() => {
                this.props.navigation.navigate('Record');
            }}
        >
            <View
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row'
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
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        paddingLeft: 7
                    }}
                >

                    <Text style={{ color: 'white', fontSize: 18 }} >{item.petName}</Text>
                    <Text style={{ color: '#e5c9c9', fontSize: 16 }} >{item.ownerName}</Text>
                </View>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}
            >
                <MaterialIcons name={'timer'} size={25} color={'#e5c9c9'} />
                <Text style={{ color: '#e5c9c9', fontSize: 16 }} >{item.time}</Text>
                <TouchableOpacity
                    style={{
                        padding: 5
                    }}
                >
                    <OptionsMenu
                        customButton={<MaterialIcons name={'more-vert'} size={25} color={'#e5c9c9'} />}
                        destructiveIndex={1}
                        // buttonStyle={{ width: 25, height: 25, resizeMode: "" }}
                        options={["Reschedule", "Pet profile", "Finish"]}
                        actions={[() => { }, () => { }, () => { this.props.navigation.navigate('AddNewRecord')}]}
                         />
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );

    render() {
        const { year, month, day } = this.state;
        return (
            <ImageBackground style={styles.container} source={require('./imges/dog2.jpg')}>
                <LinearGradient
                    colors={['rgba(142, 14, 0,0.9)', 'rgba(31, 28, 24,0.9)']}
                    style={styles.contentContainer}
                >

                    <Appbar.Header
                        style={{
                            backgroundColor: 'rgba(142, 14, 0,0)',
                            color: '#eddcdc',
                        }}
                    >
                        {/* <Appbar.BackAction
                            onPress={this._goBack}
                        /> */}
                        <Appbar.Content
                            title={day === '' ? 'Today' : `${day}/${month}/${year}`}
                        // subtitle="Subtitle"
                        />
                        {/* <Appbar.Action icon="search" onPress={this._onSearch} /> */}
                        <Appbar.Action icon="perm-contact-calendar" onPress={() => {
                            this.selectDate()
                        }} />
                    </Appbar.Header>

                    <FlatList
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />

                </LinearGradient>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        marginVertical: 10,
        // color: '#eddcdc',
        // : '#eddcdc'

    },
    container: {
        height: '100%',
        backgroundColor: 'transparent',
        width: '100%'
    },
    contentContainer: {
        width: '100%',
        height: '100%',
    },
});
