# @expo-google-fonts/ibm-plex-sans-arabic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-arabic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-arabic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-arabic)

This package lets you use the [**IBM Plex Sans Arabic**](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans Arabic

![IBM Plex Sans Arabic](./font-family.png)

This font family contains [7 styles](#-gallery).

- `IBMPlexSansArabic_100Thin`
- `IBMPlexSansArabic_200ExtraLight`
- `IBMPlexSansArabic_300Light`
- `IBMPlexSansArabic_400Regular`
- `IBMPlexSansArabic_500Medium`
- `IBMPlexSansArabic_600SemiBold`
- `IBMPlexSansArabic_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/ibm-plex-sans-arabic expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  IBMPlexSansArabic_100Thin,
  IBMPlexSansArabic_200ExtraLight,
  IBMPlexSansArabic_300Light,
  IBMPlexSansArabic_400Regular,
  IBMPlexSansArabic_500Medium,
  IBMPlexSansArabic_600SemiBold,
  IBMPlexSansArabic_700Bold,
} from '@expo-google-fonts/ibm-plex-sans-arabic';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSansArabic_100Thin,
    IBMPlexSansArabic_200ExtraLight,
    IBMPlexSansArabic_300Light,
    IBMPlexSansArabic_400Regular,
    IBMPlexSansArabic_500Medium,
    IBMPlexSansArabic_600SemiBold,
    IBMPlexSansArabic_700Bold,
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
            fontFamily: 'IBMPlexSansArabic_100Thin',
          }}>
          IBM Plex Sans Arabic Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansArabic_200ExtraLight',
          }}>
          IBM Plex Sans Arabic Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansArabic_300Light',
          }}>
          IBM Plex Sans Arabic Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansArabic_400Regular',
          }}>
          IBM Plex Sans Arabic Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansArabic_500Medium',
          }}>
          IBM Plex Sans Arabic Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansArabic_600SemiBold',
          }}>
          IBM Plex Sans Arabic Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansArabic_700Bold',
          }}>
          IBM Plex Sans Arabic Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSansArabic_100Thin](./IBMPlexSansArabic_100Thin.ttf.png)|![IBMPlexSansArabic_200ExtraLight](./IBMPlexSansArabic_200ExtraLight.ttf.png)|![IBMPlexSansArabic_300Light](./IBMPlexSansArabic_300Light.ttf.png)||
|![IBMPlexSansArabic_400Regular](./IBMPlexSansArabic_400Regular.ttf.png)|![IBMPlexSansArabic_500Medium](./IBMPlexSansArabic_500Medium.ttf.png)|![IBMPlexSansArabic_600SemiBold](./IBMPlexSansArabic_600SemiBold.ttf.png)||
|![IBMPlexSansArabic_700Bold](./IBMPlexSansArabic_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ibm-plex-sans-arabic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans Arabic page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans Arabic on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-arabic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-arabic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
