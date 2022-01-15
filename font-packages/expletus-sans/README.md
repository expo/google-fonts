# @expo-google-fonts/expletus-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/expletus-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/expletus-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/expletus-sans)

This package lets you use the [**Expletus Sans**](https://fonts.google.com/specimen/Expletus+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Expletus Sans

![Expletus Sans](./font-family.png)

This font family contains [8 styles](#-gallery).

- `ExpletusSans_400Regular`
- `ExpletusSans_500Medium`
- `ExpletusSans_600SemiBold`
- `ExpletusSans_700Bold`
- `ExpletusSans_400Regular_Italic`
- `ExpletusSans_500Medium_Italic`
- `ExpletusSans_600SemiBold_Italic`
- `ExpletusSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/expletus-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ExpletusSans_400Regular,
  ExpletusSans_500Medium,
  ExpletusSans_600SemiBold,
  ExpletusSans_700Bold,
  ExpletusSans_400Regular_Italic,
  ExpletusSans_500Medium_Italic,
  ExpletusSans_600SemiBold_Italic,
  ExpletusSans_700Bold_Italic,
} from '@expo-google-fonts/expletus-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    ExpletusSans_400Regular,
    ExpletusSans_500Medium,
    ExpletusSans_600SemiBold,
    ExpletusSans_700Bold,
    ExpletusSans_400Regular_Italic,
    ExpletusSans_500Medium_Italic,
    ExpletusSans_600SemiBold_Italic,
    ExpletusSans_700Bold_Italic,
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
            fontFamily: 'ExpletusSans_400Regular',
          }}>
          Expletus Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ExpletusSans_500Medium',
          }}>
          Expletus Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ExpletusSans_600SemiBold',
          }}>
          Expletus Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ExpletusSans_700Bold',
          }}>
          Expletus Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ExpletusSans_400Regular_Italic',
          }}>
          Expletus Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ExpletusSans_500Medium_Italic',
          }}>
          Expletus Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ExpletusSans_600SemiBold_Italic',
          }}>
          Expletus Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ExpletusSans_700Bold_Italic',
          }}>
          Expletus Sans Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![ExpletusSans_400Regular](./ExpletusSans_400Regular.ttf.png)|![ExpletusSans_500Medium](./ExpletusSans_500Medium.ttf.png)|![ExpletusSans_600SemiBold](./ExpletusSans_600SemiBold.ttf.png)||
|![ExpletusSans_700Bold](./ExpletusSans_700Bold.ttf.png)|![ExpletusSans_400Regular_Italic](./ExpletusSans_400Regular_Italic.ttf.png)|![ExpletusSans_500Medium_Italic](./ExpletusSans_500Medium_Italic.ttf.png)||
|![ExpletusSans_600SemiBold_Italic](./ExpletusSans_600SemiBold_Italic.ttf.png)|![ExpletusSans_700Bold_Italic](./ExpletusSans_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/expletus-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Expletus Sans page on Google Fonts](https://fonts.google.com/specimen/Expletus+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Expletus Sans on Google Fonts](https://fonts.google.com/specimen/Expletus+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/expletus-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/expletus-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
