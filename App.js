import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AuthProvider } from "./src/database/AuthProvider";
import { PlanPage } from "./src/screens/PlanPage";
import { ChatPage } from "./src/screens/ChatPage";
import { DiscoverPage } from "./src/screens/DiscoverPage";
import { ProfilePage} from "./src/screens/ProfilePage";

const BottomTab = createMaterialBottomTabNavigator();

const App = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
            <BottomTab.Navigator 
                activeColor="#111111"
                inactiveColor="#999999"
                shifting={false}
                barStyle={{ backgroundColor: "#EEEEEE"}}>
                <BottomTab.Screen name="Trip" component={PlanPage} />
                <BottomTab.Screen name="Chat" component = {ChatPage}/>
                <BottomTab.Screen name="Discover" component = {DiscoverPage}/>
                <BottomTab.Screen name="Profile" component={ProfilePage} />
            </BottomTab.Navigator>

            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;