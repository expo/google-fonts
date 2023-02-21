# @expo-google-fonts/ibm-plex-sans-jp

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-jp)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-jp)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-jp)

This package lets you use the [**IBM Plex Sans JP**](https://fonts.google.com/specimen/IBM+Plex+Sans+JP) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans JP

![IBM Plex Sans JP](./font-family.png)

This font family contains [7 styles](#-gallery).

- `IBMPlexSansJP_100Thin`
- `IBMPlexSansJP_200ExtraLight`
- `IBMPlexSansJP_300Light`
- `IBMPlexSansJP_400Regular`
- `IBMPlexSansJP_500Medium`
- `IBMPlexSansJP_600SemiBold`
- `IBMPlexSansJP_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ibm-plex-sans-jp expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  IBMPlexSansJP_100Thin,
  IBMPlexSansJP_200ExtraLight,
  IBMPlexSansJP_300Light,
  IBMPlexSansJP_400Regular,
  IBMPlexSansJP_500Medium,
  IBMPlexSansJP_600SemiBold,
  IBMPlexSansJP_700Bold,
} from '@expo-google-fonts/ibm-plex-sans-jp';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSansJP_100Thin,
    IBMPlexSansJP_200ExtraLight,
    IBMPlexSansJP_300Light,
    IBMPlexSansJP_400Regular,
    IBMPlexSansJP_500Medium,
    IBMPlexSansJP_600SemiBold,
    IBMPlexSansJP_700Bold,
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
            fontFamily: 'IBMPlexSansJP_100Thin',
          }}>
          IBM Plex Sans JP Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansJP_200ExtraLight',
          }}>
          IBM Plex Sans JP Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansJP_300Light',
          }}>
          IBM Plex Sans JP Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansJP_400Regular',
          }}>
          IBM Plex Sans JP Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansJP_500Medium',
          }}>
          IBM Plex Sans JP Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansJP_600SemiBold',
          }}>
          IBM Plex Sans JP Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansJP_700Bold',
          }}>
          IBM Plex Sans JP Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSansJP_100Thin](./IBMPlexSansJP_100Thin.ttf.png)|![IBMPlexSansJP_200ExtraLight](./IBMPlexSansJP_200ExtraLight.ttf.png)|![IBMPlexSansJP_300Light](./IBMPlexSansJP_300Light.ttf.png)||
|![IBMPlexSansJP_400Regular](./IBMPlexSansJP_400Regular.ttf.png)|![IBMPlexSansJP_500Medium](./IBMPlexSansJP_500Medium.ttf.png)|![IBMPlexSansJP_600SemiBold](./IBMPlexSansJP_600SemiBold.ttf.png)||
|![IBMPlexSansJP_700Bold](./IBMPlexSansJP_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ibm-plex-sans-jp` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans JP page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+JP) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans JP on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+JP)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-jp)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-jp)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
