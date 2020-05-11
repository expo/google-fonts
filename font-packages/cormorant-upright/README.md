# @expo-google-fonts/cormorant-upright

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant-upright)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant-upright)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant-upright)

This package lets you use the [**Cormorant Upright**](https://fonts.google.com/specimen/Cormorant+Upright) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cormorant Upright

![Cormorant Upright](./font-family.png)

This font family contains [5 styles](#-gallery).

- `CormorantUpright_Light300`
- `CormorantUpright_Regular400`
- `CormorantUpright_Medium500`
- `CormorantUpright_SemiBold600`
- `CormorantUpright_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cormorant-upright expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  CormorantUpright_Light300,
  CormorantUpright_Regular400,
  CormorantUpright_Medium500,
  CormorantUpright_SemiBold600,
  CormorantUpright_Bold700,
  useFonts,
} from '@expo-google-fonts/cormorant-upright';

export default () => {
  let [fontsLoaded] = useFonts({
    CormorantUpright_Light300,
    CormorantUpright_Regular400,
    CormorantUpright_Medium500,
    CormorantUpright_SemiBold600,
    CormorantUpright_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUpright_Light300' }}>
          CormorantUpright_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUpright_Regular400' }}>
          CormorantUpright_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUpright_Medium500' }}>
          CormorantUpright_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUpright_SemiBold600' }}>
          CormorantUpright_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUpright_Bold700' }}>
          CormorantUpright_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### CormorantUpright_Light300
![CormorantUpright_Light300](./29c9067ec4aab7f8532dfad801cd638d35f8738903ec7c40f80069030e231431.ttf.png)

##### CormorantUpright_Regular400
![CormorantUpright_Regular400](./d7c8d8d44c6591234b85e43c1b61a5f4adc82016e3c7f315b206cf31fda62572.ttf.png)

##### CormorantUpright_Medium500
![CormorantUpright_Medium500](./9e1c85ea60d180f0a621d975977e7e75c7d398a4d4fcb569d2ccadd85c42adce.ttf.png)

##### CormorantUpright_SemiBold600
![CormorantUpright_SemiBold600](./0d60d4f81c0c154612e2e9b3b5dd56c2ab5e74e4d8e8507d9725ce908a54c914.ttf.png)

##### CormorantUpright_Bold700
![CormorantUpright_Bold700](./441604498e23b982bd6adbe6fe749140f9955eddd7a905329bb88bf4ca9a8f85.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cormorant-upright` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant Upright page on Google Fonts](https://fonts.google.com/specimen/Cormorant+Upright) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant Upright on Google Fonts](https://fonts.google.com/specimen/Cormorant+Upright)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-upright)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-upright)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
