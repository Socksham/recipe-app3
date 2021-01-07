import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, {Component} from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CameraStackScreen from '../screens/CameraStackScreen'
import CameraPictureScreen from '../screens/CameraPictureScreen'
import SearchRecipeScreen from '../screens/SearchRecipeScreen'
import RecipeInformationScreen from '../screens/RecipeInformationScreen'
import LoadRecipesScreen from '../screens/LoadRecipesScreen'

import colors from './config/colors.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

function Home(){
    return <HomeScreen />
}

function CameraStack(){
    return <CameraStackScreen />
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
            <Tabs.Navigator barStyle = {{marginLeft: 50}} initialRouteName="Home">
                <Tabs.Screen name="Home" component={Home}/>
                <Tabs.Screen name="Scan Food" component={CameraStack}/>
                <Tabs.Screen name="Find Recipes" component={SearchRecipe}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: colors.primary
    }
})