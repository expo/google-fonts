# @expo-google-fonts/raleway

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/raleway)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/raleway)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/raleway)

This package lets you use the [**Raleway**](https://fonts.google.com/specimen/Raleway) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Raleway

![Raleway](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Raleway_100Thin`
- `Raleway_200ExtraLight`
- `Raleway_300Light`
- `Raleway_400Regular`
- `Raleway_500Medium`
- `Raleway_600SemiBold`
- `Raleway_700Bold`
- `Raleway_800ExtraBold`
- `Raleway_900Black`
- `Raleway_100Thin_Italic`
- `Raleway_200ExtraLight_Italic`
- `Raleway_300Light_Italic`
- `Raleway_400Regular_Italic`
- `Raleway_500Medium_Italic`
- `Raleway_600SemiBold_Italic`
- `Raleway_700Bold_Italic`
- `Raleway_800ExtraBold_Italic`
- `Raleway_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/raleway expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light_Italic,
  Raleway_400Regular_Italic,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black_Italic,
} from '@expo-google-fonts/raleway';

export default () => {
  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight_Italic,
    Raleway_300Light_Italic,
    Raleway_400Regular_Italic,
    Raleway_500Medium_Italic,
    Raleway_600SemiBold_Italic,
    Raleway_700Bold_Italic,
    Raleway_800ExtraBold_Italic,
    Raleway_900Black_Italic,
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
            fontFamily: 'Raleway_100Thin',
          }}>
          Raleway Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_200ExtraLight',
          }}>
          Raleway Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_300Light',
          }}>
          Raleway Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_400Regular',
          }}>
          Raleway Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_500Medium',
          }}>
          Raleway Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_600SemiBold',
          }}>
          Raleway Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_700Bold',
          }}>
          Raleway Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_800ExtraBold',
          }}>
          Raleway Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_900Black',
          }}>
          Raleway Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_100Thin_Italic',
          }}>
          Raleway Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_200ExtraLight_Italic',
          }}>
          Raleway Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_300Light_Italic',
          }}>
          Raleway Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_400Regular_Italic',
          }}>
          Raleway Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_500Medium_Italic',
          }}>
          Raleway Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_600SemiBold_Italic',
          }}>
          Raleway Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_700Bold_Italic',
          }}>
          Raleway Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_800ExtraBold_Italic',
          }}>
          Raleway Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Raleway_900Black_Italic',
          }}>
          Raleway Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Raleway_100Thin](./Raleway_100Thin.ttf.png)|![Raleway_200ExtraLight](./Raleway_200ExtraLight.ttf.png)|![Raleway_300Light](./Raleway_300Light.ttf.png)||
|![Raleway_400Regular](./Raleway_400Regular.ttf.png)|![Raleway_500Medium](./Raleway_500Medium.ttf.png)|![Raleway_600SemiBold](./Raleway_600SemiBold.ttf.png)||
|![Raleway_700Bold](./Raleway_700Bold.ttf.png)|![Raleway_800ExtraBold](./Raleway_800ExtraBold.ttf.png)|![Raleway_900Black](./Raleway_900Black.ttf.png)||
|![Raleway_100Thin_Italic](./Raleway_100Thin_Italic.ttf.png)|![Raleway_200ExtraLight_Italic](./Raleway_200ExtraLight_Italic.ttf.png)|![Raleway_300Light_Italic](./Raleway_300Light_Italic.ttf.png)||
|![Raleway_400Regular_Italic](./Raleway_400Regular_Italic.ttf.png)|![Raleway_500Medium_Italic](./Raleway_500Medium_Italic.ttf.png)|![Raleway_600SemiBold_Italic](./Raleway_600SemiBold_Italic.ttf.png)||
|![Raleway_700Bold_Italic](./Raleway_700Bold_Italic.ttf.png)|![Raleway_800ExtraBold_Italic](./Raleway_800ExtraBold_Italic.ttf.png)|![Raleway_900Black_Italic](./Raleway_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/raleway` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Raleway page on Google Fonts](https://fonts.google.com/specimen/Raleway) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Raleway on Google Fonts](https://fonts.google.com/specimen/Raleway)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/raleway)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/raleway)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
