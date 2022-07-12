import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from '../navigators/TabRoutes'
import CustomDrawer from '../components/CustomDrawer';
import LoginScreen from '../screens/Login/LoginScreen';

const Drawer = createDrawerNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Nowshehra Welfare Foundation" component={TabRoutes} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }

  export default Routes;