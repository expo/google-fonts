# @expo-google-fonts/kalnia

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kalnia)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kalnia)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kalnia)

This package lets you use the [**Kalnia**](https://fonts.google.com/specimen/Kalnia) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kalnia

![Kalnia](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Kalnia_100Thin`
- `Kalnia_200ExtraLight`
- `Kalnia_300Light`
- `Kalnia_400Regular`
- `Kalnia_500Medium`
- `Kalnia_600SemiBold`
- `Kalnia_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kalnia expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Kalnia_100Thin,
  Kalnia_200ExtraLight,
  Kalnia_300Light,
  Kalnia_400Regular,
  Kalnia_500Medium,
  Kalnia_600SemiBold,
  Kalnia_700Bold,
} from '@expo-google-fonts/kalnia';

export default () => {
  let [fontsLoaded] = useFonts({
    Kalnia_100Thin,
    Kalnia_200ExtraLight,
    Kalnia_300Light,
    Kalnia_400Regular,
    Kalnia_500Medium,
    Kalnia_600SemiBold,
    Kalnia_700Bold,
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
            fontFamily: 'Kalnia_100Thin',
          }}>
          Kalnia Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kalnia_200ExtraLight',
          }}>
          Kalnia Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kalnia_300Light',
          }}>
          Kalnia Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kalnia_400Regular',
          }}>
          Kalnia Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kalnia_500Medium',
          }}>
          Kalnia Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kalnia_600SemiBold',
          }}>
          Kalnia Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kalnia_700Bold',
          }}>
          Kalnia Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Kalnia_100Thin](./Kalnia_100Thin.ttf.png)|![Kalnia_200ExtraLight](./Kalnia_200ExtraLight.ttf.png)|![Kalnia_300Light](./Kalnia_300Light.ttf.png)||
|![Kalnia_400Regular](./Kalnia_400Regular.ttf.png)|![Kalnia_500Medium](./Kalnia_500Medium.ttf.png)|![Kalnia_600SemiBold](./Kalnia_600SemiBold.ttf.png)||
|![Kalnia_700Bold](./Kalnia_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kalnia` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kalnia page on Google Fonts](https://fonts.google.com/specimen/Kalnia) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kalnia on Google Fonts](https://fonts.google.com/specimen/Kalnia)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kalnia)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kalnia)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
