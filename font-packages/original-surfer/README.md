# @expo-google-fonts/original-surfer

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/original-surfer)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/original-surfer)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/original-surfer)

This package lets you use the [**Original Surfer**](https://fonts.google.com/specimen/Original+Surfer) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Original Surfer

![Original Surfer](./font-family.png)

This font family contains [1 style](#-gallery).

- `OriginalSurfer_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/original-surfer expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { OriginalSurfer_Regular400 } from '@expo-google-fonts/original-surfer';

export default () => {
  let [fontsLoaded] = useFonts({
    OriginalSurfer_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OriginalSurfer_Regular400' }}>
          OriginalSurfer_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### OriginalSurfer_Regular400
![OriginalSurfer_Regular400](./433a93a4934c3d3f80f80041f426946c8347e4e210da65e9a8adff9d70180e23.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/original-surfer` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Original Surfer page on Google Fonts](https://fonts.google.com/specimen/Original+Surfer) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Original Surfer on Google Fonts](https://fonts.google.com/specimen/Original+Surfer)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/original-surfer)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/original-surfer)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
