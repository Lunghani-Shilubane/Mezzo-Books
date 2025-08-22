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
        
      <Text style={styles.title}>Confirmed books</Text>

    <View style={styles.book}>
      <Text>Title: Mistorn</Text>
      <Text>Author: Brandon Sanderson</Text>
      <Text>Genre: Fiction</Text>
      <Text>Number of pages: 600</Text>
    </View>

     <View style={styles.book}>
      <Text>Title: To Kill a Mockingbird</Text>
      <Text>Author: Harper Lee</Text>
      <Text>Genre: Fiction</Text>
      <Text>Number of pages: 281</Text>
    </View>

     <View style={styles.book}>
      <Text>Title: The Great Gatsby</Text>
      <Text>Author: F. Scott Fitzgerald</Text>
      <Text>Genre: Classic</Text>
      <Text>Number of pages: 180</Text>
    </View>
      


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
    position: 'absolute',
    top: 70,


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
      book: {
        marginTop: 20,
        fontSize: 18,
        color: '#ffffffff',
        backgroundColor: '#ffffffd3',
        textAlign: 'center',
        borderColor: '#ffffffff',
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
      }
})