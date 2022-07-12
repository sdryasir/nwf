import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


function AppStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    )
  }

export default AppStack;