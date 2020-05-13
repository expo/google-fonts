# @expo-google-fonts/lato

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lato)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lato)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lato)

This package lets you use the [**Lato**](https://fonts.google.com/specimen/Lato) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lato

![Lato](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Lato_100Thin`
- `Lato_100Thin_Italic`
- `Lato_300Light`
- `Lato_300Light_Italic`
- `Lato_400Regular`
- `Lato_400Regular_Italic`
- `Lato_700Bold`
- `Lato_700Bold_Italic`
- `Lato_900Black`
- `Lato_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lato expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';

export default () => {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
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
            fontFamily: 'Lato_100Thin',
          }}>
          Lato Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_100Thin_Italic',
          }}>
          Lato Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_300Light',
          }}>
          Lato Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_300Light_Italic',
          }}>
          Lato Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_400Regular',
          }}>
          Lato Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_400Regular_Italic',
          }}>
          Lato Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_700Bold',
          }}>
          Lato Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_700Bold_Italic',
          }}>
          Lato Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_900Black',
          }}>
          Lato Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Lato_900Black_Italic',
          }}>
          Lato Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Lato_100Thin](./Lato_100Thin.ttf.png)|![Lato_100Thin_Italic](./Lato_100Thin_Italic.ttf.png)|![Lato_300Light](./Lato_300Light.ttf.png)||
|![Lato_300Light_Italic](./Lato_300Light_Italic.ttf.png)|![Lato_400Regular](./Lato_400Regular.ttf.png)|![Lato_400Regular_Italic](./Lato_400Regular_Italic.ttf.png)||
|![Lato_700Bold](./Lato_700Bold.ttf.png)|![Lato_700Bold_Italic](./Lato_700Bold_Italic.ttf.png)|![Lato_900Black](./Lato_900Black.ttf.png)||
|![Lato_900Black_Italic](./Lato_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lato` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lato page on Google Fonts](https://fonts.google.com/specimen/Lato) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lato on Google Fonts](https://fonts.google.com/specimen/Lato)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lato)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lato)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
