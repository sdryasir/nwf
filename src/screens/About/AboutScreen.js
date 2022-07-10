import { StyleSheet, Text, View, Button } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, ur } from '../../localizations/Localizations'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AboutScreen() {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, ur }
  i18n.locale = locale;

  return (
    <View style={{ padding: 32 }}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{backgroundColor:'grey', padding:6, borderRadius:12, marginRight:6}} onPress={() => setLocale('en')}>
          <Text>Engish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'grey', padding:6, borderRadius:12}} onPress={() => setLocale('ur')} >
            <Text>اردو میں پڑھیں</Text>
        </TouchableOpacity> 
        {/* {locale !== 'en' ? <Button title='change to english' onPress={() => setLocale('en')} /> : undefined}
        {locale !== 'ur' ? <Button title='change to Urdu' onPress={() => setLocale('ur')} /> : undefined} */}
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{i18n.t('title')}</Text>
      <Text>{i18n.t('introduction')}</Text>
    </View>
  );
}

export default AboutScreen;