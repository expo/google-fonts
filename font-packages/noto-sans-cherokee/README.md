# @expo-google-fonts/noto-sans-cherokee

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-cherokee)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-cherokee)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-cherokee)

This package lets you use the [**Noto Sans Cherokee**](https://fonts.google.com/specimen/Noto+Sans+Cherokee) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Cherokee

![Noto Sans Cherokee](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansCherokee_100Thin`
- `NotoSansCherokee_200ExtraLight`
- `NotoSansCherokee_300Light`
- `NotoSansCherokee_400Regular`
- `NotoSansCherokee_500Medium`
- `NotoSansCherokee_600SemiBold`
- `NotoSansCherokee_700Bold`
- `NotoSansCherokee_800ExtraBold`
- `NotoSansCherokee_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-cherokee expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansCherokee_100Thin,
  NotoSansCherokee_200ExtraLight,
  NotoSansCherokee_300Light,
  NotoSansCherokee_400Regular,
  NotoSansCherokee_500Medium,
  NotoSansCherokee_600SemiBold,
  NotoSansCherokee_700Bold,
  NotoSansCherokee_800ExtraBold,
  NotoSansCherokee_900Black,
} from '@expo-google-fonts/noto-sans-cherokee';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansCherokee_100Thin,
    NotoSansCherokee_200ExtraLight,
    NotoSansCherokee_300Light,
    NotoSansCherokee_400Regular,
    NotoSansCherokee_500Medium,
    NotoSansCherokee_600SemiBold,
    NotoSansCherokee_700Bold,
    NotoSansCherokee_800ExtraBold,
    NotoSansCherokee_900Black,
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
            fontFamily: 'NotoSansCherokee_100Thin',
          }}>
          Noto Sans Cherokee Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_200ExtraLight',
          }}>
          Noto Sans Cherokee Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_300Light',
          }}>
          Noto Sans Cherokee Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_400Regular',
          }}>
          Noto Sans Cherokee Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_500Medium',
          }}>
          Noto Sans Cherokee Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_600SemiBold',
          }}>
          Noto Sans Cherokee Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_700Bold',
          }}>
          Noto Sans Cherokee Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_800ExtraBold',
          }}>
          Noto Sans Cherokee Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCherokee_900Black',
          }}>
          Noto Sans Cherokee Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansCherokee_100Thin](./NotoSansCherokee_100Thin.ttf.png)|![NotoSansCherokee_200ExtraLight](./NotoSansCherokee_200ExtraLight.ttf.png)|![NotoSansCherokee_300Light](./NotoSansCherokee_300Light.ttf.png)||
|![NotoSansCherokee_400Regular](./NotoSansCherokee_400Regular.ttf.png)|![NotoSansCherokee_500Medium](./NotoSansCherokee_500Medium.ttf.png)|![NotoSansCherokee_600SemiBold](./NotoSansCherokee_600SemiBold.ttf.png)||
|![NotoSansCherokee_700Bold](./NotoSansCherokee_700Bold.ttf.png)|![NotoSansCherokee_800ExtraBold](./NotoSansCherokee_800ExtraBold.ttf.png)|![NotoSansCherokee_900Black](./NotoSansCherokee_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-cherokee` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Cherokee page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Cherokee) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Cherokee on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Cherokee)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-cherokee)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-cherokee)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
