# @expo-google-fonts/playwrite-gb-j

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-gb-j)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-gb-j)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-gb-j)

This package lets you use the [**Playwrite GB J**](https://fonts.google.com/specimen/Playwrite+GB+J) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite GB J

![Playwrite GB J](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaywriteGBJ_100Thin`
- `PlaywriteGBJ_200ExtraLight`
- `PlaywriteGBJ_300Light`
- `PlaywriteGBJ_400Regular`
- `PlaywriteGBJ_100Thin_Italic`
- `PlaywriteGBJ_200ExtraLight_Italic`
- `PlaywriteGBJ_300Light_Italic`
- `PlaywriteGBJ_400Regular_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/playwrite-gb-j expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlaywriteGBJ_100Thin,
  PlaywriteGBJ_200ExtraLight,
  PlaywriteGBJ_300Light,
  PlaywriteGBJ_400Regular,
  PlaywriteGBJ_100Thin_Italic,
  PlaywriteGBJ_200ExtraLight_Italic,
  PlaywriteGBJ_300Light_Italic,
  PlaywriteGBJ_400Regular_Italic,
} from '@expo-google-fonts/playwrite-gb-j';

export default () => {
  let [fontsLoaded] = useFonts({
    PlaywriteGBJ_100Thin,
    PlaywriteGBJ_200ExtraLight,
    PlaywriteGBJ_300Light,
    PlaywriteGBJ_400Regular,
    PlaywriteGBJ_100Thin_Italic,
    PlaywriteGBJ_200ExtraLight_Italic,
    PlaywriteGBJ_300Light_Italic,
    PlaywriteGBJ_400Regular_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_100Thin',
          }}>
          Playwrite GB J Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_200ExtraLight',
          }}>
          Playwrite GB J Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_300Light',
          }}>
          Playwrite GB J Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_400Regular',
          }}>
          Playwrite GB J Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_100Thin_Italic',
          }}>
          Playwrite GB J Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_200ExtraLight_Italic',
          }}>
          Playwrite GB J Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_300Light_Italic',
          }}>
          Playwrite GB J Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteGBJ_400Regular_Italic',
          }}>
          Playwrite GB J Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteGBJ_100Thin](./PlaywriteGBJ_100Thin.ttf.png)|![PlaywriteGBJ_200ExtraLight](./PlaywriteGBJ_200ExtraLight.ttf.png)|![PlaywriteGBJ_300Light](./PlaywriteGBJ_300Light.ttf.png)||
|![PlaywriteGBJ_400Regular](./PlaywriteGBJ_400Regular.ttf.png)|![PlaywriteGBJ_100Thin_Italic](./PlaywriteGBJ_100Thin_Italic.ttf.png)|![PlaywriteGBJ_200ExtraLight_Italic](./PlaywriteGBJ_200ExtraLight_Italic.ttf.png)||
|![PlaywriteGBJ_300Light_Italic](./PlaywriteGBJ_300Light_Italic.ttf.png)|![PlaywriteGBJ_400Regular_Italic](./PlaywriteGBJ_400Regular_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/playwrite-gb-j` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite GB J page on Google Fonts](https://fonts.google.com/specimen/Playwrite+GB+J) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite GB J on Google Fonts](https://fonts.google.com/specimen/Playwrite+GB+J)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-gb-j)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-gb-j)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
