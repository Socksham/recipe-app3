import React, { Fragment } from 'react'
import { View, TextInput, StyleSheet, ImageBackground, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CameraPictureScreen from '../screens/CameraPictureScreen'
import CameraScreen from '../screens/CameraScreen'
import CameraSearchScreen from '../screens/CameraSearchScreen'

const CameraStack = createStackNavigator();
console.log("I am at camera stack screen")
function Camera(){
    return <CameraScreen />
}

function CameraPicture(){
    return <CameraPictureScreen />
}

function CameraSearch(){
    return <CameraSearchScreen />
}

export default function CameraStackScreen() {
    return (
        <CameraStack.Navigator>
            <CameraStack.Screen name="Camera" component={Camera} /> 
            <CameraStack.Screen name="CameraPicture" component={CameraPicture} />
            <CameraStack.Screen name="CameraSearch" component={CameraSearch}/>
        </CameraStack.Navigator>
)}