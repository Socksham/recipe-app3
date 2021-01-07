import React, { Fragment } from 'react'
import { SafeAreaView, Text } from 'react-native';
import { View, TextInput, StyleSheet, ImageBackground, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import colors from "../src/config/colors.js"

const HomeScreen = () => {

    const POSTS = [
        {
            title: 'Pumpkin Pie',
            subtitle: "A simple pumpkin pie recipe to please your family during thanksgiving",
            source: {uri: "https://www.modernhoney.com/wp-content/uploads/2017/11/The-Best-Pumpkin-Pie-Recipe-4.jpg"},
            id: '1' 
        }, 
        { 
            title: 'The Art of Sushi',
            subtitle: "Learn about the techniques that Japanese culinary artists employ to make pristine sushi dishes",
            source: {uri: "https://www.sapporo.co.uk/wp-content/uploads/2019/03/sushi-aesthetic-1024x684.jpg"}, 
            id: '2' 
        },
        { 
            title: 'Chicken Tikka Masala',
            subtitle: "A popular Indian dish that also happens to be the national dish of England",
            source: {uri: "https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64-683x1024.jpg"},
            id: '3'
        },
        {
            title: 'Apple Varieties',
            subtitle: "Learn about all the different types of apples and how they're unique",
            source: {uri: "https://th.bing.com/th/id/OIP.UriGAHjsd7uSDDUtEP3AQgHaE7?pid=Api&rs=1"},
            id: '4' 
        }, 
        { 
            title: 'Basic Knife Skills',
            subtitle: "Learn these to improve your kitchen efficiency",
            source: {uri: "https://choosingfigs.com/photography/albums/knife-skills-class/knife-skills-class-033.jpg"}, 
            id: '5'
        },
        { 
            title: 'Steak Basics',
            subtitle: "Steaks might be the most simplest, but hard to perfect dishes in the culinary land",
            source: {uri: "https://bbqchiefs.com/wp-content/uploads/2019/04/Ribeye-Steak-Garlic-Butter.jpg"}, 
            id: '6' 
        },
        {
            title: 'Mediterranean Diet',
            subtitle: "A diet used commonly by the people of Italy",
            source: {uri: "https://th.bing.com/th/id/OIP.L2UZ_b3wSivns9PYFo2oCQHaE7?pid=Api&rs=1"}, 
            id: '7' 
        }, 
        { 
            title: 'Herbology',
            subtitle: "Learn about the science of herbs and how they're used",
            source: {uri: "https://www.homestratosphere.com/wp-content/uploads/2019/04/Several-herbs-on-cutting-board-apr23.jpg"}, 
            id: '8' 
        },
        { 
            title: 'The Origins of Chocolate',
            subtitle: "Learn about how, where, and when chocolate was created and evolved into the staple it is known as today",
            source: {uri: "https://th.bing.com/th/id/OIP.L1JEetGOQ7Iats-3wV0jBAHaDY?pid=Api&rs=1"}, 
            id: '9' 
        }
    ];

    return (
        <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{height: "10%", justifyContent: "center", alignItems: "center", backgroundColor: colors.primary}}>
                <Image style = {{resizeMode: "contain", height: "80%"}} source = {require('../pictures/logo2.jpg')}></Image>
            </View>
            <FlatList
                data = {POSTS} 
                keyExtractor = {(item) => item.id}
                renderItem = {( {item} ) => { 
                    return (
                        <ImageBackground source = {item.source} style = {styles.postElement}>
                            <Text style = {styles.postTitle}>{item.title}</Text>
                            <Text style = {styles.postSubtitle}>{item.subtitle}</Text>
                        </ImageBackground>
                    );
                }}
            />
        </SafeAreaView>
        </Fragment>
    )
}


const styles = StyleSheet.create({
    headerView: {
        height: 80, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: colors.primary,
        bottom: 20
    },
    flatlistView: {
        flex: 1
    },
    postElement: {
        width: "100%",
        height: 200,
        borderRadius: 20,
        resizeMode: "cover",
        paddingTop: 20
    },
    postTitle: {
        fontSize: 24,
        fontWeight: "bold",  
        color: "white",
        backgroundColor: colors.primary,
        opacity: .8
    },
    postSubtitle: {
        fontSize: 14,
        color: "white",
        backgroundColor: colors.primary,
        opacity: .8
    }
  });

export default HomeScreen;