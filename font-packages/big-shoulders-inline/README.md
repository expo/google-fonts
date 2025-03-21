# @expo-google-fonts/big-shoulders-inline

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-inline)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-inline)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-inline)

This package lets you use the [**Big Shoulders Inline**](https://fonts.google.com/specimen/Big+Shoulders+Inline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Inline

![Big Shoulders Inline](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BigShouldersInline_100Thin`
- `BigShouldersInline_200ExtraLight`
- `BigShouldersInline_300Light`
- `BigShouldersInline_400Regular`
- `BigShouldersInline_500Medium`
- `BigShouldersInline_600SemiBold`
- `BigShouldersInline_700Bold`
- `BigShouldersInline_800ExtraBold`
- `BigShouldersInline_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/big-shoulders-inline expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShouldersInline_100Thin,
  BigShouldersInline_200ExtraLight,
  BigShouldersInline_300Light,
  BigShouldersInline_400Regular,
  BigShouldersInline_500Medium,
  BigShouldersInline_600SemiBold,
  BigShouldersInline_700Bold,
  BigShouldersInline_800ExtraBold,
  BigShouldersInline_900Black,
} from '@expo-google-fonts/big-shoulders-inline';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersInline_100Thin,
    BigShouldersInline_200ExtraLight,
    BigShouldersInline_300Light,
    BigShouldersInline_400Regular,
    BigShouldersInline_500Medium,
    BigShouldersInline_600SemiBold,
    BigShouldersInline_700Bold,
    BigShouldersInline_800ExtraBold,
    BigShouldersInline_900Black,
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
            fontFamily: 'BigShouldersInline_100Thin',
          }}>
          Big Shoulders Inline Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_200ExtraLight',
          }}>
          Big Shoulders Inline Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_300Light',
          }}>
          Big Shoulders Inline Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_400Regular',
          }}>
          Big Shoulders Inline Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_500Medium',
          }}>
          Big Shoulders Inline Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_600SemiBold',
          }}>
          Big Shoulders Inline Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_700Bold',
          }}>
          Big Shoulders Inline Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_800ExtraBold',
          }}>
          Big Shoulders Inline Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInline_900Black',
          }}>
          Big Shoulders Inline Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersInline_100Thin](./BigShouldersInline_100Thin.ttf.png)|![BigShouldersInline_200ExtraLight](./BigShouldersInline_200ExtraLight.ttf.png)|![BigShouldersInline_300Light](./BigShouldersInline_300Light.ttf.png)||
|![BigShouldersInline_400Regular](./BigShouldersInline_400Regular.ttf.png)|![BigShouldersInline_500Medium](./BigShouldersInline_500Medium.ttf.png)|![BigShouldersInline_600SemiBold](./BigShouldersInline_600SemiBold.ttf.png)||
|![BigShouldersInline_700Bold](./BigShouldersInline_700Bold.ttf.png)|![BigShouldersInline_800ExtraBold](./BigShouldersInline_800ExtraBold.ttf.png)|![BigShouldersInline_900Black](./BigShouldersInline_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-inline` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Inline page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Inline) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Inline on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Inline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-inline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-inline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
