import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "./src/database/AuthProvider";
import { AuthenticationPage } from "./src/screens/AuthenticationPage";
import { PlanPage } from "./src/screens/PlanPage";

const RootStack = createStackNavigator();

const App = () => {
    return (
        <AuthProvider>
        <NavigationContainer>
            <RootStack.Navigator>
            <RootStack.Screen
                name = "Login Page"
                component = {AuthenticationPage}
                options = {{ title: "Login/SignUp" }}
            />
            <RootStack.Screen
                name = "Plans"
                component = {PlanPage}
                title = "PlansView"
            />
            <RootStack.Screen name = "Item List">
                {(props) => {
                    const { navigation, route } = props;
                    const { user, projectPartition } = route.params;
                    // return (
                    //     <TasksProvider user={user} projectPartition={projectPartition}>
                    //       <TasksView navigation={navigation} route={route} />
                    //     </TasksProvider>
                    // );
                }}
            </RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
        </AuthProvider>
    );
};

export default App;