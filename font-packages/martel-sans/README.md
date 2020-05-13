# @expo-google-fonts/martel-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/martel-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/martel-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/martel-sans)

This package lets you use the [**Martel Sans**](https://fonts.google.com/specimen/Martel+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Martel Sans

![Martel Sans](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MartelSans_200ExtraLight`
- `MartelSans_300Light`
- `MartelSans_400Regular`
- `MartelSans_600SemiBold`
- `MartelSans_700Bold`
- `MartelSans_800ExtraBold`
- `MartelSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/martel-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  MartelSans_200ExtraLight,
  MartelSans_300Light,
  MartelSans_400Regular,
  MartelSans_600SemiBold,
  MartelSans_700Bold,
  MartelSans_800ExtraBold,
  MartelSans_900Black,
} from '@expo-google-fonts/martel-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    MartelSans_200ExtraLight,
    MartelSans_300Light,
    MartelSans_400Regular,
    MartelSans_600SemiBold,
    MartelSans_700Bold,
    MartelSans_800ExtraBold,
    MartelSans_900Black,
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
            fontFamily: 'MartelSans_200ExtraLight',
          }}>
          Martel Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartelSans_300Light',
          }}>
          Martel Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartelSans_400Regular',
          }}>
          Martel Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartelSans_600SemiBold',
          }}>
          Martel Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartelSans_700Bold',
          }}>
          Martel Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartelSans_800ExtraBold',
          }}>
          Martel Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartelSans_900Black',
          }}>
          Martel Sans Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### MartelSans_200ExtraLight
![MartelSans_200ExtraLight](./MartelSans_200ExtraLight.ttf.png)

##### MartelSans_300Light
![MartelSans_300Light](./MartelSans_300Light.ttf.png)

##### MartelSans_400Regular
![MartelSans_400Regular](./MartelSans_400Regular.ttf.png)

##### MartelSans_600SemiBold
![MartelSans_600SemiBold](./MartelSans_600SemiBold.ttf.png)

##### MartelSans_700Bold
![MartelSans_700Bold](./MartelSans_700Bold.ttf.png)

##### MartelSans_800ExtraBold
![MartelSans_800ExtraBold](./MartelSans_800ExtraBold.ttf.png)

##### MartelSans_900Black
![MartelSans_900Black](./MartelSans_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/martel-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Martel Sans page on Google Fonts](https://fonts.google.com/specimen/Martel+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Martel Sans on Google Fonts](https://fonts.google.com/specimen/Martel+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/martel-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/martel-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
