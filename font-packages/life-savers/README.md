# @expo-google-fonts/life-savers

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/life-savers)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/life-savers)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/life-savers)

This package lets you use the [**Life Savers**](https://fonts.google.com/specimen/Life+Savers) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Life Savers

![Life Savers](./font-family.png)

This font family contains [2 styles](#-gallery).

- `LifeSavers_Regular400`
- `LifeSavers_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/life-savers expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  LifeSavers_Regular400,
  LifeSavers_Bold700,
  useFonts,
} from '@expo-google-fonts/life-savers';

export default () => {
  let [fontsLoaded] = useFonts({
    LifeSavers_Regular400,
    LifeSavers_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LifeSavers_Regular400' }}>
          LifeSavers_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LifeSavers_Bold700' }}>
          LifeSavers_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### LifeSavers_Regular400
![LifeSavers_Regular400](./04d39ceac525bd7119947e50ca506cd62efc8803e38347a7b1d07e401463bcee.ttf.png)

##### LifeSavers_Bold700
![LifeSavers_Bold700](./362b7da392f70200e34ca8d939a7739b45fdd4cb54b9aee41f6a1db39d13a08b.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/life-savers` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Life Savers page on Google Fonts](https://fonts.google.com/specimen/Life+Savers) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Life Savers on Google Fonts](https://fonts.google.com/specimen/Life+Savers)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/life-savers)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/life-savers)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
