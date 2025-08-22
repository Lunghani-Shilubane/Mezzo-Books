import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import { Picker } from '@react-native-picker/picker'
import React from 'react'


const Listing = () => {
  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = React.useState("Genre");
  return (
  <ImageBackground
  
            source={require('../assets/images/background.jpeg')}
            style={styles.background}
            resizeMode="cover"
        >

    <View style={styles.container}>

       <TextInput
          style={styles.input}
          placeholder="Title"
          keyboardType="Text"
        />

        <TextInput
          style={styles.input}
          placeholder="Author"
          keyboardType="Text"
        />

        <Picker
        selectedValue={selectedGenre}
        style={styles.drop} // Use the same style as your TextInput
        onValueChange={(itemValue) => setSelectedGenre(itemValue)}
>
  {/* <Picker.Item label="Select Genre..." value="" enabled={false} /> */}
        <Picker.Item label="Fiction" value="fiction" />
        <Picker.Item label="Non-Fiction" value="nonfiction" />
        <Picker.Item label="Biography" value="biography" />
         <Picker.Item label="Science" value="science" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Number of Pages"
          keyboardType="numeric"
        />
        
      <Text style={styles.title}>Fill in your book's information</Text>
      
      
<TouchableOpacity style={styles.button} onPress={() => router.push('/confirm')}>
  <Text style={styles.buttonText}>Enter the Library</Text>
</TouchableOpacity>
    </View>
    </ImageBackground>
    
  )
}

export default Listing

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
title: {
    fontSize: 25,
    position: 'absolute',
    top: 80,
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
        position: 'absolute',
        bottom: 100,
        
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
      },

      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#ffffffd3',
        borderRadius: 8,
        width: 200,
        textAlign: 'center',
      },
      drop: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#ffffffd3',
        borderRadius: 8,
        width: 200,
        textAlign: 'center',
       
      },
   
      
})