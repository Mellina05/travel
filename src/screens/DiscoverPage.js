import React from 'react';
import { View, Text} from 'react-native';
import commonStyles from "./styles/CommonStyles";

/**
  * To view public trips.
 */

export function DiscoverPage() {

    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>Discover</Text>
            </View>
        </View>
    );
}