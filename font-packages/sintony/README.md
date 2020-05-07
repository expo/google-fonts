# @expo-google-fonts/sintony

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sintony)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sintony)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sintony)

This package lets you use the [**Sintony**](https://fonts.google.com/specimen/Sintony) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sintony

![Sintony](./font-family.png)

This font family contains [2 styles](#gallery).

- `Sintony_Regular400`
- `Sintony_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sintony expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Sintony_Regular400, Sintony_Bold700 } from '@expo-google-fonts/sintony';

export default () => {
  let [fontsLoaded] = useFonts({
    Sintony_Regular400,
    Sintony_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sintony_Regular400' }}>
          Sintony_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sintony_Bold700' }}>
          Sintony_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Sintony_Regular400
![Sintony_Regular400](./69767c8fec4cb9cf66b8022ffc9f15e99f1b4f6a15c1412ba8974fd55969ffa1.ttf.png)

##### Sintony_Bold700
![Sintony_Bold700](./9c0d2538023d9d221278dc34698930aa90cd23ba0e8b8516986c6c7d88e03a3b.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/sintony` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sintony page on Google Fonts](https://fonts.google.com/specimen/Sintony) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sintony on Google Fonts](https://fonts.google.com/specimen/Sintony)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sintony)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sintony)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
