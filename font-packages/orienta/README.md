# @expo-google-fonts/orienta

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/orienta)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/orienta)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/orienta)

This package lets you use the [**Orienta**](https://fonts.google.com/specimen/Orienta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Orienta

![Orienta](./font-family.png)

This font family contains [1 style](#-gallery).

- `Orienta_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/orienta expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Orienta_Regular400 } from '@expo-google-fonts/orienta';

export default () => {
  let [fontsLoaded] = useFonts({
    Orienta_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Orienta_Regular400' }}>
          Orienta_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Orienta_Regular400
![Orienta_Regular400](./6d087fac0635ed6186f7b55f474c1522ed229582419b850a3f77f333d9b0a355.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/orienta` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Orienta page on Google Fonts](https://fonts.google.com/specimen/Orienta) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Orienta on Google Fonts](https://fonts.google.com/specimen/Orienta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/orienta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/orienta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
