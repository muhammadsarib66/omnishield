import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseDealership from '../screens/ChooseDealership'
import ScanDocument from '../screens/ScanDocument'
import ChooseCoverage from '../screens/ChooseCoverage'
import Confrim from '../screens/Confirm'
import ContractAdded from '../screens/ContractAdded'
import CameraComponent from '../components/CameraComponent';
import Login from '../screens/Login';
import Signup from '../screens/Signup';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='ChooseDealership' component={ChooseDealership}/>
        <Stack.Screen name='ScanDocument' component={ScanDocument}/>
        <Stack.Screen name='ChooseCoverage' component={ChooseCoverage}/>
        <Stack.Screen name='Confirm' component={Confrim}/>
        <Stack.Screen name='ContractAdded' component={ContractAdded}/>
        <Stack.Screen name='CameraComponent' component={CameraComponent} />
    </Stack.Navigator>
  )
}

export default AppNavigator