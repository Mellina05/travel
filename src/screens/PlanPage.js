import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import commonStyles from "./styles/CommonStyles";

const styles = StyleSheet.create({
    plusButton: {
        width: 22,
        height: 21,
        marginTop: 3
    },
    tripLabel: {
        height: 226,
        marginLeft: 18,
        marginRight: 18,
        marginTop: 12,
        backgroundColor: "#F7F7F7",
        borderRadius: 12,
    },
    tripLabelImage: {
        width: undefined,
        height: 168, 
        borderTopLeftRadius: 12, 
        borderTopRightRadius: 12
    },
    tripLabelName: {
        marginTop: 10,
        marginLeft: 16,
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
        fontWeight: '500'
    },
    tripLabelText: {
        fontSize: 12,
        marginLeft: 16,
        marginTop: 2
    },
  });

const TripList = [
    {key: "trip1", name: "Girl's Trip", location: "Valleta(Malta)", startDate: "01/01/2021", endDate: "08/01/2021", image: require('./assets/trip1.jpeg')},
    {key: "trip2", name: "Family Chill Weekend Trip", location: "Giethoorn", startDate: "06/03/2021", endDate: "07/03/2021", image: require('./assets/trip2.jpeg')}
]

/**
 * To view plans with ownership.
 */
export function PlanPage() {

    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
            <Text style={commonStyles.title}>My Trips</Text>
            <TouchableOpacity 
                style={styles.plusButton}
                onPress={()=>console.log('Pressed!')}>
                <Image source={require('./assets/plus-button.png')} style={styles.plusButton}/>
            </TouchableOpacity>
            </View>
            <View style={{marginTop: 24}}>
                {TripList.map((element) => (
                <View key={element.id}>
                    <TouchableOpacity style={styles.tripLabel} onPress={()=>console.log(element.name)}>
                        <Image source={element.image} style={styles.tripLabelImage}/>
                        <Text style={styles.tripLabelName}>{element.name}</Text>
                        <Text style={styles.tripLabelText}>{element.location + " • " + element.startDate + " - " + element.endDate}</Text>
                    </TouchableOpacity>
                </View>))}
            </View>
      </View>
    );
}