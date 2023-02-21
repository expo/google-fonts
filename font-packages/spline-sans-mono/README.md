# @expo-google-fonts/spline-sans-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/spline-sans-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/spline-sans-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/spline-sans-mono)

This package lets you use the [**Spline Sans Mono**](https://fonts.google.com/specimen/Spline+Sans+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Spline Sans Mono

![Spline Sans Mono](./font-family.png)

This font family contains [10 styles](#-gallery).

- `SplineSansMono_300Light`
- `SplineSansMono_400Regular`
- `SplineSansMono_500Medium`
- `SplineSansMono_600SemiBold`
- `SplineSansMono_700Bold`
- `SplineSansMono_300Light_Italic`
- `SplineSansMono_400Regular_Italic`
- `SplineSansMono_500Medium_Italic`
- `SplineSansMono_600SemiBold_Italic`
- `SplineSansMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/spline-sans-mono expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SplineSansMono_300Light,
  SplineSansMono_400Regular,
  SplineSansMono_500Medium,
  SplineSansMono_600SemiBold,
  SplineSansMono_700Bold,
  SplineSansMono_300Light_Italic,
  SplineSansMono_400Regular_Italic,
  SplineSansMono_500Medium_Italic,
  SplineSansMono_600SemiBold_Italic,
  SplineSansMono_700Bold_Italic,
} from '@expo-google-fonts/spline-sans-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    SplineSansMono_300Light,
    SplineSansMono_400Regular,
    SplineSansMono_500Medium,
    SplineSansMono_600SemiBold,
    SplineSansMono_700Bold,
    SplineSansMono_300Light_Italic,
    SplineSansMono_400Regular_Italic,
    SplineSansMono_500Medium_Italic,
    SplineSansMono_600SemiBold_Italic,
    SplineSansMono_700Bold_Italic,
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
            fontFamily: 'SplineSansMono_300Light',
          }}>
          Spline Sans Mono Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_400Regular',
          }}>
          Spline Sans Mono Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_500Medium',
          }}>
          Spline Sans Mono Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_600SemiBold',
          }}>
          Spline Sans Mono Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_700Bold',
          }}>
          Spline Sans Mono Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_300Light_Italic',
          }}>
          Spline Sans Mono Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_400Regular_Italic',
          }}>
          Spline Sans Mono Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_500Medium_Italic',
          }}>
          Spline Sans Mono Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_600SemiBold_Italic',
          }}>
          Spline Sans Mono Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SplineSansMono_700Bold_Italic',
          }}>
          Spline Sans Mono Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SplineSansMono_300Light](./SplineSansMono_300Light.ttf.png)|![SplineSansMono_400Regular](./SplineSansMono_400Regular.ttf.png)|![SplineSansMono_500Medium](./SplineSansMono_500Medium.ttf.png)||
|![SplineSansMono_600SemiBold](./SplineSansMono_600SemiBold.ttf.png)|![SplineSansMono_700Bold](./SplineSansMono_700Bold.ttf.png)|![SplineSansMono_300Light_Italic](./SplineSansMono_300Light_Italic.ttf.png)||
|![SplineSansMono_400Regular_Italic](./SplineSansMono_400Regular_Italic.ttf.png)|![SplineSansMono_500Medium_Italic](./SplineSansMono_500Medium_Italic.ttf.png)|![SplineSansMono_600SemiBold_Italic](./SplineSansMono_600SemiBold_Italic.ttf.png)||
|![SplineSansMono_700Bold_Italic](./SplineSansMono_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/spline-sans-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Spline Sans Mono page on Google Fonts](https://fonts.google.com/specimen/Spline+Sans+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Spline Sans Mono on Google Fonts](https://fonts.google.com/specimen/Spline+Sans+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spline-sans-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spline-sans-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
