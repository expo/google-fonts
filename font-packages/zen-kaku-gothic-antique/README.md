# @expo-google-fonts/zen-kaku-gothic-antique

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zen-kaku-gothic-antique)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zen-kaku-gothic-antique)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zen-kaku-gothic-antique)

This package lets you use the [**Zen Kaku Gothic Antique**](https://fonts.google.com/specimen/Zen+Kaku+Gothic+Antique) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zen Kaku Gothic Antique

![Zen Kaku Gothic Antique](./font-family.png)

This font family contains [5 styles](#-gallery).

- `ZenKakuGothicAntique_300Light`
- `ZenKakuGothicAntique_400Regular`
- `ZenKakuGothicAntique_500Medium`
- `ZenKakuGothicAntique_700Bold`
- `ZenKakuGothicAntique_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/zen-kaku-gothic-antique expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ZenKakuGothicAntique_300Light,
  ZenKakuGothicAntique_400Regular,
  ZenKakuGothicAntique_500Medium,
  ZenKakuGothicAntique_700Bold,
  ZenKakuGothicAntique_900Black,
} from '@expo-google-fonts/zen-kaku-gothic-antique';

export default () => {
  let [fontsLoaded] = useFonts({
    ZenKakuGothicAntique_300Light,
    ZenKakuGothicAntique_400Regular,
    ZenKakuGothicAntique_500Medium,
    ZenKakuGothicAntique_700Bold,
    ZenKakuGothicAntique_900Black,
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
            fontFamily: 'ZenKakuGothicAntique_300Light',
          }}>
          Zen Kaku Gothic Antique Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ZenKakuGothicAntique_400Regular',
          }}>
          Zen Kaku Gothic Antique Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ZenKakuGothicAntique_500Medium',
          }}>
          Zen Kaku Gothic Antique Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ZenKakuGothicAntique_700Bold',
          }}>
          Zen Kaku Gothic Antique Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ZenKakuGothicAntique_900Black',
          }}>
          Zen Kaku Gothic Antique Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![ZenKakuGothicAntique_300Light](./ZenKakuGothicAntique_300Light.ttf.png)|![ZenKakuGothicAntique_400Regular](./ZenKakuGothicAntique_400Regular.ttf.png)|![ZenKakuGothicAntique_500Medium](./ZenKakuGothicAntique_500Medium.ttf.png)||
|![ZenKakuGothicAntique_700Bold](./ZenKakuGothicAntique_700Bold.ttf.png)|![ZenKakuGothicAntique_900Black](./ZenKakuGothicAntique_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/zen-kaku-gothic-antique` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zen Kaku Gothic Antique page on Google Fonts](https://fonts.google.com/specimen/Zen+Kaku+Gothic+Antique) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zen Kaku Gothic Antique on Google Fonts](https://fonts.google.com/specimen/Zen+Kaku+Gothic+Antique)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zen-kaku-gothic-antique)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zen-kaku-gothic-antique)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
