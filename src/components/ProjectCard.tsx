import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageProps,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
interface IProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  leads?: string[];
  fundsRequired?: number;
  fundsCollected?: number;
  startDate?: string;
  endDate?: string;
  locations?: string[];
  remarks?: string;
}
const CARD_WIDTH = Dimensions.get('window').width * 0.40;

const ProjectCard = ({title, description, image}: IProjectCardProps) => {
  console.log("image test", image);

  return (
    <Card style={{width: wp('50%')}}>
      <Card.Cover style={{height:wp('33%')}} source={image as ImageSourcePropType} />
      <Card.Title titleStyle={{fontSize:hp('2%')}} title={title} />
    </Card>
  );
};

const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_4,
  },
  
});
export default ProjectCard;
