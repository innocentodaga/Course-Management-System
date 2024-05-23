import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import HomeScreen from '../screens/admin/HomeScreen';
import StudentHome from '../screens/Students/StudentHome'
import LecturerHome from '../screens/Lecturer/LecturerHome'
import Profile from '../screens/Students/Profile';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GetInto" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LecturerHome" component={LecturerHome} options={{ headerShown: false }} />
      <Stack.Screen name="StudentHome" component={StudentHome} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}
