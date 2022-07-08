import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import TransportersListScreen from '../../screens/Transporters/TransportersListScreen'

function TransportersListStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TransportersList" component={TransportersListScreen} />
      </Stack.Navigator>
    )
  }

  export default TransportersListStack;