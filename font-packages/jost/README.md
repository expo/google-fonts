# @expo-google-fonts/jost

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/jost)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/jost)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/jost)

This package lets you use the [**Jost**](https://fonts.google.com/specimen/Jost) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Jost

![Jost](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Jost_100Thin`
- `Jost_200ExtraLight`
- `Jost_300Light`
- `Jost_400Regular`
- `Jost_500Medium`
- `Jost_600SemiBold`
- `Jost_700Bold`
- `Jost_800ExtraBold`
- `Jost_900Black`
- `Jost_100Thin_Italic`
- `Jost_200ExtraLight_Italic`
- `Jost_300Light_Italic`
- `Jost_400Regular_Italic`
- `Jost_500Medium_Italic`
- `Jost_600SemiBold_Italic`
- `Jost_700Bold_Italic`
- `Jost_800ExtraBold_Italic`
- `Jost_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/jost expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_100Thin,
  Jost_200ExtraLight,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_800ExtraBold,
  Jost_900Black,
  Jost_100Thin_Italic,
  Jost_200ExtraLight_Italic,
  Jost_300Light_Italic,
  Jost_400Regular_Italic,
  Jost_500Medium_Italic,
  Jost_600SemiBold_Italic,
  Jost_700Bold_Italic,
  Jost_800ExtraBold_Italic,
  Jost_900Black_Italic,
} from '@expo-google-fonts/jost';

export default () => {
  let [fontsLoaded] = useFonts({
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_200ExtraLight_Italic,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
    Jost_800ExtraBold_Italic,
    Jost_900Black_Italic,
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
            fontFamily: 'Jost_100Thin',
          }}>
          Jost Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_200ExtraLight',
          }}>
          Jost Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_300Light',
          }}>
          Jost Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_400Regular',
          }}>
          Jost Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_500Medium',
          }}>
          Jost Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_600SemiBold',
          }}>
          Jost Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_700Bold',
          }}>
          Jost Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_800ExtraBold',
          }}>
          Jost Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_900Black',
          }}>
          Jost Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_100Thin_Italic',
          }}>
          Jost Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_200ExtraLight_Italic',
          }}>
          Jost Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_300Light_Italic',
          }}>
          Jost Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_400Regular_Italic',
          }}>
          Jost Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_500Medium_Italic',
          }}>
          Jost Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_600SemiBold_Italic',
          }}>
          Jost Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_700Bold_Italic',
          }}>
          Jost Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_800ExtraBold_Italic',
          }}>
          Jost Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Jost_900Black_Italic',
          }}>
          Jost Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Jost_100Thin](./Jost_100Thin.ttf.png)|![Jost_200ExtraLight](./Jost_200ExtraLight.ttf.png)|![Jost_300Light](./Jost_300Light.ttf.png)||
|![Jost_400Regular](./Jost_400Regular.ttf.png)|![Jost_500Medium](./Jost_500Medium.ttf.png)|![Jost_600SemiBold](./Jost_600SemiBold.ttf.png)||
|![Jost_700Bold](./Jost_700Bold.ttf.png)|![Jost_800ExtraBold](./Jost_800ExtraBold.ttf.png)|![Jost_900Black](./Jost_900Black.ttf.png)||
|![Jost_100Thin_Italic](./Jost_100Thin_Italic.ttf.png)|![Jost_200ExtraLight_Italic](./Jost_200ExtraLight_Italic.ttf.png)|![Jost_300Light_Italic](./Jost_300Light_Italic.ttf.png)||
|![Jost_400Regular_Italic](./Jost_400Regular_Italic.ttf.png)|![Jost_500Medium_Italic](./Jost_500Medium_Italic.ttf.png)|![Jost_600SemiBold_Italic](./Jost_600SemiBold_Italic.ttf.png)||
|![Jost_700Bold_Italic](./Jost_700Bold_Italic.ttf.png)|![Jost_800ExtraBold_Italic](./Jost_800ExtraBold_Italic.ttf.png)|![Jost_900Black_Italic](./Jost_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/jost` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Jost page on Google Fonts](https://fonts.google.com/specimen/Jost) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Jost on Google Fonts](https://fonts.google.com/specimen/Jost)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/jost)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/jost)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
