# @expo-google-fonts/archivo-narrow

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/archivo-narrow)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/archivo-narrow)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/archivo-narrow)

This package lets you use the [**Archivo Narrow**](https://fonts.google.com/specimen/Archivo+Narrow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Archivo Narrow

![Archivo Narrow](./font-family.png)

This font family contains [8 styles](#-gallery).

- `ArchivoNarrow_400Regular`
- `ArchivoNarrow_500Medium`
- `ArchivoNarrow_600SemiBold`
- `ArchivoNarrow_700Bold`
- `ArchivoNarrow_400Regular_Italic`
- `ArchivoNarrow_500Medium_Italic`
- `ArchivoNarrow_600SemiBold_Italic`
- `ArchivoNarrow_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/archivo-narrow expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ArchivoNarrow_400Regular,
  ArchivoNarrow_500Medium,
  ArchivoNarrow_600SemiBold,
  ArchivoNarrow_700Bold,
  ArchivoNarrow_400Regular_Italic,
  ArchivoNarrow_500Medium_Italic,
  ArchivoNarrow_600SemiBold_Italic,
  ArchivoNarrow_700Bold_Italic,
} from '@expo-google-fonts/archivo-narrow';

export default () => {
  let [fontsLoaded] = useFonts({
    ArchivoNarrow_400Regular,
    ArchivoNarrow_500Medium,
    ArchivoNarrow_600SemiBold,
    ArchivoNarrow_700Bold,
    ArchivoNarrow_400Regular_Italic,
    ArchivoNarrow_500Medium_Italic,
    ArchivoNarrow_600SemiBold_Italic,
    ArchivoNarrow_700Bold_Italic,
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
            fontFamily: 'ArchivoNarrow_400Regular',
          }}>
          Archivo Narrow Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArchivoNarrow_500Medium',
          }}>
          Archivo Narrow Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArchivoNarrow_600SemiBold',
          }}>
          Archivo Narrow Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArchivoNarrow_700Bold',
          }}>
          Archivo Narrow Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArchivoNarrow_400Regular_Italic',
          }}>
          Archivo Narrow Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArchivoNarrow_500Medium_Italic',
          }}>
          Archivo Narrow Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArchivoNarrow_600SemiBold_Italic',
          }}>
          Archivo Narrow Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArchivoNarrow_700Bold_Italic',
          }}>
          Archivo Narrow Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![ArchivoNarrow_400Regular](./ArchivoNarrow_400Regular.ttf.png)|![ArchivoNarrow_500Medium](./ArchivoNarrow_500Medium.ttf.png)|![ArchivoNarrow_600SemiBold](./ArchivoNarrow_600SemiBold.ttf.png)||
|![ArchivoNarrow_700Bold](./ArchivoNarrow_700Bold.ttf.png)|![ArchivoNarrow_400Regular_Italic](./ArchivoNarrow_400Regular_Italic.ttf.png)|![ArchivoNarrow_500Medium_Italic](./ArchivoNarrow_500Medium_Italic.ttf.png)||
|![ArchivoNarrow_600SemiBold_Italic](./ArchivoNarrow_600SemiBold_Italic.ttf.png)|![ArchivoNarrow_700Bold_Italic](./ArchivoNarrow_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/archivo-narrow` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Archivo Narrow page on Google Fonts](https://fonts.google.com/specimen/Archivo+Narrow) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Archivo Narrow on Google Fonts](https://fonts.google.com/specimen/Archivo+Narrow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/archivo-narrow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/archivo-narrow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
