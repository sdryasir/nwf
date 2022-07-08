
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {en, ur} from '../../localizations/Localizations'
import {useState} from 'react';

function ProjectsListScreen() {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = {en, ur}
  i18n.locale = locale;

    return (
      <View style={{ padding:32 }}>
        {locale !== 'en' ? <Button title='change to english' onPress={()=>setLocale('en')}/> : undefined}
        {locale !== 'ur' ? <Button title='change to Urdu' onPress={()=>setLocale('ur')}/> : undefined}
        <Text style={{fontSize:16, fontWeight:'bold'}}>{i18n.t('title')}</Text>
        <Text>{i18n.t('introduction')}</Text>
      </View>
    );
  }

  export default ProjectsListScreen;