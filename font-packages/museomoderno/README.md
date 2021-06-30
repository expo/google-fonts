# @expo-google-fonts/museomoderno

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/museomoderno)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/museomoderno)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/museomoderno)

This package lets you use the [**MuseoModerno**](https://fonts.google.com/specimen/MuseoModerno) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## MuseoModerno

![MuseoModerno](./font-family.png)

This font family contains [9 styles](#-gallery).

- `MuseoModerno_100Thin`
- `MuseoModerno_200ExtraLight`
- `MuseoModerno_300Light`
- `MuseoModerno_400Regular`
- `MuseoModerno_500Medium`
- `MuseoModerno_600SemiBold`
- `MuseoModerno_700Bold`
- `MuseoModerno_800ExtraBold`
- `MuseoModerno_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/museomoderno expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  MuseoModerno_100Thin,
  MuseoModerno_200ExtraLight,
  MuseoModerno_300Light,
  MuseoModerno_400Regular,
  MuseoModerno_500Medium,
  MuseoModerno_600SemiBold,
  MuseoModerno_700Bold,
  MuseoModerno_800ExtraBold,
  MuseoModerno_900Black,
} from '@expo-google-fonts/museomoderno';

export default () => {
  let [fontsLoaded] = useFonts({
    MuseoModerno_100Thin,
    MuseoModerno_200ExtraLight,
    MuseoModerno_300Light,
    MuseoModerno_400Regular,
    MuseoModerno_500Medium,
    MuseoModerno_600SemiBold,
    MuseoModerno_700Bold,
    MuseoModerno_800ExtraBold,
    MuseoModerno_900Black,
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
            fontFamily: 'MuseoModerno_100Thin',
          }}>
          MuseoModerno Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_200ExtraLight',
          }}>
          MuseoModerno Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_300Light',
          }}>
          MuseoModerno Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_400Regular',
          }}>
          MuseoModerno Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_500Medium',
          }}>
          MuseoModerno Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_600SemiBold',
          }}>
          MuseoModerno Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_700Bold',
          }}>
          MuseoModerno Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_800ExtraBold',
          }}>
          MuseoModerno Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuseoModerno_900Black',
          }}>
          MuseoModerno Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MuseoModerno_100Thin](./MuseoModerno_100Thin.ttf.png)|![MuseoModerno_200ExtraLight](./MuseoModerno_200ExtraLight.ttf.png)|![MuseoModerno_300Light](./MuseoModerno_300Light.ttf.png)||
|![MuseoModerno_400Regular](./MuseoModerno_400Regular.ttf.png)|![MuseoModerno_500Medium](./MuseoModerno_500Medium.ttf.png)|![MuseoModerno_600SemiBold](./MuseoModerno_600SemiBold.ttf.png)||
|![MuseoModerno_700Bold](./MuseoModerno_700Bold.ttf.png)|![MuseoModerno_800ExtraBold](./MuseoModerno_800ExtraBold.ttf.png)|![MuseoModerno_900Black](./MuseoModerno_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/museomoderno` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [MuseoModerno page on Google Fonts](https://fonts.google.com/specimen/MuseoModerno) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [MuseoModerno on Google Fonts](https://fonts.google.com/specimen/MuseoModerno)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/museomoderno)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/museomoderno)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
