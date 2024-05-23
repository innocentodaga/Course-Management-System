import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import CourseUnits from './CourseUnits';
import Grades from './Grades';
import DashBoard from './DashBoard';
import Login from '../Login'
import Profile from './Profile'

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  const renderRightHeaderComponent = () => (
    <TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
            source={require('../../assets/tyson-.png')}
            style={{ width: 30, height: 30,marginRight: 2, marginLeft: 5, borderRadius: 65 }}
          />
        <Text
          style={{
            fontSize: 16,
            marginVertical: 6,
            color: '#111',
            marginRight: 5,
          }}
        >Student</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={(props)=>{
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                height: 180,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#b5fedc',
                borderBottomWidth: 1,
                backgroundColor:'#b131fa'
              }}
            >
              <Image
                source={require('../../assets/tyson-.png')}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 5
                }}
              />
              <Text
                style={{
                  fontSize:20,
                  marginVertical: 6,
                  fontWeight: 'bold',
                  color: '#111'
                }}
              >Innocent Tyson</Text>
              <Text
                style={{
                  fontSize:18,
                  marginVertical: 6,
                  color: '#111'
                }}
              >Student No: 2101003158</Text>
            </View>
            <ScrollView>
              <DrawerItemList {...props}/>
            </ScrollView>
          </SafeAreaView>
        )
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#dbb6ee',
          width: 260
        },
        headerStyle: {
          backgroundColor: '#7f4ca5',
        },
        headerTintColor: '#b5fedc',
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
        drawerActiveTintColor: '#650076',
        drawerLabelStyle: {
          color: '#111'
        },
        headerRight: () => renderRightHeaderComponent(),
        headerTitle: 'CMS'
      }}
    >
      <Drawer.Screen 
        name="HomeScreen" 
        options={{
          drawerLabel: 'Dashboard',
          title: 'Dashboard',
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="home" size={20} color={color} />
          )
        }}
        component={DashBoard}
      />
      <Drawer.Screen 
        name="CourseUnits" 
        options={{
          drawerLabel: 'Course Units',
          title: 'Course Units',
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="layers" size={20} color={color} />
          )
        }}
        component={CourseUnits}
      />
      <Drawer.Screen 
        name="Grades" 
        options={{
          drawerLabel: 'Grades',
          title: 'Grades',
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="badge" size={20} color={color} />
          )
        }}
        component={Grades}
      />
      <Drawer.Screen 
        name="Profile" 
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="user" size={20} color={color} />
          )
        }}
        component={Profile}
      />
      <Drawer.Screen 
        name="LogOut"
        options={{
          drawerLabel: 'LogOut',
          title: 'LogOut',
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="log-out" size={20} color={color} />
          )
        }}
        component={Login}
      />
      
    </Drawer.Navigator>
  );
}
