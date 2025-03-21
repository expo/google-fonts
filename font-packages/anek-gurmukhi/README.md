# @expo-google-fonts/anek-gurmukhi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-gurmukhi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-gurmukhi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-gurmukhi)

This package lets you use the [**Anek Gurmukhi**](https://fonts.google.com/specimen/Anek+Gurmukhi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Gurmukhi

![Anek Gurmukhi](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekGurmukhi_100Thin`
- `AnekGurmukhi_200ExtraLight`
- `AnekGurmukhi_300Light`
- `AnekGurmukhi_400Regular`
- `AnekGurmukhi_500Medium`
- `AnekGurmukhi_600SemiBold`
- `AnekGurmukhi_700Bold`
- `AnekGurmukhi_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/anek-gurmukhi expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AnekGurmukhi_100Thin,
  AnekGurmukhi_200ExtraLight,
  AnekGurmukhi_300Light,
  AnekGurmukhi_400Regular,
  AnekGurmukhi_500Medium,
  AnekGurmukhi_600SemiBold,
  AnekGurmukhi_700Bold,
  AnekGurmukhi_800ExtraBold,
} from '@expo-google-fonts/anek-gurmukhi';

export default () => {
  let [fontsLoaded] = useFonts({
    AnekGurmukhi_100Thin,
    AnekGurmukhi_200ExtraLight,
    AnekGurmukhi_300Light,
    AnekGurmukhi_400Regular,
    AnekGurmukhi_500Medium,
    AnekGurmukhi_600SemiBold,
    AnekGurmukhi_700Bold,
    AnekGurmukhi_800ExtraBold,
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
            fontFamily: 'AnekGurmukhi_100Thin',
          }}>
          Anek Gurmukhi Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGurmukhi_200ExtraLight',
          }}>
          Anek Gurmukhi Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGurmukhi_300Light',
          }}>
          Anek Gurmukhi Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGurmukhi_400Regular',
          }}>
          Anek Gurmukhi Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGurmukhi_500Medium',
          }}>
          Anek Gurmukhi Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGurmukhi_600SemiBold',
          }}>
          Anek Gurmukhi Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGurmukhi_700Bold',
          }}>
          Anek Gurmukhi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGurmukhi_800ExtraBold',
          }}>
          Anek Gurmukhi Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![AnekGurmukhi_100Thin](./AnekGurmukhi_100Thin.ttf.png)|![AnekGurmukhi_200ExtraLight](./AnekGurmukhi_200ExtraLight.ttf.png)|![AnekGurmukhi_300Light](./AnekGurmukhi_300Light.ttf.png)||
|![AnekGurmukhi_400Regular](./AnekGurmukhi_400Regular.ttf.png)|![AnekGurmukhi_500Medium](./AnekGurmukhi_500Medium.ttf.png)|![AnekGurmukhi_600SemiBold](./AnekGurmukhi_600SemiBold.ttf.png)||
|![AnekGurmukhi_700Bold](./AnekGurmukhi_700Bold.ttf.png)|![AnekGurmukhi_800ExtraBold](./AnekGurmukhi_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/anek-gurmukhi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Gurmukhi page on Google Fonts](https://fonts.google.com/specimen/Anek+Gurmukhi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Gurmukhi on Google Fonts](https://fonts.google.com/specimen/Anek+Gurmukhi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-gurmukhi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-gurmukhi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
