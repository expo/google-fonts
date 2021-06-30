# @expo-google-fonts/public-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/public-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/public-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/public-sans)

This package lets you use the [**Public Sans**](https://fonts.google.com/specimen/Public+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Public Sans

![Public Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `PublicSans_100Thin`
- `PublicSans_200ExtraLight`
- `PublicSans_300Light`
- `PublicSans_400Regular`
- `PublicSans_500Medium`
- `PublicSans_600SemiBold`
- `PublicSans_700Bold`
- `PublicSans_800ExtraBold`
- `PublicSans_900Black`
- `PublicSans_100Thin_Italic`
- `PublicSans_200ExtraLight_Italic`
- `PublicSans_300Light_Italic`
- `PublicSans_400Regular_Italic`
- `PublicSans_500Medium_Italic`
- `PublicSans_600SemiBold_Italic`
- `PublicSans_700Bold_Italic`
- `PublicSans_800ExtraBold_Italic`
- `PublicSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/public-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PublicSans_100Thin,
  PublicSans_200ExtraLight,
  PublicSans_300Light,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
  PublicSans_800ExtraBold,
  PublicSans_900Black,
  PublicSans_100Thin_Italic,
  PublicSans_200ExtraLight_Italic,
  PublicSans_300Light_Italic,
  PublicSans_400Regular_Italic,
  PublicSans_500Medium_Italic,
  PublicSans_600SemiBold_Italic,
  PublicSans_700Bold_Italic,
  PublicSans_800ExtraBold_Italic,
  PublicSans_900Black_Italic,
} from '@expo-google-fonts/public-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    PublicSans_100Thin,
    PublicSans_200ExtraLight,
    PublicSans_300Light,
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    PublicSans_800ExtraBold,
    PublicSans_900Black,
    PublicSans_100Thin_Italic,
    PublicSans_200ExtraLight_Italic,
    PublicSans_300Light_Italic,
    PublicSans_400Regular_Italic,
    PublicSans_500Medium_Italic,
    PublicSans_600SemiBold_Italic,
    PublicSans_700Bold_Italic,
    PublicSans_800ExtraBold_Italic,
    PublicSans_900Black_Italic,
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
            fontFamily: 'PublicSans_100Thin',
          }}>
          Public Sans Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_200ExtraLight',
          }}>
          Public Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_300Light',
          }}>
          Public Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_400Regular',
          }}>
          Public Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_500Medium',
          }}>
          Public Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_600SemiBold',
          }}>
          Public Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_700Bold',
          }}>
          Public Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_800ExtraBold',
          }}>
          Public Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_900Black',
          }}>
          Public Sans Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_100Thin_Italic',
          }}>
          Public Sans Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_200ExtraLight_Italic',
          }}>
          Public Sans Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_300Light_Italic',
          }}>
          Public Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_400Regular_Italic',
          }}>
          Public Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_500Medium_Italic',
          }}>
          Public Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_600SemiBold_Italic',
          }}>
          Public Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_700Bold_Italic',
          }}>
          Public Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_800ExtraBold_Italic',
          }}>
          Public Sans Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PublicSans_900Black_Italic',
          }}>
          Public Sans Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PublicSans_100Thin](./PublicSans_100Thin.ttf.png)|![PublicSans_200ExtraLight](./PublicSans_200ExtraLight.ttf.png)|![PublicSans_300Light](./PublicSans_300Light.ttf.png)||
|![PublicSans_400Regular](./PublicSans_400Regular.ttf.png)|![PublicSans_500Medium](./PublicSans_500Medium.ttf.png)|![PublicSans_600SemiBold](./PublicSans_600SemiBold.ttf.png)||
|![PublicSans_700Bold](./PublicSans_700Bold.ttf.png)|![PublicSans_800ExtraBold](./PublicSans_800ExtraBold.ttf.png)|![PublicSans_900Black](./PublicSans_900Black.ttf.png)||
|![PublicSans_100Thin_Italic](./PublicSans_100Thin_Italic.ttf.png)|![PublicSans_200ExtraLight_Italic](./PublicSans_200ExtraLight_Italic.ttf.png)|![PublicSans_300Light_Italic](./PublicSans_300Light_Italic.ttf.png)||
|![PublicSans_400Regular_Italic](./PublicSans_400Regular_Italic.ttf.png)|![PublicSans_500Medium_Italic](./PublicSans_500Medium_Italic.ttf.png)|![PublicSans_600SemiBold_Italic](./PublicSans_600SemiBold_Italic.ttf.png)||
|![PublicSans_700Bold_Italic](./PublicSans_700Bold_Italic.ttf.png)|![PublicSans_800ExtraBold_Italic](./PublicSans_800ExtraBold_Italic.ttf.png)|![PublicSans_900Black_Italic](./PublicSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/public-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Public Sans page on Google Fonts](https://fonts.google.com/specimen/Public+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Public Sans on Google Fonts](https://fonts.google.com/specimen/Public+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/public-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/public-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
