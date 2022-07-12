import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Button, FlatList,TouchableOpacity,ActivityIndicator } from 'react-native';
import AppHeader from '../../components/AppHeader';
import Card from '../../components/Card';
import firestore from '@react-native-firebase/firestore';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


function HomeScreen({ navigation }) {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  let categoriesArr = [];
  useEffect(() => {
    setLoading(true);
    firestore()
      .collection('project-categories')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let data = {
            id: documentSnapshot.id,
            title:documentSnapshot.data().title,
            description:documentSnapshot.data().description,
            imageUrl:documentSnapshot.data().imageUrl,
          }
          categoriesArr.push(data);
        });
        setLoading(false);
        setCategories(categoriesArr);
      });
  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Home',{
        screen:'Projects',
        params: { category: item.title },
      })}>
        <Card item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} text="Home"/>
      <View style={styles.homeScreenHead}>
        <View style={styles.pictureWrapper}>
          <View style={styles.pictureInner}>

          </View>
          <View>
            <View style={styles.pictureInnerText}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Yasir Ali</Text>
              <Text style={{ fontSize: 12 }}>Your Donations</Text>
              <Text style={{ fontSize: 16 }}>Rs. 10,000/-</Text>
            </View>
          </View>
        </View>
        <View>
          <Button title="TAP TO DONATE" onPress={() => navigation.navigate('AboutDonations')} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.homeScreenBody}>
          <View style={styles.homeProjectsWrapper}>
            <View style={styles.homeProjectsHead}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>PROJECTS</Text>
              <Text>View All</Text>
            </View>
            <View style={styles.homeProjectsBody}>
              {
                loading ? <ActivityIndicator/>:<FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              />
              }
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeScreenHead: {
    height: height / 8,
    backgroundColor: '#039447',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pictureWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pictureInner: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  pictureInnerText: {
    margin: 8
  },
  homeScreenBody: {

  },
  homeProjectsWrapper: {
    backgroundColor: '#fff',
    padding: 8,
    marginTop: 8,
    marginBottom: 8
  },
  homeProjectsHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  homeProjectsBody: {

  },
});
