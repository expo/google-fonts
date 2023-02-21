# @expo-google-fonts/anek-latin

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-latin)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-latin)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-latin)

This package lets you use the [**Anek Latin**](https://fonts.google.com/specimen/Anek+Latin) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Latin

![Anek Latin](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekLatin_100Thin`
- `AnekLatin_200ExtraLight`
- `AnekLatin_300Light`
- `AnekLatin_400Regular`
- `AnekLatin_500Medium`
- `AnekLatin_600SemiBold`
- `AnekLatin_700Bold`
- `AnekLatin_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/anek-latin expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AnekLatin_100Thin,
  AnekLatin_200ExtraLight,
  AnekLatin_300Light,
  AnekLatin_400Regular,
  AnekLatin_500Medium,
  AnekLatin_600SemiBold,
  AnekLatin_700Bold,
  AnekLatin_800ExtraBold,
} from '@expo-google-fonts/anek-latin';

export default () => {
  let [fontsLoaded] = useFonts({
    AnekLatin_100Thin,
    AnekLatin_200ExtraLight,
    AnekLatin_300Light,
    AnekLatin_400Regular,
    AnekLatin_500Medium,
    AnekLatin_600SemiBold,
    AnekLatin_700Bold,
    AnekLatin_800ExtraBold,
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
            fontFamily: 'AnekLatin_100Thin',
          }}>
          Anek Latin Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekLatin_200ExtraLight',
          }}>
          Anek Latin Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekLatin_300Light',
          }}>
          Anek Latin Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekLatin_400Regular',
          }}>
          Anek Latin Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekLatin_500Medium',
          }}>
          Anek Latin Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekLatin_600SemiBold',
          }}>
          Anek Latin Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekLatin_700Bold',
          }}>
          Anek Latin Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekLatin_800ExtraBold',
          }}>
          Anek Latin Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![AnekLatin_100Thin](./AnekLatin_100Thin.ttf.png)|![AnekLatin_200ExtraLight](./AnekLatin_200ExtraLight.ttf.png)|![AnekLatin_300Light](./AnekLatin_300Light.ttf.png)||
|![AnekLatin_400Regular](./AnekLatin_400Regular.ttf.png)|![AnekLatin_500Medium](./AnekLatin_500Medium.ttf.png)|![AnekLatin_600SemiBold](./AnekLatin_600SemiBold.ttf.png)||
|![AnekLatin_700Bold](./AnekLatin_700Bold.ttf.png)|![AnekLatin_800ExtraBold](./AnekLatin_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/anek-latin` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Latin page on Google Fonts](https://fonts.google.com/specimen/Anek+Latin) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Latin on Google Fonts](https://fonts.google.com/specimen/Anek+Latin)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-latin)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-latin)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
