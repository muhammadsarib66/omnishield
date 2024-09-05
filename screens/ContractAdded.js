import { View, Text,StatusBar} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContractAdded = ({navigation}) => {

  return (
    <>
    <StatusBar/>
    <Header onPress={()=> navigation?.goBack()}/>

    <View style={{alignItems: 'center',paddingVertical:50}}>

    <View style={{width:266, backgroundColor:'#EF4545', paddingHorizontal: 20,
    paddingVertical:15, borderRadius:10,gap:8, alignItems: 'center',height:154, justifyContent: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: '800', lineHeight:24.38, color: '#FFFFFF',width:222,
      height:48, textAlign:'center',}}>
      Contract has been entered successfully 
      </Text>
    
    </View>

    </View>

    <Footer text={'Scan Next'} containerStyle={{backgroundColor: '#EF4545', width:336, height:50, borderRadius:10,
     paddingVertical:10,paddingHorizontal:20,alignItems:'center'}}
     textStyle={{fontSize:24, fontWeight:'500', color:'#FFFFFF',lineHeight:30,}}
     onPress={()=> navigation?.navigate('ChooseDealership')}
     />
    </>
  )
}

export default ContractAdded
