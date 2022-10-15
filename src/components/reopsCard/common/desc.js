
import React from 'react';
import { View, Text } from "react-native";
import { colors } from "../../../theme/colors";


const Description = ({ desc }) => {
  const defaultDesc = "descriptionLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur"
  return (
    <>
      <Text style={{
        color: colors.text.secondary,
        lineHeight: 20,
        marginBottom: 12
      }}>
        {desc ? desc : defaultDesc}
      </Text>
      <View style={{
        borderBottomWidth: 0.5,
        marginBottom: 12
      }}></View>
    </>

  )
}

export default Description