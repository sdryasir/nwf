import { StyleSheet, Text, View, Dimensions, ScrollView, Button, FlatList } from 'react-native';
import Card from '../../components/Card';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const projects = [
  {
    id:1,
    title:'1st Winter Camp',
    description:'Nowshera Welfare Foundation organized forst ever winter camp for the students upto middle class to provide quality education to the students.',
    startdate:'20-10-2018',
    endDate:'20-1-2019',
    location:[
      'Lower Ziarat',
      'Batangi Wala',
      'Tandi',
      'Maira'
    ],
    budget:50000,
    expense:61000,
    manager:'Mr. Zeeshan',
    category:'education'
  },
  {
    id:1,
    title:'1st Medical Camp',
    description:'Nowshera Welfare Foundation organized forst ever winter camp for the students upto middle class to provide quality education to the students.',
    startdate:'20-10-2018',
    endDate:'20-1-2019',
    location:[
      'Lower Ziarat',
      'Batangi Wala',
      'Tandi',
      'Maira'
    ],
    budget:50000,
    expense:61000,
    manager:'Mr. Zeeshan',
    category:'medical'
  }
]

const categories = [
  {
    id:1,
    title:'Education',
    description:'',
    imageUrl:'https://www.unicef.org/pakistan/sites/unicef.org.pakistan/files/styles/hero_mobile/public/AZ_Edu_Buner_069.jpg'
  },
  {
    id:2,
    title:'Medical',
    description:'',
    imageUrl:'https://mphss.edu.pk/wp-content/uploads/2020/04/medical-2.jpg'
  },
  {
    id:3,
    title:'Vocational Trainings',
    description:'',
    imageUrl:'https://i.tribune.com.pk/media/images/2074372-image-1570475609/2074372-image-1570475609.jpg'
  },
  {
    id:4,
    title:'IT & Freelancing',
    description:'',
    imageUrl:'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/10/information-technology-logo.jpg'
  },
  {
    id:5,
    title:'Disbursments',
    description:'',
    imageUrl:'https://thumbs.dreamstime.com/b/helping-needy-elderly-hands-held-young-person-concept-61448341.jpg'
  },
  {
    id:6,
    title:'Rozgaar Schemes',
    description:'',
    imageUrl:'https://assets-news.housing.com/news/wp-content/uploads/2022/05/11100246/Tnvelaivaaippu-TN-Employment-Exchange-online-registration-login-and-renewal.jpg'
  },
]



function HomeScreen() {

  const renderItem = ({ item }) => {
    return (
      <Card item={item} />
    );
  };

  return (
    <View style={styles.container}>
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
          <Button title="TAP TO DONATE" />
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
              <FlatList
              data={categories}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              />
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
    backgroundColor: '#086942',
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
