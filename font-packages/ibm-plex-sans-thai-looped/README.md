# @expo-google-fonts/ibm-plex-sans-thai-looped

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-thai-looped)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-thai-looped)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-thai-looped)

This package lets you use the [**IBM Plex Sans Thai Looped**](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai+Looped) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans Thai Looped

![IBM Plex Sans Thai Looped](./font-family.png)

This font family contains [7 styles](#-gallery).

- `IBMPlexSansThaiLooped_100Thin`
- `IBMPlexSansThaiLooped_200ExtraLight`
- `IBMPlexSansThaiLooped_300Light`
- `IBMPlexSansThaiLooped_400Regular`
- `IBMPlexSansThaiLooped_500Medium`
- `IBMPlexSansThaiLooped_600SemiBold`
- `IBMPlexSansThaiLooped_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/ibm-plex-sans-thai-looped expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  IBMPlexSansThaiLooped_100Thin,
  IBMPlexSansThaiLooped_200ExtraLight,
  IBMPlexSansThaiLooped_300Light,
  IBMPlexSansThaiLooped_400Regular,
  IBMPlexSansThaiLooped_500Medium,
  IBMPlexSansThaiLooped_600SemiBold,
  IBMPlexSansThaiLooped_700Bold,
} from '@expo-google-fonts/ibm-plex-sans-thai-looped';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSansThaiLooped_100Thin,
    IBMPlexSansThaiLooped_200ExtraLight,
    IBMPlexSansThaiLooped_300Light,
    IBMPlexSansThaiLooped_400Regular,
    IBMPlexSansThaiLooped_500Medium,
    IBMPlexSansThaiLooped_600SemiBold,
    IBMPlexSansThaiLooped_700Bold,
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
            fontFamily: 'IBMPlexSansThaiLooped_100Thin',
          }}>
          IBM Plex Sans Thai Looped Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansThaiLooped_200ExtraLight',
          }}>
          IBM Plex Sans Thai Looped Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansThaiLooped_300Light',
          }}>
          IBM Plex Sans Thai Looped Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansThaiLooped_400Regular',
          }}>
          IBM Plex Sans Thai Looped Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansThaiLooped_500Medium',
          }}>
          IBM Plex Sans Thai Looped Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansThaiLooped_600SemiBold',
          }}>
          IBM Plex Sans Thai Looped Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansThaiLooped_700Bold',
          }}>
          IBM Plex Sans Thai Looped Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSansThaiLooped_100Thin](./IBMPlexSansThaiLooped_100Thin.ttf.png)|![IBMPlexSansThaiLooped_200ExtraLight](./IBMPlexSansThaiLooped_200ExtraLight.ttf.png)|![IBMPlexSansThaiLooped_300Light](./IBMPlexSansThaiLooped_300Light.ttf.png)||
|![IBMPlexSansThaiLooped_400Regular](./IBMPlexSansThaiLooped_400Regular.ttf.png)|![IBMPlexSansThaiLooped_500Medium](./IBMPlexSansThaiLooped_500Medium.ttf.png)|![IBMPlexSansThaiLooped_600SemiBold](./IBMPlexSansThaiLooped_600SemiBold.ttf.png)||
|![IBMPlexSansThaiLooped_700Bold](./IBMPlexSansThaiLooped_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ibm-plex-sans-thai-looped` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans Thai Looped page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai+Looped) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans Thai Looped on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai+Looped)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-thai-looped)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-thai-looped)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
