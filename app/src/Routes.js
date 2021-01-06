import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, {Component} from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import CameraScreen from '../screens/CameraScreen'
import CameraPictureScreen from '../screens/CameraPictureScreen'
import SearchRecipeScreen from '../screens/SearchRecipeScreen'
import RecipeInformationScreen from '../screens/RecipeInformationScreen'
import LoadRecipesScreen from '../screens/LoadRecipesScreen'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

function Home(){
    return <HomeScreen />
}

function Camera(){
    return <CameraScreen />
}

function ConfirmPicture(){
    return <CameraPictureScreen />
}

function SearchRecipe(){
   
    return <SearchRecipeScreen />
}

function LoadRecipes(){
    return <LoadRecipesScreen />
}

function RecipeInformation(){
    return <RecipeInformationScreen />
}

export const Routes = ({}) => {


    return(
        <NavigationContainer>
            <Tabs.Navigator initialRouteName="Home">
                <Tabs.Screen name="Home" component={Home}/>
                <Tabs.Screen name="Camera" component={Camera}/>
                <Tabs.Screen name="SearchRecipe" component={SearchRecipe}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });