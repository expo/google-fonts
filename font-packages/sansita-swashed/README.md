# @expo-google-fonts/sansita-swashed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sansita-swashed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sansita-swashed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sansita-swashed)

This package lets you use the [**Sansita Swashed**](https://fonts.google.com/specimen/Sansita+Swashed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sansita Swashed

![Sansita Swashed](./font-family.png)

This font family contains [7 styles](#-gallery).

- `SansitaSwashed_300Light`
- `SansitaSwashed_400Regular`
- `SansitaSwashed_500Medium`
- `SansitaSwashed_600SemiBold`
- `SansitaSwashed_700Bold`
- `SansitaSwashed_800ExtraBold`
- `SansitaSwashed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sansita-swashed expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SansitaSwashed_300Light,
  SansitaSwashed_400Regular,
  SansitaSwashed_500Medium,
  SansitaSwashed_600SemiBold,
  SansitaSwashed_700Bold,
  SansitaSwashed_800ExtraBold,
  SansitaSwashed_900Black,
} from '@expo-google-fonts/sansita-swashed';

export default () => {
  let [fontsLoaded] = useFonts({
    SansitaSwashed_300Light,
    SansitaSwashed_400Regular,
    SansitaSwashed_500Medium,
    SansitaSwashed_600SemiBold,
    SansitaSwashed_700Bold,
    SansitaSwashed_800ExtraBold,
    SansitaSwashed_900Black,
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
            fontFamily: 'SansitaSwashed_300Light',
          }}>
          Sansita Swashed Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SansitaSwashed_400Regular',
          }}>
          Sansita Swashed Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SansitaSwashed_500Medium',
          }}>
          Sansita Swashed Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SansitaSwashed_600SemiBold',
          }}>
          Sansita Swashed Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SansitaSwashed_700Bold',
          }}>
          Sansita Swashed Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SansitaSwashed_800ExtraBold',
          }}>
          Sansita Swashed Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SansitaSwashed_900Black',
          }}>
          Sansita Swashed Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SansitaSwashed_300Light](./SansitaSwashed_300Light.ttf.png)|![SansitaSwashed_400Regular](./SansitaSwashed_400Regular.ttf.png)|![SansitaSwashed_500Medium](./SansitaSwashed_500Medium.ttf.png)||
|![SansitaSwashed_600SemiBold](./SansitaSwashed_600SemiBold.ttf.png)|![SansitaSwashed_700Bold](./SansitaSwashed_700Bold.ttf.png)|![SansitaSwashed_800ExtraBold](./SansitaSwashed_800ExtraBold.ttf.png)||
|![SansitaSwashed_900Black](./SansitaSwashed_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sansita-swashed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sansita Swashed page on Google Fonts](https://fonts.google.com/specimen/Sansita+Swashed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sansita Swashed on Google Fonts](https://fonts.google.com/specimen/Sansita+Swashed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sansita-swashed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sansita-swashed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
