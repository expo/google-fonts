# @expo-google-fonts/im-fell-english

This package lets you use the [**IM Fell English**](https://fonts.google.com/specimen/IM+Fell+English) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## IM Fell English

![IM Fell English](./font-family.png)

This font family contains [2 styles](#gallery).

- `IMFellEnglish_Regular400`
- `IMFellEnglish_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/im-fell-english expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IMFellEnglish_Regular400,
  IMFellEnglish_Regular400_Italic,
} from '@expo-google-fonts/im-fell-english';

export default () => {
  let [fontsLoaded] = useFonts({
    IMFellEnglish_Regular400,
    IMFellEnglish_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IMFellEnglish_Regular400' }}>
          IMFellEnglish_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IMFellEnglish_Regular400_Italic' }}>
          IMFellEnglish_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### IMFellEnglish_Regular400
![IMFellEnglish_Regular400](./1f559be93fb1947f0551b021260410225bbafe0586dd5236d734d852bf0769f1.ttf.png)

##### IMFellEnglish_Regular400_Italic
![IMFellEnglish_Regular400_Italic](./67701b098b491cf87633fd626de486662128571e48aee106245d472750bcd7c4.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [IM Fell English on Google Fonts](https://fonts.google.com/specimen/IM+Fell+English)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/im-fell-english)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/im-fell-english)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
