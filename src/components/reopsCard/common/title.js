import React from 'react';
import { View, Text } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../../../theme/colors";

const Title = ({ name }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Icon name="book" size={30} color={colors.brand.secondary} />
      <Text style={{
        color: colors.brand.primary,
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 12,
        marginLeft: 10
      }}>{name}</Text>
    </View>

  )
}

export default Title