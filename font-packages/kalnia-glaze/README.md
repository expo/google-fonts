# @expo-google-fonts/kalnia-glaze

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kalnia-glaze)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kalnia-glaze)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kalnia-glaze)

This package lets you use the [**Kalnia Glaze**](https://fonts.google.com/specimen/Kalnia+Glaze) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kalnia Glaze

![Kalnia Glaze](./font-family.png)

This font family contains [7 styles](#-gallery).

- `KalniaGlaze_100Thin`
- `KalniaGlaze_200ExtraLight`
- `KalniaGlaze_300Light`
- `KalniaGlaze_400Regular`
- `KalniaGlaze_500Medium`
- `KalniaGlaze_600SemiBold`
- `KalniaGlaze_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/kalnia-glaze expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  KalniaGlaze_100Thin,
  KalniaGlaze_200ExtraLight,
  KalniaGlaze_300Light,
  KalniaGlaze_400Regular,
  KalniaGlaze_500Medium,
  KalniaGlaze_600SemiBold,
  KalniaGlaze_700Bold,
} from '@expo-google-fonts/kalnia-glaze';

export default () => {
  let [fontsLoaded] = useFonts({
    KalniaGlaze_100Thin,
    KalniaGlaze_200ExtraLight,
    KalniaGlaze_300Light,
    KalniaGlaze_400Regular,
    KalniaGlaze_500Medium,
    KalniaGlaze_600SemiBold,
    KalniaGlaze_700Bold,
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
            fontFamily: 'KalniaGlaze_100Thin',
          }}>
          Kalnia Glaze Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KalniaGlaze_200ExtraLight',
          }}>
          Kalnia Glaze Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KalniaGlaze_300Light',
          }}>
          Kalnia Glaze Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KalniaGlaze_400Regular',
          }}>
          Kalnia Glaze Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KalniaGlaze_500Medium',
          }}>
          Kalnia Glaze Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KalniaGlaze_600SemiBold',
          }}>
          Kalnia Glaze Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KalniaGlaze_700Bold',
          }}>
          Kalnia Glaze Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![KalniaGlaze_100Thin](./KalniaGlaze_100Thin.ttf.png)|![KalniaGlaze_200ExtraLight](./KalniaGlaze_200ExtraLight.ttf.png)|![KalniaGlaze_300Light](./KalniaGlaze_300Light.ttf.png)||
|![KalniaGlaze_400Regular](./KalniaGlaze_400Regular.ttf.png)|![KalniaGlaze_500Medium](./KalniaGlaze_500Medium.ttf.png)|![KalniaGlaze_600SemiBold](./KalniaGlaze_600SemiBold.ttf.png)||
|![KalniaGlaze_700Bold](./KalniaGlaze_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kalnia-glaze` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kalnia Glaze page on Google Fonts](https://fonts.google.com/specimen/Kalnia+Glaze) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kalnia Glaze on Google Fonts](https://fonts.google.com/specimen/Kalnia+Glaze)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kalnia-glaze)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kalnia-glaze)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
