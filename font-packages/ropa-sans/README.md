# @expo-google-fonts/ropa-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ropa-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ropa-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ropa-sans)

This package lets you use the [**Ropa Sans**](https://fonts.google.com/specimen/Ropa+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Ropa Sans

![Ropa Sans](./font-family.png)

This font family contains [2 styles](#-gallery).

- `RopaSans_Regular400`
- `RopaSans_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ropa-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { RopaSans_Regular400, RopaSans_Regular400_Italic } from '@expo-google-fonts/ropa-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    RopaSans_Regular400,
    RopaSans_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'RopaSans_Regular400' }}>
          RopaSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RopaSans_Regular400_Italic' }}>
          RopaSans_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### RopaSans_Regular400
![RopaSans_Regular400](./ded2bcc06059fc1d86ad77aedff4ca5827287da7e5d969867d190f24ce2c5916.ttf.png)

##### RopaSans_Regular400_Italic
![RopaSans_Regular400_Italic](./0fc33e982fa4003ec3947ef040bddfed3e33ad447086af587ee5ed6cc4ef4fac.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ropa-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ropa Sans page on Google Fonts](https://fonts.google.com/specimen/Ropa+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ropa Sans on Google Fonts](https://fonts.google.com/specimen/Ropa+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ropa-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ropa-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
