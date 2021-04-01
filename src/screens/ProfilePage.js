import React from 'react';
import { View, Text} from 'react-native';
import commonStyles from "./styles/CommonStyles";
/**
 * To view or modify user settings.
 */

export function ProfilePage() {

    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>Profile</Text>
            </View>
        </View>
    );
}