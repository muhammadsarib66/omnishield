import { View, Text, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import InputFeilds from '../components/InputFeilds'

const Login = ({navigation}) => {
  
  return (
    <>
    <StatusBar/>

    <View style={{justifyContent: 'center', alignItems: 'center', gap:70,paddingTop:40}}>


      <View>
        <Image source={require('../assets/images/omnilogo.png')} style={{width: 353, height: 303}} resizeMode='contain'/>
      </View>

        <View style={{gap:15}}>
        <InputFeilds placeholder={'Enter your email'} icon1={'email'} keyboardType={'email'} size={20}/>
        <InputFeilds placeholder={'Enter your password'} icon1={'lock'}  keyboardType={'password'} size={20}
        icon2={'eye'} icon3={'eye-with-line'} secureText={true}
        />
        <CustomButton text={'Log In'} textStyle={{color:'#FFFFFF', fontSize: 19, lineHeight: 19.92, fontWeight: '600',}}
      containerStyle={{paddingHorizontal:20, paddingVertical:10, borderRadius:10, 
        backgroundColor: '#EF4545', width: 358, justifyContent: 'center', alignItems: 'center', height:50,}}
        onPress={()=>navigation?.navigate('ChooseDealership')}
      />
        </View>

      

      <View style={{flexDirection:'row',gap:2}}>

        <Text>Don't have a account? </Text>

        <TouchableOpacity onPress={()=>navigation?.navigate('Signup')}>
          <Text style={{color:'#EF4545', fontWeight: '500'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
    </>
  )
}

export default Login