# @expo-google-fonts/libre-barcode-39

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/libre-barcode-39)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/libre-barcode-39)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/libre-barcode-39)

This package lets you use the [**Libre Barcode 39**](https://fonts.google.com/specimen/Libre+Barcode+39) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Libre Barcode 39

![Libre Barcode 39](./font-family.png)

This font family contains [1 style](#-gallery).

- `LibreBarcode39_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/libre-barcode-39 expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, LibreBarcode39_400Regular } from '@expo-google-fonts/libre-barcode-39';

export default () => {
  let [fontsLoaded] = useFonts({
    LibreBarcode39_400Regular,
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
            fontFamily: 'LibreBarcode39_400Regular',
          }}>
          Libre Barcode 39 Regular
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LibreBarcode39_400Regular](./LibreBarcode39_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/libre-barcode-39` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Libre Barcode 39 page on Google Fonts](https://fonts.google.com/specimen/Libre+Barcode+39) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Libre Barcode 39 on Google Fonts](https://fonts.google.com/specimen/Libre+Barcode+39)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-barcode-39)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-barcode-39)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
