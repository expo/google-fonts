# @expo-google-fonts/winky-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/winky-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/winky-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/winky-sans)

This package lets you use the [**Winky Sans**](https://fonts.google.com/specimen/Winky+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Winky Sans

![Winky Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `WinkySans_300Light`
- `WinkySans_400Regular`
- `WinkySans_500Medium`
- `WinkySans_600SemiBold`
- `WinkySans_700Bold`
- `WinkySans_800ExtraBold`
- `WinkySans_900Black`
- `WinkySans_300Light_Italic`
- `WinkySans_400Regular_Italic`
- `WinkySans_500Medium_Italic`
- `WinkySans_600SemiBold_Italic`
- `WinkySans_700Bold_Italic`
- `WinkySans_800ExtraBold_Italic`
- `WinkySans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/winky-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  WinkySans_300Light,
  WinkySans_400Regular,
  WinkySans_500Medium,
  WinkySans_600SemiBold,
  WinkySans_700Bold,
  WinkySans_800ExtraBold,
  WinkySans_900Black,
  WinkySans_300Light_Italic,
  WinkySans_400Regular_Italic,
  WinkySans_500Medium_Italic,
  WinkySans_600SemiBold_Italic,
  WinkySans_700Bold_Italic,
  WinkySans_800ExtraBold_Italic,
  WinkySans_900Black_Italic,
} from '@expo-google-fonts/winky-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    WinkySans_300Light,
    WinkySans_400Regular,
    WinkySans_500Medium,
    WinkySans_600SemiBold,
    WinkySans_700Bold,
    WinkySans_800ExtraBold,
    WinkySans_900Black,
    WinkySans_300Light_Italic,
    WinkySans_400Regular_Italic,
    WinkySans_500Medium_Italic,
    WinkySans_600SemiBold_Italic,
    WinkySans_700Bold_Italic,
    WinkySans_800ExtraBold_Italic,
    WinkySans_900Black_Italic,
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
            fontFamily: 'WinkySans_300Light',
          }}>
          Winky Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_400Regular',
          }}>
          Winky Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_500Medium',
          }}>
          Winky Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_600SemiBold',
          }}>
          Winky Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_700Bold',
          }}>
          Winky Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_800ExtraBold',
          }}>
          Winky Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_900Black',
          }}>
          Winky Sans Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_300Light_Italic',
          }}>
          Winky Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_400Regular_Italic',
          }}>
          Winky Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_500Medium_Italic',
          }}>
          Winky Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_600SemiBold_Italic',
          }}>
          Winky Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_700Bold_Italic',
          }}>
          Winky Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_800ExtraBold_Italic',
          }}>
          Winky Sans Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WinkySans_900Black_Italic',
          }}>
          Winky Sans Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![WinkySans_300Light](./WinkySans_300Light.ttf.png)|![WinkySans_400Regular](./WinkySans_400Regular.ttf.png)|![WinkySans_500Medium](./WinkySans_500Medium.ttf.png)||
|![WinkySans_600SemiBold](./WinkySans_600SemiBold.ttf.png)|![WinkySans_700Bold](./WinkySans_700Bold.ttf.png)|![WinkySans_800ExtraBold](./WinkySans_800ExtraBold.ttf.png)||
|![WinkySans_900Black](./WinkySans_900Black.ttf.png)|![WinkySans_300Light_Italic](./WinkySans_300Light_Italic.ttf.png)|![WinkySans_400Regular_Italic](./WinkySans_400Regular_Italic.ttf.png)||
|![WinkySans_500Medium_Italic](./WinkySans_500Medium_Italic.ttf.png)|![WinkySans_600SemiBold_Italic](./WinkySans_600SemiBold_Italic.ttf.png)|![WinkySans_700Bold_Italic](./WinkySans_700Bold_Italic.ttf.png)||
|![WinkySans_800ExtraBold_Italic](./WinkySans_800ExtraBold_Italic.ttf.png)|![WinkySans_900Black_Italic](./WinkySans_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/winky-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Winky Sans page on Google Fonts](https://fonts.google.com/specimen/Winky+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Winky Sans on Google Fonts](https://fonts.google.com/specimen/Winky+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/winky-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/winky-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
