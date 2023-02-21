# @expo-google-fonts/andada-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/andada-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/andada-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/andada-pro)

This package lets you use the [**Andada Pro**](https://fonts.google.com/specimen/Andada+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Andada Pro

![Andada Pro](./font-family.png)

This font family contains [10 styles](#-gallery).

- `AndadaPro_400Regular`
- `AndadaPro_500Medium`
- `AndadaPro_600SemiBold`
- `AndadaPro_700Bold`
- `AndadaPro_800ExtraBold`
- `AndadaPro_400Regular_Italic`
- `AndadaPro_500Medium_Italic`
- `AndadaPro_600SemiBold_Italic`
- `AndadaPro_700Bold_Italic`
- `AndadaPro_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/andada-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AndadaPro_400Regular,
  AndadaPro_500Medium,
  AndadaPro_600SemiBold,
  AndadaPro_700Bold,
  AndadaPro_800ExtraBold,
  AndadaPro_400Regular_Italic,
  AndadaPro_500Medium_Italic,
  AndadaPro_600SemiBold_Italic,
  AndadaPro_700Bold_Italic,
  AndadaPro_800ExtraBold_Italic,
} from '@expo-google-fonts/andada-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    AndadaPro_400Regular,
    AndadaPro_500Medium,
    AndadaPro_600SemiBold,
    AndadaPro_700Bold,
    AndadaPro_800ExtraBold,
    AndadaPro_400Regular_Italic,
    AndadaPro_500Medium_Italic,
    AndadaPro_600SemiBold_Italic,
    AndadaPro_700Bold_Italic,
    AndadaPro_800ExtraBold_Italic,
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
            fontFamily: 'AndadaPro_400Regular',
          }}>
          Andada Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_500Medium',
          }}>
          Andada Pro Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_600SemiBold',
          }}>
          Andada Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_700Bold',
          }}>
          Andada Pro Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_800ExtraBold',
          }}>
          Andada Pro Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_400Regular_Italic',
          }}>
          Andada Pro Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_500Medium_Italic',
          }}>
          Andada Pro Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_600SemiBold_Italic',
          }}>
          Andada Pro Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_700Bold_Italic',
          }}>
          Andada Pro Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AndadaPro_800ExtraBold_Italic',
          }}>
          Andada Pro Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![AndadaPro_400Regular](./AndadaPro_400Regular.ttf.png)|![AndadaPro_500Medium](./AndadaPro_500Medium.ttf.png)|![AndadaPro_600SemiBold](./AndadaPro_600SemiBold.ttf.png)||
|![AndadaPro_700Bold](./AndadaPro_700Bold.ttf.png)|![AndadaPro_800ExtraBold](./AndadaPro_800ExtraBold.ttf.png)|![AndadaPro_400Regular_Italic](./AndadaPro_400Regular_Italic.ttf.png)||
|![AndadaPro_500Medium_Italic](./AndadaPro_500Medium_Italic.ttf.png)|![AndadaPro_600SemiBold_Italic](./AndadaPro_600SemiBold_Italic.ttf.png)|![AndadaPro_700Bold_Italic](./AndadaPro_700Bold_Italic.ttf.png)||
|![AndadaPro_800ExtraBold_Italic](./AndadaPro_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/andada-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Andada Pro page on Google Fonts](https://fonts.google.com/specimen/Andada+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Andada Pro on Google Fonts](https://fonts.google.com/specimen/Andada+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/andada-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/andada-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
