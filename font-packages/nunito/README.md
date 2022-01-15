# @expo-google-fonts/nunito

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nunito)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nunito)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nunito)

This package lets you use the [**Nunito**](https://fonts.google.com/specimen/Nunito) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Nunito

![Nunito](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Nunito_200ExtraLight`
- `Nunito_300Light`
- `Nunito_400Regular`
- `Nunito_500Medium`
- `Nunito_600SemiBold`
- `Nunito_700Bold`
- `Nunito_800ExtraBold`
- `Nunito_900Black`
- `Nunito_200ExtraLight_Italic`
- `Nunito_300Light_Italic`
- `Nunito_400Regular_Italic`
- `Nunito_500Medium_Italic`
- `Nunito_600SemiBold_Italic`
- `Nunito_700Bold_Italic`
- `Nunito_800ExtraBold_Italic`
- `Nunito_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nunito expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';

export default () => {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
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
            fontFamily: 'Nunito_200ExtraLight',
          }}>
          Nunito Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_300Light',
          }}>
          Nunito Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_400Regular',
          }}>
          Nunito Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_500Medium',
          }}>
          Nunito Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_600SemiBold',
          }}>
          Nunito Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_700Bold',
          }}>
          Nunito Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_800ExtraBold',
          }}>
          Nunito Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_900Black',
          }}>
          Nunito Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_200ExtraLight_Italic',
          }}>
          Nunito Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_300Light_Italic',
          }}>
          Nunito Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_400Regular_Italic',
          }}>
          Nunito Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_500Medium_Italic',
          }}>
          Nunito Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_600SemiBold_Italic',
          }}>
          Nunito Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_700Bold_Italic',
          }}>
          Nunito Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_800ExtraBold_Italic',
          }}>
          Nunito Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Nunito_900Black_Italic',
          }}>
          Nunito Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Nunito_200ExtraLight](./Nunito_200ExtraLight.ttf.png)|![Nunito_300Light](./Nunito_300Light.ttf.png)|![Nunito_400Regular](./Nunito_400Regular.ttf.png)||
|![Nunito_500Medium](./Nunito_500Medium.ttf.png)|![Nunito_600SemiBold](./Nunito_600SemiBold.ttf.png)|![Nunito_700Bold](./Nunito_700Bold.ttf.png)||
|![Nunito_800ExtraBold](./Nunito_800ExtraBold.ttf.png)|![Nunito_900Black](./Nunito_900Black.ttf.png)|![Nunito_200ExtraLight_Italic](./Nunito_200ExtraLight_Italic.ttf.png)||
|![Nunito_300Light_Italic](./Nunito_300Light_Italic.ttf.png)|![Nunito_400Regular_Italic](./Nunito_400Regular_Italic.ttf.png)|![Nunito_500Medium_Italic](./Nunito_500Medium_Italic.ttf.png)||
|![Nunito_600SemiBold_Italic](./Nunito_600SemiBold_Italic.ttf.png)|![Nunito_700Bold_Italic](./Nunito_700Bold_Italic.ttf.png)|![Nunito_800ExtraBold_Italic](./Nunito_800ExtraBold_Italic.ttf.png)||
|![Nunito_900Black_Italic](./Nunito_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/nunito` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nunito page on Google Fonts](https://fonts.google.com/specimen/Nunito) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nunito on Google Fonts](https://fonts.google.com/specimen/Nunito)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nunito)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nunito)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
