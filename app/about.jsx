import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import {Colors} from '../constants/colors'
import React from 'react'

const About = () => {
  const colorScheme = useColorScheme()
      const theme = Colors[colorScheme] || Colors.light || { navBackground: '#fff', title: '#000' }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Link style={styles.link} href='/'>Home</Link>
      
    </View>
  )
}

export default About

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
},
link: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',}
})