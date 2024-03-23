import React, {Component} from 'react';
import TabNavigator from './src/navigators/TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Tab"
                component={TabNavigator}
                options={{animation: 'slide_from_bottom'}}></Stack.Screen>
              <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{animation: 'slide_from_bottom'}}></Stack.Screen>
              <Stack.Screen
                name="Payment"
                component={PaymentScreen}
                options={{animation: 'slide_from_bottom'}}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
