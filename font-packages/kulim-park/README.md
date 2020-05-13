# @expo-google-fonts/kulim-park

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kulim-park)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kulim-park)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kulim-park)

This package lets you use the [**Kulim Park**](https://fonts.google.com/specimen/Kulim+Park) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kulim Park

![Kulim Park](./font-family.png)

This font family contains [10 styles](#-gallery).

- `KulimPark_200ExtraLight`
- `KulimPark_200ExtraLight_Italic`
- `KulimPark_300Light`
- `KulimPark_300Light_Italic`
- `KulimPark_400Regular`
- `KulimPark_400Regular_Italic`
- `KulimPark_600SemiBold`
- `KulimPark_600SemiBold_Italic`
- `KulimPark_700Bold`
- `KulimPark_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kulim-park expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  KulimPark_200ExtraLight,
  KulimPark_200ExtraLight_Italic,
  KulimPark_300Light,
  KulimPark_300Light_Italic,
  KulimPark_400Regular,
  KulimPark_400Regular_Italic,
  KulimPark_600SemiBold,
  KulimPark_600SemiBold_Italic,
  KulimPark_700Bold,
  KulimPark_700Bold_Italic,
} from '@expo-google-fonts/kulim-park';

export default () => {
  let [fontsLoaded] = useFonts({
    KulimPark_200ExtraLight,
    KulimPark_200ExtraLight_Italic,
    KulimPark_300Light,
    KulimPark_300Light_Italic,
    KulimPark_400Regular,
    KulimPark_400Regular_Italic,
    KulimPark_600SemiBold,
    KulimPark_600SemiBold_Italic,
    KulimPark_700Bold,
    KulimPark_700Bold_Italic,
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
            fontFamily: 'KulimPark_200ExtraLight',
          }}>
          Kulim Park Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_200ExtraLight_Italic',
          }}>
          Kulim Park Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_300Light',
          }}>
          Kulim Park Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_300Light_Italic',
          }}>
          Kulim Park Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_400Regular',
          }}>
          Kulim Park Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_400Regular_Italic',
          }}>
          Kulim Park Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_600SemiBold',
          }}>
          Kulim Park Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_600SemiBold_Italic',
          }}>
          Kulim Park Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_700Bold',
          }}>
          Kulim Park Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KulimPark_700Bold_Italic',
          }}>
          Kulim Park Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![KulimPark_200ExtraLight](./KulimPark_200ExtraLight.ttf.png)|![KulimPark_200ExtraLight_Italic](./KulimPark_200ExtraLight_Italic.ttf.png)|![KulimPark_300Light](./KulimPark_300Light.ttf.png)||
|![KulimPark_300Light_Italic](./KulimPark_300Light_Italic.ttf.png)|![KulimPark_400Regular](./KulimPark_400Regular.ttf.png)|![KulimPark_400Regular_Italic](./KulimPark_400Regular_Italic.ttf.png)||
|![KulimPark_600SemiBold](./KulimPark_600SemiBold.ttf.png)|![KulimPark_600SemiBold_Italic](./KulimPark_600SemiBold_Italic.ttf.png)|![KulimPark_700Bold](./KulimPark_700Bold.ttf.png)||
|![KulimPark_700Bold_Italic](./KulimPark_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kulim-park` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kulim Park page on Google Fonts](https://fonts.google.com/specimen/Kulim+Park) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kulim Park on Google Fonts](https://fonts.google.com/specimen/Kulim+Park)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kulim-park)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kulim-park)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
