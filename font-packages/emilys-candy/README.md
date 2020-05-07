# @expo-google-fonts/emilys-candy

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/emilys-candy)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/emilys-candy)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/emilys-candy)

This package lets you use the [**Emilys Candy**](https://fonts.google.com/specimen/Emilys+Candy) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Emilys Candy

![Emilys Candy](./font-family.png)

This font family contains [1 style](#gallery).

- `EmilysCandy_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/emilys-candy expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { EmilysCandy_Regular400 } from '@expo-google-fonts/emilys-candy';

export default () => {
  let [fontsLoaded] = useFonts({
    EmilysCandy_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EmilysCandy_Regular400' }}>
          EmilysCandy_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### EmilysCandy_Regular400
![EmilysCandy_Regular400](./333e01b7709d7ade3e2afa1ce5b5d193cbb59ce4909a4bd8a9061d7f12368e33.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/emilys-candy` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Emilys Candy page on Google Fonts](https://fonts.google.com/specimen/Emilys+Candy) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Emilys Candy on Google Fonts](https://fonts.google.com/specimen/Emilys+Candy)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/emilys-candy)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/emilys-candy)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
