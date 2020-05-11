# @expo-google-fonts/slabo-27px

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/slabo-27px)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/slabo-27px)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/slabo-27px)

This package lets you use the [**Slabo 27px**](https://fonts.google.com/specimen/Slabo+27px) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Slabo 27px

![Slabo 27px](./font-family.png)

This font family contains [1 style](#-gallery).

- `Slabo27px_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/slabo-27px expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Slabo27px_Regular400, useFonts } from '@expo-google-fonts/slabo-27px';

export default () => {
  let [fontsLoaded] = useFonts({
    Slabo27px_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Slabo27px_Regular400' }}>
          Slabo27px_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Slabo27px_Regular400
![Slabo27px_Regular400](./e451771d704b04c776176b6033f4c66aaab3edf2422d0811687a7f9b53c03486.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/slabo-27px` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Slabo 27px page on Google Fonts](https://fonts.google.com/specimen/Slabo+27px) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Slabo 27px on Google Fonts](https://fonts.google.com/specimen/Slabo+27px)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/slabo-27px)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/slabo-27px)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
