import React, { useState, useEffect } from 'react';
import { Dimensions, TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import useInterval from '@use-it/interval';
import * as colorConvert from 'color-convert';
import { cityList } from './cities';
import * as GoogleFonts from '@expo-google-fonts/dev';
import * as Font from 'expo-font';

console.log(cityList);
// let cityList = ['Pittsburgh', 'Seattle', 'London', 'New York', 'Philly'];

function randomColor() {
  return (
    '#' +
    colorConvert.hsv.hex(
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    )
  );
}

let backgroundColor = '#ffffff';

function randomFont() {
  let keys = Object.keys(GoogleFonts);
  let i = Math.floor(Math.random() * keys.length);
  let key = keys[i];
  return [key, { [key]: GoogleFonts[key] }];
}

let loadedFonts = {};

async function loadRandomFont() {
  let [key, font] = randomFont();
  if (loadedFonts[key]) {
    return key;
  } else {
    await Font.loadAsync(font);
    return key;
  }
}

async function randomDrawListItem() {
  let word = randomWord();
  let fontFamily = await loadRandomFont();
  let style = randomStyle(fontFamily);
  let rotDeg = Math.floor(Math.random() * 360);
  return {
    word,
    style,
    rotDeg,
  };
}

function randomStyle(fontFamily: string) {
  let { width, height } = Dimensions.get('window');

  return {
    color: randomColor(),
    top: Math.floor(Math.random() * height),
    left: Math.floor(Math.random() * width),
    fontSize: Math.floor(Math.random() * 90 + 5),
    fontFamily,
    position: 'absolute',
  };
}

function randomWord() {
  return cityList[Math.floor(Math.random() * cityList.length)];
}

export default function App() {
  let [drawList, setDrawList] = useState([]);

  return (
    <TouchableWithoutFeedback
      onPress={async (e) => {
        let x = e.nativeEvent.locationX;
        let y = e.nativeEvent.locationY;
        console.log({ x, y });
        let newItem = await randomDrawListItem();
        console.log(newItem);
        setDrawList([...drawList, newItem]);
      }}>
      <View style={[styles.container, { backgroundColor }]}>
        {drawList.map(({ rotDeg, word, style }, i) => {
          return (
            <View
              key={'drawList_' + i}
              style={{
                position: 'absolute',
                overflow: 'visible',
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                transform: [{ rotateX: '' + rotDeg + 'deg' }],
              }}>
              <Text style={style} key={'drawListText_' + i}>
                {word}
              </Text>
            </View>
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let PoundQuotes = [
  `“Man reading should be man intensely alive. The book should be a ball of light in one's hand.”`,
  `“Literature is news that stays news.”`,
  `“There is no reason why the same man should like the same books at eighteen and at forty-eight”`,
  `“The apparition of these faces in the crowd;
  Petals on a wet black bough.”`,
  `“And the days are not full enough
  And the nights are not full enough
  And life slips by like a field mouse
  Not shaking the grass”`,
  `“Properly, we should read for power. Man reading should be man intensely alive. The book should be a ball of light in one's hand.”`,
  `“Speak against unconscious oppression,
  Speak against the tyranny of the unimaginative,
  Speak against bonds.”`,
  `“Real education must ultimately be limited to men who insist on knowing. The rest is mere sheep herding.”`,
  `“No man understands a deep book until he has seen and lived at least part of its contents.”`,
  `“I desired my dust to be mingled with yours
  Forever and forever and forever.”`,
  `“The artist is always beginning. Any work of art which is not a beginning, an invention, a discovery is of little worth.”`,
  `“If a man isn't willing to take some risk for his opinions, either his opinions are no good or he's no good”`,
];
