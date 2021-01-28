import React, { Component } from 'react';
import { Text, View } from 'react-native';
/**
 * A LocationItem is a basic class holding infomation of a location.
 * A location could be a place of interest, an accomodation location, a place to eat or a location for activity.
 */
class LocationItem extends Component {
    render(props) {
        return (
            <View>
                <Text>
                    Location Item {this.props.index}
                </Text>
            </View>
        );
    }
}

export default LocationItem;