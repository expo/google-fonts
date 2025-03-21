# @expo-google-fonts/rethink-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rethink-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rethink-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rethink-sans)

This package lets you use the [**Rethink Sans**](https://fonts.google.com/specimen/Rethink+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Rethink Sans

![Rethink Sans](./font-family.png)

This font family contains [10 styles](#-gallery).

- `RethinkSans_400Regular`
- `RethinkSans_500Medium`
- `RethinkSans_600SemiBold`
- `RethinkSans_700Bold`
- `RethinkSans_800ExtraBold`
- `RethinkSans_400Regular_Italic`
- `RethinkSans_500Medium_Italic`
- `RethinkSans_600SemiBold_Italic`
- `RethinkSans_700Bold_Italic`
- `RethinkSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/rethink-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RethinkSans_400Regular,
  RethinkSans_500Medium,
  RethinkSans_600SemiBold,
  RethinkSans_700Bold,
  RethinkSans_800ExtraBold,
  RethinkSans_400Regular_Italic,
  RethinkSans_500Medium_Italic,
  RethinkSans_600SemiBold_Italic,
  RethinkSans_700Bold_Italic,
  RethinkSans_800ExtraBold_Italic,
} from '@expo-google-fonts/rethink-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    RethinkSans_400Regular,
    RethinkSans_500Medium,
    RethinkSans_600SemiBold,
    RethinkSans_700Bold,
    RethinkSans_800ExtraBold,
    RethinkSans_400Regular_Italic,
    RethinkSans_500Medium_Italic,
    RethinkSans_600SemiBold_Italic,
    RethinkSans_700Bold_Italic,
    RethinkSans_800ExtraBold_Italic,
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
            fontFamily: 'RethinkSans_400Regular',
          }}>
          Rethink Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_500Medium',
          }}>
          Rethink Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_600SemiBold',
          }}>
          Rethink Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_700Bold',
          }}>
          Rethink Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_800ExtraBold',
          }}>
          Rethink Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_400Regular_Italic',
          }}>
          Rethink Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_500Medium_Italic',
          }}>
          Rethink Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_600SemiBold_Italic',
          }}>
          Rethink Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_700Bold_Italic',
          }}>
          Rethink Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RethinkSans_800ExtraBold_Italic',
          }}>
          Rethink Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![RethinkSans_400Regular](./RethinkSans_400Regular.ttf.png)|![RethinkSans_500Medium](./RethinkSans_500Medium.ttf.png)|![RethinkSans_600SemiBold](./RethinkSans_600SemiBold.ttf.png)||
|![RethinkSans_700Bold](./RethinkSans_700Bold.ttf.png)|![RethinkSans_800ExtraBold](./RethinkSans_800ExtraBold.ttf.png)|![RethinkSans_400Regular_Italic](./RethinkSans_400Regular_Italic.ttf.png)||
|![RethinkSans_500Medium_Italic](./RethinkSans_500Medium_Italic.ttf.png)|![RethinkSans_600SemiBold_Italic](./RethinkSans_600SemiBold_Italic.ttf.png)|![RethinkSans_700Bold_Italic](./RethinkSans_700Bold_Italic.ttf.png)||
|![RethinkSans_800ExtraBold_Italic](./RethinkSans_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/rethink-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rethink Sans page on Google Fonts](https://fonts.google.com/specimen/Rethink+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rethink Sans on Google Fonts](https://fonts.google.com/specimen/Rethink+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rethink-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rethink-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
