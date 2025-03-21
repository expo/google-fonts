# @expo-google-fonts/miriam-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/miriam-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/miriam-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/miriam-libre)

This package lets you use the [**Miriam Libre**](https://fonts.google.com/specimen/Miriam+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Miriam Libre

![Miriam Libre](./font-family.png)

This font family contains [4 styles](#-gallery).

- `MiriamLibre_400Regular`
- `MiriamLibre_500Medium`
- `MiriamLibre_600SemiBold`
- `MiriamLibre_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/miriam-libre expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MiriamLibre_400Regular,
  MiriamLibre_500Medium,
  MiriamLibre_600SemiBold,
  MiriamLibre_700Bold,
} from '@expo-google-fonts/miriam-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    MiriamLibre_400Regular,
    MiriamLibre_500Medium,
    MiriamLibre_600SemiBold,
    MiriamLibre_700Bold,
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
            fontFamily: 'MiriamLibre_400Regular',
          }}>
          Miriam Libre Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MiriamLibre_500Medium',
          }}>
          Miriam Libre Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MiriamLibre_600SemiBold',
          }}>
          Miriam Libre Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MiriamLibre_700Bold',
          }}>
          Miriam Libre Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MiriamLibre_400Regular](./MiriamLibre_400Regular.ttf.png)|![MiriamLibre_500Medium](./MiriamLibre_500Medium.ttf.png)|![MiriamLibre_600SemiBold](./MiriamLibre_600SemiBold.ttf.png)||
|![MiriamLibre_700Bold](./MiriamLibre_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/miriam-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Miriam Libre page on Google Fonts](https://fonts.google.com/specimen/Miriam+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Miriam Libre on Google Fonts](https://fonts.google.com/specimen/Miriam+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/miriam-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/miriam-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
