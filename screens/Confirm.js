import { View, Text,ScrollView,StatusBar } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Confirm = ({navigation}) => {
  return (
    <>
    <StatusBar/>
    <Header onPress={()=> navigation?.goBack()}/>

    <ScrollView>

    <View style={{alignItems: 'center',paddingVertical:30, gap:30}}>

    <View style={{width:266, backgroundColor:'#EF4545', paddingHorizontal: 20,
    paddingVertical:15, borderRadius:10,gap:5, alignItems: 'center',height:107}}>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Steven Segal</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>7400 NW 10th ave</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Fort Lauderdale, FL 33023</Text>
    </View>

    <View style={{width:266, backgroundColor:'#EF4545', paddingHorizontal: 20,
    paddingVertical:15, borderRadius:10,gap:5, alignItems: 'center',height:123}}>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>2024 Chevrolet</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Corvette</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>3G2AXWEG2RS251026</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Current odometer : 10</Text>
    </View>

    <View style={{width:266, backgroundColor:'#EF4545', paddingHorizontal: 20,
    paddingVertical:15, borderRadius:10,gap:5, alignItems: 'center',height:144}}>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Limited Warranty</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>(EC20-2) EnduroCare</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>20/200 Powertrain</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Warranty N</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Term</Text>
    </View>

    <View style={{width:266, backgroundColor:'#EF4545', paddingHorizontal: 20,
    paddingVertical:15, borderRadius:10, alignItems: 'center',height:61}}>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Serpent of smallville</Text>
    </View>

      </View>
    </ScrollView>

    <Footer text={'Select'} containerStyle={{backgroundColor: '#EF4545', width:336, height:50, borderRadius:10,
     paddingVertical:10,paddingHorizontal:20,alignItems:'center'}}
     textStyle={{fontSize:24, fontWeight:'500', color:'#FFFFFF',lineHeight:30}}
     onPress={()=>navigation?.navigate('ContractAdded')}/>
    </>
  )
}

export default Confirm