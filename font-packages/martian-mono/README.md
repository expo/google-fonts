# @expo-google-fonts/martian-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/martian-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/martian-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/martian-mono)

This package lets you use the [**Martian Mono**](https://fonts.google.com/specimen/Martian+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Martian Mono

![Martian Mono](./font-family.png)

This font family contains [8 styles](#-gallery).

- `MartianMono_100Thin`
- `MartianMono_200ExtraLight`
- `MartianMono_300Light`
- `MartianMono_400Regular`
- `MartianMono_500Medium`
- `MartianMono_600SemiBold`
- `MartianMono_700Bold`
- `MartianMono_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/martian-mono expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MartianMono_100Thin,
  MartianMono_200ExtraLight,
  MartianMono_300Light,
  MartianMono_400Regular,
  MartianMono_500Medium,
  MartianMono_600SemiBold,
  MartianMono_700Bold,
  MartianMono_800ExtraBold,
} from '@expo-google-fonts/martian-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    MartianMono_100Thin,
    MartianMono_200ExtraLight,
    MartianMono_300Light,
    MartianMono_400Regular,
    MartianMono_500Medium,
    MartianMono_600SemiBold,
    MartianMono_700Bold,
    MartianMono_800ExtraBold,
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
            fontFamily: 'MartianMono_100Thin',
          }}>
          Martian Mono Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartianMono_200ExtraLight',
          }}>
          Martian Mono Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartianMono_300Light',
          }}>
          Martian Mono Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartianMono_400Regular',
          }}>
          Martian Mono Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartianMono_500Medium',
          }}>
          Martian Mono Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartianMono_600SemiBold',
          }}>
          Martian Mono Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartianMono_700Bold',
          }}>
          Martian Mono Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MartianMono_800ExtraBold',
          }}>
          Martian Mono Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MartianMono_100Thin](./MartianMono_100Thin.ttf.png)|![MartianMono_200ExtraLight](./MartianMono_200ExtraLight.ttf.png)|![MartianMono_300Light](./MartianMono_300Light.ttf.png)||
|![MartianMono_400Regular](./MartianMono_400Regular.ttf.png)|![MartianMono_500Medium](./MartianMono_500Medium.ttf.png)|![MartianMono_600SemiBold](./MartianMono_600SemiBold.ttf.png)||
|![MartianMono_700Bold](./MartianMono_700Bold.ttf.png)|![MartianMono_800ExtraBold](./MartianMono_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/martian-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Martian Mono page on Google Fonts](https://fonts.google.com/specimen/Martian+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Martian Mono on Google Fonts](https://fonts.google.com/specimen/Martian+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/martian-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/martian-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
