import { ImageBackground, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import {Colors} from '../constants/colors'
import React, { use } from 'react'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] || Colors.light || { navBackground: '#fff', title: '#000' }
  return (
   
           
        <Stack screenOptions={{ 
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
            headerTitleStyle: { fontWeight: 'bold' },

        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="contact" options={{ title: 'Contact' }} />
        </Stack>
        
      
  )
}

export default RootLayout

const styles = StyleSheet.create({
   
})