//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// create a component
const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            onDone={()=>navigation.navigate('NWF',{screen:'HomeScreen'})}
            onSkip={()=>navigation.navigate('NWF',{screen:'HomeScreen'})}
            imageContainerStyles={{
                paddingBottom:0
            }}
            pages={[
                {
                    backgroundColor: '#BADDD5',
                    image: <Image style={{width:250}} resizeMode='contain' source={require('../../assets/onboarding/1.png')} />,
                    title: 'بہتر معاشرے کی طرف پہلا قدم',
                    subtitle: 'آئیں مل کر ایک بہتر معاشرے کی تشکیل میں اپنا کردار ادا کریں۔ نوشہرہ فاونڈیشن پچھلے پانچ سالوں سے علاقے کی بہتری، ترقی اور خوشہالی کے لئے مسلسل کوشاں ہے اور یہ سفر آپ ہی کے تعاون سے جاری رہ سکتا ہے۔',
                },
                {
                    backgroundColor: '#CD4F3F',
                    image: <Image style={{width:250}} resizeMode='contain' source={require('../../assets/onboarding/2.png')} />,
                    title: 'ہماری ٹیم کا حصہ بنیں',
                    subtitle: 'فاونڈیشن کی ممبر شپ حاصل کریں اور اپنی کسی بھی مہارت، فن یا مالی مد میں دوسروں کی مدد کریں۔ اگر آپ مالی طور پر مستحکم ہیں تو اپنی استطاعت کے مطابق ماہانہ بنیادوں پر فاونڈیشن کے ساتھ تعاون کریں۔',
                },
                {
                    backgroundColor: '#00A8A8',
                    image: <Image style={{width:250}} resizeMode='contain' source={require('../../assets/onboarding/3.png')} />,
                    title: 'Onboarding 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }
            ]}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default OnboardingScreen;
