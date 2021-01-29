import React, { Component } from 'react';
import firebase from '@react-native-firebase/app';
import db from '@react-native-firebase/database';
import { Text, View, ScrollView, Button} from 'react-native';
import LocationItem from '../components/LocationItem';
import { TextInput } from 'react-native-gesture-handler';

const firebaseDB = firebase.database();

/**
 * CreatePlanPage is the creation page of a plan.
 */
class CreatePlanPage extends Component
{
    constructor() {
        super();

        this.state = { valueArray: [], item: ''}

        this.index = 0;
    }

    _addItemToDatabase = (item) => {
        firebaseDB.ref('/item').push({
            name: item
        });
    }

    _handleInputChange = (input) => {
        this.setState({
            item: input
        });
    }

    _handleSubmit = () => {
        this._addItemToDatabase(this.state.item);
        console.log("Add item to database");
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
                <Text>
                    DB name: {firebaseDB.ServerValue}
                </Text>
                <TextInput placeholder = "Item name" onChange = {this._handleInputChange}/>
                <Button
                    onPress={this._handleSubmit}
                    title="Add item to database"
                />
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