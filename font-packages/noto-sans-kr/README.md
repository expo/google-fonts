# @expo-google-fonts/noto-sans-kr

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-kr)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-kr)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-kr)

This package lets you use the [**Noto Sans KR**](https://fonts.google.com/specimen/Noto+Sans+KR) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans KR

![Noto Sans KR](./font-family.png)

This font family contains [6 styles](#-gallery).

- `NotoSansKR_100Thin`
- `NotoSansKR_300Light`
- `NotoSansKR_400Regular`
- `NotoSansKR_500Medium`
- `NotoSansKR_700Bold`
- `NotoSansKR_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-kr expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from '@expo-google-fonts/noto-sans-kr';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
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
            fontFamily: 'NotoSansKR_100Thin',
          }}>
          Noto Sans KR Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKR_300Light',
          }}>
          Noto Sans KR Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKR_400Regular',
          }}>
          Noto Sans KR Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKR_500Medium',
          }}>
          Noto Sans KR Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKR_700Bold',
          }}>
          Noto Sans KR Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKR_900Black',
          }}>
          Noto Sans KR Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansKR_100Thin](./NotoSansKR_100Thin.ttf.png)|![NotoSansKR_300Light](./NotoSansKR_300Light.ttf.png)|![NotoSansKR_400Regular](./NotoSansKR_400Regular.ttf.png)||
|![NotoSansKR_500Medium](./NotoSansKR_500Medium.ttf.png)|![NotoSansKR_700Bold](./NotoSansKR_700Bold.ttf.png)|![NotoSansKR_900Black](./NotoSansKR_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-kr` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans KR page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+KR) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans KR on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+KR)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-kr)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-kr)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
