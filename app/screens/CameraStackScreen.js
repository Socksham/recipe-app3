import React, { Fragment } from 'react'
import { View, TextInput, StyleSheet, ImageBackground, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CameraPictureScreen from '../screens/CameraPictureScreen'
import CameraScreen from '../screens/CameraScreen'

const CameraStack = createStackNavigator();

function Camera(){
    return <CameraScreen />
}

function CameraPicture(){
    return <CameraPictureScreen />
}

export default function CameraStackScreen() {
    return (
        <CameraStack.Navigator>
            <CameraStack.Screen name="Camera" component={Camera} /> 
            <CameraStack.Screen name="CameraPicture" component={CameraPicture} />
        </CameraStack.Navigator>
)}