# @expo-google-fonts/scope-one

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/scope-one)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/scope-one)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/scope-one)

This package lets you use the [**Scope One**](https://fonts.google.com/specimen/Scope+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Scope One

![Scope One](./font-family.png)

This font family contains [1 style](#-gallery).

- `ScopeOne_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/scope-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScopeOne_Regular400 } from '@expo-google-fonts/scope-one';

export default () => {
  let [fontsLoaded] = useFonts({
    ScopeOne_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ScopeOne_Regular400' }}>
          ScopeOne_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ScopeOne_Regular400
![ScopeOne_Regular400](./4731e0b7f73e41e5dbd3b6282d39a0c36cdb8455e36b71e9b60319540c088c3d.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/scope-one` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Scope One page on Google Fonts](https://fonts.google.com/specimen/Scope+One) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Scope One on Google Fonts](https://fonts.google.com/specimen/Scope+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/scope-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/scope-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
