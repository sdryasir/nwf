import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';


function ProjectsListScreen({ route }) {

  const { category } = route.params;

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  let projectsArr = []
  useEffect(() => {
    setLoading(true);
    firestore()
      .collection('projects')
      .where('category', '==', category)
      .get()
      .then(querySnapshot => {
        //console.log(querySnapshot.docs)
        querySnapshot.forEach(documentSnapshot => {
          let data = {
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            budget: documentSnapshot.data().budget,
            expense: documentSnapshot.data().expense,
            manager: documentSnapshot.data().manager,
          }
          projectsArr.push(data)
        });
        setLoading(false);
        setProjects(projectsArr);
      });
  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text style={{fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>Budget: Rs. {item.budget}</Text>
        <Text>Expense: Rs. {item.expense}</Text>
      </TouchableOpacity>
    );
  };

  
  return (
    <View style={{ padding: 32 }}>
      {
        loading ? <ActivityIndicator/>:<FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      }
      
    </View>
  );
}

export default ProjectsListScreen;