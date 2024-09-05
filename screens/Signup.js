import { View, Text, Image, StatusBar, TouchableOpacity,KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import InputFeilds from '../components/InputFeilds'

const Signup = ({navigation}) => {
  
  return (
    <>
    <StatusBar/>

        <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={100}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

    <View style={{justifyContent: 'center', alignItems: 'center', gap:70,paddingTop:40}}>


      <View>
        <Image source={require('../assets/images/omnilogo.png')} style={{width: 353, height: 250}} resizeMode='contain'/>
      </View>

      <View style={{gap:15, width: 358,}}>
      
        <View style={{flexDirection:'row',gap:10}}>
          <InputFeilds placeholder={'First Name'}/>
          <InputFeilds placeholder={'Last Name'}/>
        </View>

        <InputFeilds placeholder={'Enter your email'} icon1={'email'} keyboardType={'email'} size={20}/>
        <InputFeilds placeholder={'Enter your password'} icon1={'lock'} keyboardType={'password'} size={20}
        icon2={'eye'} icon3={'eye-with-line'} secureText={true}
        />
        <InputFeilds placeholder={'Confirm password'} icon1={'lock'} keyboardType={'password'} size={20}
        icon2={'eye'} icon3={'eye-with-line'} secureText={true}
        />

      <CustomButton text={'Sign Up'} textStyle={{color:'#FFFFFF', fontSize: 19, lineHeight: 19.92, fontWeight: '600',}}
      containerStyle={{paddingHorizontal:20, paddingVertical:10, borderRadius:10, 
        backgroundColor: '#EF4545', width: 358, justifyContent: 'center', alignItems: 'center', height:50,}}
        onPress={()=>navigation?.navigate('Login')}
      />
      </View>

      <View style={{flexDirection:'row',gap:2}}>

        <Text>Already have a account </Text>

        <TouchableOpacity onPress={()=>navigation?.navigate('Login')}>
          <Text style={{color:'#EF4545', fontWeight: '500'}}>Log In</Text>
        </TouchableOpacity>
      </View>

    </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default Signup