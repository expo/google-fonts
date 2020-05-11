# @expo-google-fonts/averia-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/averia-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/averia-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/averia-libre)

This package lets you use the [**Averia Libre**](https://fonts.google.com/specimen/Averia+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Averia Libre

![Averia Libre](./font-family.png)

This font family contains [6 styles](#-gallery).

- `AveriaLibre_Light300`
- `AveriaLibre_Light300_Italic`
- `AveriaLibre_Regular400`
- `AveriaLibre_Regular400_Italic`
- `AveriaLibre_Bold700`
- `AveriaLibre_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/averia-libre expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  AveriaLibre_Light300,
  AveriaLibre_Light300_Italic,
  AveriaLibre_Regular400,
  AveriaLibre_Regular400_Italic,
  AveriaLibre_Bold700,
  AveriaLibre_Bold700_Italic,
  useFonts,
} from '@expo-google-fonts/averia-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    AveriaLibre_Light300,
    AveriaLibre_Light300_Italic,
    AveriaLibre_Regular400,
    AveriaLibre_Regular400_Italic,
    AveriaLibre_Bold700,
    AveriaLibre_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Light300' }}>
          AveriaLibre_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Light300_Italic' }}>
          AveriaLibre_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Regular400' }}>
          AveriaLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Regular400_Italic' }}>
          AveriaLibre_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Bold700' }}>
          AveriaLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Bold700_Italic' }}>
          AveriaLibre_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### AveriaLibre_Light300
![AveriaLibre_Light300](./446105043cce1cc90406cda4c387ef2100b294d9d63b3946d4a395d3f2a9ce07.ttf.png)

##### AveriaLibre_Light300_Italic
![AveriaLibre_Light300_Italic](./c8a24e13d7d611dd8a4e15743ac34b163b1e96d1c9a9e82746f0bd9d3a878613.ttf.png)

##### AveriaLibre_Regular400
![AveriaLibre_Regular400](./2b819eb7a1c11f4de65f3bfe1a8f658ea56fc62b2b7a24b2cf8688e9ced04c96.ttf.png)

##### AveriaLibre_Regular400_Italic
![AveriaLibre_Regular400_Italic](./793d505e83fbdbef6ceeabd6897693fb515a4890b822623deb545b53e7ec68dd.ttf.png)

##### AveriaLibre_Bold700
![AveriaLibre_Bold700](./6b157a260e6fd6b7cdd2d54fc4f46e1a72fbb33034b74a6929cbc4d0a7d83e3d.ttf.png)

##### AveriaLibre_Bold700_Italic
![AveriaLibre_Bold700_Italic](./08c2c28ffffd04d884122fa538e0c615e52983959363269b543084794a60955f.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/averia-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Averia Libre page on Google Fonts](https://fonts.google.com/specimen/Averia+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Averia Libre on Google Fonts](https://fonts.google.com/specimen/Averia+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/averia-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/averia-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
