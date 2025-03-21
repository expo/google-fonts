# @expo-google-fonts/rhodium-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rhodium-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rhodium-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rhodium-libre)

This package lets you use the [**Rhodium Libre**](https://fonts.google.com/specimen/Rhodium+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Rhodium Libre

![Rhodium Libre](./font-family.png)

This font family contains [1 style](#-gallery).

- `RhodiumLibre_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/rhodium-libre expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RhodiumLibre_400Regular } from '@expo-google-fonts/rhodium-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    RhodiumLibre_400Regular,
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
            fontFamily: 'RhodiumLibre_400Regular',
          }}>
          Rhodium Libre Regular
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![RhodiumLibre_400Regular](./RhodiumLibre_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/rhodium-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rhodium Libre page on Google Fonts](https://fonts.google.com/specimen/Rhodium+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rhodium Libre on Google Fonts](https://fonts.google.com/specimen/Rhodium+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rhodium-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rhodium-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
