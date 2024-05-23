import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import CourseUnits from './CourseUnits';
import Students from './Students';
import Enrollment from './Enrollment';
import Grades from './Grades';
import DashBoard from './DashBoard';

const Drawer = createDrawerNavigator();

export default function LecturerHome() {
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
        >Lecturer</Text>
          <SimpleLineIcons name="arrow-down" size={18} color="#460066" />
      </View>
    </TouchableOpacity>
  );

  return (
    <Drawer.Navigator
      initialRouteName="LecturerHome"
      drawerContent={(props)=>{
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                height: 200,
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
                  height: 100,
                  width: 100,
                  borderRadius: 65
                }}
              />
              <Text
                style={{
                  fontSize:22,
                  marginVertical: 6,
                  fontWeight: 'bold',
                  color: '#111'
                }}
              >Innocent Tyson</Text>
              <Text
                style={{
                  fontSize:18,
                  marginVertical: 6,
                  fontWeight: 'bold',
                  color: '#111'
                }}
              >Lecturer</Text>
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
        name="Home" 
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
        name="Students" 
        options={{
          drawerLabel: 'Students',
          title: 'Students',
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="user" size={20} color={color} />
          )
        }}
        component={Students}
      />
      <Drawer.Screen 
        name="Enrollment" 
        options={{
          drawerLabel: 'Enrollment',
          title: 'Enrollment',
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="wallet" size={20} color={color} />
          )
        }}
        component={Enrollment}
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
    </Drawer.Navigator>
  );
}
