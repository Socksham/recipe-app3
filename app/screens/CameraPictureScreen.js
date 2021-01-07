import React, {useState, useEffect } from 'react';
import { Button, Input } from 'react-native-elements'
import Svg, {Rect} from 'react-native-svg';
import * as tf from '@tensorflow/tfjs';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as blazeface from '@tensorflow-models/blazeface';
import * as jpeg from 'jpeg-js'
import { View, TextInput,SafeAreaView,TouchableOpacity, StyleSheet,Image, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Camera } from 'expo-camera';

const CameraPictureScreen = () => {
    const predict = async () => {
        console.log("IN PREDICT")
        const modelJson = await require("../model/model.json");
        console.log("Loaded model.json")
        const modelWeight = await require("../model/group1-shard.bin");
        console.log("weights loaded")
        var model = {
            
        };
        
        localforage.setItem('colors', hexColors).then(function (value) {
            console.log(value.red);
        }).catch(function(err) {
            console.error(err);
        });
        const detector = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));
        console.log("PREDICTING")
        //use the model
        let result = await detector.predict(tensor).data()
        console.log(result);
    }
    const navigation = useNavigation();
    const route = useRoute();
    const { image, tensor } = route.params;
    
      console.log('helllo')
    console.log(JSON.stringify(tensor))
    console.log(JSON.stringify(image))
    // console.log("[+] Loading custom model")
    // const modelJson = require("../model/model.json");
    // const modelWeight = require("../model/group1-shard.bin");
    // const detector = tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));

    // //use the model
    // let result = detector.predict(tensor).data()
    predict()
    
    return (
        <SafeAreaView style={styles.container}>
            <Text>{JSON.stringify(tensor)}</Text>
            <Text>{JSON.stringify(image)}</Text>
            <Image source={{ isStatic: true, uri: JSON.stringify(image)}} style={{height: 100, width:100}} />
            {"\n"}
            {"\n"}
            {"\n"}
            <TouchableOpacity>
                <Text>Click here to get to the recipe screen</Text>
            </TouchableOpacity>
            {/* <Image source={require(image)}/> */}
        </SafeAreaView>
    )
}
//LOAD the model


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });

export default CameraPictureScreen;