import React, {useState, useEffect } from 'react';
import { Button, Input } from 'react-native-elements'
import Svg, {Rect} from 'react-native-svg';
import * as tf from '@tensorflow/tfjs-react-native';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as blazeface from '@tensorflow-models/blazeface';
import * as jpeg from 'jpeg-js'
import { View, TextInput, StyleSheet } from 'react-native';

const CameraPictureScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>CAMERA PICTURE SCREEN</Text>
        </SafeAreaView>
    )
}
//LOAD the model
// console.log("[+] Loading custom model")
// const modelJson = await require("./asses/models/model.json");
// const modelWeight = await require("./assests/models/group1-shard.bin");
// const detector = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));

// //use the model
// let result = await detector.predict(Tensor).data()

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });

export default CameraPictureScreen;