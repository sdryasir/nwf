
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import db from '../../db/firestore'

function ProjectsListScreen({route}) {

  const { category } = route.params;

  useEffect(()=>{
    //db.collection('projects').where('category', '==', 'education').get();
  },[])

    return (
      <View style={{ padding:32 }}>
        <Text>Projects List - {category}</Text>
      </View>
    );
  }

  export default ProjectsListScreen;