import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native'

const CameraScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>CAMERA</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });

export default CameraScreen;