# @expo-google-fonts/playwrite-us-trad

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-us-trad)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-us-trad)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-us-trad)

This package lets you use the [**Playwrite US Trad**](https://fonts.google.com/specimen/Playwrite+US+Trad) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite US Trad

![Playwrite US Trad](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteUSTrad_100Thin`
- `PlaywriteUSTrad_200ExtraLight`
- `PlaywriteUSTrad_300Light`
- `PlaywriteUSTrad_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/playwrite-us-trad expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlaywriteUSTrad_100Thin,
  PlaywriteUSTrad_200ExtraLight,
  PlaywriteUSTrad_300Light,
  PlaywriteUSTrad_400Regular,
} from '@expo-google-fonts/playwrite-us-trad';

export default () => {
  let [fontsLoaded] = useFonts({
    PlaywriteUSTrad_100Thin,
    PlaywriteUSTrad_200ExtraLight,
    PlaywriteUSTrad_300Light,
    PlaywriteUSTrad_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteUSTrad_100Thin',
          }}>
          Playwrite US Trad Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteUSTrad_200ExtraLight',
          }}>
          Playwrite US Trad Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteUSTrad_300Light',
          }}>
          Playwrite US Trad Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteUSTrad_400Regular',
          }}>
          Playwrite US Trad Regular
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteUSTrad_100Thin](./PlaywriteUSTrad_100Thin.ttf.png)|![PlaywriteUSTrad_200ExtraLight](./PlaywriteUSTrad_200ExtraLight.ttf.png)|![PlaywriteUSTrad_300Light](./PlaywriteUSTrad_300Light.ttf.png)||
|![PlaywriteUSTrad_400Regular](./PlaywriteUSTrad_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/playwrite-us-trad` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite US Trad page on Google Fonts](https://fonts.google.com/specimen/Playwrite+US+Trad) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite US Trad on Google Fonts](https://fonts.google.com/specimen/Playwrite+US+Trad)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-us-trad)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-us-trad)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
