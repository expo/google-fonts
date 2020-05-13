# @expo-google-fonts/palanquin-dark

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/palanquin-dark)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/palanquin-dark)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/palanquin-dark)

This package lets you use the [**Palanquin Dark**](https://fonts.google.com/specimen/Palanquin+Dark) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Palanquin Dark

![Palanquin Dark](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PalanquinDark_400Regular`
- `PalanquinDark_500Medium`
- `PalanquinDark_600SemiBold`
- `PalanquinDark_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/palanquin-dark expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  PalanquinDark_400Regular,
  PalanquinDark_500Medium,
  PalanquinDark_600SemiBold,
  PalanquinDark_700Bold,
} from '@expo-google-fonts/palanquin-dark';

export default () => {
  let [fontsLoaded] = useFonts({
    PalanquinDark_400Regular,
    PalanquinDark_500Medium,
    PalanquinDark_600SemiBold,
    PalanquinDark_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_400Regular' }}>
          PalanquinDark_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_500Medium' }}>
          PalanquinDark_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_600SemiBold' }}>
          PalanquinDark_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_700Bold' }}>
          PalanquinDark_700Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### PalanquinDark_400Regular
![PalanquinDark_400Regular](./PalanquinDark_400Regular.ttf.png)

##### PalanquinDark_500Medium
![PalanquinDark_500Medium](./PalanquinDark_500Medium.ttf.png)

##### PalanquinDark_600SemiBold
![PalanquinDark_600SemiBold](./PalanquinDark_600SemiBold.ttf.png)

##### PalanquinDark_700Bold
![PalanquinDark_700Bold](./PalanquinDark_700Bold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/palanquin-dark` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Palanquin Dark page on Google Fonts](https://fonts.google.com/specimen/Palanquin+Dark) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Palanquin Dark on Google Fonts](https://fonts.google.com/specimen/Palanquin+Dark)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/palanquin-dark)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/palanquin-dark)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
