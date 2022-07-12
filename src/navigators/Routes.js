import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from '../navigators/TabRoutes'
import CustomDrawer from '../components/CustomDrawer';
import AppStack from './stacks/AppStack';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';

const Drawer = createDrawerNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown:false}}  drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Drawer.Screen name="NWF" component={TabRoutes} />
          <Drawer.Screen name="AppStack" component={AppStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }

  export default Routes;