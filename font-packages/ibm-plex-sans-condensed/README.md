# @expo-google-fonts/ibm-plex-sans-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-condensed)

This package lets you use the [**IBM Plex Sans Condensed**](https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans Condensed

![IBM Plex Sans Condensed](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexSansCondensed_100Thin`
- `IBMPlexSansCondensed_100Thin_Italic`
- `IBMPlexSansCondensed_200ExtraLight`
- `IBMPlexSansCondensed_200ExtraLight_Italic`
- `IBMPlexSansCondensed_300Light`
- `IBMPlexSansCondensed_300Light_Italic`
- `IBMPlexSansCondensed_400Regular`
- `IBMPlexSansCondensed_400Regular_Italic`
- `IBMPlexSansCondensed_500Medium`
- `IBMPlexSansCondensed_500Medium_Italic`
- `IBMPlexSansCondensed_600SemiBold`
- `IBMPlexSansCondensed_600SemiBold_Italic`
- `IBMPlexSansCondensed_700Bold`
- `IBMPlexSansCondensed_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ibm-plex-sans-condensed expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  IBMPlexSansCondensed_100Thin,
  IBMPlexSansCondensed_100Thin_Italic,
  IBMPlexSansCondensed_200ExtraLight,
  IBMPlexSansCondensed_200ExtraLight_Italic,
  IBMPlexSansCondensed_300Light,
  IBMPlexSansCondensed_300Light_Italic,
  IBMPlexSansCondensed_400Regular,
  IBMPlexSansCondensed_400Regular_Italic,
  IBMPlexSansCondensed_500Medium,
  IBMPlexSansCondensed_500Medium_Italic,
  IBMPlexSansCondensed_600SemiBold,
  IBMPlexSansCondensed_600SemiBold_Italic,
  IBMPlexSansCondensed_700Bold,
  IBMPlexSansCondensed_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-sans-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSansCondensed_100Thin,
    IBMPlexSansCondensed_100Thin_Italic,
    IBMPlexSansCondensed_200ExtraLight,
    IBMPlexSansCondensed_200ExtraLight_Italic,
    IBMPlexSansCondensed_300Light,
    IBMPlexSansCondensed_300Light_Italic,
    IBMPlexSansCondensed_400Regular,
    IBMPlexSansCondensed_400Regular_Italic,
    IBMPlexSansCondensed_500Medium,
    IBMPlexSansCondensed_500Medium_Italic,
    IBMPlexSansCondensed_600SemiBold,
    IBMPlexSansCondensed_600SemiBold_Italic,
    IBMPlexSansCondensed_700Bold,
    IBMPlexSansCondensed_700Bold_Italic,
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
            fontFamily: 'IBMPlexSansCondensed_100Thin',
          }}>
          IBM Plex Sans Condensed Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_100Thin_Italic',
          }}>
          IBM Plex Sans Condensed Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_200ExtraLight',
          }}>
          IBM Plex Sans Condensed Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_200ExtraLight_Italic',
          }}>
          IBM Plex Sans Condensed Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_300Light',
          }}>
          IBM Plex Sans Condensed Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_300Light_Italic',
          }}>
          IBM Plex Sans Condensed Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_400Regular',
          }}>
          IBM Plex Sans Condensed Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_400Regular_Italic',
          }}>
          IBM Plex Sans Condensed Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_500Medium',
          }}>
          IBM Plex Sans Condensed Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_500Medium_Italic',
          }}>
          IBM Plex Sans Condensed Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_600SemiBold',
          }}>
          IBM Plex Sans Condensed Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_600SemiBold_Italic',
          }}>
          IBM Plex Sans Condensed Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_700Bold',
          }}>
          IBM Plex Sans Condensed Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'IBMPlexSansCondensed_700Bold_Italic',
          }}>
          IBM Plex Sans Condensed Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IBMPlexSansCondensed_100Thin
![IBMPlexSansCondensed_100Thin](./IBMPlexSansCondensed_100Thin.ttf.png)

##### IBMPlexSansCondensed_100Thin_Italic
![IBMPlexSansCondensed_100Thin_Italic](./IBMPlexSansCondensed_100Thin_Italic.ttf.png)

##### IBMPlexSansCondensed_200ExtraLight
![IBMPlexSansCondensed_200ExtraLight](./IBMPlexSansCondensed_200ExtraLight.ttf.png)

##### IBMPlexSansCondensed_200ExtraLight_Italic
![IBMPlexSansCondensed_200ExtraLight_Italic](./IBMPlexSansCondensed_200ExtraLight_Italic.ttf.png)

##### IBMPlexSansCondensed_300Light
![IBMPlexSansCondensed_300Light](./IBMPlexSansCondensed_300Light.ttf.png)

##### IBMPlexSansCondensed_300Light_Italic
![IBMPlexSansCondensed_300Light_Italic](./IBMPlexSansCondensed_300Light_Italic.ttf.png)

##### IBMPlexSansCondensed_400Regular
![IBMPlexSansCondensed_400Regular](./IBMPlexSansCondensed_400Regular.ttf.png)

##### IBMPlexSansCondensed_400Regular_Italic
![IBMPlexSansCondensed_400Regular_Italic](./IBMPlexSansCondensed_400Regular_Italic.ttf.png)

##### IBMPlexSansCondensed_500Medium
![IBMPlexSansCondensed_500Medium](./IBMPlexSansCondensed_500Medium.ttf.png)

##### IBMPlexSansCondensed_500Medium_Italic
![IBMPlexSansCondensed_500Medium_Italic](./IBMPlexSansCondensed_500Medium_Italic.ttf.png)

##### IBMPlexSansCondensed_600SemiBold
![IBMPlexSansCondensed_600SemiBold](./IBMPlexSansCondensed_600SemiBold.ttf.png)

##### IBMPlexSansCondensed_600SemiBold_Italic
![IBMPlexSansCondensed_600SemiBold_Italic](./IBMPlexSansCondensed_600SemiBold_Italic.ttf.png)

##### IBMPlexSansCondensed_700Bold
![IBMPlexSansCondensed_700Bold](./IBMPlexSansCondensed_700Bold.ttf.png)

##### IBMPlexSansCondensed_700Bold_Italic
![IBMPlexSansCondensed_700Bold_Italic](./IBMPlexSansCondensed_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ibm-plex-sans-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans Condensed page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans Condensed on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
