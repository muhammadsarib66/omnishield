import { View, TouchableOpacity,TextInput,} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const InputFeilds = ({placeholder,keyboardType,icon1,size,icon2,value,onChangeText,icon3}) => {
  const [isVisible , setisVisible] = useState(false)
  const [isPasswordVisible,setIsPasswordVisible] = useState(true)

  return (

    <>

    { icon1 && icon1 === "email" &&
      <View style={{gap:5, width: 358,height:50,flexDirection:'row',borderRadius:10,
      paddingHorizontal:20,paddingVertical:15,alignItems:'center',backgroundColor:'#fff'}}>
      
      <MaterialIcons name={icon1} size={size} color="#747474" style={{marginRight:2}} />
      <TextInput placeholder={placeholder} keyboardType={keyboardType} style={{width:'82%'}} 
       onChange={onChangeText} autoCapitalize='none' value={value}/>
    </View>
    }

    { icon2 && icon3  &&
      <View style={{gap:12, width: 358,height:50,flexDirection:'row',borderRadius:10,
      paddingHorizontal:20,paddingVertical:15,alignItems:'center',backgroundColor:'#fff'}}>
      <FontAwesome name={icon1} size={size} color="#747474" />
      <TextInput placeholder={placeholder} keyboardType={keyboardType} style={{width:'82%'}} 
      secureTextEntry={isPasswordVisible ? true:false } onChange={onChangeText} autoCapitalize='none' value={value}/>
        <TouchableOpacity onPress={()=>{setisVisible(!isVisible)
         setIsPasswordVisible(!isPasswordVisible)
        }}>
        <Entypo name={!isVisible ? icon2 : icon3} size={size} color="#747474"/>
        </TouchableOpacity>
    </View>
  }

  {
    !icon1 && !icon2 && !icon3 &&
        <View style={{display:'flex',flex:1,flexDirection:'row'}}>
        <TextInput placeholder={placeholder}  style={{paddingVertical:12,
        paddingHorizontal:50,borderRadius:10, backgroundColor: '#fff',flex:1}}/>
        </View>
        }
  

  
</>
  )
}

export default InputFeilds