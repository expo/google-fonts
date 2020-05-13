# @expo-google-fonts/mukta-vaani

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mukta-vaani)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mukta-vaani)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mukta-vaani)

This package lets you use the [**Mukta Vaani**](https://fonts.google.com/specimen/Mukta+Vaani) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mukta Vaani

![Mukta Vaani](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MuktaVaani_200ExtraLight`
- `MuktaVaani_300Light`
- `MuktaVaani_400Regular`
- `MuktaVaani_500Medium`
- `MuktaVaani_600SemiBold`
- `MuktaVaani_700Bold`
- `MuktaVaani_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mukta-vaani expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  MuktaVaani_200ExtraLight,
  MuktaVaani_300Light,
  MuktaVaani_400Regular,
  MuktaVaani_500Medium,
  MuktaVaani_600SemiBold,
  MuktaVaani_700Bold,
  MuktaVaani_800ExtraBold,
} from '@expo-google-fonts/mukta-vaani';

export default () => {
  let [fontsLoaded] = useFonts({
    MuktaVaani_200ExtraLight,
    MuktaVaani_300Light,
    MuktaVaani_400Regular,
    MuktaVaani_500Medium,
    MuktaVaani_600SemiBold,
    MuktaVaani_700Bold,
    MuktaVaani_800ExtraBold,
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
            fontFamily: 'MuktaVaani_200ExtraLight',
          }}>
          Mukta Vaani Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaVaani_300Light',
          }}>
          Mukta Vaani Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaVaani_400Regular',
          }}>
          Mukta Vaani Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaVaani_500Medium',
          }}>
          Mukta Vaani Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaVaani_600SemiBold',
          }}>
          Mukta Vaani Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaVaani_700Bold',
          }}>
          Mukta Vaani Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaVaani_800ExtraBold',
          }}>
          Mukta Vaani Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MuktaVaani_200ExtraLight](./MuktaVaani_200ExtraLight.ttf.png)|![MuktaVaani_300Light](./MuktaVaani_300Light.ttf.png)|![MuktaVaani_400Regular](./MuktaVaani_400Regular.ttf.png)||
|![MuktaVaani_500Medium](./MuktaVaani_500Medium.ttf.png)|![MuktaVaani_600SemiBold](./MuktaVaani_600SemiBold.ttf.png)|![MuktaVaani_700Bold](./MuktaVaani_700Bold.ttf.png)||
|![MuktaVaani_800ExtraBold](./MuktaVaani_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mukta-vaani` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mukta Vaani page on Google Fonts](https://fonts.google.com/specimen/Mukta+Vaani) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mukta Vaani on Google Fonts](https://fonts.google.com/specimen/Mukta+Vaani)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta-vaani)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta-vaani)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
