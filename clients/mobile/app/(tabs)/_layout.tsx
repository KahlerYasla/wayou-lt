import React from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';
import { FONT } from '../../constants';
import { StatusBar } from 'expo-status-bar';

interface TabIconProps {
  icon: any; // icon'un tipini belirlemek için gerekli olan veri tipini buraya ekleyin
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name }) => {
  return (
    <View style={{ alignItems: "center", }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 20, height: 20 }}
      />
      <View style={{ height: 5 }} />
      <Text style={{ fontFamily: FONT.regular, fontSize: 14, color: color }}>
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
          tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
            paddingHorizontal: 20,
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
                icon={icons.explorerIcon}
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
                icon={icons.routesIcon}
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
                icon={icons.wayouHedgehogIcon}
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
                icon={icons.decksIcon}
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
                icon={icons.profileIcon}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />

      </Tabs>
      <StatusBar backgroundColor="#000000" style="light" />
    </>

  );
};

export default TabLayout;
