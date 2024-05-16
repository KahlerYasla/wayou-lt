import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';

export default function TabLayout() {
    return (
        
        
        <Tabs screenOptions={{ tabBarActiveTintColor: 'green' }}>

            <Tabs.Screen
                name="explorer"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name={icons.ExplorerIcon} color={color} />,
                }}
            />

            <Tabs.Screen
                name="routes"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name={icons.RoutesIcon} color={color} />,
                }}
            />

            <Tabs.Screen
                name="home"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="decks"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />

        </Tabs>
    );
}
