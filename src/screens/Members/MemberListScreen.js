import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../../components/AppHeader';

function MembersListScreen({navigation}) {
    return (
      <View>
        <AppHeader navigation={navigation} text="Members"/>
        <Text>MembersListScreen</Text>
      </View>
    );
  }

export default MembersListScreen;