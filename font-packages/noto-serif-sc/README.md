# @expo-google-fonts/noto-serif-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-sc)

This package lets you use the [**Noto Serif SC**](https://fonts.google.com/specimen/Noto+Serif+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif SC

![Noto Serif SC](./font-family.png)

This font family contains [7 styles](#-gallery).

- `NotoSerifSC_200ExtraLight`
- `NotoSerifSC_300Light`
- `NotoSerifSC_400Regular`
- `NotoSerifSC_500Medium`
- `NotoSerifSC_600SemiBold`
- `NotoSerifSC_700Bold`
- `NotoSerifSC_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-serif-sc expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifSC_200ExtraLight,
  NotoSerifSC_300Light,
  NotoSerifSC_400Regular,
  NotoSerifSC_500Medium,
  NotoSerifSC_600SemiBold,
  NotoSerifSC_700Bold,
  NotoSerifSC_900Black,
} from '@expo-google-fonts/noto-serif-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifSC_200ExtraLight,
    NotoSerifSC_300Light,
    NotoSerifSC_400Regular,
    NotoSerifSC_500Medium,
    NotoSerifSC_600SemiBold,
    NotoSerifSC_700Bold,
    NotoSerifSC_900Black,
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
            fontFamily: 'NotoSerifSC_200ExtraLight',
          }}>
          Noto Serif SC Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifSC_300Light',
          }}>
          Noto Serif SC Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifSC_400Regular',
          }}>
          Noto Serif SC Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifSC_500Medium',
          }}>
          Noto Serif SC Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifSC_600SemiBold',
          }}>
          Noto Serif SC Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifSC_700Bold',
          }}>
          Noto Serif SC Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifSC_900Black',
          }}>
          Noto Serif SC Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifSC_200ExtraLight](./NotoSerifSC_200ExtraLight.ttf.png)|![NotoSerifSC_300Light](./NotoSerifSC_300Light.ttf.png)|![NotoSerifSC_400Regular](./NotoSerifSC_400Regular.ttf.png)||
|![NotoSerifSC_500Medium](./NotoSerifSC_500Medium.ttf.png)|![NotoSerifSC_600SemiBold](./NotoSerifSC_600SemiBold.ttf.png)|![NotoSerifSC_700Bold](./NotoSerifSC_700Bold.ttf.png)||
|![NotoSerifSC_900Black](./NotoSerifSC_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif SC page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif SC on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
