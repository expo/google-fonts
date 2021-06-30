# @expo-google-fonts/biryani

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/biryani)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/biryani)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/biryani)

This package lets you use the [**Biryani**](https://fonts.google.com/specimen/Biryani) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Biryani

![Biryani](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Biryani_200ExtraLight`
- `Biryani_300Light`
- `Biryani_400Regular`
- `Biryani_600SemiBold`
- `Biryani_700Bold`
- `Biryani_800ExtraBold`
- `Biryani_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/biryani expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Biryani_200ExtraLight,
  Biryani_300Light,
  Biryani_400Regular,
  Biryani_600SemiBold,
  Biryani_700Bold,
  Biryani_800ExtraBold,
  Biryani_900Black,
} from '@expo-google-fonts/biryani';

export default () => {
  let [fontsLoaded] = useFonts({
    Biryani_200ExtraLight,
    Biryani_300Light,
    Biryani_400Regular,
    Biryani_600SemiBold,
    Biryani_700Bold,
    Biryani_800ExtraBold,
    Biryani_900Black,
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
            fontFamily: 'Biryani_200ExtraLight',
          }}>
          Biryani Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Biryani_300Light',
          }}>
          Biryani Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Biryani_400Regular',
          }}>
          Biryani Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Biryani_600SemiBold',
          }}>
          Biryani Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Biryani_700Bold',
          }}>
          Biryani Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Biryani_800ExtraBold',
          }}>
          Biryani Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Biryani_900Black',
          }}>
          Biryani Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Biryani_200ExtraLight](./Biryani_200ExtraLight.ttf.png)|![Biryani_300Light](./Biryani_300Light.ttf.png)|![Biryani_400Regular](./Biryani_400Regular.ttf.png)||
|![Biryani_600SemiBold](./Biryani_600SemiBold.ttf.png)|![Biryani_700Bold](./Biryani_700Bold.ttf.png)|![Biryani_800ExtraBold](./Biryani_800ExtraBold.ttf.png)||
|![Biryani_900Black](./Biryani_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/biryani` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Biryani page on Google Fonts](https://fonts.google.com/specimen/Biryani) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Biryani on Google Fonts](https://fonts.google.com/specimen/Biryani)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/biryani)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/biryani)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
