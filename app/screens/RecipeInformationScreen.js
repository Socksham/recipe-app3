import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';

const RecipeInformationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>RECIPE INFORMATION</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });

export default RecipeInformationScreen;