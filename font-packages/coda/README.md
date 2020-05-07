# @expo-google-fonts/coda

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/coda)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/coda)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/coda)

This package lets you use the [**Coda**](https://fonts.google.com/specimen/Coda) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Coda

![Coda](./font-family.png)

This font family contains [2 styles](#gallery).

- `Coda_Regular400`
- `Coda_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/coda expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Coda_Regular400, Coda_ExtraBold800 } from '@expo-google-fonts/coda';

export default () => {
  let [fontsLoaded] = useFonts({
    Coda_Regular400,
    Coda_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Coda_Regular400' }}>
          Coda_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Coda_ExtraBold800' }}>
          Coda_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Coda_Regular400
![Coda_Regular400](./3286b71ee83e8775ab6ae6fef1580c62d0344ad5a8a10ba144104648a36f9749.ttf.png)

##### Coda_ExtraBold800
![Coda_ExtraBold800](./0f385f570ff23725ac544ecfcf2ec8b8cbca733a730d2038266a6eb8b071e4c0.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/coda` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Coda page on Google Fonts](https://fonts.google.com/specimen/Coda) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Coda on Google Fonts](https://fonts.google.com/specimen/Coda)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/coda)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/coda)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
