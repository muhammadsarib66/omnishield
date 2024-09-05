import { View, Text,Image,StatusBar } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ScanDocument = ({navigation}) => {
  return (
    <>
    <StatusBar/>
    <Header onPress={()=>navigation.goBack()}/>

    <View style={{alignItems: 'center', paddingVertical:20, flex:1}}>
      <Image source={require('../assets/images/scanner.png')}
      style={{width:346, height: 193}}
      />
    </View>

    <Footer text={'Scan Document'}containerStyle={{backgroundColor: '#EF4545', width:336, height:50, borderRadius:10,
     paddingVertical:10,paddingHorizontal:20,alignItems:'center'}}
     textStyle={{fontSize:24, fontWeight:'500', color:'#FFFFFF',lineHeight:30}}
     onPress={()=>navigation?.navigate('CameraComponent')}/>
    </>
  )
}

export default ScanDocument