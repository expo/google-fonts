# @expo-google-fonts/noto-sans-tc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-tc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-tc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-tc)

This package lets you use the [**Noto Sans TC**](https://fonts.google.com/specimen/Noto+Sans+TC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans TC

![Noto Sans TC](./font-family.png)

This font family contains [6 styles](#-gallery).

- `NotoSansTC_100Thin`
- `NotoSansTC_300Light`
- `NotoSansTC_400Regular`
- `NotoSansTC_500Medium`
- `NotoSansTC_700Bold`
- `NotoSansTC_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-tc expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansTC_100Thin,
  NotoSansTC_300Light,
  NotoSansTC_400Regular,
  NotoSansTC_500Medium,
  NotoSansTC_700Bold,
  NotoSansTC_900Black,
} from '@expo-google-fonts/noto-sans-tc';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansTC_100Thin,
    NotoSansTC_300Light,
    NotoSansTC_400Regular,
    NotoSansTC_500Medium,
    NotoSansTC_700Bold,
    NotoSansTC_900Black,
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
            fontFamily: 'NotoSansTC_100Thin',
          }}>
          Noto Sans TC Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansTC_300Light',
          }}>
          Noto Sans TC Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansTC_400Regular',
          }}>
          Noto Sans TC Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansTC_500Medium',
          }}>
          Noto Sans TC Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansTC_700Bold',
          }}>
          Noto Sans TC Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansTC_900Black',
          }}>
          Noto Sans TC Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansTC_100Thin](./NotoSansTC_100Thin.ttf.png)|![NotoSansTC_300Light](./NotoSansTC_300Light.ttf.png)|![NotoSansTC_400Regular](./NotoSansTC_400Regular.ttf.png)||
|![NotoSansTC_500Medium](./NotoSansTC_500Medium.ttf.png)|![NotoSansTC_700Bold](./NotoSansTC_700Bold.ttf.png)|![NotoSansTC_900Black](./NotoSansTC_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-tc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans TC page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+TC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans TC on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+TC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-tc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-tc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
