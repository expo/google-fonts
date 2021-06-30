# @expo-google-fonts/josefin-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/josefin-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/josefin-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/josefin-sans)

This package lets you use the [**Josefin Sans**](https://fonts.google.com/specimen/Josefin+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Josefin Sans

![Josefin Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `JosefinSans_100Thin`
- `JosefinSans_200ExtraLight`
- `JosefinSans_300Light`
- `JosefinSans_400Regular`
- `JosefinSans_500Medium`
- `JosefinSans_600SemiBold`
- `JosefinSans_700Bold`
- `JosefinSans_100Thin_Italic`
- `JosefinSans_200ExtraLight_Italic`
- `JosefinSans_300Light_Italic`
- `JosefinSans_400Regular_Italic`
- `JosefinSans_500Medium_Italic`
- `JosefinSans_600SemiBold_Italic`
- `JosefinSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/josefin-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
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
            fontFamily: 'JosefinSans_100Thin',
          }}>
          Josefin Sans Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_200ExtraLight',
          }}>
          Josefin Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_300Light',
          }}>
          Josefin Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_400Regular',
          }}>
          Josefin Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_500Medium',
          }}>
          Josefin Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_600SemiBold',
          }}>
          Josefin Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_700Bold',
          }}>
          Josefin Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_100Thin_Italic',
          }}>
          Josefin Sans Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_200ExtraLight_Italic',
          }}>
          Josefin Sans Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_300Light_Italic',
          }}>
          Josefin Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_400Regular_Italic',
          }}>
          Josefin Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_500Medium_Italic',
          }}>
          Josefin Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_600SemiBold_Italic',
          }}>
          Josefin Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JosefinSans_700Bold_Italic',
          }}>
          Josefin Sans Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![JosefinSans_100Thin](./JosefinSans_100Thin.ttf.png)|![JosefinSans_200ExtraLight](./JosefinSans_200ExtraLight.ttf.png)|![JosefinSans_300Light](./JosefinSans_300Light.ttf.png)||
|![JosefinSans_400Regular](./JosefinSans_400Regular.ttf.png)|![JosefinSans_500Medium](./JosefinSans_500Medium.ttf.png)|![JosefinSans_600SemiBold](./JosefinSans_600SemiBold.ttf.png)||
|![JosefinSans_700Bold](./JosefinSans_700Bold.ttf.png)|![JosefinSans_100Thin_Italic](./JosefinSans_100Thin_Italic.ttf.png)|![JosefinSans_200ExtraLight_Italic](./JosefinSans_200ExtraLight_Italic.ttf.png)||
|![JosefinSans_300Light_Italic](./JosefinSans_300Light_Italic.ttf.png)|![JosefinSans_400Regular_Italic](./JosefinSans_400Regular_Italic.ttf.png)|![JosefinSans_500Medium_Italic](./JosefinSans_500Medium_Italic.ttf.png)||
|![JosefinSans_600SemiBold_Italic](./JosefinSans_600SemiBold_Italic.ttf.png)|![JosefinSans_700Bold_Italic](./JosefinSans_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/josefin-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Josefin Sans page on Google Fonts](https://fonts.google.com/specimen/Josefin+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Josefin Sans on Google Fonts](https://fonts.google.com/specimen/Josefin+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/josefin-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/josefin-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
