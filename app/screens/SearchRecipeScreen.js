import React from 'react'
import { Button } from 'react-native';
import { SafeAreaView, Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

let start = "http://www.recipepuppy.com/api/?q="


const search = (query) => {
    console.log(query)
    let url = start + query
    console.log(url)

    let request = new XMLHttpRequest();
    request.open("GET", "http://www.recipepuppy.com/api/?i=" + query);
    request.send();
    request.onload = () => {
    console.log(request);
    if(request.status == 200){
        let obj = JSON.parse(request.response);
        
        console.log(JSON.parse(request.response));
        console.log(obj.results[0].title)
    }else{
        console.log(`error ${request.status} ${request.statusText}`)
    }
}
    
}

const SearchRecipeScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={styles.container}>
                   <SearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => {
            search(searchQuery)
        }}
        />
            <Text>SEARCH  RECIPE</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
  });

export default SearchRecipeScreen;