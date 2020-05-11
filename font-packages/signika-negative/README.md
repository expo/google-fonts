# @expo-google-fonts/signika-negative

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/signika-negative)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/signika-negative)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/signika-negative)

This package lets you use the [**Signika Negative**](https://fonts.google.com/specimen/Signika+Negative) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Signika Negative

![Signika Negative](./font-family.png)

This font family contains [4 styles](#-gallery).

- `SignikaNegative_Light300`
- `SignikaNegative_Regular400`
- `SignikaNegative_SemiBold600`
- `SignikaNegative_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/signika-negative expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  SignikaNegative_Light300,
  SignikaNegative_Regular400,
  SignikaNegative_SemiBold600,
  SignikaNegative_Bold700,
  useFonts,
} from '@expo-google-fonts/signika-negative';

export default () => {
  let [fontsLoaded] = useFonts({
    SignikaNegative_Light300,
    SignikaNegative_Regular400,
    SignikaNegative_SemiBold600,
    SignikaNegative_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SignikaNegative_Light300' }}>
          SignikaNegative_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SignikaNegative_Regular400' }}>
          SignikaNegative_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SignikaNegative_SemiBold600' }}>
          SignikaNegative_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SignikaNegative_Bold700' }}>
          SignikaNegative_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SignikaNegative_Light300
![SignikaNegative_Light300](./8a98587d6b5889382e0756db0404bae7fab53cd05d1ed3acfe5d2e92ce054710.ttf.png)

##### SignikaNegative_Regular400
![SignikaNegative_Regular400](./4dafecef4dffed68c6467a6368c16342c151a400ebf2e1d10c208843e0f7f4f2.ttf.png)

##### SignikaNegative_SemiBold600
![SignikaNegative_SemiBold600](./00703f7e2d564d97ed7ae01055939e32779956267e52d2c91697d4c58571d0a3.ttf.png)

##### SignikaNegative_Bold700
![SignikaNegative_Bold700](./49c7f19df1afc9e1068c8860087405401cf9a4d406cfc46b15013bbb95ecb2e4.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/signika-negative` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Signika Negative page on Google Fonts](https://fonts.google.com/specimen/Signika+Negative) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Signika Negative on Google Fonts](https://fonts.google.com/specimen/Signika+Negative)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/signika-negative)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/signika-negative)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
