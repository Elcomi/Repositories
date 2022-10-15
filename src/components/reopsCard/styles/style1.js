import React from 'react';

import { StyleSheet, Image, View, Text } from "react-native";


import { colors } from "../../../theme/colors"
import Title from "../common/title"
import Description from "../common/desc"
import Icon from 'react-native-vector-icons/FontAwesome';




const Style1 = ({ full_name, description, image, updatedAt, stargazers_count, language }) => {

  return (
    <View style={styles.container}>
      <Image resizeMode="stretch"
        source={{ uri: image, width: "100%", height: 157, }} style={styles.image} />
      <View style={{
        padding: 20,
      }}>
        <View style={styles.topInfo}>
          <Text style={styles.Toptitle}>Trending repository</Text>
          <View style={styles.starsInfo}>
            <Icon name="star-o" size={20} color={colors.brand.secondary} />
            <Text style={[styles.info, { fontWeight: "bold", marginLeft: 5 }]}>Star</Text>
            <Text style={styles.badge}>{stargazers_count}</Text>
          </View>
        </View>
        <Title name={full_name} />
        <Description desc={description} />
        <View style={styles.footerInfo} >
          <Text style={styles.info}>Updated at {updatedAt}</Text>
          <Text style={[styles.info, { marginLeft: 30 }]}>{language}</Text>
        </View>
      </View>
    </View>
  );
}


export default Style1

const textPrimary = colors.text.primary
const textSecondary = colors.text.secondary
const brand = colors.brand.primary
const ligt = colors.brand.ligtPrimary

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 15,
    width: "95%",
  },
  image: { borderTopRightRadius: 15, borderTopLeftRadius: 15 },
  topInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  starsInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  Toptitle: {
    color: textPrimary
  },
  badge: {
    backgroundColor: ligt,
    marginLeft: 15,
    padding: 8,
    fontWeight: "bold",
    borderRadius: 10,
    color: brand
  },
  info: {
    color: textSecondary,
  },
  footerInfo: {
    flexDirection: "row",
    justifyContent: "flex-start"
  }
})