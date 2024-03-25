import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageProps,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useAppSelector} from '../redux/hooks/hooks';
import {Appbar, Button, Headline, Surface} from 'react-native-paper';
import ProjectCard from '../components/ProjectCard';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomeScreen() {
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  const projects = useAppSelector(state => state.projects);
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <View style={styles.homeTopStats}>
        <View style={{flex: 1}}>
          <Headline style={{fontSize: 18}}>
            Nowshehra Welfare Foundation
          </Headline>
          <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
        </View>
        <View>
          <Button
            mode="contained"
            textColor={COLORS.primaryGreenHex}
            style={{marginBottom: 5, backgroundColor: COLORS.primaryOrangeHex}}>
            Signin
          </Button>
          <Button
            mode="contained"
            textColor={COLORS.primaryGreenHex}
            style={{backgroundColor: COLORS.primaryOrangeHex}}>
            Donate
          </Button>
        </View>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.surfaceWrapper}>
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Our Members</Text>
          </Surface>
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Our Heros</Text>
          </Surface>
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Suggestions</Text>
          </Surface>
        </View>
        <View>
          <Headline style={styles.headline}>Our Projects</Headline>
        </View>
        <FlatList
          horizontal
          nestedScrollEnabled={true}
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text>No Project Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={projects}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log('Hello', item.images);
                }}>
                <ProjectCard
                  id={item.id}
                  title={item.title}
                  image={item.images[0].url}
                />
              </TouchableOpacity>
            );
          }}
        />
        <View>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quasi quo maiores error voluptate tempore ipsum dolores animi nihil
            facilis suscipit odit, fugiat iure eligendi facere a neque, incidunt
            sapiente!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeTopStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primaryGreenHex,
    padding: SPACING.space_15,
    margin: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_8,
  },
  surfaceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: SPACING.space_10,
  },
  surface: {
    margin: SPACING.space_8,
    paddingVertical: SPACING.space_20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 9,
    flex: 1,
  },
  surfaceText: {
    fontSize: hp('2%'),
  },
  headline: {
    paddingLeft: SPACING.space_15,
    paddingTop: SPACING.space_4,
  },


  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_15,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
 
});
