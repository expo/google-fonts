# @expo-google-fonts/plus-jakarta-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/plus-jakarta-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/plus-jakarta-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/plus-jakarta-sans)

This package lets you use the [**Plus Jakarta Sans**](https://fonts.google.com/specimen/Plus+Jakarta+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Plus Jakarta Sans

![Plus Jakarta Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `PlusJakartaSans_200ExtraLight`
- `PlusJakartaSans_300Light`
- `PlusJakartaSans_400Regular`
- `PlusJakartaSans_500Medium`
- `PlusJakartaSans_600SemiBold`
- `PlusJakartaSans_700Bold`
- `PlusJakartaSans_800ExtraBold`
- `PlusJakartaSans_200ExtraLight_Italic`
- `PlusJakartaSans_300Light_Italic`
- `PlusJakartaSans_400Regular_Italic`
- `PlusJakartaSans_500Medium_Italic`
- `PlusJakartaSans_600SemiBold_Italic`
- `PlusJakartaSans_700Bold_Italic`
- `PlusJakartaSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/plus-jakarta-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlusJakartaSans_200ExtraLight,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  PlusJakartaSans_200ExtraLight_Italic,
  PlusJakartaSans_300Light_Italic,
  PlusJakartaSans_400Regular_Italic,
  PlusJakartaSans_500Medium_Italic,
  PlusJakartaSans_600SemiBold_Italic,
  PlusJakartaSans_700Bold_Italic,
  PlusJakartaSans_800ExtraBold_Italic,
} from '@expo-google-fonts/plus-jakarta-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
    PlusJakartaSans_200ExtraLight_Italic,
    PlusJakartaSans_300Light_Italic,
    PlusJakartaSans_400Regular_Italic,
    PlusJakartaSans_500Medium_Italic,
    PlusJakartaSans_600SemiBold_Italic,
    PlusJakartaSans_700Bold_Italic,
    PlusJakartaSans_800ExtraBold_Italic,
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
            fontFamily: 'PlusJakartaSans_200ExtraLight',
          }}>
          Plus Jakarta Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_300Light',
          }}>
          Plus Jakarta Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_400Regular',
          }}>
          Plus Jakarta Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_500Medium',
          }}>
          Plus Jakarta Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_600SemiBold',
          }}>
          Plus Jakarta Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_700Bold',
          }}>
          Plus Jakarta Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_800ExtraBold',
          }}>
          Plus Jakarta Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_200ExtraLight_Italic',
          }}>
          Plus Jakarta Sans Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_300Light_Italic',
          }}>
          Plus Jakarta Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_400Regular_Italic',
          }}>
          Plus Jakarta Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_500Medium_Italic',
          }}>
          Plus Jakarta Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_600SemiBold_Italic',
          }}>
          Plus Jakarta Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_700Bold_Italic',
          }}>
          Plus Jakarta Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlusJakartaSans_800ExtraBold_Italic',
          }}>
          Plus Jakarta Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PlusJakartaSans_200ExtraLight](./PlusJakartaSans_200ExtraLight.ttf.png)|![PlusJakartaSans_300Light](./PlusJakartaSans_300Light.ttf.png)|![PlusJakartaSans_400Regular](./PlusJakartaSans_400Regular.ttf.png)||
|![PlusJakartaSans_500Medium](./PlusJakartaSans_500Medium.ttf.png)|![PlusJakartaSans_600SemiBold](./PlusJakartaSans_600SemiBold.ttf.png)|![PlusJakartaSans_700Bold](./PlusJakartaSans_700Bold.ttf.png)||
|![PlusJakartaSans_800ExtraBold](./PlusJakartaSans_800ExtraBold.ttf.png)|![PlusJakartaSans_200ExtraLight_Italic](./PlusJakartaSans_200ExtraLight_Italic.ttf.png)|![PlusJakartaSans_300Light_Italic](./PlusJakartaSans_300Light_Italic.ttf.png)||
|![PlusJakartaSans_400Regular_Italic](./PlusJakartaSans_400Regular_Italic.ttf.png)|![PlusJakartaSans_500Medium_Italic](./PlusJakartaSans_500Medium_Italic.ttf.png)|![PlusJakartaSans_600SemiBold_Italic](./PlusJakartaSans_600SemiBold_Italic.ttf.png)||
|![PlusJakartaSans_700Bold_Italic](./PlusJakartaSans_700Bold_Italic.ttf.png)|![PlusJakartaSans_800ExtraBold_Italic](./PlusJakartaSans_800ExtraBold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/plus-jakarta-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Plus Jakarta Sans page on Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Plus Jakarta Sans on Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/plus-jakarta-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/plus-jakarta-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
