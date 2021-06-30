# @expo-google-fonts/grandstander

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/grandstander)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/grandstander)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/grandstander)

This package lets you use the [**Grandstander**](https://fonts.google.com/specimen/Grandstander) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Grandstander

![Grandstander](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Grandstander_100Thin`
- `Grandstander_200ExtraLight`
- `Grandstander_300Light`
- `Grandstander_400Regular`
- `Grandstander_500Medium`
- `Grandstander_600SemiBold`
- `Grandstander_700Bold`
- `Grandstander_800ExtraBold`
- `Grandstander_900Black`
- `Grandstander_100Thin_Italic`
- `Grandstander_200ExtraLight_Italic`
- `Grandstander_300Light_Italic`
- `Grandstander_400Regular_Italic`
- `Grandstander_500Medium_Italic`
- `Grandstander_600SemiBold_Italic`
- `Grandstander_700Bold_Italic`
- `Grandstander_800ExtraBold_Italic`
- `Grandstander_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/grandstander expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Grandstander_100Thin,
  Grandstander_200ExtraLight,
  Grandstander_300Light,
  Grandstander_400Regular,
  Grandstander_500Medium,
  Grandstander_600SemiBold,
  Grandstander_700Bold,
  Grandstander_800ExtraBold,
  Grandstander_900Black,
  Grandstander_100Thin_Italic,
  Grandstander_200ExtraLight_Italic,
  Grandstander_300Light_Italic,
  Grandstander_400Regular_Italic,
  Grandstander_500Medium_Italic,
  Grandstander_600SemiBold_Italic,
  Grandstander_700Bold_Italic,
  Grandstander_800ExtraBold_Italic,
  Grandstander_900Black_Italic,
} from '@expo-google-fonts/grandstander';

export default () => {
  let [fontsLoaded] = useFonts({
    Grandstander_100Thin,
    Grandstander_200ExtraLight,
    Grandstander_300Light,
    Grandstander_400Regular,
    Grandstander_500Medium,
    Grandstander_600SemiBold,
    Grandstander_700Bold,
    Grandstander_800ExtraBold,
    Grandstander_900Black,
    Grandstander_100Thin_Italic,
    Grandstander_200ExtraLight_Italic,
    Grandstander_300Light_Italic,
    Grandstander_400Regular_Italic,
    Grandstander_500Medium_Italic,
    Grandstander_600SemiBold_Italic,
    Grandstander_700Bold_Italic,
    Grandstander_800ExtraBold_Italic,
    Grandstander_900Black_Italic,
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
            fontFamily: 'Grandstander_100Thin',
          }}>
          Grandstander Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_200ExtraLight',
          }}>
          Grandstander Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_300Light',
          }}>
          Grandstander Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_400Regular',
          }}>
          Grandstander Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_500Medium',
          }}>
          Grandstander Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_600SemiBold',
          }}>
          Grandstander Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_700Bold',
          }}>
          Grandstander Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_800ExtraBold',
          }}>
          Grandstander Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_900Black',
          }}>
          Grandstander Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_100Thin_Italic',
          }}>
          Grandstander Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_200ExtraLight_Italic',
          }}>
          Grandstander Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_300Light_Italic',
          }}>
          Grandstander Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_400Regular_Italic',
          }}>
          Grandstander Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_500Medium_Italic',
          }}>
          Grandstander Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_600SemiBold_Italic',
          }}>
          Grandstander Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_700Bold_Italic',
          }}>
          Grandstander Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_800ExtraBold_Italic',
          }}>
          Grandstander Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grandstander_900Black_Italic',
          }}>
          Grandstander Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Grandstander_100Thin](./Grandstander_100Thin.ttf.png)|![Grandstander_200ExtraLight](./Grandstander_200ExtraLight.ttf.png)|![Grandstander_300Light](./Grandstander_300Light.ttf.png)||
|![Grandstander_400Regular](./Grandstander_400Regular.ttf.png)|![Grandstander_500Medium](./Grandstander_500Medium.ttf.png)|![Grandstander_600SemiBold](./Grandstander_600SemiBold.ttf.png)||
|![Grandstander_700Bold](./Grandstander_700Bold.ttf.png)|![Grandstander_800ExtraBold](./Grandstander_800ExtraBold.ttf.png)|![Grandstander_900Black](./Grandstander_900Black.ttf.png)||
|![Grandstander_100Thin_Italic](./Grandstander_100Thin_Italic.ttf.png)|![Grandstander_200ExtraLight_Italic](./Grandstander_200ExtraLight_Italic.ttf.png)|![Grandstander_300Light_Italic](./Grandstander_300Light_Italic.ttf.png)||
|![Grandstander_400Regular_Italic](./Grandstander_400Regular_Italic.ttf.png)|![Grandstander_500Medium_Italic](./Grandstander_500Medium_Italic.ttf.png)|![Grandstander_600SemiBold_Italic](./Grandstander_600SemiBold_Italic.ttf.png)||
|![Grandstander_700Bold_Italic](./Grandstander_700Bold_Italic.ttf.png)|![Grandstander_800ExtraBold_Italic](./Grandstander_800ExtraBold_Italic.ttf.png)|![Grandstander_900Black_Italic](./Grandstander_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/grandstander` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Grandstander page on Google Fonts](https://fonts.google.com/specimen/Grandstander) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Grandstander on Google Fonts](https://fonts.google.com/specimen/Grandstander)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/grandstander)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/grandstander)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
