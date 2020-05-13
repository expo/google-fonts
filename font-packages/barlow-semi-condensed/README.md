# @expo-google-fonts/barlow-semi-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/barlow-semi-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/barlow-semi-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/barlow-semi-condensed)

This package lets you use the [**Barlow Semi Condensed**](https://fonts.google.com/specimen/Barlow+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Barlow Semi Condensed

![Barlow Semi Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `BarlowSemiCondensed_100Thin`
- `BarlowSemiCondensed_100Thin_Italic`
- `BarlowSemiCondensed_200ExtraLight`
- `BarlowSemiCondensed_200ExtraLight_Italic`
- `BarlowSemiCondensed_300Light`
- `BarlowSemiCondensed_300Light_Italic`
- `BarlowSemiCondensed_400Regular`
- `BarlowSemiCondensed_400Regular_Italic`
- `BarlowSemiCondensed_500Medium`
- `BarlowSemiCondensed_500Medium_Italic`
- `BarlowSemiCondensed_600SemiBold`
- `BarlowSemiCondensed_600SemiBold_Italic`
- `BarlowSemiCondensed_700Bold`
- `BarlowSemiCondensed_700Bold_Italic`
- `BarlowSemiCondensed_800ExtraBold`
- `BarlowSemiCondensed_800ExtraBold_Italic`
- `BarlowSemiCondensed_900Black`
- `BarlowSemiCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/barlow-semi-condensed expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BarlowSemiCondensed_100Thin,
  BarlowSemiCondensed_100Thin_Italic,
  BarlowSemiCondensed_200ExtraLight,
  BarlowSemiCondensed_200ExtraLight_Italic,
  BarlowSemiCondensed_300Light,
  BarlowSemiCondensed_300Light_Italic,
  BarlowSemiCondensed_400Regular,
  BarlowSemiCondensed_400Regular_Italic,
  BarlowSemiCondensed_500Medium,
  BarlowSemiCondensed_500Medium_Italic,
  BarlowSemiCondensed_600SemiBold,
  BarlowSemiCondensed_600SemiBold_Italic,
  BarlowSemiCondensed_700Bold,
  BarlowSemiCondensed_700Bold_Italic,
  BarlowSemiCondensed_800ExtraBold,
  BarlowSemiCondensed_800ExtraBold_Italic,
  BarlowSemiCondensed_900Black,
  BarlowSemiCondensed_900Black_Italic,
} from '@expo-google-fonts/barlow-semi-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    BarlowSemiCondensed_100Thin,
    BarlowSemiCondensed_100Thin_Italic,
    BarlowSemiCondensed_200ExtraLight,
    BarlowSemiCondensed_200ExtraLight_Italic,
    BarlowSemiCondensed_300Light,
    BarlowSemiCondensed_300Light_Italic,
    BarlowSemiCondensed_400Regular,
    BarlowSemiCondensed_400Regular_Italic,
    BarlowSemiCondensed_500Medium,
    BarlowSemiCondensed_500Medium_Italic,
    BarlowSemiCondensed_600SemiBold,
    BarlowSemiCondensed_600SemiBold_Italic,
    BarlowSemiCondensed_700Bold,
    BarlowSemiCondensed_700Bold_Italic,
    BarlowSemiCondensed_800ExtraBold,
    BarlowSemiCondensed_800ExtraBold_Italic,
    BarlowSemiCondensed_900Black,
    BarlowSemiCondensed_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_100Thin' }}>
          BarlowSemiCondensed_100Thin
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_100Thin_Italic' }}>
          BarlowSemiCondensed_100Thin_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_200ExtraLight' }}>
          BarlowSemiCondensed_200ExtraLight
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_200ExtraLight_Italic',
          }}>
          BarlowSemiCondensed_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_300Light' }}>
          BarlowSemiCondensed_300Light
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_300Light_Italic' }}>
          BarlowSemiCondensed_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_400Regular' }}>
          BarlowSemiCondensed_400Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_400Regular_Italic',
          }}>
          BarlowSemiCondensed_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_500Medium' }}>
          BarlowSemiCondensed_500Medium
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_500Medium_Italic' }}>
          BarlowSemiCondensed_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_600SemiBold' }}>
          BarlowSemiCondensed_600SemiBold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_600SemiBold_Italic',
          }}>
          BarlowSemiCondensed_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_700Bold' }}>
          BarlowSemiCondensed_700Bold
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_700Bold_Italic' }}>
          BarlowSemiCondensed_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_800ExtraBold' }}>
          BarlowSemiCondensed_800ExtraBold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_800ExtraBold_Italic',
          }}>
          BarlowSemiCondensed_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_900Black' }}>
          BarlowSemiCondensed_900Black
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_900Black_Italic' }}>
          BarlowSemiCondensed_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BarlowSemiCondensed_100Thin
![BarlowSemiCondensed_100Thin](./BarlowSemiCondensed_100Thin.ttf.png)

##### BarlowSemiCondensed_100Thin_Italic
![BarlowSemiCondensed_100Thin_Italic](./BarlowSemiCondensed_100Thin_Italic.ttf.png)

##### BarlowSemiCondensed_200ExtraLight
![BarlowSemiCondensed_200ExtraLight](./BarlowSemiCondensed_200ExtraLight.ttf.png)

##### BarlowSemiCondensed_200ExtraLight_Italic
![BarlowSemiCondensed_200ExtraLight_Italic](./BarlowSemiCondensed_200ExtraLight_Italic.ttf.png)

##### BarlowSemiCondensed_300Light
![BarlowSemiCondensed_300Light](./BarlowSemiCondensed_300Light.ttf.png)

##### BarlowSemiCondensed_300Light_Italic
![BarlowSemiCondensed_300Light_Italic](./BarlowSemiCondensed_300Light_Italic.ttf.png)

##### BarlowSemiCondensed_400Regular
![BarlowSemiCondensed_400Regular](./BarlowSemiCondensed_400Regular.ttf.png)

##### BarlowSemiCondensed_400Regular_Italic
![BarlowSemiCondensed_400Regular_Italic](./BarlowSemiCondensed_400Regular_Italic.ttf.png)

##### BarlowSemiCondensed_500Medium
![BarlowSemiCondensed_500Medium](./BarlowSemiCondensed_500Medium.ttf.png)

##### BarlowSemiCondensed_500Medium_Italic
![BarlowSemiCondensed_500Medium_Italic](./BarlowSemiCondensed_500Medium_Italic.ttf.png)

##### BarlowSemiCondensed_600SemiBold
![BarlowSemiCondensed_600SemiBold](./BarlowSemiCondensed_600SemiBold.ttf.png)

##### BarlowSemiCondensed_600SemiBold_Italic
![BarlowSemiCondensed_600SemiBold_Italic](./BarlowSemiCondensed_600SemiBold_Italic.ttf.png)

##### BarlowSemiCondensed_700Bold
![BarlowSemiCondensed_700Bold](./BarlowSemiCondensed_700Bold.ttf.png)

##### BarlowSemiCondensed_700Bold_Italic
![BarlowSemiCondensed_700Bold_Italic](./BarlowSemiCondensed_700Bold_Italic.ttf.png)

##### BarlowSemiCondensed_800ExtraBold
![BarlowSemiCondensed_800ExtraBold](./BarlowSemiCondensed_800ExtraBold.ttf.png)

##### BarlowSemiCondensed_800ExtraBold_Italic
![BarlowSemiCondensed_800ExtraBold_Italic](./BarlowSemiCondensed_800ExtraBold_Italic.ttf.png)

##### BarlowSemiCondensed_900Black
![BarlowSemiCondensed_900Black](./BarlowSemiCondensed_900Black.ttf.png)

##### BarlowSemiCondensed_900Black_Italic
![BarlowSemiCondensed_900Black_Italic](./BarlowSemiCondensed_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/barlow-semi-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Barlow Semi Condensed page on Google Fonts](https://fonts.google.com/specimen/Barlow+Semi+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Barlow Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/barlow-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/barlow-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
