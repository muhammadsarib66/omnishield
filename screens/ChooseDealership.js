import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../components/Header'
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';

const ChooseDealership = ({navigation}) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Serp of Smallville', value: 'smallville' },
    { label: 'Serp of Eastlake', value: 'eastlake' },
    { label: 'Serp of Bigville', value: 'bigville' },
    { label: 'Serp of Orville', value: 'orville' },
  ]);

  return (
    <>
    <StatusBar/>
    <Header onPress={()=>navigation?.goBack()}/>
    
<View style={{alignItems: 'center',paddingVertical:100,}}>

    <View style={{width: 308, height: 289}}>

      <Text style={{color: '#EF4545', fontSize: 16, fontWeight: '500', lineHeight: 19.5,left:16, paddingBottom:5}}>
      Select Dealership</Text>

      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Dealerships"
        placeholderStyle={{width:184, height:20, color:'#EC9191'}}
        style={{width:280, height:60, borderRadius:8,left:14, borderWidth:0}}
        dropDownContainerStyle={{borderRadius:10,marginTop:10,width:280,left:14, borderWidth:0,}}
        arrowIconStyle={{color: '#000000'}}
        textStyle={{color:'#F47575', fontSize: 16, fontWeight: '400', lineHeight: 19.5}}
      />
    </View>
    </View>

    <Footer text={'Select'}containerStyle={{backgroundColor: '#EF4545', width:336, height:50, borderRadius:10,
     paddingVertical:10,paddingHorizontal:20,alignItems:'center'}}
     textStyle={{fontSize:24, fontWeight:'500', color:'#FFFFFF',lineHeight:30}}
     onPress={()=>navigation?.navigate('ScanDocument')}/>
    </>
  )
}

export default ChooseDealership