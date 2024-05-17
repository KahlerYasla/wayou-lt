import React from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';
import { FONT } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


interface TabIconProps {
  icon: any; // icon'un tipini belirlemek için gerekli olan veri tipini buraya ekleyin
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 0.5 }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 24, height: 24 }}
      />
      <Text style={{ fontFamily: FONT.regular, fontSize: 12, color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabLayout: React.FC = () => {
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderTopWidth: 1,
          borderTopColor: '#101114',
          height: 60
        }
      }}
    >
        <Tabs.Screen
        name="explorer"
        options={{
          title: 'Explorer',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.ExplorerIcon}
              color={color}
              name="Explorer"
              focused={focused}
            />
          )
        }}
      />
      
      <Tabs.Screen
        name="routes"
        options={{
          title: 'Routes',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.RoutesIcon}
              color={color}
              name="Routes"
              focused={focused}
            />
          )
        }}
      />   
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.HomeIcon}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="decks"
        options={{
          title: 'Decks',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.DecksIcon}
              color={color}
              name="Decks"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.ProfileIcon}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }}
      />
      
    </Tabs>
    <StatusBar backgroundColor="#000" style="light" />
    </>
    
  );
};

export default TabLayout;
