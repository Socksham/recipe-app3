import React, { Fragment } from "react";
import { Button } from "react-native";
import { SafeAreaView, Text } from "react-native";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import colors from "../src/config/colors.js";

let start = "http://www.recipepuppy.com/api/?q=";

let results = []

const search = (query) => {
  console.log(query);
  let url = start + query;
  console.log(url);

  let request = new XMLHttpRequest();
  request.open("GET", "http://www.recipepuppy.com/api/?i=" + query);
  request.send();
  request.onload = () => {
    console.log(request);
    if (request.status == 200) {
      let obj = JSON.parse(request.response);

      console.log(JSON.parse(request.response));
      results = obj.results
      console.log(obj.results[0].title);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  };
};

const SearchRecipeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />

      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: "10%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
          }}
        >
          <Image
            style={{ resizeMode: "contain", height: "80%" }}
            source={require("../pictures/logo2.jpg")}
          ></Image>
        </View>
        <SafeAreaView style={styles.container}>
          <SearchBar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={() => {
              search(searchQuery);
            }}
          />
        </SafeAreaView>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ImageBackground source={item.source} style={styles.postElement}>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text style={styles.postSubtitle}>{item.subtitle}</Text>
              </ImageBackground>
            );
          }}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SearchRecipeScreen;
