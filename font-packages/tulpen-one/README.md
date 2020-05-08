# @expo-google-fonts/tulpen-one

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tulpen-one)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tulpen-one)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tulpen-one)

This package lets you use the [**Tulpen One**](https://fonts.google.com/specimen/Tulpen+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Tulpen One

![Tulpen One](./font-family.png)

This font family contains [1 style](#-gallery).

- `TulpenOne_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tulpen-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { TulpenOne_Regular400 } from '@expo-google-fonts/tulpen-one';

export default () => {
  let [fontsLoaded] = useFonts({
    TulpenOne_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'TulpenOne_Regular400' }}>
          TulpenOne_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### TulpenOne_Regular400
![TulpenOne_Regular400](./a7952e8a169708673ce2f03a77306fa166fa25d0f8475c26ea3cf055d955577c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tulpen-one` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tulpen One page on Google Fonts](https://fonts.google.com/specimen/Tulpen+One) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tulpen One on Google Fonts](https://fonts.google.com/specimen/Tulpen+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tulpen-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tulpen-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
