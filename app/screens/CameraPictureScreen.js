import React, {useState, useEffect } from 'react';
import { Button, Input, ListItem, List } from 'react-native-elements'
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';

let results = []

export default function CameraPictureScreen(){
    let start = "http://www.recipepuppy.com/api/?q=";
    const navigation = useNavigation();
    const route = useRoute();
    const { prediction } = route.params;
    console.log(prediction)
    const [data, setData] = useState(results);

    const search = (query) => {
    console.log("IN SEARCH")
    let url = start + query;

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => {
      if (request.status == 200) {
        let obj = JSON.parse(request.response);
        results = obj.results;
        for (let x = 0; x < results.length; x++) {
          if (results[x].thumbnail == "") {
            results.splice(x, 1);
            x--;
          }
        }
        navigation.navigate("CameraSearch", {results: results})
        console.log(results);
      } else {
        console.log(`error ${request.status} ${request.statusText}`);
      }
    };
  };
    // dict = take(3, dict.iteritems())
    console.log(prediction)

    const actionRow = (item) => {
        console.log('Selected Item :',item.name);
        search(item.name)
    }

    return (
        <SafeAreaView style={styles.container}>
                <FlatList 
                    data = {prediction} 
                    keyExtractor = {(item) => item.id}
                    renderItem = {({item}) => (
                            <TouchableWithoutFeedback onPress={() => actionRow(item)}>
                                <Text>{item.name}</Text>
                            </TouchableWithoutFeedback>
                        )}

                />
            
        </SafeAreaView>
    )
}
//LOAD the model


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });