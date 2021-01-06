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
            title: 'Basic Knife Skills',
            subtitle: "Learn these to improve your kitchen efficiency",
            source: {uri: "https://choosingfigs.com/photography/albums/knife-skills-class/knife-skills-class-033.jpg"}, 
            id: '2' 
        },
        { 
            title: 'Mediterranean Diet',
            subtitle: "A diet used commonly by the people of Italy",
            source: {uri: "https://th.bing.com/th/id/OIP.L2UZ_b3wSivns9PYFo2oCQHaE7?pid=Api&rs=1"}, 
            id: '3' 
        },
        {
            title: 'Pumpkin Pie',
            subtitle: "A simple pumpkin pie recipe to please your family during thanksgiving",
            source: {uri: "https://www.modernhoney.com/wp-content/uploads/2017/11/The-Best-Pumpkin-Pie-Recipe-4.jpg"},
            id: '4' 
        }, 
        { 
            title: 'Basic Knife Skills',
            subtitle: "Learn these to improve your kitchen efficiency",
            source: {uri: "https://choosingfigs.com/photography/albums/knife-skills-class/knife-skills-class-033.jpg"}, 
            id: '5' 
        },
        { 
            title: 'Mediterranean Diet',
            subtitle: "A diet used commonly by the people of Italy",
            source: {uri: "https://th.bing.com/th/id/OIP.L2UZ_b3wSivns9PYFo2oCQHaE7?pid=Api&rs=1"}, 
            id: '6' 
        },
        {
            title: 'Pumpkin Pie',
            subtitle: "A simple pumpkin pie recipe to please your family during thanksgiving",
            source: {uri: "https://www.modernhoney.com/wp-content/uploads/2017/11/The-Best-Pumpkin-Pie-Recipe-4.jpg"},
            id: '7' 
        }, 
        { 
            title: 'Basic Knife Skills',
            subtitle: "Learn these to improve your kitchen efficiency",
            source: {uri: "https://choosingfigs.com/photography/albums/knife-skills-class/knife-skills-class-033.jpg"}, 
            id: '8' 
        },
        { 
            title: 'Mediterranean Diet',
            subtitle: "A diet used commonly by the people of Italy",
            source: {uri: "https://th.bing.com/th/id/OIP.L2UZ_b3wSivns9PYFo2oCQHaE7?pid=Api&rs=1"}, 
            id: '9' 
        }
    ];

    return (
        <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{height: "10%", justifyContent: "center", alignItems: "center", backgroundColor: colors.primary}}>
                <Image source = {require('../assets/logo.jpg')}></Image>
                <Text>COMPANY LOGO GOES HERE</Text>
            </View>
            <FlatList
                data = {POSTS} 
                keyExtractor = {(item) => item.id}
                renderItem = {( {item} ) => { 
                    return (
                        <ImageBackground source = {item.source} style = {styles.postElement}>
                            <Text>{item.title}</Text>
                            <Text>{item.subtitle}</Text>
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
        fontSize: 20
    },
    postSubtitle: {
        fontSize: 14
    }
  });

export default HomeScreen;