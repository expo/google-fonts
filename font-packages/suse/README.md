# @expo-google-fonts/suse

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/suse)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/suse)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/suse)

This package lets you use the [**SUSE**](https://fonts.google.com/specimen/SUSE) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## SUSE

![SUSE](./font-family.png)

This font family contains [8 styles](#-gallery).

- `SUSE_100Thin`
- `SUSE_200ExtraLight`
- `SUSE_300Light`
- `SUSE_400Regular`
- `SUSE_500Medium`
- `SUSE_600SemiBold`
- `SUSE_700Bold`
- `SUSE_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/suse expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SUSE_100Thin,
  SUSE_200ExtraLight,
  SUSE_300Light,
  SUSE_400Regular,
  SUSE_500Medium,
  SUSE_600SemiBold,
  SUSE_700Bold,
  SUSE_800ExtraBold,
} from '@expo-google-fonts/suse';

export default () => {
  let [fontsLoaded] = useFonts({
    SUSE_100Thin,
    SUSE_200ExtraLight,
    SUSE_300Light,
    SUSE_400Regular,
    SUSE_500Medium,
    SUSE_600SemiBold,
    SUSE_700Bold,
    SUSE_800ExtraBold,
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
            fontFamily: 'SUSE_100Thin',
          }}>
          SUSE Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SUSE_200ExtraLight',
          }}>
          SUSE Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SUSE_300Light',
          }}>
          SUSE Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SUSE_400Regular',
          }}>
          SUSE Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SUSE_500Medium',
          }}>
          SUSE Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SUSE_600SemiBold',
          }}>
          SUSE Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SUSE_700Bold',
          }}>
          SUSE Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SUSE_800ExtraBold',
          }}>
          SUSE Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SUSE_100Thin](./SUSE_100Thin.ttf.png)|![SUSE_200ExtraLight](./SUSE_200ExtraLight.ttf.png)|![SUSE_300Light](./SUSE_300Light.ttf.png)||
|![SUSE_400Regular](./SUSE_400Regular.ttf.png)|![SUSE_500Medium](./SUSE_500Medium.ttf.png)|![SUSE_600SemiBold](./SUSE_600SemiBold.ttf.png)||
|![SUSE_700Bold](./SUSE_700Bold.ttf.png)|![SUSE_800ExtraBold](./SUSE_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/suse` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [SUSE page on Google Fonts](https://fonts.google.com/specimen/SUSE) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [SUSE on Google Fonts](https://fonts.google.com/specimen/SUSE)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/suse)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/suse)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
