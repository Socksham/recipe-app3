
import React, { useState, useEffect, useRef } from 'react';
import { Text, View,SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements'
import { Camera } from 'expo-camera';
// import { FileSystem } from 'expo-file-system';
import * as FileSystem from 'expo-file-system';
import * as tf from '@tensorflow/tfjs'
import {decodeJpeg, fetch} from '@tensorflow/tfjs-react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import colors from "../src/config/colors.js"

export default function CameraScreen() {
  // cameraRef = React.createRef()
  const navigation = useNavigation();
  const [cameraRef, setCameraRef] = useState(React.createRef())

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  const _takePicture = async () => {
    console.log("Loading...")
    const photo = await cameraRef.current.takePictureAsync()
    const fileUri = photo.uri;
    console.log(fileUri)  
    const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    navigation.navigate("CameraPicture", {image: fileUri});
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={type}>
        <View style={styles.innerCameraView}>
          <Icon
            name = "flip-camera-ios"
            size = {70}
            style = {styles.flipIcon}
            color = "white"
            onPress = {() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }} />
          <Icon
            name = "stop-circle"
            size = {70}
            style = {styles.snapIcon}
            color = "white"
            onPress = {_takePicture}
           />
        </View>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerCameraView: {
    width: '93%', 
    height: 70,
    flexDirection: "row",
    justifyContent: 'space-between', 
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10
  },
  flipIcon: {
    
  },
  snapIcon: {
    
  }
})
