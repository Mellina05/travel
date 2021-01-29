import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
/**
 * A LocationItem is a basic class holding infomation of a location.
 * A location could be a place of interest, an accomodation location, a place to eat or a location for activity.
 */
class LocationItem extends Component {
    state = {
        locationName: '',
        time: ''
    }

    _handleName = (text) => {
        this.setState({locationName: text});
    }

    _handleTime = (text) => {
        this.setState({time: text});
    }

    render(props) {
        return (
            <View>
                <Text>
                    Location Item {this.props.index}
                </Text>
                <TextInput
                    placeholder = "Location name"
                    placeholderTextColor = "#9a73ef"
                    onChangeText = {this._handleName}
                />
                    
                <TextInput
                    placeholder = "Time"
                    placeholderTextColor = "#9a73ef"
                    onChangeText = {this._handleTime}
                />
                <Text style={{padding: 10, fontSize: 15}}>
                    Input: {this.state.locationName + ' ' + this.state.time}
                </Text>
            </View>
        );
    }
}

export default LocationItem;