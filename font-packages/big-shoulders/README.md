# @expo-google-fonts/big-shoulders

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders)

This package lets you use the [**Big Shoulders**](https://fonts.google.com/specimen/Big+Shoulders) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders

![Big Shoulders](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BigShoulders_100Thin`
- `BigShoulders_200ExtraLight`
- `BigShoulders_300Light`
- `BigShoulders_400Regular`
- `BigShoulders_500Medium`
- `BigShoulders_600SemiBold`
- `BigShoulders_700Bold`
- `BigShoulders_800ExtraBold`
- `BigShoulders_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/big-shoulders expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShoulders_100Thin,
  BigShoulders_200ExtraLight,
  BigShoulders_300Light,
  BigShoulders_400Regular,
  BigShoulders_500Medium,
  BigShoulders_600SemiBold,
  BigShoulders_700Bold,
  BigShoulders_800ExtraBold,
  BigShoulders_900Black,
} from '@expo-google-fonts/big-shoulders';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShoulders_100Thin,
    BigShoulders_200ExtraLight,
    BigShoulders_300Light,
    BigShoulders_400Regular,
    BigShoulders_500Medium,
    BigShoulders_600SemiBold,
    BigShoulders_700Bold,
    BigShoulders_800ExtraBold,
    BigShoulders_900Black,
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
            fontFamily: 'BigShoulders_100Thin',
          }}>
          Big Shoulders Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_200ExtraLight',
          }}>
          Big Shoulders Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_300Light',
          }}>
          Big Shoulders Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_400Regular',
          }}>
          Big Shoulders Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_500Medium',
          }}>
          Big Shoulders Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_600SemiBold',
          }}>
          Big Shoulders Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_700Bold',
          }}>
          Big Shoulders Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_800ExtraBold',
          }}>
          Big Shoulders Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShoulders_900Black',
          }}>
          Big Shoulders Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShoulders_100Thin](./BigShoulders_100Thin.ttf.png)|![BigShoulders_200ExtraLight](./BigShoulders_200ExtraLight.ttf.png)|![BigShoulders_300Light](./BigShoulders_300Light.ttf.png)||
|![BigShoulders_400Regular](./BigShoulders_400Regular.ttf.png)|![BigShoulders_500Medium](./BigShoulders_500Medium.ttf.png)|![BigShoulders_600SemiBold](./BigShoulders_600SemiBold.ttf.png)||
|![BigShoulders_700Bold](./BigShoulders_700Bold.ttf.png)|![BigShoulders_800ExtraBold](./BigShoulders_800ExtraBold.ttf.png)|![BigShoulders_900Black](./BigShoulders_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
