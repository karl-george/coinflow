import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: Colors.background,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.text_faded,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search/search'
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='search-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='save/save'
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='heart' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile/profile'
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
