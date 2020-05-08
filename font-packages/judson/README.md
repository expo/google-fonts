# @expo-google-fonts/judson

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/judson)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/judson)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/judson)

This package lets you use the [**Judson**](https://fonts.google.com/specimen/Judson) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Judson

![Judson](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Judson_Regular400`
- `Judson_Regular400_Italic`
- `Judson_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/judson expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Judson_Regular400,
  Judson_Regular400_Italic,
  Judson_Bold700,
} from '@expo-google-fonts/judson';

export default () => {
  let [fontsLoaded] = useFonts({
    Judson_Regular400,
    Judson_Regular400_Italic,
    Judson_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Judson_Regular400' }}>
          Judson_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Judson_Regular400_Italic' }}>
          Judson_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Judson_Bold700' }}>
          Judson_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Judson_Regular400
![Judson_Regular400](./a0e44f8bee5db23549c40c2bdd46ee689a1d4427410df98883638059880eb73b.ttf.png)

##### Judson_Regular400_Italic
![Judson_Regular400_Italic](./434a445b96fb17f89c47a66f76abe63757bb6c0997d49bc83a86e2b0cca56b58.ttf.png)

##### Judson_Bold700
![Judson_Bold700](./b39af14b252a5cb398202d4738e995ef23ad94afe48fbd78fac58759d298f49e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/judson` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Judson page on Google Fonts](https://fonts.google.com/specimen/Judson) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Judson on Google Fonts](https://fonts.google.com/specimen/Judson)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/judson)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/judson)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
