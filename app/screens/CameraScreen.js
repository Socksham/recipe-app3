import React, {Component} from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput } from 'react-native';
const CameraScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Camera Screen</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });

export default CameraScreen;