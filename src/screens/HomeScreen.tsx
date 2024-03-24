import {FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageProps} from 'react-native';
import React from 'react';
import { useAppSelector} from '../redux/hooks/hooks';
import {Appbar, Button, Headline, Surface} from 'react-native-paper';
import ProjectCard from '../components/ProjectCard';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

export default function HomeScreen() {
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  const projects = useAppSelector(state=>state.projects)
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <View style={styles.homeTopStats}>
        <View style={{flex:1}}>
          <Headline style={{fontSize:18}}>Nowshehra Welfare Foundation</Headline>
          <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
        </View>
        <View>
          <Button mode="contained" textColor={COLORS.primaryGreenHex} style={{marginBottom:5, backgroundColor:COLORS.primaryOrangeHex}}>Signin</Button>
          <Button mode="contained" textColor={COLORS.primaryGreenHex} style={{backgroundColor:COLORS.primaryOrangeHex}}>Donate</Button>
        </View>
      </View>
      <View style={styles.surfaceWrapper}>
        <Surface style={styles.surface}>
          <Text>Members</Text>
        </Surface>
        <Surface style={styles.surface}>
          <Text>Our Heros</Text>
        </Surface>
        <Surface style={styles.surface}>
          <Text>Suggestions</Text>
        </Surface>
      </View>
      <View>
        <Headline style={styles.headline}>Our Projects</Headline>
      </View>
      <FlatList
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Project Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={projects}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => { console.log('Hello', item.images);
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
    </View>
  );
}

const styles = StyleSheet.create({
  homeTopStats:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:COLORS.primaryGreenHex,
    padding:SPACING.space_15,
    margin:SPACING.space_12,
    borderRadius:BORDERRADIUS.radius_8
  },
  surfaceWrapper:{
    display:'flex',
    flexDirection:'row',
    margin:SPACING.space_10
  },
  surface:{
    margin:SPACING.space_8,
    padding:SPACING.space_20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 9,
    flex:1
  },
  headline:{
    paddingLeft: SPACING.space_15,
    paddingTop:SPACING.space_4
  },

  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreenHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
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
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreenHex,
  },
});
