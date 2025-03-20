# @expo-google-fonts/schibsted-grotesk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/schibsted-grotesk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/schibsted-grotesk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/schibsted-grotesk)

This package lets you use the [**Schibsted Grotesk**](https://fonts.google.com/specimen/Schibsted+Grotesk) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Schibsted Grotesk

![Schibsted Grotesk](./font-family.png)

This font family contains [12 styles](#-gallery).

- `SchibstedGrotesk_400Regular`
- `SchibstedGrotesk_500Medium`
- `SchibstedGrotesk_600SemiBold`
- `SchibstedGrotesk_700Bold`
- `SchibstedGrotesk_800ExtraBold`
- `SchibstedGrotesk_900Black`
- `SchibstedGrotesk_400Regular_Italic`
- `SchibstedGrotesk_500Medium_Italic`
- `SchibstedGrotesk_600SemiBold_Italic`
- `SchibstedGrotesk_700Bold_Italic`
- `SchibstedGrotesk_800ExtraBold_Italic`
- `SchibstedGrotesk_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/schibsted-grotesk expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SchibstedGrotesk_400Regular,
  SchibstedGrotesk_500Medium,
  SchibstedGrotesk_600SemiBold,
  SchibstedGrotesk_700Bold,
  SchibstedGrotesk_800ExtraBold,
  SchibstedGrotesk_900Black,
  SchibstedGrotesk_400Regular_Italic,
  SchibstedGrotesk_500Medium_Italic,
  SchibstedGrotesk_600SemiBold_Italic,
  SchibstedGrotesk_700Bold_Italic,
  SchibstedGrotesk_800ExtraBold_Italic,
  SchibstedGrotesk_900Black_Italic,
} from '@expo-google-fonts/schibsted-grotesk';

export default () => {
  let [fontsLoaded] = useFonts({
    SchibstedGrotesk_400Regular,
    SchibstedGrotesk_500Medium,
    SchibstedGrotesk_600SemiBold,
    SchibstedGrotesk_700Bold,
    SchibstedGrotesk_800ExtraBold,
    SchibstedGrotesk_900Black,
    SchibstedGrotesk_400Regular_Italic,
    SchibstedGrotesk_500Medium_Italic,
    SchibstedGrotesk_600SemiBold_Italic,
    SchibstedGrotesk_700Bold_Italic,
    SchibstedGrotesk_800ExtraBold_Italic,
    SchibstedGrotesk_900Black_Italic,
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
            fontFamily: 'SchibstedGrotesk_400Regular',
          }}>
          Schibsted Grotesk Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_500Medium',
          }}>
          Schibsted Grotesk Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_600SemiBold',
          }}>
          Schibsted Grotesk Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_700Bold',
          }}>
          Schibsted Grotesk Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_800ExtraBold',
          }}>
          Schibsted Grotesk Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_900Black',
          }}>
          Schibsted Grotesk Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_400Regular_Italic',
          }}>
          Schibsted Grotesk Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_500Medium_Italic',
          }}>
          Schibsted Grotesk Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_600SemiBold_Italic',
          }}>
          Schibsted Grotesk Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_700Bold_Italic',
          }}>
          Schibsted Grotesk Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_800ExtraBold_Italic',
          }}>
          Schibsted Grotesk Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SchibstedGrotesk_900Black_Italic',
          }}>
          Schibsted Grotesk Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SchibstedGrotesk_400Regular](./SchibstedGrotesk_400Regular.ttf.png)|![SchibstedGrotesk_500Medium](./SchibstedGrotesk_500Medium.ttf.png)|![SchibstedGrotesk_600SemiBold](./SchibstedGrotesk_600SemiBold.ttf.png)||
|![SchibstedGrotesk_700Bold](./SchibstedGrotesk_700Bold.ttf.png)|![SchibstedGrotesk_800ExtraBold](./SchibstedGrotesk_800ExtraBold.ttf.png)|![SchibstedGrotesk_900Black](./SchibstedGrotesk_900Black.ttf.png)||
|![SchibstedGrotesk_400Regular_Italic](./SchibstedGrotesk_400Regular_Italic.ttf.png)|![SchibstedGrotesk_500Medium_Italic](./SchibstedGrotesk_500Medium_Italic.ttf.png)|![SchibstedGrotesk_600SemiBold_Italic](./SchibstedGrotesk_600SemiBold_Italic.ttf.png)||
|![SchibstedGrotesk_700Bold_Italic](./SchibstedGrotesk_700Bold_Italic.ttf.png)|![SchibstedGrotesk_800ExtraBold_Italic](./SchibstedGrotesk_800ExtraBold_Italic.ttf.png)|![SchibstedGrotesk_900Black_Italic](./SchibstedGrotesk_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/schibsted-grotesk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Schibsted Grotesk page on Google Fonts](https://fonts.google.com/specimen/Schibsted+Grotesk) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Schibsted Grotesk on Google Fonts](https://fonts.google.com/specimen/Schibsted+Grotesk)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/schibsted-grotesk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/schibsted-grotesk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
