# @expo-google-fonts/spartan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/spartan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/spartan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/spartan)

This package lets you use the [**Spartan**](https://fonts.google.com/specimen/Spartan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Spartan

![Spartan](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Spartan_100Thin`
- `Spartan_200ExtraLight`
- `Spartan_300Light`
- `Spartan_400Regular`
- `Spartan_500Medium`
- `Spartan_600SemiBold`
- `Spartan_700Bold`
- `Spartan_800ExtraBold`
- `Spartan_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/spartan expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Spartan_100Thin,
  Spartan_200ExtraLight,
  Spartan_300Light,
  Spartan_400Regular,
  Spartan_500Medium,
  Spartan_600SemiBold,
  Spartan_700Bold,
  Spartan_800ExtraBold,
  Spartan_900Black,
} from '@expo-google-fonts/spartan';

export default () => {
  let [fontsLoaded] = useFonts({
    Spartan_100Thin,
    Spartan_200ExtraLight,
    Spartan_300Light,
    Spartan_400Regular,
    Spartan_500Medium,
    Spartan_600SemiBold,
    Spartan_700Bold,
    Spartan_800ExtraBold,
    Spartan_900Black,
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
            fontFamily: 'Spartan_100Thin',
          }}>
          Spartan Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_200ExtraLight',
          }}>
          Spartan Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_300Light',
          }}>
          Spartan Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_400Regular',
          }}>
          Spartan Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_500Medium',
          }}>
          Spartan Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_600SemiBold',
          }}>
          Spartan Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_700Bold',
          }}>
          Spartan Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_800ExtraBold',
          }}>
          Spartan Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spartan_900Black',
          }}>
          Spartan Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Spartan_100Thin](./Spartan_100Thin.ttf.png)|![Spartan_200ExtraLight](./Spartan_200ExtraLight.ttf.png)|![Spartan_300Light](./Spartan_300Light.ttf.png)||
|![Spartan_400Regular](./Spartan_400Regular.ttf.png)|![Spartan_500Medium](./Spartan_500Medium.ttf.png)|![Spartan_600SemiBold](./Spartan_600SemiBold.ttf.png)||
|![Spartan_700Bold](./Spartan_700Bold.ttf.png)|![Spartan_800ExtraBold](./Spartan_800ExtraBold.ttf.png)|![Spartan_900Black](./Spartan_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/spartan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Spartan page on Google Fonts](https://fonts.google.com/specimen/Spartan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Spartan on Google Fonts](https://fonts.google.com/specimen/Spartan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spartan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spartan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
