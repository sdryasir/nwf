import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ProjectsListScreen from '../../screens/Projects/ProjectsListScreen'

function ProjectsListStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProjectsList" component={ProjectsListScreen} />
      </Stack.Navigator>
    )
  }

  export default ProjectsListStack;