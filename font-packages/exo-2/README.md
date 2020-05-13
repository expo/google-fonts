# @expo-google-fonts/exo-2

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/exo-2)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/exo-2)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/exo-2)

This package lets you use the [**Exo 2**](https://fonts.google.com/specimen/Exo+2) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Exo 2

![Exo 2](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Exo2_100Thin`
- `Exo2_200ExtraLight`
- `Exo2_300Light`
- `Exo2_400Regular`
- `Exo2_500Medium`
- `Exo2_600SemiBold`
- `Exo2_700Bold`
- `Exo2_800ExtraBold`
- `Exo2_900Black`
- `Exo2_100Thin_Italic`
- `Exo2_200ExtraLight_Italic`
- `Exo2_300Light_Italic`
- `Exo2_400Regular_Italic`
- `Exo2_500Medium_Italic`
- `Exo2_600SemiBold_Italic`
- `Exo2_700Bold_Italic`
- `Exo2_800ExtraBold_Italic`
- `Exo2_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/exo-2 expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Exo2_100Thin,
  Exo2_200ExtraLight,
  Exo2_300Light,
  Exo2_400Regular,
  Exo2_500Medium,
  Exo2_600SemiBold,
  Exo2_700Bold,
  Exo2_800ExtraBold,
  Exo2_900Black,
  Exo2_100Thin_Italic,
  Exo2_200ExtraLight_Italic,
  Exo2_300Light_Italic,
  Exo2_400Regular_Italic,
  Exo2_500Medium_Italic,
  Exo2_600SemiBold_Italic,
  Exo2_700Bold_Italic,
  Exo2_800ExtraBold_Italic,
  Exo2_900Black_Italic,
} from '@expo-google-fonts/exo-2';

export default () => {
  let [fontsLoaded] = useFonts({
    Exo2_100Thin,
    Exo2_200ExtraLight,
    Exo2_300Light,
    Exo2_400Regular,
    Exo2_500Medium,
    Exo2_600SemiBold,
    Exo2_700Bold,
    Exo2_800ExtraBold,
    Exo2_900Black,
    Exo2_100Thin_Italic,
    Exo2_200ExtraLight_Italic,
    Exo2_300Light_Italic,
    Exo2_400Regular_Italic,
    Exo2_500Medium_Italic,
    Exo2_600SemiBold_Italic,
    Exo2_700Bold_Italic,
    Exo2_800ExtraBold_Italic,
    Exo2_900Black_Italic,
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
            fontFamily: 'Exo2_100Thin',
          }}>
          Exo 2 Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_200ExtraLight',
          }}>
          Exo 2 Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_300Light',
          }}>
          Exo 2 Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_400Regular',
          }}>
          Exo 2 Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_500Medium',
          }}>
          Exo 2 Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_600SemiBold',
          }}>
          Exo 2 Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_700Bold',
          }}>
          Exo 2 Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_800ExtraBold',
          }}>
          Exo 2 Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_900Black',
          }}>
          Exo 2 Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_100Thin_Italic',
          }}>
          Exo 2 Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_200ExtraLight_Italic',
          }}>
          Exo 2 Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_300Light_Italic',
          }}>
          Exo 2 Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_400Regular_Italic',
          }}>
          Exo 2 Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_500Medium_Italic',
          }}>
          Exo 2 Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_600SemiBold_Italic',
          }}>
          Exo 2 Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_700Bold_Italic',
          }}>
          Exo 2 Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_800ExtraBold_Italic',
          }}>
          Exo 2 Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Exo2_900Black_Italic',
          }}>
          Exo 2 Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Exo2_100Thin](./Exo2_100Thin.ttf.png)|![Exo2_200ExtraLight](./Exo2_200ExtraLight.ttf.png)|![Exo2_300Light](./Exo2_300Light.ttf.png)||
|![Exo2_400Regular](./Exo2_400Regular.ttf.png)|![Exo2_500Medium](./Exo2_500Medium.ttf.png)|![Exo2_600SemiBold](./Exo2_600SemiBold.ttf.png)||
|![Exo2_700Bold](./Exo2_700Bold.ttf.png)|![Exo2_800ExtraBold](./Exo2_800ExtraBold.ttf.png)|![Exo2_900Black](./Exo2_900Black.ttf.png)||
|![Exo2_100Thin_Italic](./Exo2_100Thin_Italic.ttf.png)|![Exo2_200ExtraLight_Italic](./Exo2_200ExtraLight_Italic.ttf.png)|![Exo2_300Light_Italic](./Exo2_300Light_Italic.ttf.png)||
|![Exo2_400Regular_Italic](./Exo2_400Regular_Italic.ttf.png)|![Exo2_500Medium_Italic](./Exo2_500Medium_Italic.ttf.png)|![Exo2_600SemiBold_Italic](./Exo2_600SemiBold_Italic.ttf.png)||
|![Exo2_700Bold_Italic](./Exo2_700Bold_Italic.ttf.png)|![Exo2_800ExtraBold_Italic](./Exo2_800ExtraBold_Italic.ttf.png)|![Exo2_900Black_Italic](./Exo2_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/exo-2` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Exo 2 page on Google Fonts](https://fonts.google.com/specimen/Exo+2) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Exo 2 on Google Fonts](https://fonts.google.com/specimen/Exo+2)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/exo-2)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/exo-2)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
