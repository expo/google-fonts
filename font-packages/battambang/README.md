# @expo-google-fonts/battambang

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/battambang)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/battambang)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/battambang)

This package lets you use the [**Battambang**](https://fonts.google.com/specimen/Battambang) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Battambang

![Battambang](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Battambang_100Thin`
- `Battambang_300Light`
- `Battambang_400Regular`
- `Battambang_700Bold`
- `Battambang_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/battambang expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Battambang_100Thin,
  Battambang_300Light,
  Battambang_400Regular,
  Battambang_700Bold,
  Battambang_900Black,
} from '@expo-google-fonts/battambang';

export default () => {
  let [fontsLoaded] = useFonts({
    Battambang_100Thin,
    Battambang_300Light,
    Battambang_400Regular,
    Battambang_700Bold,
    Battambang_900Black,
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
            fontFamily: 'Battambang_100Thin',
          }}>
          Battambang Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Battambang_300Light',
          }}>
          Battambang Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Battambang_400Regular',
          }}>
          Battambang Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Battambang_700Bold',
          }}>
          Battambang Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Battambang_900Black',
          }}>
          Battambang Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Battambang_100Thin](./Battambang_100Thin.ttf.png)|![Battambang_300Light](./Battambang_300Light.ttf.png)|![Battambang_400Regular](./Battambang_400Regular.ttf.png)||
|![Battambang_700Bold](./Battambang_700Bold.ttf.png)|![Battambang_900Black](./Battambang_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/battambang` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Battambang page on Google Fonts](https://fonts.google.com/specimen/Battambang) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Battambang on Google Fonts](https://fonts.google.com/specimen/Battambang)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/battambang)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/battambang)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
