import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({text,containerStyle,textStyle, onPress}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
        <Text style={textStyle}>{text}</Text>

    </TouchableOpacity>
  )
}

export default CustomButton