import React from 'react';
import { View, StyleSheet,Image,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomePage';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
  return (
    <Tab.Navigator
    tabBarOptions={{
        showLable: false,
        style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            hight: 90,
            ...styles.shadow,
        },
    }}>
      <Tab.Screen name = "Home" component = { HomePage } options={{
        tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center',justifyContent:'center',top: 10}}>
                <Image
                source={require('../../assets/icons/th.jpg')}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                }}
                />
                <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Home</Text>
            </View>
        ),
      }}/>
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create()({
   shadow: {
    shadowColor: 'red',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
   } ,
});
export default Tabs;
