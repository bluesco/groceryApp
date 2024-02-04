import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTabBar from '@navigation/screens/bottom-tab-bar';
import {createNativeStackNavigator, CardStyleInterpolators} from '@react-navigation/native-stack';
import {Router} from '@src/navigation/router';
import {
  Login,
  Register,
  HomeAuth,
  ForgotPassword,
} from '@src/features/home-auth/screens';

const Stack = createNativeStackNavigator();

const configTabOther = {
  animation: 'timing',
  config: {
    duration: 300,
  },
}; // hỗ trợ animation khi chuyển màn hình giữa các tab

// cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" screenOptions={{headerShown: false, }}>
      <Stack.Screen name={Router.BottomTabBar} component={BottomTabBar} />

      {[
        {name: Router.Login, component: Login},
        {name: Router.Register, component: Register},
        {name: Router.ForgotPassword, component: ForgotPassword},
      ].map(stack => {
        return (
          <Stack.Screen
            key={stack.name}
            name={stack.name}
            component={stack.component}
            option={{
              transitionSpec: {
                open: configTabOther,
                close: configTabOther,
              },
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
