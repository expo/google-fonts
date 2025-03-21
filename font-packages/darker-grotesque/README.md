# @expo-google-fonts/darker-grotesque

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/darker-grotesque)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/darker-grotesque)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/darker-grotesque)

This package lets you use the [**Darker Grotesque**](https://fonts.google.com/specimen/Darker+Grotesque) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Darker Grotesque

![Darker Grotesque](./font-family.png)

This font family contains [7 styles](#-gallery).

- `DarkerGrotesque_300Light`
- `DarkerGrotesque_400Regular`
- `DarkerGrotesque_500Medium`
- `DarkerGrotesque_600SemiBold`
- `DarkerGrotesque_700Bold`
- `DarkerGrotesque_800ExtraBold`
- `DarkerGrotesque_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/darker-grotesque expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  DarkerGrotesque_300Light,
  DarkerGrotesque_400Regular,
  DarkerGrotesque_500Medium,
  DarkerGrotesque_600SemiBold,
  DarkerGrotesque_700Bold,
  DarkerGrotesque_800ExtraBold,
  DarkerGrotesque_900Black,
} from '@expo-google-fonts/darker-grotesque';

export default () => {
  let [fontsLoaded] = useFonts({
    DarkerGrotesque_300Light,
    DarkerGrotesque_400Regular,
    DarkerGrotesque_500Medium,
    DarkerGrotesque_600SemiBold,
    DarkerGrotesque_700Bold,
    DarkerGrotesque_800ExtraBold,
    DarkerGrotesque_900Black,
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
            fontFamily: 'DarkerGrotesque_300Light',
          }}>
          Darker Grotesque Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'DarkerGrotesque_400Regular',
          }}>
          Darker Grotesque Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'DarkerGrotesque_500Medium',
          }}>
          Darker Grotesque Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'DarkerGrotesque_600SemiBold',
          }}>
          Darker Grotesque Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'DarkerGrotesque_700Bold',
          }}>
          Darker Grotesque Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'DarkerGrotesque_800ExtraBold',
          }}>
          Darker Grotesque Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'DarkerGrotesque_900Black',
          }}>
          Darker Grotesque Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![DarkerGrotesque_300Light](./DarkerGrotesque_300Light.ttf.png)|![DarkerGrotesque_400Regular](./DarkerGrotesque_400Regular.ttf.png)|![DarkerGrotesque_500Medium](./DarkerGrotesque_500Medium.ttf.png)||
|![DarkerGrotesque_600SemiBold](./DarkerGrotesque_600SemiBold.ttf.png)|![DarkerGrotesque_700Bold](./DarkerGrotesque_700Bold.ttf.png)|![DarkerGrotesque_800ExtraBold](./DarkerGrotesque_800ExtraBold.ttf.png)||
|![DarkerGrotesque_900Black](./DarkerGrotesque_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/darker-grotesque` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Darker Grotesque page on Google Fonts](https://fonts.google.com/specimen/Darker+Grotesque) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Darker Grotesque on Google Fonts](https://fonts.google.com/specimen/Darker+Grotesque)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/darker-grotesque)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/darker-grotesque)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
