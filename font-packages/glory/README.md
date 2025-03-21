# @expo-google-fonts/glory

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/glory)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/glory)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/glory)

This package lets you use the [**Glory**](https://fonts.google.com/specimen/Glory) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Glory

![Glory](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Glory_100Thin`
- `Glory_200ExtraLight`
- `Glory_300Light`
- `Glory_400Regular`
- `Glory_500Medium`
- `Glory_600SemiBold`
- `Glory_700Bold`
- `Glory_800ExtraBold`
- `Glory_100Thin_Italic`
- `Glory_200ExtraLight_Italic`
- `Glory_300Light_Italic`
- `Glory_400Regular_Italic`
- `Glory_500Medium_Italic`
- `Glory_600SemiBold_Italic`
- `Glory_700Bold_Italic`
- `Glory_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/glory expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Glory_100Thin,
  Glory_200ExtraLight,
  Glory_300Light,
  Glory_400Regular,
  Glory_500Medium,
  Glory_600SemiBold,
  Glory_700Bold,
  Glory_800ExtraBold,
  Glory_100Thin_Italic,
  Glory_200ExtraLight_Italic,
  Glory_300Light_Italic,
  Glory_400Regular_Italic,
  Glory_500Medium_Italic,
  Glory_600SemiBold_Italic,
  Glory_700Bold_Italic,
  Glory_800ExtraBold_Italic,
} from '@expo-google-fonts/glory';

export default () => {
  let [fontsLoaded] = useFonts({
    Glory_100Thin,
    Glory_200ExtraLight,
    Glory_300Light,
    Glory_400Regular,
    Glory_500Medium,
    Glory_600SemiBold,
    Glory_700Bold,
    Glory_800ExtraBold,
    Glory_100Thin_Italic,
    Glory_200ExtraLight_Italic,
    Glory_300Light_Italic,
    Glory_400Regular_Italic,
    Glory_500Medium_Italic,
    Glory_600SemiBold_Italic,
    Glory_700Bold_Italic,
    Glory_800ExtraBold_Italic,
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
            fontFamily: 'Glory_100Thin',
          }}>
          Glory Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_200ExtraLight',
          }}>
          Glory Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_300Light',
          }}>
          Glory Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_400Regular',
          }}>
          Glory Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_500Medium',
          }}>
          Glory Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_600SemiBold',
          }}>
          Glory Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_700Bold',
          }}>
          Glory Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_800ExtraBold',
          }}>
          Glory Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_100Thin_Italic',
          }}>
          Glory Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_200ExtraLight_Italic',
          }}>
          Glory Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_300Light_Italic',
          }}>
          Glory Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_400Regular_Italic',
          }}>
          Glory Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_500Medium_Italic',
          }}>
          Glory Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_600SemiBold_Italic',
          }}>
          Glory Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_700Bold_Italic',
          }}>
          Glory Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Glory_800ExtraBold_Italic',
          }}>
          Glory Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Glory_100Thin](./Glory_100Thin.ttf.png)|![Glory_200ExtraLight](./Glory_200ExtraLight.ttf.png)|![Glory_300Light](./Glory_300Light.ttf.png)||
|![Glory_400Regular](./Glory_400Regular.ttf.png)|![Glory_500Medium](./Glory_500Medium.ttf.png)|![Glory_600SemiBold](./Glory_600SemiBold.ttf.png)||
|![Glory_700Bold](./Glory_700Bold.ttf.png)|![Glory_800ExtraBold](./Glory_800ExtraBold.ttf.png)|![Glory_100Thin_Italic](./Glory_100Thin_Italic.ttf.png)||
|![Glory_200ExtraLight_Italic](./Glory_200ExtraLight_Italic.ttf.png)|![Glory_300Light_Italic](./Glory_300Light_Italic.ttf.png)|![Glory_400Regular_Italic](./Glory_400Regular_Italic.ttf.png)||
|![Glory_500Medium_Italic](./Glory_500Medium_Italic.ttf.png)|![Glory_600SemiBold_Italic](./Glory_600SemiBold_Italic.ttf.png)|![Glory_700Bold_Italic](./Glory_700Bold_Italic.ttf.png)||
|![Glory_800ExtraBold_Italic](./Glory_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/glory` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Glory page on Google Fonts](https://fonts.google.com/specimen/Glory) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Glory on Google Fonts](https://fonts.google.com/specimen/Glory)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/glory)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/glory)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
