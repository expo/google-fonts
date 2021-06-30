# @expo-google-fonts/trispace

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/trispace)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/trispace)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/trispace)

This package lets you use the [**Trispace**](https://fonts.google.com/specimen/Trispace) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Trispace

![Trispace](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Trispace_100Thin`
- `Trispace_200ExtraLight`
- `Trispace_300Light`
- `Trispace_400Regular`
- `Trispace_500Medium`
- `Trispace_600SemiBold`
- `Trispace_700Bold`
- `Trispace_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/trispace expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Trispace_100Thin,
  Trispace_200ExtraLight,
  Trispace_300Light,
  Trispace_400Regular,
  Trispace_500Medium,
  Trispace_600SemiBold,
  Trispace_700Bold,
  Trispace_800ExtraBold,
} from '@expo-google-fonts/trispace';

export default () => {
  let [fontsLoaded] = useFonts({
    Trispace_100Thin,
    Trispace_200ExtraLight,
    Trispace_300Light,
    Trispace_400Regular,
    Trispace_500Medium,
    Trispace_600SemiBold,
    Trispace_700Bold,
    Trispace_800ExtraBold,
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
            fontFamily: 'Trispace_100Thin',
          }}>
          Trispace Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Trispace_200ExtraLight',
          }}>
          Trispace Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Trispace_300Light',
          }}>
          Trispace Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Trispace_400Regular',
          }}>
          Trispace Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Trispace_500Medium',
          }}>
          Trispace Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Trispace_600SemiBold',
          }}>
          Trispace Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Trispace_700Bold',
          }}>
          Trispace Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Trispace_800ExtraBold',
          }}>
          Trispace Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Trispace_100Thin](./Trispace_100Thin.ttf.png)|![Trispace_200ExtraLight](./Trispace_200ExtraLight.ttf.png)|![Trispace_300Light](./Trispace_300Light.ttf.png)||
|![Trispace_400Regular](./Trispace_400Regular.ttf.png)|![Trispace_500Medium](./Trispace_500Medium.ttf.png)|![Trispace_600SemiBold](./Trispace_600SemiBold.ttf.png)||
|![Trispace_700Bold](./Trispace_700Bold.ttf.png)|![Trispace_800ExtraBold](./Trispace_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/trispace` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Trispace page on Google Fonts](https://fonts.google.com/specimen/Trispace) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Trispace on Google Fonts](https://fonts.google.com/specimen/Trispace)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/trispace)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/trispace)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
