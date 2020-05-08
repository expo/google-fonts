# @expo-google-fonts/glegoo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/glegoo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/glegoo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/glegoo)

This package lets you use the [**Glegoo**](https://fonts.google.com/specimen/Glegoo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Glegoo

![Glegoo](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Glegoo_Regular400`
- `Glegoo_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/glegoo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Glegoo_Regular400, Glegoo_Bold700 } from '@expo-google-fonts/glegoo';

export default () => {
  let [fontsLoaded] = useFonts({
    Glegoo_Regular400,
    Glegoo_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Glegoo_Regular400' }}>
          Glegoo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Glegoo_Bold700' }}>
          Glegoo_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Glegoo_Regular400
![Glegoo_Regular400](./91a94e2b397503a978c0e061d4d1f39323e741fd649d6f743538a8d947cc1f13.ttf.png)

##### Glegoo_Bold700
![Glegoo_Bold700](./32ba529e1df310b4629e2a4b94b577e8d2b995647f1b0b02b97cbc401c43100c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/glegoo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Glegoo page on Google Fonts](https://fonts.google.com/specimen/Glegoo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Glegoo on Google Fonts](https://fonts.google.com/specimen/Glegoo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/glegoo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/glegoo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
