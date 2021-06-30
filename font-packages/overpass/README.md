# @expo-google-fonts/overpass

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/overpass)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/overpass)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/overpass)

This package lets you use the [**Overpass**](https://fonts.google.com/specimen/Overpass) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Overpass

![Overpass](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Overpass_100Thin`
- `Overpass_100Thin_Italic`
- `Overpass_200ExtraLight`
- `Overpass_200ExtraLight_Italic`
- `Overpass_300Light`
- `Overpass_300Light_Italic`
- `Overpass_400Regular`
- `Overpass_400Regular_Italic`
- `Overpass_600SemiBold`
- `Overpass_600SemiBold_Italic`
- `Overpass_700Bold`
- `Overpass_700Bold_Italic`
- `Overpass_800ExtraBold`
- `Overpass_800ExtraBold_Italic`
- `Overpass_900Black`
- `Overpass_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/overpass expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Overpass_100Thin,
  Overpass_100Thin_Italic,
  Overpass_200ExtraLight,
  Overpass_200ExtraLight_Italic,
  Overpass_300Light,
  Overpass_300Light_Italic,
  Overpass_400Regular,
  Overpass_400Regular_Italic,
  Overpass_600SemiBold,
  Overpass_600SemiBold_Italic,
  Overpass_700Bold,
  Overpass_700Bold_Italic,
  Overpass_800ExtraBold,
  Overpass_800ExtraBold_Italic,
  Overpass_900Black,
  Overpass_900Black_Italic,
} from '@expo-google-fonts/overpass';

export default () => {
  let [fontsLoaded] = useFonts({
    Overpass_100Thin,
    Overpass_100Thin_Italic,
    Overpass_200ExtraLight,
    Overpass_200ExtraLight_Italic,
    Overpass_300Light,
    Overpass_300Light_Italic,
    Overpass_400Regular,
    Overpass_400Regular_Italic,
    Overpass_600SemiBold,
    Overpass_600SemiBold_Italic,
    Overpass_700Bold,
    Overpass_700Bold_Italic,
    Overpass_800ExtraBold,
    Overpass_800ExtraBold_Italic,
    Overpass_900Black,
    Overpass_900Black_Italic,
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
            fontFamily: 'Overpass_100Thin',
          }}>
          Overpass Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_100Thin_Italic',
          }}>
          Overpass Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_200ExtraLight',
          }}>
          Overpass Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_200ExtraLight_Italic',
          }}>
          Overpass Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_300Light',
          }}>
          Overpass Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_300Light_Italic',
          }}>
          Overpass Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_400Regular',
          }}>
          Overpass Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_400Regular_Italic',
          }}>
          Overpass Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_600SemiBold',
          }}>
          Overpass Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_600SemiBold_Italic',
          }}>
          Overpass Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_700Bold',
          }}>
          Overpass Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_700Bold_Italic',
          }}>
          Overpass Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_800ExtraBold',
          }}>
          Overpass Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_800ExtraBold_Italic',
          }}>
          Overpass Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_900Black',
          }}>
          Overpass Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Overpass_900Black_Italic',
          }}>
          Overpass Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Overpass_100Thin](./Overpass_100Thin.ttf.png)|![Overpass_100Thin_Italic](./Overpass_100Thin_Italic.ttf.png)|![Overpass_200ExtraLight](./Overpass_200ExtraLight.ttf.png)||
|![Overpass_200ExtraLight_Italic](./Overpass_200ExtraLight_Italic.ttf.png)|![Overpass_300Light](./Overpass_300Light.ttf.png)|![Overpass_300Light_Italic](./Overpass_300Light_Italic.ttf.png)||
|![Overpass_400Regular](./Overpass_400Regular.ttf.png)|![Overpass_400Regular_Italic](./Overpass_400Regular_Italic.ttf.png)|![Overpass_600SemiBold](./Overpass_600SemiBold.ttf.png)||
|![Overpass_600SemiBold_Italic](./Overpass_600SemiBold_Italic.ttf.png)|![Overpass_700Bold](./Overpass_700Bold.ttf.png)|![Overpass_700Bold_Italic](./Overpass_700Bold_Italic.ttf.png)||
|![Overpass_800ExtraBold](./Overpass_800ExtraBold.ttf.png)|![Overpass_800ExtraBold_Italic](./Overpass_800ExtraBold_Italic.ttf.png)|![Overpass_900Black](./Overpass_900Black.ttf.png)||
|![Overpass_900Black_Italic](./Overpass_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/overpass` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Overpass page on Google Fonts](https://fonts.google.com/specimen/Overpass) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Overpass on Google Fonts](https://fonts.google.com/specimen/Overpass)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/overpass)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/overpass)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
