import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MembersListScreen from '../../screens/Members/MemberListScreen'

function MembersListStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MemberList" component={MembersListScreen} />
      </Stack.Navigator>
    )
  }

  export default MembersListStack;