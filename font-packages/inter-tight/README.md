# @expo-google-fonts/inter-tight

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inter-tight)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inter-tight)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inter-tight)

This package lets you use the [**Inter Tight**](https://fonts.google.com/specimen/Inter+Tight) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Inter Tight

![Inter Tight](./font-family.png)

This font family contains [18 styles](#-gallery).

- `InterTight_100Thin`
- `InterTight_200ExtraLight`
- `InterTight_300Light`
- `InterTight_400Regular`
- `InterTight_500Medium`
- `InterTight_600SemiBold`
- `InterTight_700Bold`
- `InterTight_800ExtraBold`
- `InterTight_900Black`
- `InterTight_100Thin_Italic`
- `InterTight_200ExtraLight_Italic`
- `InterTight_300Light_Italic`
- `InterTight_400Regular_Italic`
- `InterTight_500Medium_Italic`
- `InterTight_600SemiBold_Italic`
- `InterTight_700Bold_Italic`
- `InterTight_800ExtraBold_Italic`
- `InterTight_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inter-tight expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  InterTight_100Thin,
  InterTight_200ExtraLight,
  InterTight_300Light,
  InterTight_400Regular,
  InterTight_500Medium,
  InterTight_600SemiBold,
  InterTight_700Bold,
  InterTight_800ExtraBold,
  InterTight_900Black,
  InterTight_100Thin_Italic,
  InterTight_200ExtraLight_Italic,
  InterTight_300Light_Italic,
  InterTight_400Regular_Italic,
  InterTight_500Medium_Italic,
  InterTight_600SemiBold_Italic,
  InterTight_700Bold_Italic,
  InterTight_800ExtraBold_Italic,
  InterTight_900Black_Italic,
} from '@expo-google-fonts/inter-tight';

export default () => {
  let [fontsLoaded] = useFonts({
    InterTight_100Thin,
    InterTight_200ExtraLight,
    InterTight_300Light,
    InterTight_400Regular,
    InterTight_500Medium,
    InterTight_600SemiBold,
    InterTight_700Bold,
    InterTight_800ExtraBold,
    InterTight_900Black,
    InterTight_100Thin_Italic,
    InterTight_200ExtraLight_Italic,
    InterTight_300Light_Italic,
    InterTight_400Regular_Italic,
    InterTight_500Medium_Italic,
    InterTight_600SemiBold_Italic,
    InterTight_700Bold_Italic,
    InterTight_800ExtraBold_Italic,
    InterTight_900Black_Italic,
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
            fontFamily: 'InterTight_100Thin',
          }}>
          Inter Tight Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_200ExtraLight',
          }}>
          Inter Tight Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_300Light',
          }}>
          Inter Tight Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_400Regular',
          }}>
          Inter Tight Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_500Medium',
          }}>
          Inter Tight Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_600SemiBold',
          }}>
          Inter Tight Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_700Bold',
          }}>
          Inter Tight Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_800ExtraBold',
          }}>
          Inter Tight Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_900Black',
          }}>
          Inter Tight Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_100Thin_Italic',
          }}>
          Inter Tight Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_200ExtraLight_Italic',
          }}>
          Inter Tight Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_300Light_Italic',
          }}>
          Inter Tight Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_400Regular_Italic',
          }}>
          Inter Tight Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_500Medium_Italic',
          }}>
          Inter Tight Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_600SemiBold_Italic',
          }}>
          Inter Tight Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_700Bold_Italic',
          }}>
          Inter Tight Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_800ExtraBold_Italic',
          }}>
          Inter Tight Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'InterTight_900Black_Italic',
          }}>
          Inter Tight Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![InterTight_100Thin](./InterTight_100Thin.ttf.png)|![InterTight_200ExtraLight](./InterTight_200ExtraLight.ttf.png)|![InterTight_300Light](./InterTight_300Light.ttf.png)||
|![InterTight_400Regular](./InterTight_400Regular.ttf.png)|![InterTight_500Medium](./InterTight_500Medium.ttf.png)|![InterTight_600SemiBold](./InterTight_600SemiBold.ttf.png)||
|![InterTight_700Bold](./InterTight_700Bold.ttf.png)|![InterTight_800ExtraBold](./InterTight_800ExtraBold.ttf.png)|![InterTight_900Black](./InterTight_900Black.ttf.png)||
|![InterTight_100Thin_Italic](./InterTight_100Thin_Italic.ttf.png)|![InterTight_200ExtraLight_Italic](./InterTight_200ExtraLight_Italic.ttf.png)|![InterTight_300Light_Italic](./InterTight_300Light_Italic.ttf.png)||
|![InterTight_400Regular_Italic](./InterTight_400Regular_Italic.ttf.png)|![InterTight_500Medium_Italic](./InterTight_500Medium_Italic.ttf.png)|![InterTight_600SemiBold_Italic](./InterTight_600SemiBold_Italic.ttf.png)||
|![InterTight_700Bold_Italic](./InterTight_700Bold_Italic.ttf.png)|![InterTight_800ExtraBold_Italic](./InterTight_800ExtraBold_Italic.ttf.png)|![InterTight_900Black_Italic](./InterTight_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/inter-tight` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inter Tight page on Google Fonts](https://fonts.google.com/specimen/Inter+Tight) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inter Tight on Google Fonts](https://fonts.google.com/specimen/Inter+Tight)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inter-tight)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inter-tight)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
