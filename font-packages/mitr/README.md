# @expo-google-fonts/mitr

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mitr)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mitr)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mitr)

This package lets you use the [**Mitr**](https://fonts.google.com/specimen/Mitr) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mitr

![Mitr](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Mitr_200ExtraLight`
- `Mitr_300Light`
- `Mitr_400Regular`
- `Mitr_500Medium`
- `Mitr_600SemiBold`
- `Mitr_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mitr expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Mitr_200ExtraLight,
  Mitr_300Light,
  Mitr_400Regular,
  Mitr_500Medium,
  Mitr_600SemiBold,
  Mitr_700Bold,
} from '@expo-google-fonts/mitr';

export default () => {
  let [fontsLoaded] = useFonts({
    Mitr_200ExtraLight,
    Mitr_300Light,
    Mitr_400Regular,
    Mitr_500Medium,
    Mitr_600SemiBold,
    Mitr_700Bold,
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
            fontFamily: 'Mitr_200ExtraLight',
          }}>
          Mitr Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mitr_300Light',
          }}>
          Mitr Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mitr_400Regular',
          }}>
          Mitr Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mitr_500Medium',
          }}>
          Mitr Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mitr_600SemiBold',
          }}>
          Mitr Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mitr_700Bold',
          }}>
          Mitr Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Mitr_200ExtraLight](./Mitr_200ExtraLight.ttf.png)|![Mitr_300Light](./Mitr_300Light.ttf.png)|![Mitr_400Regular](./Mitr_400Regular.ttf.png)||
|![Mitr_500Medium](./Mitr_500Medium.ttf.png)|![Mitr_600SemiBold](./Mitr_600SemiBold.ttf.png)|![Mitr_700Bold](./Mitr_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mitr` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mitr page on Google Fonts](https://fonts.google.com/specimen/Mitr) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mitr on Google Fonts](https://fonts.google.com/specimen/Mitr)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mitr)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mitr)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
