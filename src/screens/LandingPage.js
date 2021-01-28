import React from 'react';
import { View, Text, Button} from 'react-native';

/**
 * Landing page
 * @param {*} param0 
 */
const LandingPage = ({navigation}) => {
  return (
    <View>
      <Text>Landing Page</Text>
      <Button
        title="Create a plan"
        onPress={() => navigation.navigate('CreatePlan')}
      />
    </View>
  );
};
export default LandingPage;