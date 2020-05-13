# @expo-google-fonts/encode-sans-expanded

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans-expanded)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans-expanded)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans-expanded)

This package lets you use the [**Encode Sans Expanded**](https://fonts.google.com/specimen/Encode+Sans+Expanded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Encode Sans Expanded

![Encode Sans Expanded](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSansExpanded_100Thin`
- `EncodeSansExpanded_200ExtraLight`
- `EncodeSansExpanded_300Light`
- `EncodeSansExpanded_400Regular`
- `EncodeSansExpanded_500Medium`
- `EncodeSansExpanded_600SemiBold`
- `EncodeSansExpanded_700Bold`
- `EncodeSansExpanded_800ExtraBold`
- `EncodeSansExpanded_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans-expanded expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  EncodeSansExpanded_100Thin,
  EncodeSansExpanded_200ExtraLight,
  EncodeSansExpanded_300Light,
  EncodeSansExpanded_400Regular,
  EncodeSansExpanded_500Medium,
  EncodeSansExpanded_600SemiBold,
  EncodeSansExpanded_700Bold,
  EncodeSansExpanded_800ExtraBold,
  EncodeSansExpanded_900Black,
} from '@expo-google-fonts/encode-sans-expanded';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSansExpanded_100Thin,
    EncodeSansExpanded_200ExtraLight,
    EncodeSansExpanded_300Light,
    EncodeSansExpanded_400Regular,
    EncodeSansExpanded_500Medium,
    EncodeSansExpanded_600SemiBold,
    EncodeSansExpanded_700Bold,
    EncodeSansExpanded_800ExtraBold,
    EncodeSansExpanded_900Black,
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
            fontFamily: 'EncodeSansExpanded_100Thin',
          }}>
          Encode Sans Expanded Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_200ExtraLight',
          }}>
          Encode Sans Expanded Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_300Light',
          }}>
          Encode Sans Expanded Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_400Regular',
          }}>
          Encode Sans Expanded Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_500Medium',
          }}>
          Encode Sans Expanded Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_600SemiBold',
          }}>
          Encode Sans Expanded Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_700Bold',
          }}>
          Encode Sans Expanded Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_800ExtraBold',
          }}>
          Encode Sans Expanded Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansExpanded_900Black',
          }}>
          Encode Sans Expanded Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### EncodeSansExpanded_100Thin
![EncodeSansExpanded_100Thin](./EncodeSansExpanded_100Thin.ttf.png)

##### EncodeSansExpanded_200ExtraLight
![EncodeSansExpanded_200ExtraLight](./EncodeSansExpanded_200ExtraLight.ttf.png)

##### EncodeSansExpanded_300Light
![EncodeSansExpanded_300Light](./EncodeSansExpanded_300Light.ttf.png)

##### EncodeSansExpanded_400Regular
![EncodeSansExpanded_400Regular](./EncodeSansExpanded_400Regular.ttf.png)

##### EncodeSansExpanded_500Medium
![EncodeSansExpanded_500Medium](./EncodeSansExpanded_500Medium.ttf.png)

##### EncodeSansExpanded_600SemiBold
![EncodeSansExpanded_600SemiBold](./EncodeSansExpanded_600SemiBold.ttf.png)

##### EncodeSansExpanded_700Bold
![EncodeSansExpanded_700Bold](./EncodeSansExpanded_700Bold.ttf.png)

##### EncodeSansExpanded_800ExtraBold
![EncodeSansExpanded_800ExtraBold](./EncodeSansExpanded_800ExtraBold.ttf.png)

##### EncodeSansExpanded_900Black
![EncodeSansExpanded_900Black](./EncodeSansExpanded_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/encode-sans-expanded` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans Expanded page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Expanded) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans Expanded on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Expanded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-expanded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-expanded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
