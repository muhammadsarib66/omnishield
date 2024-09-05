import { View, Text,StatusBar} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ChooseCoverage = ({navigation}) => {
  return (
    <>
    <StatusBar/>
    <Header onPress={()=> navigation?.goBack()}/>

    <View style={{alignItems: 'center',paddingVertical:50}}>

    <View style={{width:266, backgroundColor:'#EF4545', paddingHorizontal: 20,
    paddingVertical:15, borderRadius:10,gap:8, alignItems: 'center'}}>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Limited Warranty</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>(EC20-2) EnduroCare</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>20/200 Powertrain</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Warranty: N</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Term</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Class: N</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Vehicle: N</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>Select if a Service Contract</Text>
      <Text style={{fontSize: 17, fontWeight: '600', lineHeight:20.72, color: '#FFFFFF'}}>was NOT purchased.</Text>
    
    </View>

    </View>

    <Footer text={'Select'} containerStyle={{backgroundColor: '#EF4545', width:336, height:50, borderRadius:10,
     paddingVertical:10,paddingHorizontal:20,alignItems:'center'}}
     textStyle={{fontSize:24, fontWeight:'500', color:'#FFFFFF',lineHeight:30}}
     onPress={()=>navigation?.navigate('Confirm')}/>
    </>
  )
}

export default ChooseCoverage