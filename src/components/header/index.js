import React, { useState } from 'react'
import { View, Text, StyleSheet } from "react-native"
import Logo from "./logo"
import Search from "../search"
import { colors } from "../../theme/colors"

const Header = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <View style={[styles.container, {
      backgroundColor: colors.bg.primary,
    }
    ]}>
      <Logo />
      {/* {!clicked && <Text style={styles.title}>Programming Languages</Text>} */}
      <Search />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,

  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});