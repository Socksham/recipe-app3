import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, {Component} from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CameraStackScreen from '../screens/CameraStackScreen'
import CameraPictureScreen from '../screens/CameraPictureScreen'
import SearchRecipeScreen from '../screens/SearchRecipeScreen'
import RecipeInformationScreen from '../screens/RecipeInformationScreen'
import LoadRecipesScreen from '../screens/LoadRecipesScreen'

import colors from './config/colors.js';

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
            <Tabs.Navigator initialRouteName="Home">
                <Tabs.Screen name="Home" component={Home}/>
                <Tabs.Screen name="CameraStack" component={CameraStack}/>
                <Tabs.Screen name="SearchRecipe" component={SearchRecipe}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}