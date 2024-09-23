import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className='items-center justify-center gap-1'>
      <Image 
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#8f8b8b',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#FFFFFF',
            height: 90
          }
        }}>
        <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false, tabBarIcon: ({color, focused}) => (
          <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused} 
          />
        ) }} />
        <Tabs.Screen name="create" options={{ title: 'Create', headerShown: false, tabBarIcon: ({color, focused}) => (
          <TabIcon
            icon={icons.plus}
            color={color}
            name="Create"
            focused={focused} 
          />
        ) }} />
        <Tabs.Screen name="bookmarks" options={{ title: 'Bookmark', headerShown: false, tabBarIcon: ({color, focused}) => (
          <TabIcon
            icon={icons.bookmark}
            color={color}
            name="Bookmarks"
            focused={focused} 
          />
        ) }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile', headerShown: false, tabBarIcon: ({color, focused}) => (
          <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused} 
          />
        ) }} />
        
      </Tabs>
    </>
  )
}

export default TabsLayout