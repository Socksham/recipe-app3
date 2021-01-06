import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

function Home(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>HOME</Text>
        </SafeAreaView>
    )
}

function Camera(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>CAMERA</Text>
        </SafeAreaView>
    )
}

function ConfirmPicture(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>CONFIRM</Text>
        </SafeAreaView>
    )
}

function SearchRecipe(){
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <Text>Search Recipe</Text>
        </SafeAreaView>
    )
}

function LoadRecipes(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>I am a login Screen </Text>
        </SafeAreaView>
    )
}

function RecipeInformation(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>I am a login Screen </Text>
        </SafeAreaView>
    )
}

export const Routes = ({}) => {

    
    return(
        <NavigationContainer>
            <Tabs.Navigator initialRouteName="Home">
                <Tabs.Screen name="Home" component={Home}/>
                <Tabs.Screen name="Camera" component={Camera}/>
                {/* <Tabs.Screen name="ConfirmPicture" component={ConfirmPicture}/> */}
                <Tabs.Screen name="SearchRecipe" component={SearchRecipe}/>
                {/* <Tabs.Screen name="LoadRecipes" component={LoadRecipes}/>
                <Tabs.Screen name="RecipeInformation" component={RecipeInformation}/> */}
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });