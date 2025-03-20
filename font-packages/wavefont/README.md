# @expo-google-fonts/wavefont

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/wavefont)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/wavefont)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/wavefont)

This package lets you use the [**Wavefont**](https://fonts.google.com/specimen/Wavefont) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Wavefont

![Wavefont](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Wavefont_100Thin`
- `Wavefont_200ExtraLight`
- `Wavefont_300Light`
- `Wavefont_400Regular`
- `Wavefont_500Medium`
- `Wavefont_600SemiBold`
- `Wavefont_700Bold`
- `Wavefont_800ExtraBold`
- `Wavefont_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/wavefont expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Wavefont_100Thin,
  Wavefont_200ExtraLight,
  Wavefont_300Light,
  Wavefont_400Regular,
  Wavefont_500Medium,
  Wavefont_600SemiBold,
  Wavefont_700Bold,
  Wavefont_800ExtraBold,
  Wavefont_900Black,
} from '@expo-google-fonts/wavefont';

export default () => {
  let [fontsLoaded] = useFonts({
    Wavefont_100Thin,
    Wavefont_200ExtraLight,
    Wavefont_300Light,
    Wavefont_400Regular,
    Wavefont_500Medium,
    Wavefont_600SemiBold,
    Wavefont_700Bold,
    Wavefont_800ExtraBold,
    Wavefont_900Black,
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
            fontFamily: 'Wavefont_100Thin',
          }}>
          Wavefont Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_200ExtraLight',
          }}>
          Wavefont Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_300Light',
          }}>
          Wavefont Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_400Regular',
          }}>
          Wavefont Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_500Medium',
          }}>
          Wavefont Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_600SemiBold',
          }}>
          Wavefont Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_700Bold',
          }}>
          Wavefont Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_800ExtraBold',
          }}>
          Wavefont Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Wavefont_900Black',
          }}>
          Wavefont Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Wavefont_100Thin](./Wavefont_100Thin.ttf.png)|![Wavefont_200ExtraLight](./Wavefont_200ExtraLight.ttf.png)|![Wavefont_300Light](./Wavefont_300Light.ttf.png)||
|![Wavefont_400Regular](./Wavefont_400Regular.ttf.png)|![Wavefont_500Medium](./Wavefont_500Medium.ttf.png)|![Wavefont_600SemiBold](./Wavefont_600SemiBold.ttf.png)||
|![Wavefont_700Bold](./Wavefont_700Bold.ttf.png)|![Wavefont_800ExtraBold](./Wavefont_800ExtraBold.ttf.png)|![Wavefont_900Black](./Wavefont_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/wavefont` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Wavefont page on Google Fonts](https://fonts.google.com/specimen/Wavefont) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Wavefont on Google Fonts](https://fonts.google.com/specimen/Wavefont)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/wavefont)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/wavefont)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
