
import React from 'react';
import { View, Text } from "react-native";
import { colors } from "../theme/colors";


const EmptyScreen = () => {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{
        color: colors.brand.secondary,
        fontSize: 25,
        fontWeight: "bold"
      }}>No data with this filter</Text>
    </View>

  )
}

export default EmptyScreen