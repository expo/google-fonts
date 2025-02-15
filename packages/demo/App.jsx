import React, { useState, useRef } from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  BalsamiqSans_400Regular,
  DMMono_400Regular,
  OpenSans_400Regular,
  Jost_400Regular,
  Lato_400Regular,
  Montserrat_400Regular,
  Pangolin_400Regular,
  PTSans_400Regular,
  SourceSans3_400Regular,
  RobotoCondensed_400Regular,
  Oswald_400Regular,
  Baloo2_400Regular,
  Raleway_400Regular,
  Poppins_400Regular,
  RobotoSlab_400Regular,
  MerriweatherSans_400Regular,
  Ubuntu_400Regular,
  PlayfairDisplay_400Regular,
  Mukta_400Regular,
  OpenSans_300Light,
  Mulish_300Light_Italic,
  PTSerif_400Regular,
  Lora_400Regular,
  Nunito_400Regular,
  FiraSans_400Regular,
  Rubik_400Regular,
  TitilliumWeb_400Regular,
  WorkSans_400Regular,
  NotoSerif_400Regular,
  Quicksand_400Regular,
  NanumGothic_400Regular,
  NunitoSans_400Regular,
  HindSiliguri_400Regular,
  Heebo_400Regular,
  PTSansNarrow_400Regular,
  Arimo_400Regular,
  Roboto_700Bold,
  OpenSans_400Regular_Italic,
  Lato_700Bold,
  Montserrat_700Bold_Italic,
  SourceSans3_700Bold,
  RobotoCondensed_400Regular_Italic,
  Oswald_700Bold,
  Raleway_400Regular_Italic,
  Inter_400Regular,
  Inter_700Bold,
  Poppins_600SemiBold_Italic,
  font42dotSans_400Regular,
} from '@expo-google-fonts/dev';
import * as GoogleFonts from '@expo-google-fonts/dev';
// import { useWindowDimensions } from 'react-native-use-dimensions';

let SegmentHeight = 55;
let SegmentSize = 7;

let FontVariants = {
  Roboto_400Regular,
  BalsamiqSans_400Regular,
  DMMono_400Regular,
  OpenSans_400Regular,
  Jost_400Regular,
  Lato_400Regular,
  Montserrat_400Regular,
  Pangolin_400Regular,
  PTSans_400Regular,
  SourceSans3_400Regular,
  RobotoCondensed_400Regular,
  Oswald_400Regular,
  Baloo2_400Regular,
  Raleway_400Regular,
  Poppins_400Regular,
  RobotoSlab_400Regular,
  MerriweatherSans_400Regular,
  Ubuntu_400Regular,
  PlayfairDisplay_400Regular,
  Mukta_400Regular,
  font42dotSans_400Regular,
  OpenSans_300Light,
  Mulish_300Light_Italic,
  PTSerif_400Regular,
  Lora_400Regular,
  Nunito_400Regular,
  FiraSans_400Regular,
  Rubik_400Regular,
  TitilliumWeb_400Regular,
  WorkSans_400Regular,
  NotoSerif_400Regular,
  Quicksand_400Regular,
  NanumGothic_400Regular,
  NunitoSans_400Regular,
  HindSiliguri_400Regular,
  Heebo_400Regular,
  PTSansNarrow_400Regular,
  Arimo_400Regular,
  Roboto_700Bold,
  OpenSans_400Regular_Italic,
  Lato_700Bold,
  Montserrat_700Bold_Italic,
  SourceSans3_700Bold,
  RobotoCondensed_400Regular_Italic,
  Oswald_700Bold,
  Raleway_400Regular_Italic,
  Inter_400Regular,
  Inter_700Bold,
  Poppins_600SemiBold_Italic,
};

let Pangrams = [
  `Watch "Jeopardy!", Alex Trebek's fun TV quiz game.`,
  `The quick brown fox jumps over a lazy dog.`,
  '0123456789 abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMOPQRSTUVWXYZ',
];

function getDisplayNameForFontFamily(fontFamily) {
  return fontFamily
    .replace(/_/g, ' ')
    .replace(/[0-9]00/, '')
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z0-9])/g, '$1 $2');
}

function getShortDisplayNameForFontFamily(fontFamily) {
  return getDisplayNameForFontFamily(fontFamily.replace(/_.+$/, ''));
}

function getListOfVariants(n) {
  let x = [];
  for (let i = 0; i < n; i++) {
    x.push(Object.keys(FontVariants)[i]);
  }
  return x;
}

function getSegmentGroups() {
  let sg = [];
  let x = [];
  let vl = Object.keys(FontVariants);
  while (vl.length > 0) {
    x.push(vl.shift());
    if (x.length >= SegmentSize) {
      sg.push(x);
      x = [];
    }
  }
  // Discard leftovers
  return sg;
}

let SegmentGroups = getSegmentGroups();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function App() {
  // let n = Math.ceil(height / SegmentHeight);
  let n = SegmentSize;
  let [s, setS] = useState(0);
  let listOfVariants = SegmentGroups[s];
  // let [listOfVariants, setListOfVariants] = useState([]);
  // useEffect(() => {
  //   setListOfVariants(SegmentGroups[s]);
  // }, []);
  let [fontsLoaded] = useFonts({
    ...FontVariants,
  });
  let anim = useRef(new Animated.Value(0)).current;

  let slideOut = () => {
    Animated.timing(anim, {
      toValue: Math.ceil((SegmentSize * width) / 2),
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  let slideIn = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('tap');
        setS((s + 1) % SegmentGroups.length);
        slideOut();
      }}>
      <View style={styles.container}>
        {listOfVariants.map((variant, i) => (
          <View key={`text-${i}`} style={{ height: Math.floor((height - 30) / SegmentSize) }}>
            <Text key={`text-${variant}`} style={{ fontFamily: variant, fontSize: 24 }}>
              {getShortDisplayNameForFontFamily(variant)}
            </Text>
            <Text style={{ fontFamily: variant, fontSize: 10 }}>
              {getDisplayNameForFontFamily(variant)}
            </Text>
            <Text style={{ fontFamily: variant, fontSize: 10 }}>{Pangrams[0]}</Text>
            <Text style={{ fontFamily: variant, fontSize: 10 }}>{Pangrams[1]}</Text>
            <Text style={{ fontFamily: variant, fontSize: 10 }}>{Pangrams[2]}</Text>
          </View>
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'space-around',
    marginTop: 34,
  },
});
