# @expo-google-fonts/encode-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans)

This package lets you use the [**Encode Sans**](https://fonts.google.com/specimen/Encode+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Encode Sans

![Encode Sans](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSans_100Thin`
- `EncodeSans_200ExtraLight`
- `EncodeSans_300Light`
- `EncodeSans_400Regular`
- `EncodeSans_500Medium`
- `EncodeSans_600SemiBold`
- `EncodeSans_700Bold`
- `EncodeSans_800ExtraBold`
- `EncodeSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  EncodeSans_100Thin,
  EncodeSans_200ExtraLight,
  EncodeSans_300Light,
  EncodeSans_400Regular,
  EncodeSans_500Medium,
  EncodeSans_600SemiBold,
  EncodeSans_700Bold,
  EncodeSans_800ExtraBold,
  EncodeSans_900Black,
} from '@expo-google-fonts/encode-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSans_100Thin,
    EncodeSans_200ExtraLight,
    EncodeSans_300Light,
    EncodeSans_400Regular,
    EncodeSans_500Medium,
    EncodeSans_600SemiBold,
    EncodeSans_700Bold,
    EncodeSans_800ExtraBold,
    EncodeSans_900Black,
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
            fontFamily: 'EncodeSans_100Thin',
          }}>
          Encode Sans Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_200ExtraLight',
          }}>
          Encode Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_300Light',
          }}>
          Encode Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_400Regular',
          }}>
          Encode Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_500Medium',
          }}>
          Encode Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_600SemiBold',
          }}>
          Encode Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_700Bold',
          }}>
          Encode Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_800ExtraBold',
          }}>
          Encode Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSans_900Black',
          }}>
          Encode Sans Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### EncodeSans_100Thin
![EncodeSans_100Thin](./EncodeSans_100Thin.ttf.png)

##### EncodeSans_200ExtraLight
![EncodeSans_200ExtraLight](./EncodeSans_200ExtraLight.ttf.png)

##### EncodeSans_300Light
![EncodeSans_300Light](./EncodeSans_300Light.ttf.png)

##### EncodeSans_400Regular
![EncodeSans_400Regular](./EncodeSans_400Regular.ttf.png)

##### EncodeSans_500Medium
![EncodeSans_500Medium](./EncodeSans_500Medium.ttf.png)

##### EncodeSans_600SemiBold
![EncodeSans_600SemiBold](./EncodeSans_600SemiBold.ttf.png)

##### EncodeSans_700Bold
![EncodeSans_700Bold](./EncodeSans_700Bold.ttf.png)

##### EncodeSans_800ExtraBold
![EncodeSans_800ExtraBold](./EncodeSans_800ExtraBold.ttf.png)

##### EncodeSans_900Black
![EncodeSans_900Black](./EncodeSans_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/encode-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans on Google Fonts](https://fonts.google.com/specimen/Encode+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
