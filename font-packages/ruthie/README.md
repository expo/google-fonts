# @expo-google-fonts/ruthie

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ruthie)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ruthie)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ruthie)

This package lets you use the [**Ruthie**](https://fonts.google.com/specimen/Ruthie) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Ruthie

![Ruthie](./font-family.png)

This font family contains [1 style](#-gallery).

- `Ruthie_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ruthie expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Ruthie_Regular400, useFonts } from '@expo-google-fonts/ruthie';

export default () => {
  let [fontsLoaded] = useFonts({
    Ruthie_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ruthie_Regular400' }}>
          Ruthie_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Ruthie_Regular400
![Ruthie_Regular400](./07b0c223b1890d96133629bd33f84988e27371098aac4a68a738cb05f15ce183.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ruthie` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ruthie page on Google Fonts](https://fonts.google.com/specimen/Ruthie) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ruthie on Google Fonts](https://fonts.google.com/specimen/Ruthie)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ruthie)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ruthie)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
