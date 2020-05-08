# @expo-google-fonts/dm-serif-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/dm-serif-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/dm-serif-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/dm-serif-display)

This package lets you use the [**DM Serif Display**](https://fonts.google.com/specimen/DM+Serif+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## DM Serif Display

![DM Serif Display](./font-family.png)

This font family contains [2 styles](#-gallery).

- `DMSerifDisplay_Regular400`
- `DMSerifDisplay_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/dm-serif-display expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  DMSerifDisplay_Regular400,
  DMSerifDisplay_Regular400_Italic,
} from '@expo-google-fonts/dm-serif-display';

export default () => {
  let [fontsLoaded] = useFonts({
    DMSerifDisplay_Regular400,
    DMSerifDisplay_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSerifDisplay_Regular400' }}>
          DMSerifDisplay_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSerifDisplay_Regular400_Italic' }}>
          DMSerifDisplay_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### DMSerifDisplay_Regular400
![DMSerifDisplay_Regular400](./e1157689ec181ea520aeee52f8f7f8c16e0ced52d30800c402aae31faf50985a.ttf.png)

##### DMSerifDisplay_Regular400_Italic
![DMSerifDisplay_Regular400_Italic](./007cfd580d7b1323a1b43156d2591b8119745361daba6117832dcbfb0146a36a.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/dm-serif-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [DM Serif Display page on Google Fonts](https://fonts.google.com/specimen/DM+Serif+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [DM Serif Display on Google Fonts](https://fonts.google.com/specimen/DM+Serif+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dm-serif-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dm-serif-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
