# @expo-google-fonts/cairo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cairo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cairo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cairo)

This package lets you use the [**Cairo**](https://fonts.google.com/specimen/Cairo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cairo

![Cairo](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Cairo_200ExtraLight`
- `Cairo_300Light`
- `Cairo_400Regular`
- `Cairo_500Medium`
- `Cairo_600SemiBold`
- `Cairo_700Bold`
- `Cairo_800ExtraBold`
- `Cairo_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cairo expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_500Medium,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_800ExtraBold,
  Cairo_900Black,
} from '@expo-google-fonts/cairo';

export default () => {
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_500Medium,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_800ExtraBold,
    Cairo_900Black,
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
            fontFamily: 'Cairo_200ExtraLight',
          }}>
          Cairo Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cairo_300Light',
          }}>
          Cairo Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cairo_400Regular',
          }}>
          Cairo Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cairo_500Medium',
          }}>
          Cairo Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cairo_600SemiBold',
          }}>
          Cairo Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cairo_700Bold',
          }}>
          Cairo Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cairo_800ExtraBold',
          }}>
          Cairo Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cairo_900Black',
          }}>
          Cairo Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Cairo_200ExtraLight](./Cairo_200ExtraLight.ttf.png)|![Cairo_300Light](./Cairo_300Light.ttf.png)|![Cairo_400Regular](./Cairo_400Regular.ttf.png)||
|![Cairo_500Medium](./Cairo_500Medium.ttf.png)|![Cairo_600SemiBold](./Cairo_600SemiBold.ttf.png)|![Cairo_700Bold](./Cairo_700Bold.ttf.png)||
|![Cairo_800ExtraBold](./Cairo_800ExtraBold.ttf.png)|![Cairo_900Black](./Cairo_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cairo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cairo page on Google Fonts](https://fonts.google.com/specimen/Cairo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cairo on Google Fonts](https://fonts.google.com/specimen/Cairo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cairo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cairo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
