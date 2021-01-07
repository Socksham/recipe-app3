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
import { Ionicons } from '@expo/vector-icons'
export const Routes = ({}) => {
    return(
        <NavigationContainer>
            <Tabs.Navigator initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {   
                    let iconName;       
                    if (route.name === 'CameraStack') {
                    iconName = focused
                    ? 'camera'
                    : 'camera';
                } else if (route.name === 'SearchRecipe') {
                    iconName = focused
                    ? 'search'
                    : 'search';
                }else if (route.name === 'Home') {
                    iconName = focused
                    ? 'home'
                    : 'home';
                }
            
            return <Ionicons name={iconName} size={size} color={color}     />;
            },
            })}    tabBarOptions={{
            activeTintColor: colors.secondary,
            inactiveTintColor: colors.primary,
            }} >
                <Tabs.Screen name="Home" component={Home}/>
                <Tabs.Screen options={{title:"Camera"}} name="CameraStack" component={CameraStack}/>
                <Tabs.Screen options={{title:"Search Recipe"}} name="SearchRecipe" component={SearchRecipe}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}