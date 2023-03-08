import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Planeta from "../screens/Planeta";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    >
      
      <Stack.Screen name="Planeta" component={Planeta} />
    </Stack.Navigator>
  );
};

export default StackNavigator;