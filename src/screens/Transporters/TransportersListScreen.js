import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native';
import TransportCard from '../../components/TransportCard';


import img1 from '../../assets/transporters/1.png'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const transporters = [
  {
    id: 1,
    carTitle: 'Toyota Hiace',
    carDescription: '',
    carModal: '2008',
    carNumber: 'TRQ-234',
    carColor: 'White',
    carType: 'public',
    carDriver: 'Mr. Ali',
    carDriverContact: '03325039857',
    carConductor: 'Mr. Ahmad',
    carConductorContact: '03325039857',
    carDepartureFrom: 'Tajwal',
    carReturnFrom: 'Rwalpindi',
    carSchedule: {
      fromRwp: '7:00 AM Daily',
      backToRwp: '1:00 PM Daily'
    },
    fare: 450,
    carImage: require('../../assets/transporters/1.png')
  },
  {
    id: 2,
    carTitle: 'Toyota Hiace',
    carDescription: '',
    carModal: '2010',
    carNumber:'GRP-234',
    carColor: 'White',
    carType: 'public',
    carDriver: 'Mr. Ali',
    carDriverContact: '03325039857',
    carConductor: 'Mr. Hassan',
    carConductorContact: '03325039857',
    carDepartureFrom: 'Maira',
    carReturnFrom: 'Rwalpindi',
    carSchedule: {
      fromRwp: '7:00 AM Daily',
      backToRwp: '1:00 PM Daily'
    },
    fare: 450,
    carImage: require('../../assets/transporters/2.png')
  },
  {
    id: 3,
    carTitle: 'Toyota Hiace',
    carDescription: '',
    carModal: '2010',
    carNumber:'HTS-294',
    carColor: 'White',
    carType: 'public',
    carDriver: 'Mr. Ali',
    carDriverContact: '03325039857',
    carConductor: 'Mr. Hassan',
    carConductorContact: '03325039857',
    carDepartureFrom: 'Maira',
    carReturnFrom: 'Rwalpindi',
    carSchedule: {
      fromRwp: '7:00 AM Daily',
      backToRwp: '1:00 PM Daily'
    },
    fare: 450,
    carImage: require('../../assets/transporters/3.png')
  },
  {
    id: 4,
    carTitle: 'Toyota Hiace',
    carDescription: '',
    carModal: '2010',
    carNumber:'RQP-239',
    carColor: 'White',
    carType: 'public',
    carDriver: 'Mr. Ali',
    carDriverContact: '03325039857',
    carConductor: 'Mr. Hassan',
    carConductorContact: '03325039857',
    carDepartureFrom: 'Maira',
    carReturnFrom: 'Rwalpindi',
    carSchedule: {
      fromRwp: '7:00 AM Daily',
      backToRwp: '1:00 PM Daily'
    },
    fare: 450,
    carImage: require('../../assets/transporters/1.png')
  }
]

function TransportersListScreen() {

  const renderItem = ({ item }) => {
    return (
      <TransportCard item={item} />
    );
  };

  return (
    <View style={styles.transporterScreenWrapper}>
      <View style={styles.transporterScreenHead}>
        <Image resizeMode='cover' style={{width:'100%', height:200}} source={require('../../assets/transporters/mt.jpg')}/>
      </View>
      <View style={styles.transporterScreenBody}>
        <Text style={{fontSize:20, fontWeight:'bold', marginVertical:12, paddingHorizontal:12}}>Transporters</Text>
      <FlatList
              data={transporters}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: 200}}
              />
      </View>
    </View>
  );
}

export default TransportersListScreen;

const styles = StyleSheet.create({
  transporterScreenWrapper: {
    flex: 1
  },
  transporterScreenHead: {
    backgroundColor: '#ddd'
  },
  transporterScreenBody: {

  }
})