# @expo-google-fonts/source-sans-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/source-sans-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/source-sans-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/source-sans-pro)

This package lets you use the [**Source Sans Pro**](https://fonts.google.com/specimen/Source+Sans+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Source Sans Pro

![Source Sans Pro](./font-family.png)

This font family contains [12 styles](#-gallery).

- `SourceSansPro_200ExtraLight`
- `SourceSansPro_200ExtraLight_Italic`
- `SourceSansPro_300Light`
- `SourceSansPro_300Light_Italic`
- `SourceSansPro_400Regular`
- `SourceSansPro_400Regular_Italic`
- `SourceSansPro_600SemiBold`
- `SourceSansPro_600SemiBold_Italic`
- `SourceSansPro_700Bold`
- `SourceSansPro_700Bold_Italic`
- `SourceSansPro_900Black`
- `SourceSansPro_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/source-sans-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceSansPro_200ExtraLight,
  SourceSansPro_200ExtraLight_Italic,
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
  SourceSansPro_600SemiBold,
  SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
  SourceSansPro_700Bold_Italic,
  SourceSansPro_900Black,
  SourceSansPro_900Black_Italic,
} from '@expo-google-fonts/source-sans-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceSansPro_200ExtraLight,
    SourceSansPro_200ExtraLight_Italic,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
    SourceSansPro_700Bold_Italic,
    SourceSansPro_900Black,
    SourceSansPro_900Black_Italic,
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
            fontFamily: 'SourceSansPro_200ExtraLight',
          }}>
          Source Sans Pro Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_200ExtraLight_Italic',
          }}>
          Source Sans Pro Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_300Light',
          }}>
          Source Sans Pro Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_300Light_Italic',
          }}>
          Source Sans Pro Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_400Regular',
          }}>
          Source Sans Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_400Regular_Italic',
          }}>
          Source Sans Pro Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_600SemiBold',
          }}>
          Source Sans Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_600SemiBold_Italic',
          }}>
          Source Sans Pro Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_700Bold',
          }}>
          Source Sans Pro Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_700Bold_Italic',
          }}>
          Source Sans Pro Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_900Black',
          }}>
          Source Sans Pro Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSansPro_900Black_Italic',
          }}>
          Source Sans Pro Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SourceSansPro_200ExtraLight](./SourceSansPro_200ExtraLight.ttf.png)|![SourceSansPro_200ExtraLight_Italic](./SourceSansPro_200ExtraLight_Italic.ttf.png)|![SourceSansPro_300Light](./SourceSansPro_300Light.ttf.png)||
|![SourceSansPro_300Light_Italic](./SourceSansPro_300Light_Italic.ttf.png)|![SourceSansPro_400Regular](./SourceSansPro_400Regular.ttf.png)|![SourceSansPro_400Regular_Italic](./SourceSansPro_400Regular_Italic.ttf.png)||
|![SourceSansPro_600SemiBold](./SourceSansPro_600SemiBold.ttf.png)|![SourceSansPro_600SemiBold_Italic](./SourceSansPro_600SemiBold_Italic.ttf.png)|![SourceSansPro_700Bold](./SourceSansPro_700Bold.ttf.png)||
|![SourceSansPro_700Bold_Italic](./SourceSansPro_700Bold_Italic.ttf.png)|![SourceSansPro_900Black](./SourceSansPro_900Black.ttf.png)|![SourceSansPro_900Black_Italic](./SourceSansPro_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/source-sans-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Source Sans Pro page on Google Fonts](https://fonts.google.com/specimen/Source+Sans+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Source Sans Pro on Google Fonts](https://fonts.google.com/specimen/Source+Sans+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-sans-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-sans-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
