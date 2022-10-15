import React from "react"
import { View, Image } from "react-native"

const Logo = () => {

  return (
    <View>
      <Image
        style={{ width: 112, height: 24, opacity: 1 }}
        source={require('../assets/LOGO.png')}
      />
    </View>
  )
}

export default Logo