# @expo-google-fonts/noto-sans-lao-looped

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-lao-looped)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-lao-looped)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-lao-looped)

This package lets you use the [**Noto Sans Lao Looped**](https://fonts.google.com/specimen/Noto+Sans+Lao+Looped) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Lao Looped

![Noto Sans Lao Looped](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansLaoLooped_100Thin`
- `NotoSansLaoLooped_200ExtraLight`
- `NotoSansLaoLooped_300Light`
- `NotoSansLaoLooped_400Regular`
- `NotoSansLaoLooped_500Medium`
- `NotoSansLaoLooped_600SemiBold`
- `NotoSansLaoLooped_700Bold`
- `NotoSansLaoLooped_800ExtraBold`
- `NotoSansLaoLooped_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-sans-lao-looped expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansLaoLooped_100Thin,
  NotoSansLaoLooped_200ExtraLight,
  NotoSansLaoLooped_300Light,
  NotoSansLaoLooped_400Regular,
  NotoSansLaoLooped_500Medium,
  NotoSansLaoLooped_600SemiBold,
  NotoSansLaoLooped_700Bold,
  NotoSansLaoLooped_800ExtraBold,
  NotoSansLaoLooped_900Black,
} from '@expo-google-fonts/noto-sans-lao-looped';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansLaoLooped_100Thin,
    NotoSansLaoLooped_200ExtraLight,
    NotoSansLaoLooped_300Light,
    NotoSansLaoLooped_400Regular,
    NotoSansLaoLooped_500Medium,
    NotoSansLaoLooped_600SemiBold,
    NotoSansLaoLooped_700Bold,
    NotoSansLaoLooped_800ExtraBold,
    NotoSansLaoLooped_900Black,
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
            fontFamily: 'NotoSansLaoLooped_100Thin',
          }}>
          Noto Sans Lao Looped Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_200ExtraLight',
          }}>
          Noto Sans Lao Looped Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_300Light',
          }}>
          Noto Sans Lao Looped Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_400Regular',
          }}>
          Noto Sans Lao Looped Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_500Medium',
          }}>
          Noto Sans Lao Looped Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_600SemiBold',
          }}>
          Noto Sans Lao Looped Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_700Bold',
          }}>
          Noto Sans Lao Looped Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_800ExtraBold',
          }}>
          Noto Sans Lao Looped Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansLaoLooped_900Black',
          }}>
          Noto Sans Lao Looped Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansLaoLooped_100Thin](./NotoSansLaoLooped_100Thin.ttf.png)|![NotoSansLaoLooped_200ExtraLight](./NotoSansLaoLooped_200ExtraLight.ttf.png)|![NotoSansLaoLooped_300Light](./NotoSansLaoLooped_300Light.ttf.png)||
|![NotoSansLaoLooped_400Regular](./NotoSansLaoLooped_400Regular.ttf.png)|![NotoSansLaoLooped_500Medium](./NotoSansLaoLooped_500Medium.ttf.png)|![NotoSansLaoLooped_600SemiBold](./NotoSansLaoLooped_600SemiBold.ttf.png)||
|![NotoSansLaoLooped_700Bold](./NotoSansLaoLooped_700Bold.ttf.png)|![NotoSansLaoLooped_800ExtraBold](./NotoSansLaoLooped_800ExtraBold.ttf.png)|![NotoSansLaoLooped_900Black](./NotoSansLaoLooped_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-lao-looped` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Lao Looped page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Lao+Looped) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Lao Looped on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Lao+Looped)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-lao-looped)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-lao-looped)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
