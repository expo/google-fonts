# @expo-google-fonts/hahmlet

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hahmlet)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hahmlet)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hahmlet)

This package lets you use the [**Hahmlet**](https://fonts.google.com/specimen/Hahmlet) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Hahmlet

![Hahmlet](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Hahmlet_100Thin`
- `Hahmlet_200ExtraLight`
- `Hahmlet_300Light`
- `Hahmlet_400Regular`
- `Hahmlet_500Medium`
- `Hahmlet_600SemiBold`
- `Hahmlet_700Bold`
- `Hahmlet_800ExtraBold`
- `Hahmlet_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/hahmlet expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Hahmlet_100Thin,
  Hahmlet_200ExtraLight,
  Hahmlet_300Light,
  Hahmlet_400Regular,
  Hahmlet_500Medium,
  Hahmlet_600SemiBold,
  Hahmlet_700Bold,
  Hahmlet_800ExtraBold,
  Hahmlet_900Black,
} from '@expo-google-fonts/hahmlet';

export default () => {
  let [fontsLoaded] = useFonts({
    Hahmlet_100Thin,
    Hahmlet_200ExtraLight,
    Hahmlet_300Light,
    Hahmlet_400Regular,
    Hahmlet_500Medium,
    Hahmlet_600SemiBold,
    Hahmlet_700Bold,
    Hahmlet_800ExtraBold,
    Hahmlet_900Black,
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
            fontFamily: 'Hahmlet_100Thin',
          }}>
          Hahmlet Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_200ExtraLight',
          }}>
          Hahmlet Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_300Light',
          }}>
          Hahmlet Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_400Regular',
          }}>
          Hahmlet Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_500Medium',
          }}>
          Hahmlet Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_600SemiBold',
          }}>
          Hahmlet Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_700Bold',
          }}>
          Hahmlet Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_800ExtraBold',
          }}>
          Hahmlet Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Hahmlet_900Black',
          }}>
          Hahmlet Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Hahmlet_100Thin](./Hahmlet_100Thin.ttf.png)|![Hahmlet_200ExtraLight](./Hahmlet_200ExtraLight.ttf.png)|![Hahmlet_300Light](./Hahmlet_300Light.ttf.png)||
|![Hahmlet_400Regular](./Hahmlet_400Regular.ttf.png)|![Hahmlet_500Medium](./Hahmlet_500Medium.ttf.png)|![Hahmlet_600SemiBold](./Hahmlet_600SemiBold.ttf.png)||
|![Hahmlet_700Bold](./Hahmlet_700Bold.ttf.png)|![Hahmlet_800ExtraBold](./Hahmlet_800ExtraBold.ttf.png)|![Hahmlet_900Black](./Hahmlet_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/hahmlet` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hahmlet page on Google Fonts](https://fonts.google.com/specimen/Hahmlet) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hahmlet on Google Fonts](https://fonts.google.com/specimen/Hahmlet)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hahmlet)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hahmlet)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
