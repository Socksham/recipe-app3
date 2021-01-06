import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';

const LoadRecipesScreen = () => {
    return (
        <SafeAreaView >
                   <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
            <Text>SEARCH RECIPE</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });

export default LoadRecipesScreen;