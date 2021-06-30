# @expo-google-fonts/big-shoulders-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-display)

This package lets you use the [**Big Shoulders Display**](https://fonts.google.com/specimen/Big+Shoulders+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Display

![Big Shoulders Display](./font-family.png)

This font family contains [8 styles](#-gallery).

- `BigShouldersDisplay_100Thin`
- `BigShouldersDisplay_300Light`
- `BigShouldersDisplay_400Regular`
- `BigShouldersDisplay_500Medium`
- `BigShouldersDisplay_600SemiBold`
- `BigShouldersDisplay_700Bold`
- `BigShouldersDisplay_800ExtraBold`
- `BigShouldersDisplay_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-display expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShouldersDisplay_100Thin,
  BigShouldersDisplay_300Light,
  BigShouldersDisplay_400Regular,
  BigShouldersDisplay_500Medium,
  BigShouldersDisplay_600SemiBold,
  BigShouldersDisplay_700Bold,
  BigShouldersDisplay_800ExtraBold,
  BigShouldersDisplay_900Black,
} from '@expo-google-fonts/big-shoulders-display';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersDisplay_100Thin,
    BigShouldersDisplay_300Light,
    BigShouldersDisplay_400Regular,
    BigShouldersDisplay_500Medium,
    BigShouldersDisplay_600SemiBold,
    BigShouldersDisplay_700Bold,
    BigShouldersDisplay_800ExtraBold,
    BigShouldersDisplay_900Black,
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
            fontFamily: 'BigShouldersDisplay_100Thin',
          }}>
          Big Shoulders Display Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersDisplay_300Light',
          }}>
          Big Shoulders Display Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersDisplay_400Regular',
          }}>
          Big Shoulders Display Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersDisplay_500Medium',
          }}>
          Big Shoulders Display Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersDisplay_600SemiBold',
          }}>
          Big Shoulders Display Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersDisplay_700Bold',
          }}>
          Big Shoulders Display Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersDisplay_800ExtraBold',
          }}>
          Big Shoulders Display Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersDisplay_900Black',
          }}>
          Big Shoulders Display Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersDisplay_100Thin](./BigShouldersDisplay_100Thin.ttf.png)|![BigShouldersDisplay_300Light](./BigShouldersDisplay_300Light.ttf.png)|![BigShouldersDisplay_400Regular](./BigShouldersDisplay_400Regular.ttf.png)||
|![BigShouldersDisplay_500Medium](./BigShouldersDisplay_500Medium.ttf.png)|![BigShouldersDisplay_600SemiBold](./BigShouldersDisplay_600SemiBold.ttf.png)|![BigShouldersDisplay_700Bold](./BigShouldersDisplay_700Bold.ttf.png)||
|![BigShouldersDisplay_800ExtraBold](./BigShouldersDisplay_800ExtraBold.ttf.png)|![BigShouldersDisplay_900Black](./BigShouldersDisplay_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Display page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Display on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
