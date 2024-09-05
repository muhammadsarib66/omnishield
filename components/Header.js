import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({onPress}) => {
  return (
    <View style={{padding: 20,}}>
    <TouchableOpacity style={{width: 24}} onPress={onPress}>
      <Ionicons name="chevron-back-sharp" size={24} color="black" />
    </TouchableOpacity>
    </View>
  )
}

export default Header