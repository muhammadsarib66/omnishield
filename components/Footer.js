import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const Footer = ({text,textStyle,containerStyle,onPress}) => {
  return (
    <View style={{ alignItems: 'center', position:'absolute', bottom:20,width:'100%'}}>
      <CustomButton text={text} textStyle={textStyle} containerStyle={containerStyle} onPress={onPress}/>
    </View>
  )
}

export default Footer