# @expo-google-fonts/bodoni-moda-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bodoni-moda-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bodoni-moda-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bodoni-moda-sc)

This package lets you use the [**Bodoni Moda SC**](https://fonts.google.com/specimen/Bodoni+Moda+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bodoni Moda SC

![Bodoni Moda SC](./font-family.png)

This font family contains [12 styles](#-gallery).

- `BodoniModaSC_400Regular`
- `BodoniModaSC_500Medium`
- `BodoniModaSC_600SemiBold`
- `BodoniModaSC_700Bold`
- `BodoniModaSC_800ExtraBold`
- `BodoniModaSC_900Black`
- `BodoniModaSC_400Regular_Italic`
- `BodoniModaSC_500Medium_Italic`
- `BodoniModaSC_600SemiBold_Italic`
- `BodoniModaSC_700Bold_Italic`
- `BodoniModaSC_800ExtraBold_Italic`
- `BodoniModaSC_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/bodoni-moda-sc expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BodoniModaSC_400Regular,
  BodoniModaSC_500Medium,
  BodoniModaSC_600SemiBold,
  BodoniModaSC_700Bold,
  BodoniModaSC_800ExtraBold,
  BodoniModaSC_900Black,
  BodoniModaSC_400Regular_Italic,
  BodoniModaSC_500Medium_Italic,
  BodoniModaSC_600SemiBold_Italic,
  BodoniModaSC_700Bold_Italic,
  BodoniModaSC_800ExtraBold_Italic,
  BodoniModaSC_900Black_Italic,
} from '@expo-google-fonts/bodoni-moda-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    BodoniModaSC_400Regular,
    BodoniModaSC_500Medium,
    BodoniModaSC_600SemiBold,
    BodoniModaSC_700Bold,
    BodoniModaSC_800ExtraBold,
    BodoniModaSC_900Black,
    BodoniModaSC_400Regular_Italic,
    BodoniModaSC_500Medium_Italic,
    BodoniModaSC_600SemiBold_Italic,
    BodoniModaSC_700Bold_Italic,
    BodoniModaSC_800ExtraBold_Italic,
    BodoniModaSC_900Black_Italic,
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
            fontFamily: 'BodoniModaSC_400Regular',
          }}>
          Bodoni Moda SC Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_500Medium',
          }}>
          Bodoni Moda SC Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_600SemiBold',
          }}>
          Bodoni Moda SC Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_700Bold',
          }}>
          Bodoni Moda SC Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_800ExtraBold',
          }}>
          Bodoni Moda SC Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_900Black',
          }}>
          Bodoni Moda SC Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_400Regular_Italic',
          }}>
          Bodoni Moda SC Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_500Medium_Italic',
          }}>
          Bodoni Moda SC Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_600SemiBold_Italic',
          }}>
          Bodoni Moda SC Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_700Bold_Italic',
          }}>
          Bodoni Moda SC Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_800ExtraBold_Italic',
          }}>
          Bodoni Moda SC Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BodoniModaSC_900Black_Italic',
          }}>
          Bodoni Moda SC Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BodoniModaSC_400Regular](./BodoniModaSC_400Regular.ttf.png)|![BodoniModaSC_500Medium](./BodoniModaSC_500Medium.ttf.png)|![BodoniModaSC_600SemiBold](./BodoniModaSC_600SemiBold.ttf.png)||
|![BodoniModaSC_700Bold](./BodoniModaSC_700Bold.ttf.png)|![BodoniModaSC_800ExtraBold](./BodoniModaSC_800ExtraBold.ttf.png)|![BodoniModaSC_900Black](./BodoniModaSC_900Black.ttf.png)||
|![BodoniModaSC_400Regular_Italic](./BodoniModaSC_400Regular_Italic.ttf.png)|![BodoniModaSC_500Medium_Italic](./BodoniModaSC_500Medium_Italic.ttf.png)|![BodoniModaSC_600SemiBold_Italic](./BodoniModaSC_600SemiBold_Italic.ttf.png)||
|![BodoniModaSC_700Bold_Italic](./BodoniModaSC_700Bold_Italic.ttf.png)|![BodoniModaSC_800ExtraBold_Italic](./BodoniModaSC_800ExtraBold_Italic.ttf.png)|![BodoniModaSC_900Black_Italic](./BodoniModaSC_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/bodoni-moda-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bodoni Moda SC page on Google Fonts](https://fonts.google.com/specimen/Bodoni+Moda+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bodoni Moda SC on Google Fonts](https://fonts.google.com/specimen/Bodoni+Moda+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bodoni-moda-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bodoni-moda-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
