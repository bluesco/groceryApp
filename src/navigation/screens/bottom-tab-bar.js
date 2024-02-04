import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeightScreen, Theme} from '@src/common/theme';
import {Router} from '../router';
import TabBarIcon from '../components/tab-bar-icon';
import {Profile, HomeAuth} from '@src/features/home-auth/screens';
import { useSelector } from 'react-redux';
import { ExploreScreen } from '@src/features/category/screens';
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const {isLogin} = useSelector(state => state.auth);
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        iconStyle: {
          width: 100,
        },
        style: {
          backgroundColor: Theme.backgrounds.white,
          paddingBottom: 15,
          paddingVertical: 10,
          height: HeightScreen * 0.09,
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          position: 'absolute',
          paddingHorizontal: 8,
          shadowOpacity: 0.15,
        },
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen
        name={Router.Shop}
        component={HomeScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Shop} focused={focused} />
          ),

          // tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name={Router.Explore}
        component={ExploreScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Explore} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.Cart}
        component={DetailsScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Cart} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.Heart}
        component={HomeAuth}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Heart} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.Profile}
        component={isLogin ? Profile : HomeAuth}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Profile} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({});
