# @expo-google-fonts/piazzolla

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/piazzolla)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/piazzolla)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/piazzolla)

This package lets you use the [**Piazzolla**](https://fonts.google.com/specimen/Piazzolla) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Piazzolla

![Piazzolla](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Piazzolla_100Thin`
- `Piazzolla_200ExtraLight`
- `Piazzolla_300Light`
- `Piazzolla_400Regular`
- `Piazzolla_500Medium`
- `Piazzolla_600SemiBold`
- `Piazzolla_700Bold`
- `Piazzolla_800ExtraBold`
- `Piazzolla_900Black`
- `Piazzolla_100Thin_Italic`
- `Piazzolla_200ExtraLight_Italic`
- `Piazzolla_300Light_Italic`
- `Piazzolla_400Regular_Italic`
- `Piazzolla_500Medium_Italic`
- `Piazzolla_600SemiBold_Italic`
- `Piazzolla_700Bold_Italic`
- `Piazzolla_800ExtraBold_Italic`
- `Piazzolla_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/piazzolla expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Piazzolla_100Thin,
  Piazzolla_200ExtraLight,
  Piazzolla_300Light,
  Piazzolla_400Regular,
  Piazzolla_500Medium,
  Piazzolla_600SemiBold,
  Piazzolla_700Bold,
  Piazzolla_800ExtraBold,
  Piazzolla_900Black,
  Piazzolla_100Thin_Italic,
  Piazzolla_200ExtraLight_Italic,
  Piazzolla_300Light_Italic,
  Piazzolla_400Regular_Italic,
  Piazzolla_500Medium_Italic,
  Piazzolla_600SemiBold_Italic,
  Piazzolla_700Bold_Italic,
  Piazzolla_800ExtraBold_Italic,
  Piazzolla_900Black_Italic,
} from '@expo-google-fonts/piazzolla';

export default () => {
  let [fontsLoaded] = useFonts({
    Piazzolla_100Thin,
    Piazzolla_200ExtraLight,
    Piazzolla_300Light,
    Piazzolla_400Regular,
    Piazzolla_500Medium,
    Piazzolla_600SemiBold,
    Piazzolla_700Bold,
    Piazzolla_800ExtraBold,
    Piazzolla_900Black,
    Piazzolla_100Thin_Italic,
    Piazzolla_200ExtraLight_Italic,
    Piazzolla_300Light_Italic,
    Piazzolla_400Regular_Italic,
    Piazzolla_500Medium_Italic,
    Piazzolla_600SemiBold_Italic,
    Piazzolla_700Bold_Italic,
    Piazzolla_800ExtraBold_Italic,
    Piazzolla_900Black_Italic,
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
            fontFamily: 'Piazzolla_100Thin',
          }}>
          Piazzolla Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_200ExtraLight',
          }}>
          Piazzolla Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_300Light',
          }}>
          Piazzolla Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_400Regular',
          }}>
          Piazzolla Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_500Medium',
          }}>
          Piazzolla Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_600SemiBold',
          }}>
          Piazzolla Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_700Bold',
          }}>
          Piazzolla Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_800ExtraBold',
          }}>
          Piazzolla Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_900Black',
          }}>
          Piazzolla Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_100Thin_Italic',
          }}>
          Piazzolla Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_200ExtraLight_Italic',
          }}>
          Piazzolla Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_300Light_Italic',
          }}>
          Piazzolla Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_400Regular_Italic',
          }}>
          Piazzolla Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_500Medium_Italic',
          }}>
          Piazzolla Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_600SemiBold_Italic',
          }}>
          Piazzolla Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_700Bold_Italic',
          }}>
          Piazzolla Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_800ExtraBold_Italic',
          }}>
          Piazzolla Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Piazzolla_900Black_Italic',
          }}>
          Piazzolla Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Piazzolla_100Thin](./Piazzolla_100Thin.ttf.png)|![Piazzolla_200ExtraLight](./Piazzolla_200ExtraLight.ttf.png)|![Piazzolla_300Light](./Piazzolla_300Light.ttf.png)||
|![Piazzolla_400Regular](./Piazzolla_400Regular.ttf.png)|![Piazzolla_500Medium](./Piazzolla_500Medium.ttf.png)|![Piazzolla_600SemiBold](./Piazzolla_600SemiBold.ttf.png)||
|![Piazzolla_700Bold](./Piazzolla_700Bold.ttf.png)|![Piazzolla_800ExtraBold](./Piazzolla_800ExtraBold.ttf.png)|![Piazzolla_900Black](./Piazzolla_900Black.ttf.png)||
|![Piazzolla_100Thin_Italic](./Piazzolla_100Thin_Italic.ttf.png)|![Piazzolla_200ExtraLight_Italic](./Piazzolla_200ExtraLight_Italic.ttf.png)|![Piazzolla_300Light_Italic](./Piazzolla_300Light_Italic.ttf.png)||
|![Piazzolla_400Regular_Italic](./Piazzolla_400Regular_Italic.ttf.png)|![Piazzolla_500Medium_Italic](./Piazzolla_500Medium_Italic.ttf.png)|![Piazzolla_600SemiBold_Italic](./Piazzolla_600SemiBold_Italic.ttf.png)||
|![Piazzolla_700Bold_Italic](./Piazzolla_700Bold_Italic.ttf.png)|![Piazzolla_800ExtraBold_Italic](./Piazzolla_800ExtraBold_Italic.ttf.png)|![Piazzolla_900Black_Italic](./Piazzolla_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/piazzolla` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Piazzolla page on Google Fonts](https://fonts.google.com/specimen/Piazzolla) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Piazzolla on Google Fonts](https://fonts.google.com/specimen/Piazzolla)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/piazzolla)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/piazzolla)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
