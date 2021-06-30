# @expo-google-fonts/noto-serif-jp

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-jp)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-jp)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-jp)

This package lets you use the [**Noto Serif JP**](https://fonts.google.com/specimen/Noto+Serif+JP) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif JP

![Noto Serif JP](./font-family.png)

This font family contains [7 styles](#-gallery).

- `NotoSerifJP_200ExtraLight`
- `NotoSerifJP_300Light`
- `NotoSerifJP_400Regular`
- `NotoSerifJP_500Medium`
- `NotoSerifJP_600SemiBold`
- `NotoSerifJP_700Bold`
- `NotoSerifJP_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-serif-jp expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifJP_200ExtraLight,
  NotoSerifJP_300Light,
  NotoSerifJP_400Regular,
  NotoSerifJP_500Medium,
  NotoSerifJP_600SemiBold,
  NotoSerifJP_700Bold,
  NotoSerifJP_900Black,
} from '@expo-google-fonts/noto-serif-jp';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifJP_200ExtraLight,
    NotoSerifJP_300Light,
    NotoSerifJP_400Regular,
    NotoSerifJP_500Medium,
    NotoSerifJP_600SemiBold,
    NotoSerifJP_700Bold,
    NotoSerifJP_900Black,
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
            fontFamily: 'NotoSerifJP_200ExtraLight',
          }}>
          Noto Serif JP Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifJP_300Light',
          }}>
          Noto Serif JP Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifJP_400Regular',
          }}>
          Noto Serif JP Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifJP_500Medium',
          }}>
          Noto Serif JP Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifJP_600SemiBold',
          }}>
          Noto Serif JP Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifJP_700Bold',
          }}>
          Noto Serif JP Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifJP_900Black',
          }}>
          Noto Serif JP Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifJP_200ExtraLight](./NotoSerifJP_200ExtraLight.ttf.png)|![NotoSerifJP_300Light](./NotoSerifJP_300Light.ttf.png)|![NotoSerifJP_400Regular](./NotoSerifJP_400Regular.ttf.png)||
|![NotoSerifJP_500Medium](./NotoSerifJP_500Medium.ttf.png)|![NotoSerifJP_600SemiBold](./NotoSerifJP_600SemiBold.ttf.png)|![NotoSerifJP_700Bold](./NotoSerifJP_700Bold.ttf.png)||
|![NotoSerifJP_900Black](./NotoSerifJP_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-jp` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif JP page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+JP) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif JP on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+JP)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-jp)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-jp)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
