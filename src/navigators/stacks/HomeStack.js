import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../../screens/Home/HomeScreen'
import AboutScreen from '../../screens/About/AboutScreen'
import MemberApplicationScreen from '../../screens/ApplyMembership/MemberApplicationScreen';
import DonationsScreen from '../../screens/AboutDonations/DonationsScreen';
import NotificationsScreen from '../../screens/Notifications/NotificationsScreen';

function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="MemberApplication" component={MemberApplicationScreen} />
        <Stack.Screen name="AboutDonations" component={DonationsScreen} />
        <Stack.Screen name="Notification" component={NotificationsScreen} />
      </Stack.Navigator>
    )
  }

export default HomeStack;