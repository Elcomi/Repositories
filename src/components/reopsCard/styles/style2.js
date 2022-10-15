import React from 'react';

import { StyleSheet, View, Text } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import Title from "../common/title"
import Description from "../common/desc"

import { colors } from "../../../theme/colors"


const Style2 = ({ full_name, description, language, forks_count, stargazers_count }) => {
  return (
    <View style={styles.container}>
      <View style={{
        padding: 20,
      }}>
        <Title name={full_name} />
        <Description desc={description} />
        <View style={styles.footerInfo} >
          <Text style={[styles.info, { marginRight: 20 }]}>{language}</Text>
          <>
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <Icon name="star-o" size={20} color={colors.brand.secondary} />
              <Text style={styles.info}>{stargazers_count}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="code-fork" size={25} color={colors.brand.secondary} />
              <Text style={styles.info}>{forks_count}</Text>
            </View>
          </>
        </View>
      </View>
    </View>
  );
}


export default Style2

const textSecondary = colors.text.secondary

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 15,
    width: "95%",
  },
  info: {
    color: textSecondary,
    marginLeft: 5
  },
  footerInfo: {
    flexDirection: "row",
    justifyContent: "flex-start"
  }
})