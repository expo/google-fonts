# @expo-google-fonts/playfair-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playfair-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playfair-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playfair-display)

This package lets you use the [**Playfair Display**](https://fonts.google.com/specimen/Playfair+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Playfair Display

![Playfair Display](./font-family.png)

This font family contains [6 styles](#-gallery).

- `PlayfairDisplay_Regular400`
- `PlayfairDisplay_Regular400_Italic`
- `PlayfairDisplay_Bold700`
- `PlayfairDisplay_Bold700_Italic`
- `PlayfairDisplay_Black900`
- `PlayfairDisplay_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/playfair-display expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  PlayfairDisplay_Regular400,
  PlayfairDisplay_Regular400_Italic,
  PlayfairDisplay_Bold700,
  PlayfairDisplay_Bold700_Italic,
  PlayfairDisplay_Black900,
  PlayfairDisplay_Black900_Italic,
} from '@expo-google-fonts/playfair-display';

export default () => {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_Regular400,
    PlayfairDisplay_Regular400_Italic,
    PlayfairDisplay_Bold700,
    PlayfairDisplay_Bold700_Italic,
    PlayfairDisplay_Black900,
    PlayfairDisplay_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PlayfairDisplay_Regular400' }}>
          PlayfairDisplay_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'PlayfairDisplay_Regular400_Italic' }}>
          PlayfairDisplay_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PlayfairDisplay_Bold700' }}>
          PlayfairDisplay_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PlayfairDisplay_Bold700_Italic' }}>
          PlayfairDisplay_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PlayfairDisplay_Black900' }}>
          PlayfairDisplay_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PlayfairDisplay_Black900_Italic' }}>
          PlayfairDisplay_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### PlayfairDisplay_Regular400
![PlayfairDisplay_Regular400](./924bc8e9d64e8b2f2cb789375461b2d504e9975b6f77da5ffc252ddc8a3aac57.ttf.png)

##### PlayfairDisplay_Regular400_Italic
![PlayfairDisplay_Regular400_Italic](./548814592545ef5a92d9c32a90d369cc51da8a75c2a9397c3f8b64550d64f723.ttf.png)

##### PlayfairDisplay_Bold700
![PlayfairDisplay_Bold700](./e5f443f351dd32a170af092c9d5509a205b292561fff1cc93c7a775be1508529.ttf.png)

##### PlayfairDisplay_Bold700_Italic
![PlayfairDisplay_Bold700_Italic](./b30290eb18fd60330cbcf52d5f3cfdb174100195152ee6c527c286b01155a193.ttf.png)

##### PlayfairDisplay_Black900
![PlayfairDisplay_Black900](./b6c0ff8733004f8c2f6cf42f45af14fbd569ba824fb2843b3db4f3e15616cedd.ttf.png)

##### PlayfairDisplay_Black900_Italic
![PlayfairDisplay_Black900_Italic](./19e0ceccbc574b8a28fe94bd62388dc4dd8dbb00da8fda92003d293ff75bf9ed.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/playfair-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playfair Display page on Google Fonts](https://fonts.google.com/specimen/Playfair+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playfair Display on Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playfair-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playfair-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
