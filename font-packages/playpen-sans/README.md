# @expo-google-fonts/playpen-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playpen-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playpen-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playpen-sans)

This package lets you use the [**Playpen Sans**](https://fonts.google.com/specimen/Playpen+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playpen Sans

![Playpen Sans](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaypenSans_100Thin`
- `PlaypenSans_200ExtraLight`
- `PlaypenSans_300Light`
- `PlaypenSans_400Regular`
- `PlaypenSans_500Medium`
- `PlaypenSans_600SemiBold`
- `PlaypenSans_700Bold`
- `PlaypenSans_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/playpen-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlaypenSans_100Thin,
  PlaypenSans_200ExtraLight,
  PlaypenSans_300Light,
  PlaypenSans_400Regular,
  PlaypenSans_500Medium,
  PlaypenSans_600SemiBold,
  PlaypenSans_700Bold,
  PlaypenSans_800ExtraBold,
} from '@expo-google-fonts/playpen-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    PlaypenSans_100Thin,
    PlaypenSans_200ExtraLight,
    PlaypenSans_300Light,
    PlaypenSans_400Regular,
    PlaypenSans_500Medium,
    PlaypenSans_600SemiBold,
    PlaypenSans_700Bold,
    PlaypenSans_800ExtraBold,
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
            fontFamily: 'PlaypenSans_100Thin',
          }}>
          Playpen Sans Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaypenSans_200ExtraLight',
          }}>
          Playpen Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaypenSans_300Light',
          }}>
          Playpen Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaypenSans_400Regular',
          }}>
          Playpen Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaypenSans_500Medium',
          }}>
          Playpen Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaypenSans_600SemiBold',
          }}>
          Playpen Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaypenSans_700Bold',
          }}>
          Playpen Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaypenSans_800ExtraBold',
          }}>
          Playpen Sans Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PlaypenSans_100Thin](./PlaypenSans_100Thin.ttf.png)|![PlaypenSans_200ExtraLight](./PlaypenSans_200ExtraLight.ttf.png)|![PlaypenSans_300Light](./PlaypenSans_300Light.ttf.png)||
|![PlaypenSans_400Regular](./PlaypenSans_400Regular.ttf.png)|![PlaypenSans_500Medium](./PlaypenSans_500Medium.ttf.png)|![PlaypenSans_600SemiBold](./PlaypenSans_600SemiBold.ttf.png)||
|![PlaypenSans_700Bold](./PlaypenSans_700Bold.ttf.png)|![PlaypenSans_800ExtraBold](./PlaypenSans_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/playpen-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playpen Sans page on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playpen Sans on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playpen-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playpen-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
