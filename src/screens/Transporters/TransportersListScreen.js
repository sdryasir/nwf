import { StyleSheet, Text, View, Dimensions } from 'react-native';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const transporters = [
  {
    id:1,
    carTitle:'Toyota Hiace',
    carDescription:'',
    carModal:'2008',
    carColor:'White',
    carType:'public',
    carDriver:'Mr. Ali',
    carDriverContact:'03325039857',
    carConductor:'Mr. Ahmad',
    carConductorContact:'03325039857',
    carDepartureFrom:'Tajwal',
    carDepartureFrom:'Rwalpindi',
    carSchedule:{
      fromRwp:'7:00 AM Daily',
      backToRwp:'1:00 PM Daily'
    },
    fare:450,
    carImage:''
  },
  {
    id:2,
    carTitle:'Toyota Hiace',
    carDescription:'',
    carModal:'20010',
    carColor:'White',
    carType:'public',
    carDriver:'Mr. Ali',
    carDriverContact:'03325039857',
    carConductor:'Mr. Hassan',
    carConductorContact:'03325039857',
    carDepartureFrom:'Maira',
    carDepartureFrom:'Rwalpindi',
    carSchedule:{
      fromRwp:'7:00 AM Daily',
      backToRwp:'1:00 PM Daily'
    },
    fare:450,
    carImage:''
  },
  {
    id:3,
    carTitle:'Toyota Hiace',
    carDescription:'',
    carModal:'20010',
    carColor:'White',
    carType:'public',
    carDriver:'Mr. Ali',
    carDriverContact:'03325039857',
    carConductor:'Mr. Hassan',
    carConductorContact:'03325039857',
    carDepartureFrom:'Maira',
    carDepartureFrom:'Rwalpindi',
    carSchedule:{
      fromRwp:'7:00 AM Daily',
      backToRwp:'1:00 PM Daily'
    },
    fare:450,
    carImage:''
  },
  {
    id:4,
    carTitle:'Toyota Hiace',
    carDescription:'',
    carModal:'20010',
    carColor:'White',
    carType:'public',
    carDriver:'Mr. Ali',
    carDriverContact:'03325039857',
    carConductor:'Mr. Hassan',
    carConductorContact:'03325039857',
    carDepartureFrom:'Maira',
    carDepartureFrom:'Rwalpindi',
    carSchedule:{
      fromRwp:'7:00 AM Daily',
      backToRwp:'1:00 PM Daily'
    },
    fare:450,
    carImage:''
  }
]

function TransportersListScreen() {
    return (
      <View style={styles.transporterScreenWrapper}>
        <View style={styles.transporterScreenHead}>

        </View>
        <View style={styles.transporterScreenBody}>
          <View style={styles.transportCard}>

          </View>
        </View>
      </View>
    );
  }

export default TransportersListScreen;

const styles = StyleSheet.create({
  transporterScreenWrapper:{
  },
  transporterScreenHead:{
    height:height/5,
    backgroundColor:'#ddd'
  },
  transporterScreenBody:{

  },
  transportCard:{

  }
})