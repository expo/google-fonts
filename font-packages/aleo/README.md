# @expo-google-fonts/aleo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/aleo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/aleo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/aleo)

This package lets you use the [**Aleo**](https://fonts.google.com/specimen/Aleo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Aleo

![Aleo](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Aleo_100Thin`
- `Aleo_200ExtraLight`
- `Aleo_300Light`
- `Aleo_400Regular`
- `Aleo_500Medium`
- `Aleo_600SemiBold`
- `Aleo_700Bold`
- `Aleo_800ExtraBold`
- `Aleo_900Black`
- `Aleo_100Thin_Italic`
- `Aleo_200ExtraLight_Italic`
- `Aleo_300Light_Italic`
- `Aleo_400Regular_Italic`
- `Aleo_500Medium_Italic`
- `Aleo_600SemiBold_Italic`
- `Aleo_700Bold_Italic`
- `Aleo_800ExtraBold_Italic`
- `Aleo_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/aleo expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Aleo_100Thin,
  Aleo_200ExtraLight,
  Aleo_300Light,
  Aleo_400Regular,
  Aleo_500Medium,
  Aleo_600SemiBold,
  Aleo_700Bold,
  Aleo_800ExtraBold,
  Aleo_900Black,
  Aleo_100Thin_Italic,
  Aleo_200ExtraLight_Italic,
  Aleo_300Light_Italic,
  Aleo_400Regular_Italic,
  Aleo_500Medium_Italic,
  Aleo_600SemiBold_Italic,
  Aleo_700Bold_Italic,
  Aleo_800ExtraBold_Italic,
  Aleo_900Black_Italic,
} from '@expo-google-fonts/aleo';

export default () => {
  let [fontsLoaded] = useFonts({
    Aleo_100Thin,
    Aleo_200ExtraLight,
    Aleo_300Light,
    Aleo_400Regular,
    Aleo_500Medium,
    Aleo_600SemiBold,
    Aleo_700Bold,
    Aleo_800ExtraBold,
    Aleo_900Black,
    Aleo_100Thin_Italic,
    Aleo_200ExtraLight_Italic,
    Aleo_300Light_Italic,
    Aleo_400Regular_Italic,
    Aleo_500Medium_Italic,
    Aleo_600SemiBold_Italic,
    Aleo_700Bold_Italic,
    Aleo_800ExtraBold_Italic,
    Aleo_900Black_Italic,
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
            fontFamily: 'Aleo_100Thin',
          }}>
          Aleo Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_200ExtraLight',
          }}>
          Aleo Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_300Light',
          }}>
          Aleo Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_400Regular',
          }}>
          Aleo Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_500Medium',
          }}>
          Aleo Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_600SemiBold',
          }}>
          Aleo Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_700Bold',
          }}>
          Aleo Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_800ExtraBold',
          }}>
          Aleo Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_900Black',
          }}>
          Aleo Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_100Thin_Italic',
          }}>
          Aleo Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_200ExtraLight_Italic',
          }}>
          Aleo Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_300Light_Italic',
          }}>
          Aleo Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_400Regular_Italic',
          }}>
          Aleo Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_500Medium_Italic',
          }}>
          Aleo Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_600SemiBold_Italic',
          }}>
          Aleo Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_700Bold_Italic',
          }}>
          Aleo Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_800ExtraBold_Italic',
          }}>
          Aleo Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Aleo_900Black_Italic',
          }}>
          Aleo Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Aleo_100Thin](./Aleo_100Thin.ttf.png)|![Aleo_200ExtraLight](./Aleo_200ExtraLight.ttf.png)|![Aleo_300Light](./Aleo_300Light.ttf.png)||
|![Aleo_400Regular](./Aleo_400Regular.ttf.png)|![Aleo_500Medium](./Aleo_500Medium.ttf.png)|![Aleo_600SemiBold](./Aleo_600SemiBold.ttf.png)||
|![Aleo_700Bold](./Aleo_700Bold.ttf.png)|![Aleo_800ExtraBold](./Aleo_800ExtraBold.ttf.png)|![Aleo_900Black](./Aleo_900Black.ttf.png)||
|![Aleo_100Thin_Italic](./Aleo_100Thin_Italic.ttf.png)|![Aleo_200ExtraLight_Italic](./Aleo_200ExtraLight_Italic.ttf.png)|![Aleo_300Light_Italic](./Aleo_300Light_Italic.ttf.png)||
|![Aleo_400Regular_Italic](./Aleo_400Regular_Italic.ttf.png)|![Aleo_500Medium_Italic](./Aleo_500Medium_Italic.ttf.png)|![Aleo_600SemiBold_Italic](./Aleo_600SemiBold_Italic.ttf.png)||
|![Aleo_700Bold_Italic](./Aleo_700Bold_Italic.ttf.png)|![Aleo_800ExtraBold_Italic](./Aleo_800ExtraBold_Italic.ttf.png)|![Aleo_900Black_Italic](./Aleo_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/aleo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Aleo page on Google Fonts](https://fonts.google.com/specimen/Aleo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Aleo on Google Fonts](https://fonts.google.com/specimen/Aleo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/aleo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/aleo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
