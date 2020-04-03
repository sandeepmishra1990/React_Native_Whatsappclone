import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {HomeScreen} from './screens/Home'
import {SettingsScreen} from './screens/Settings'
import {CallScreen} from './screens/Call'


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator 
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#075E54' },
          fontWeight:'bold',
          fontFamily:'haveltica',
      }}
      >
        <Stack.Screen name="WhatsApp" >
          {()=>(
        <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 14,fontWeight:'bold',fontFamily:'haveltica' },
          tabStyle: {  flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between' },
          style: { backgroundColor: '#075E54'},
          activeTintColor: 'white',
          indicatorStyle:{backgroundColor:'white'},
          pressColor: '#128C7E'
        }}
      >
        <Tab.Screen name="CHATS" component={HomeScreen} />
        <Tab.Screen name="STATUS" component={SettingsScreen} />
        <Tab.Screen name="CALLS" component={CallScreen} />
      </Tab.Navigator>

          )}
      </Stack.Screen>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}



export default App;