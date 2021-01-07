import React, {useState, useEffect } from 'react';
import { Button, Input, ListItem, List } from 'react-native-elements'
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

export default function CameraPictureScreen(){
    // const predict = async () => {
    //     console.log("IN PREDICT")
    //     const modelJson = await require("../model/model.json");
    //     console.log("Loaded model.json")
    //     const modelWeight = await require("../model/group1-shard.bin");
    //     console.log("weights loaded")
    //     const detector = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));
    //     console.log("PREDICTING")
    //     //use the model
    //     let result = await detector.predict(tensor).data()
    //     console.log(result);
    // }

    const navigation = useNavigation();
    const route = useRoute();
    const { prediction } = route.params;

    console.log(prediction)

    return (
        <SafeAreaView style={styles.container}>
            {/* <List> */}
                <FlatList 
                    data = {prediction} 
                    keyExtractor = {(item) => item.id}
                    renderItem = {({item}) => (
                            // <ListItem 
                            //     title={item.name}
                            //     subtitle={item.value}
                            //     containerStyle={{borderBottomWidth: 0}}
                            // />
                            <Text>{item.name}</Text>
                        )}

                />
            {/* </List> */}
            
        </SafeAreaView>
    )
}
//LOAD the model


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });