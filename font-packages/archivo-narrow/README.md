# @expo-google-fonts/archivo-narrow

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/archivo-narrow)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/archivo-narrow)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/archivo-narrow)

This package lets you use the [**Archivo Narrow**](https://fonts.google.com/specimen/Archivo+Narrow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Archivo Narrow

![Archivo Narrow](./font-family.png)

This font family contains [4 styles](#-gallery).

- `ArchivoNarrow_Regular400`
- `ArchivoNarrow_Regular400_Italic`
- `ArchivoNarrow_Bold700`
- `ArchivoNarrow_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/archivo-narrow expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ArchivoNarrow_Regular400,
  ArchivoNarrow_Regular400_Italic,
  ArchivoNarrow_Bold700,
  ArchivoNarrow_Bold700_Italic,
} from '@expo-google-fonts/archivo-narrow';

export default () => {
  let [fontsLoaded] = useFonts({
    ArchivoNarrow_Regular400,
    ArchivoNarrow_Regular400_Italic,
    ArchivoNarrow_Bold700,
    ArchivoNarrow_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArchivoNarrow_Regular400' }}>
          ArchivoNarrow_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArchivoNarrow_Regular400_Italic' }}>
          ArchivoNarrow_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArchivoNarrow_Bold700' }}>
          ArchivoNarrow_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArchivoNarrow_Bold700_Italic' }}>
          ArchivoNarrow_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ArchivoNarrow_Regular400
![ArchivoNarrow_Regular400](./95b4094186b9443c74e987b6a5ad660b55c7dc1e548d66cc53ead05a10bf096f.ttf.png)

##### ArchivoNarrow_Regular400_Italic
![ArchivoNarrow_Regular400_Italic](./c5be034d89310f5e551f67507ef7bd0d5093e193d5e556598e1137cff7598ada.ttf.png)

##### ArchivoNarrow_Bold700
![ArchivoNarrow_Bold700](./898e57eec4db5685859996bc7c9a87707d53ceca97c917edb0497302b7145fd5.ttf.png)

##### ArchivoNarrow_Bold700_Italic
![ArchivoNarrow_Bold700_Italic](./ff034a0073d594043d35a5058bf44df331be4b22576c8a753b210bcc55789e50.ttf.png)


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


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
