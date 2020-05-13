# @expo-google-fonts/catamaran

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/catamaran)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/catamaran)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/catamaran)

This package lets you use the [**Catamaran**](https://fonts.google.com/specimen/Catamaran) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Catamaran

![Catamaran](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Catamaran_100Thin`
- `Catamaran_200ExtraLight`
- `Catamaran_300Light`
- `Catamaran_400Regular`
- `Catamaran_500Medium`
- `Catamaran_600SemiBold`
- `Catamaran_700Bold`
- `Catamaran_800ExtraBold`
- `Catamaran_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/catamaran expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Catamaran_100Thin,
  Catamaran_200ExtraLight,
  Catamaran_300Light,
  Catamaran_400Regular,
  Catamaran_500Medium,
  Catamaran_600SemiBold,
  Catamaran_700Bold,
  Catamaran_800ExtraBold,
  Catamaran_900Black,
} from '@expo-google-fonts/catamaran';

export default () => {
  let [fontsLoaded] = useFonts({
    Catamaran_100Thin,
    Catamaran_200ExtraLight,
    Catamaran_300Light,
    Catamaran_400Regular,
    Catamaran_500Medium,
    Catamaran_600SemiBold,
    Catamaran_700Bold,
    Catamaran_800ExtraBold,
    Catamaran_900Black,
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
            fontFamily: 'Catamaran_100Thin',
          }}>
          Catamaran Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_200ExtraLight',
          }}>
          Catamaran Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_300Light',
          }}>
          Catamaran Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_400Regular',
          }}>
          Catamaran Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_500Medium',
          }}>
          Catamaran Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_600SemiBold',
          }}>
          Catamaran Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_700Bold',
          }}>
          Catamaran Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_800ExtraBold',
          }}>
          Catamaran Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Catamaran_900Black',
          }}>
          Catamaran Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Catamaran_100Thin](./Catamaran_100Thin.ttf.png)|![Catamaran_200ExtraLight](./Catamaran_200ExtraLight.ttf.png)|![Catamaran_300Light](./Catamaran_300Light.ttf.png)||
|![Catamaran_400Regular](./Catamaran_400Regular.ttf.png)|![Catamaran_500Medium](./Catamaran_500Medium.ttf.png)|![Catamaran_600SemiBold](./Catamaran_600SemiBold.ttf.png)||
|![Catamaran_700Bold](./Catamaran_700Bold.ttf.png)|![Catamaran_800ExtraBold](./Catamaran_800ExtraBold.ttf.png)|![Catamaran_900Black](./Catamaran_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/catamaran` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Catamaran page on Google Fonts](https://fonts.google.com/specimen/Catamaran) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Catamaran on Google Fonts](https://fonts.google.com/specimen/Catamaran)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/catamaran)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/catamaran)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
