# @expo-google-fonts/cairo-play

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cairo-play)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cairo-play)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cairo-play)

This package lets you use the [**Cairo Play**](https://fonts.google.com/specimen/Cairo+Play) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cairo Play

![Cairo Play](./font-family.png)

This font family contains [8 styles](#-gallery).

- `CairoPlay_200ExtraLight`
- `CairoPlay_300Light`
- `CairoPlay_400Regular`
- `CairoPlay_500Medium`
- `CairoPlay_600SemiBold`
- `CairoPlay_700Bold`
- `CairoPlay_800ExtraBold`
- `CairoPlay_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/cairo-play expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  CairoPlay_200ExtraLight,
  CairoPlay_300Light,
  CairoPlay_400Regular,
  CairoPlay_500Medium,
  CairoPlay_600SemiBold,
  CairoPlay_700Bold,
  CairoPlay_800ExtraBold,
  CairoPlay_900Black,
} from '@expo-google-fonts/cairo-play';

export default () => {
  let [fontsLoaded] = useFonts({
    CairoPlay_200ExtraLight,
    CairoPlay_300Light,
    CairoPlay_400Regular,
    CairoPlay_500Medium,
    CairoPlay_600SemiBold,
    CairoPlay_700Bold,
    CairoPlay_800ExtraBold,
    CairoPlay_900Black,
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
            fontFamily: 'CairoPlay_200ExtraLight',
          }}>
          Cairo Play Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CairoPlay_300Light',
          }}>
          Cairo Play Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CairoPlay_400Regular',
          }}>
          Cairo Play Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CairoPlay_500Medium',
          }}>
          Cairo Play Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CairoPlay_600SemiBold',
          }}>
          Cairo Play Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CairoPlay_700Bold',
          }}>
          Cairo Play Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CairoPlay_800ExtraBold',
          }}>
          Cairo Play Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CairoPlay_900Black',
          }}>
          Cairo Play Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![CairoPlay_200ExtraLight](./CairoPlay_200ExtraLight.ttf.png)|![CairoPlay_300Light](./CairoPlay_300Light.ttf.png)|![CairoPlay_400Regular](./CairoPlay_400Regular.ttf.png)||
|![CairoPlay_500Medium](./CairoPlay_500Medium.ttf.png)|![CairoPlay_600SemiBold](./CairoPlay_600SemiBold.ttf.png)|![CairoPlay_700Bold](./CairoPlay_700Bold.ttf.png)||
|![CairoPlay_800ExtraBold](./CairoPlay_800ExtraBold.ttf.png)|![CairoPlay_900Black](./CairoPlay_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cairo-play` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cairo Play page on Google Fonts](https://fonts.google.com/specimen/Cairo+Play) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cairo Play on Google Fonts](https://fonts.google.com/specimen/Cairo+Play)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cairo-play)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cairo-play)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
