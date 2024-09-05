import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRef } from 'react';

export default function CameraComponent({navigation}) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [torch, setTorch] = useState(false);

  const capture = useRef().current;

  const takePicture = async () => {
    const options = {quality: 1, base64: true, skipProcessing: false};
    try{
      const picture = await capture.takePictureAsync(options);
      if(picture.source){
        console.log(picture.source)
      }

    }catch(error){
      console.log(error);
    }
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>WhatsApp Needs Permission To Access Camera</Text>
       
       <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={requestPermission} style={{backgroundColor: 'teal', paddingHorizontal: 50,
         paddingVertical: 10, borderRadius: 20, marginVertical: 20, alignItems: 'center', justifyContent: 'center',
          marginHorizontal: 25}}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: '500' }}>Allow</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation?.goBack()} style={{backgroundColor: 'teal', paddingHorizontal: 40,
         paddingVertical: 10, borderRadius: 20, marginVertical: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10}}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: '500' }}>Don't Allow</Text>
        </TouchableOpacity>
        </View>
      
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleTorch() {
    setTorch(current => (current === false ? true : false));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} animateShutter={true} autofocus='FocusMode' 
      enableTorch={torch}>

      <View style={{width: '100%', backgroundColor: 'black', padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <TouchableOpacity style={{width: '10%', alignItems: 'center'}}>
          <Ionicons name="arrow-back" size={30} color="white" onPress={() => navigation?.goBack()} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleTorch} style={{marginRight: 10}}>
          <Entypo name="flash" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
          <MaterialIcons name="photo" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation?.navigate('ChooseCoverage')}>
          <FontAwesome name="circle" size={90} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleCameraFacing}>
          <Ionicons name="camera-reverse" size={40} color="white"/>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    bottom: 0,
    padding: 20,
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});