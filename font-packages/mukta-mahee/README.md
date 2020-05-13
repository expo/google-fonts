# @expo-google-fonts/mukta-mahee

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mukta-mahee)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mukta-mahee)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mukta-mahee)

This package lets you use the [**Mukta Mahee**](https://fonts.google.com/specimen/Mukta+Mahee) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mukta Mahee

![Mukta Mahee](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MuktaMahee_200ExtraLight`
- `MuktaMahee_300Light`
- `MuktaMahee_400Regular`
- `MuktaMahee_500Medium`
- `MuktaMahee_600SemiBold`
- `MuktaMahee_700Bold`
- `MuktaMahee_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mukta-mahee expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  MuktaMahee_200ExtraLight,
  MuktaMahee_300Light,
  MuktaMahee_400Regular,
  MuktaMahee_500Medium,
  MuktaMahee_600SemiBold,
  MuktaMahee_700Bold,
  MuktaMahee_800ExtraBold,
} from '@expo-google-fonts/mukta-mahee';

export default () => {
  let [fontsLoaded] = useFonts({
    MuktaMahee_200ExtraLight,
    MuktaMahee_300Light,
    MuktaMahee_400Regular,
    MuktaMahee_500Medium,
    MuktaMahee_600SemiBold,
    MuktaMahee_700Bold,
    MuktaMahee_800ExtraBold,
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
            fontFamily: 'MuktaMahee_200ExtraLight',
          }}>
          Mukta Mahee Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaMahee_300Light',
          }}>
          Mukta Mahee Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaMahee_400Regular',
          }}>
          Mukta Mahee Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaMahee_500Medium',
          }}>
          Mukta Mahee Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaMahee_600SemiBold',
          }}>
          Mukta Mahee Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaMahee_700Bold',
          }}>
          Mukta Mahee Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MuktaMahee_800ExtraBold',
          }}>
          Mukta Mahee Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MuktaMahee_200ExtraLight](./MuktaMahee_200ExtraLight.ttf.png)|![MuktaMahee_300Light](./MuktaMahee_300Light.ttf.png)|![MuktaMahee_400Regular](./MuktaMahee_400Regular.ttf.png)||
|![MuktaMahee_500Medium](./MuktaMahee_500Medium.ttf.png)|![MuktaMahee_600SemiBold](./MuktaMahee_600SemiBold.ttf.png)|![MuktaMahee_700Bold](./MuktaMahee_700Bold.ttf.png)||
|![MuktaMahee_800ExtraBold](./MuktaMahee_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mukta-mahee` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mukta Mahee page on Google Fonts](https://fonts.google.com/specimen/Mukta+Mahee) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mukta Mahee on Google Fonts](https://fonts.google.com/specimen/Mukta+Mahee)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta-mahee)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta-mahee)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
