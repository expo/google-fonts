# @expo-google-fonts/sora

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sora)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sora)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sora)

This package lets you use the [**Sora**](https://fonts.google.com/specimen/Sora) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sora

![Sora](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Sora_100Thin`
- `Sora_200ExtraLight`
- `Sora_300Light`
- `Sora_400Regular`
- `Sora_500Medium`
- `Sora_600SemiBold`
- `Sora_700Bold`
- `Sora_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sora expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Sora_100Thin,
  Sora_200ExtraLight,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  Sora_800ExtraBold,
} from '@expo-google-fonts/sora';

export default () => {
  let [fontsLoaded] = useFonts({
    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
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
            fontFamily: 'Sora_100Thin',
          }}>
          Sora Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sora_200ExtraLight',
          }}>
          Sora Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sora_300Light',
          }}>
          Sora Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sora_400Regular',
          }}>
          Sora Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sora_500Medium',
          }}>
          Sora Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sora_600SemiBold',
          }}>
          Sora Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sora_700Bold',
          }}>
          Sora Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sora_800ExtraBold',
          }}>
          Sora Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Sora_100Thin](./Sora_100Thin.ttf.png)|![Sora_200ExtraLight](./Sora_200ExtraLight.ttf.png)|![Sora_300Light](./Sora_300Light.ttf.png)||
|![Sora_400Regular](./Sora_400Regular.ttf.png)|![Sora_500Medium](./Sora_500Medium.ttf.png)|![Sora_600SemiBold](./Sora_600SemiBold.ttf.png)||
|![Sora_700Bold](./Sora_700Bold.ttf.png)|![Sora_800ExtraBold](./Sora_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sora` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sora page on Google Fonts](https://fonts.google.com/specimen/Sora) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sora on Google Fonts](https://fonts.google.com/specimen/Sora)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sora)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sora)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
