import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../navigators/stacks/HomeStack'
import MembersListStack from '../navigators/stacks/MembersListStack'
import TransportersListStack from '../navigators/stacks/TransportersListStack'
import ProjectsListStack from '../navigators/stacks/ProjectsListStack'
import { Image } from 'react-native';
import ImagePathStrings from '../constants/ImagePathStrings';

const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
      <Tab.Navigator screenOptions={{ 
        headerShown: false, 
        tabBarStyle: { 
          backgroundColor: '#039447',
          }, 
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#222'
        }} >
        <Tab.Screen name='Home' component={HomeStack} 
        options={{
          tabBarIcon:({focused})=>{
            return (
              <Image style={{
                tintColor: focused?'#fff':'#222'
              }} source={ImagePathStrings.ICON_HOME_TAB}/>
            )
          }
        }}
        />
        <Tab.Screen name='Members' component={MembersListStack} 
        options={{
          tabBarIcon:({focused})=>{
            return (
              <Image style={{
                tintColor: focused?'#fff':'#222'
              }}  source={ImagePathStrings.ICON_MEMBERS_TAB}/>
            )
          }
        }}/>
        <Tab.Screen name='Transport' component={TransportersListStack} 
        options={{
          tabBarIcon:({focused})=>{
            return (
              <Image style={{
                tintColor: focused?'#fff':'#222'
              }}  source={ImagePathStrings.ICON_TRANSPORT_TAB}/>
            )
          }
        }}/>
        {/* <Tab.Screen name='Projects' component={ProjectsListStack} 
        options={{
          tabBarIcon:({focused})=>{
            return (
              <Image style={{
                tintColor: focused?'#fff':'#222'
              }}  source={ImagePathStrings.ICON_PROJECTS_TAB}/>
            )
          }
        }}/> */}
      </Tab.Navigator>
    )
  }

  export default TabRoutes;