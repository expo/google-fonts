# @expo-google-fonts/gantari

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gantari)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gantari)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gantari)

This package lets you use the [**Gantari**](https://fonts.google.com/specimen/Gantari) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Gantari

![Gantari](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Gantari_100Thin`
- `Gantari_200ExtraLight`
- `Gantari_300Light`
- `Gantari_400Regular`
- `Gantari_500Medium`
- `Gantari_600SemiBold`
- `Gantari_700Bold`
- `Gantari_800ExtraBold`
- `Gantari_900Black`
- `Gantari_100Thin_Italic`
- `Gantari_200ExtraLight_Italic`
- `Gantari_300Light_Italic`
- `Gantari_400Regular_Italic`
- `Gantari_500Medium_Italic`
- `Gantari_600SemiBold_Italic`
- `Gantari_700Bold_Italic`
- `Gantari_800ExtraBold_Italic`
- `Gantari_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/gantari expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Gantari_100Thin,
  Gantari_200ExtraLight,
  Gantari_300Light,
  Gantari_400Regular,
  Gantari_500Medium,
  Gantari_600SemiBold,
  Gantari_700Bold,
  Gantari_800ExtraBold,
  Gantari_900Black,
  Gantari_100Thin_Italic,
  Gantari_200ExtraLight_Italic,
  Gantari_300Light_Italic,
  Gantari_400Regular_Italic,
  Gantari_500Medium_Italic,
  Gantari_600SemiBold_Italic,
  Gantari_700Bold_Italic,
  Gantari_800ExtraBold_Italic,
  Gantari_900Black_Italic,
} from '@expo-google-fonts/gantari';

export default () => {
  let [fontsLoaded] = useFonts({
    Gantari_100Thin,
    Gantari_200ExtraLight,
    Gantari_300Light,
    Gantari_400Regular,
    Gantari_500Medium,
    Gantari_600SemiBold,
    Gantari_700Bold,
    Gantari_800ExtraBold,
    Gantari_900Black,
    Gantari_100Thin_Italic,
    Gantari_200ExtraLight_Italic,
    Gantari_300Light_Italic,
    Gantari_400Regular_Italic,
    Gantari_500Medium_Italic,
    Gantari_600SemiBold_Italic,
    Gantari_700Bold_Italic,
    Gantari_800ExtraBold_Italic,
    Gantari_900Black_Italic,
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
            fontFamily: 'Gantari_100Thin',
          }}>
          Gantari Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_200ExtraLight',
          }}>
          Gantari Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_300Light',
          }}>
          Gantari Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_400Regular',
          }}>
          Gantari Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_500Medium',
          }}>
          Gantari Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_600SemiBold',
          }}>
          Gantari Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_700Bold',
          }}>
          Gantari Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_800ExtraBold',
          }}>
          Gantari Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_900Black',
          }}>
          Gantari Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_100Thin_Italic',
          }}>
          Gantari Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_200ExtraLight_Italic',
          }}>
          Gantari Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_300Light_Italic',
          }}>
          Gantari Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_400Regular_Italic',
          }}>
          Gantari Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_500Medium_Italic',
          }}>
          Gantari Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_600SemiBold_Italic',
          }}>
          Gantari Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_700Bold_Italic',
          }}>
          Gantari Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_800ExtraBold_Italic',
          }}>
          Gantari Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gantari_900Black_Italic',
          }}>
          Gantari Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Gantari_100Thin](./Gantari_100Thin.ttf.png)|![Gantari_200ExtraLight](./Gantari_200ExtraLight.ttf.png)|![Gantari_300Light](./Gantari_300Light.ttf.png)||
|![Gantari_400Regular](./Gantari_400Regular.ttf.png)|![Gantari_500Medium](./Gantari_500Medium.ttf.png)|![Gantari_600SemiBold](./Gantari_600SemiBold.ttf.png)||
|![Gantari_700Bold](./Gantari_700Bold.ttf.png)|![Gantari_800ExtraBold](./Gantari_800ExtraBold.ttf.png)|![Gantari_900Black](./Gantari_900Black.ttf.png)||
|![Gantari_100Thin_Italic](./Gantari_100Thin_Italic.ttf.png)|![Gantari_200ExtraLight_Italic](./Gantari_200ExtraLight_Italic.ttf.png)|![Gantari_300Light_Italic](./Gantari_300Light_Italic.ttf.png)||
|![Gantari_400Regular_Italic](./Gantari_400Regular_Italic.ttf.png)|![Gantari_500Medium_Italic](./Gantari_500Medium_Italic.ttf.png)|![Gantari_600SemiBold_Italic](./Gantari_600SemiBold_Italic.ttf.png)||
|![Gantari_700Bold_Italic](./Gantari_700Bold_Italic.ttf.png)|![Gantari_800ExtraBold_Italic](./Gantari_800ExtraBold_Italic.ttf.png)|![Gantari_900Black_Italic](./Gantari_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/gantari` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Gantari page on Google Fonts](https://fonts.google.com/specimen/Gantari) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Gantari on Google Fonts](https://fonts.google.com/specimen/Gantari)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gantari)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gantari)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
