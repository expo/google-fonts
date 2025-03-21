# @expo-google-fonts/readex-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/readex-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/readex-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/readex-pro)

This package lets you use the [**Readex Pro**](https://fonts.google.com/specimen/Readex+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Readex Pro

![Readex Pro](./font-family.png)

This font family contains [6 styles](#-gallery).

- `ReadexPro_200ExtraLight`
- `ReadexPro_300Light`
- `ReadexPro_400Regular`
- `ReadexPro_500Medium`
- `ReadexPro_600SemiBold`
- `ReadexPro_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/readex-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ReadexPro_200ExtraLight,
  ReadexPro_300Light,
  ReadexPro_400Regular,
  ReadexPro_500Medium,
  ReadexPro_600SemiBold,
  ReadexPro_700Bold,
} from '@expo-google-fonts/readex-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    ReadexPro_200ExtraLight,
    ReadexPro_300Light,
    ReadexPro_400Regular,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold,
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
            fontFamily: 'ReadexPro_200ExtraLight',
          }}>
          Readex Pro Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ReadexPro_300Light',
          }}>
          Readex Pro Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ReadexPro_400Regular',
          }}>
          Readex Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ReadexPro_500Medium',
          }}>
          Readex Pro Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ReadexPro_600SemiBold',
          }}>
          Readex Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ReadexPro_700Bold',
          }}>
          Readex Pro Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![ReadexPro_200ExtraLight](./ReadexPro_200ExtraLight.ttf.png)|![ReadexPro_300Light](./ReadexPro_300Light.ttf.png)|![ReadexPro_400Regular](./ReadexPro_400Regular.ttf.png)||
|![ReadexPro_500Medium](./ReadexPro_500Medium.ttf.png)|![ReadexPro_600SemiBold](./ReadexPro_600SemiBold.ttf.png)|![ReadexPro_700Bold](./ReadexPro_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/readex-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Readex Pro page on Google Fonts](https://fonts.google.com/specimen/Readex+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Readex Pro on Google Fonts](https://fonts.google.com/specimen/Readex+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/readex-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/readex-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
