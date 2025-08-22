import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router'
import { Link } from 'expo-router'
import React from 'react'


const index = () => {
  const router = useRouter();
  return (
  <ImageBackground
  
            source={require('../assets/images/background.jpeg')}
            style={styles.background}
            resizeMode="cover"
        >
    <View style={styles.container}>
        
      <Text style={styles.title}>Welcome to Mezzo books</Text>
      {/* <Link style={styles.link} href='/about'>About</Link>
      <Link style={styles.link} href='/contact'>contact</Link> */}
      
<TouchableOpacity style={styles.button} onPress={() => router.push('/listing')}>
  <Text style={styles.buttonText}>Enter the Library</Text>
</TouchableOpacity>
    </View>
    </ImageBackground>
    
  )
}

export default index

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffffff',
    textAlign: 'center',
    fontFamily: 'serif',


},
link: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',},
     background: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute', 
        zIndex: 999,            
       
    },
    button: {
        marginTop: 100,
        backgroundColor: '#000000d3',
        width: 130,
        height: 50,
        borderRadius: 8,
        borderColor: '#ffffffff',
        borderWidth: 2,
        
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
      }
})