# @expo-google-fonts/baloo-bhaina

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baloo-bhaina)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baloo-bhaina)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baloo-bhaina)

This package lets you use the [**Baloo Bhaina**](https://fonts.google.com/specimen/Baloo+Bhaina) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Baloo Bhaina

![Baloo Bhaina](./font-family.png)

This font family contains [1 style](#gallery).

- `BalooBhaina_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/baloo-bhaina expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { BalooBhaina_Regular400 } from '@expo-google-fonts/baloo-bhaina';

export default () => {
  let [fontsLoaded] = useFonts({
    BalooBhaina_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BalooBhaina_Regular400' }}>
          BalooBhaina_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BalooBhaina_Regular400
![BalooBhaina_Regular400](./86bbf2a9f2b3936c4b1907de7136a4ca0f71efacfe22b7a6fa1b8a8a81f86282.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/baloo-bhaina` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baloo Bhaina page on Google Fonts](https://fonts.google.com/specimen/Baloo+Bhaina) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baloo Bhaina on Google Fonts](https://fonts.google.com/specimen/Baloo+Bhaina)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baloo-bhaina)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baloo-bhaina)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
