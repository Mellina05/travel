import React, { Component } from 'react';
import { View, Text, Animated, ScrollView, Button} from 'react-native';
import LocationItem from '../components/LocationItem';

/**
 * CreatePlanPage is the creation page of a plan.
 */
class CreatePlanPage extends Component
{
    constructor() {
        super();

        this.state = { valueArray: []}

        this.index = 0;
    }

    _addItem = () => {
        let newItem = { index: this.index }

        this.setState({valueArray: [ ...this.state.valueArray, newItem ] });  
        
        this.index = this.index + 1;
    }

    render() {
        let itemArray = this.state.valueArray.map(( item, key ) => {
            return(
                <View key = { key }>
                    <LocationItem index={item.index} />
                </View>
            )
        });

        return(
            <View>
                <Button
                    onPress={this._addItem}
                    title="Add item"
                />
                <ScrollView>
                    <View style = {{ flex: 1, padding: 4 }}>
                    {
                        itemArray
                    }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default CreatePlanPage;