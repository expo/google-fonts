# @expo-google-fonts/playwrite-us-modern

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-us-modern)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-us-modern)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-us-modern)

This package lets you use the [**Playwrite US Modern**](https://fonts.google.com/specimen/Playwrite+US+Modern) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite US Modern

![Playwrite US Modern](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteUSModern_100Thin`
- `PlaywriteUSModern_200ExtraLight`
- `PlaywriteUSModern_300Light`
- `PlaywriteUSModern_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/playwrite-us-modern expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlaywriteUSModern_100Thin,
  PlaywriteUSModern_200ExtraLight,
  PlaywriteUSModern_300Light,
  PlaywriteUSModern_400Regular,
} from '@expo-google-fonts/playwrite-us-modern';

export default () => {
  let [fontsLoaded] = useFonts({
    PlaywriteUSModern_100Thin,
    PlaywriteUSModern_200ExtraLight,
    PlaywriteUSModern_300Light,
    PlaywriteUSModern_400Regular,
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
            fontFamily: 'PlaywriteUSModern_100Thin',
          }}>
          Playwrite US Modern Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteUSModern_200ExtraLight',
          }}>
          Playwrite US Modern Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteUSModern_300Light',
          }}>
          Playwrite US Modern Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteUSModern_400Regular',
          }}>
          Playwrite US Modern Regular
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteUSModern_100Thin](./PlaywriteUSModern_100Thin.ttf.png)|![PlaywriteUSModern_200ExtraLight](./PlaywriteUSModern_200ExtraLight.ttf.png)|![PlaywriteUSModern_300Light](./PlaywriteUSModern_300Light.ttf.png)||
|![PlaywriteUSModern_400Regular](./PlaywriteUSModern_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/playwrite-us-modern` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite US Modern page on Google Fonts](https://fonts.google.com/specimen/Playwrite+US+Modern) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite US Modern on Google Fonts](https://fonts.google.com/specimen/Playwrite+US+Modern)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-us-modern)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-us-modern)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
