import React from "react";
import { StyleSheet, Image, TextInput, View, Keyboard, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from "../theme/colors"

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <Icon name="search" size={30} color={colors.brand.secondary} />

    // <View style={styles.container}>
    //   <View
    //     style={
    //       clicked
    //         ? styles.searchBar__clicked
    //         : styles.searchBar__unclicked
    //     }
    //   >
    //     <Feather
    //       name="search"
    //       size={20}
    //       color="black"
    //       style={{ marginLeft: 1 }}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Search"
    //       value={searchPhrase}
    //       onChangeText={setSearchPhrase}
    //       onFocus={() => {
    //         setClicked(true);
    //       }}
    //     />
    //     {clicked && (
    //       <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
    //         setSearchPhrase("")
    //       }} />
    //     )}
    //   </View>
    //   {clicked && (
    //     <View>
    //       <Button
    //         title="Cancel"
    //         onPress={() => {
    //           Keyboard.dismiss();
    //           setClicked(false);
    //         }}
    //       ></Button>
    //     </View>
    //   )}
    // </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});