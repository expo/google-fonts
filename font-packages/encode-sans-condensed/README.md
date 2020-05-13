# @expo-google-fonts/encode-sans-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans-condensed)

This package lets you use the [**Encode Sans Condensed**](https://fonts.google.com/specimen/Encode+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Encode Sans Condensed

![Encode Sans Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSansCondensed_100Thin`
- `EncodeSansCondensed_200ExtraLight`
- `EncodeSansCondensed_300Light`
- `EncodeSansCondensed_400Regular`
- `EncodeSansCondensed_500Medium`
- `EncodeSansCondensed_600SemiBold`
- `EncodeSansCondensed_700Bold`
- `EncodeSansCondensed_800ExtraBold`
- `EncodeSansCondensed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans-condensed expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  EncodeSansCondensed_100Thin,
  EncodeSansCondensed_200ExtraLight,
  EncodeSansCondensed_300Light,
  EncodeSansCondensed_400Regular,
  EncodeSansCondensed_500Medium,
  EncodeSansCondensed_600SemiBold,
  EncodeSansCondensed_700Bold,
  EncodeSansCondensed_800ExtraBold,
  EncodeSansCondensed_900Black,
} from '@expo-google-fonts/encode-sans-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSansCondensed_100Thin,
    EncodeSansCondensed_200ExtraLight,
    EncodeSansCondensed_300Light,
    EncodeSansCondensed_400Regular,
    EncodeSansCondensed_500Medium,
    EncodeSansCondensed_600SemiBold,
    EncodeSansCondensed_700Bold,
    EncodeSansCondensed_800ExtraBold,
    EncodeSansCondensed_900Black,
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
            fontFamily: 'EncodeSansCondensed_100Thin',
          }}>
          Encode Sans Condensed Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_200ExtraLight',
          }}>
          Encode Sans Condensed Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_300Light',
          }}>
          Encode Sans Condensed Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_400Regular',
          }}>
          Encode Sans Condensed Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_500Medium',
          }}>
          Encode Sans Condensed Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_600SemiBold',
          }}>
          Encode Sans Condensed Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_700Bold',
          }}>
          Encode Sans Condensed Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_800ExtraBold',
          }}>
          Encode Sans Condensed Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansCondensed_900Black',
          }}>
          Encode Sans Condensed Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### EncodeSansCondensed_100Thin
![EncodeSansCondensed_100Thin](./EncodeSansCondensed_100Thin.ttf.png)

##### EncodeSansCondensed_200ExtraLight
![EncodeSansCondensed_200ExtraLight](./EncodeSansCondensed_200ExtraLight.ttf.png)

##### EncodeSansCondensed_300Light
![EncodeSansCondensed_300Light](./EncodeSansCondensed_300Light.ttf.png)

##### EncodeSansCondensed_400Regular
![EncodeSansCondensed_400Regular](./EncodeSansCondensed_400Regular.ttf.png)

##### EncodeSansCondensed_500Medium
![EncodeSansCondensed_500Medium](./EncodeSansCondensed_500Medium.ttf.png)

##### EncodeSansCondensed_600SemiBold
![EncodeSansCondensed_600SemiBold](./EncodeSansCondensed_600SemiBold.ttf.png)

##### EncodeSansCondensed_700Bold
![EncodeSansCondensed_700Bold](./EncodeSansCondensed_700Bold.ttf.png)

##### EncodeSansCondensed_800ExtraBold
![EncodeSansCondensed_800ExtraBold](./EncodeSansCondensed_800ExtraBold.ttf.png)

##### EncodeSansCondensed_900Black
![EncodeSansCondensed_900Black](./EncodeSansCondensed_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/encode-sans-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans Condensed page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans Condensed on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
