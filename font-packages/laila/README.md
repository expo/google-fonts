# @expo-google-fonts/laila

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/laila)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/laila)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/laila)

This package lets you use the [**Laila**](https://fonts.google.com/specimen/Laila) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Laila

![Laila](./font-family.png)

This font family contains [5 styles](#gallery).

- `Laila_Light300`
- `Laila_Regular400`
- `Laila_Medium500`
- `Laila_SemiBold600`
- `Laila_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/laila expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Laila_Light300,
  Laila_Regular400,
  Laila_Medium500,
  Laila_SemiBold600,
  Laila_Bold700,
} from '@expo-google-fonts/laila';

export default () => {
  let [fontsLoaded] = useFonts({
    Laila_Light300,
    Laila_Regular400,
    Laila_Medium500,
    Laila_SemiBold600,
    Laila_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Laila_Light300' }}>
          Laila_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Laila_Regular400' }}>
          Laila_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Laila_Medium500' }}>
          Laila_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Laila_SemiBold600' }}>
          Laila_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Laila_Bold700' }}>
          Laila_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Laila_Light300
![Laila_Light300](./8aac335fe109f453ca82438785143a3d54ca6b5860f929a066015b366dd23603.ttf.png)

##### Laila_Regular400
![Laila_Regular400](./ba573905733e8e1ec12baa194825add1cb80997c3c08b032d6439d524eef298a.ttf.png)

##### Laila_Medium500
![Laila_Medium500](./445309cf766b79874168d66f2dc2f5eb067c865989ed496a8e2389411de9e18b.ttf.png)

##### Laila_SemiBold600
![Laila_SemiBold600](./f393a4935161c1ac8a55a20d2a1107e698de003ace696ae5c6db50c7bf8c0781.ttf.png)

##### Laila_Bold700
![Laila_Bold700](./a2cfeefaeb650171ed23e31b4fe85b7c5b8605f36e351821ffd3a351aeec6c17.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/laila` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Laila page on Google Fonts](https://fonts.google.com/specimen/Laila) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Laila on Google Fonts](https://fonts.google.com/specimen/Laila)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/laila)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/laila)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
