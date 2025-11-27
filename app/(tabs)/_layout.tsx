import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
        <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
        backgroundColor: '#1c8648ff',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#087435ff',
        },
    }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'services',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'construct' : 'construct-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: 'pricing',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'pricetag' : 'pricetag-outline'} size={24} color={color} />),
        }}
      />
    </Tabs>
  );
}
