# @expo-google-fonts/niramit

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/niramit)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/niramit)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/niramit)

This package lets you use the [**Niramit**](https://fonts.google.com/specimen/Niramit) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Niramit

![Niramit](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Niramit_200ExtraLight`
- `Niramit_200ExtraLight_Italic`
- `Niramit_300Light`
- `Niramit_300Light_Italic`
- `Niramit_400Regular`
- `Niramit_400Regular_Italic`
- `Niramit_500Medium`
- `Niramit_500Medium_Italic`
- `Niramit_600SemiBold`
- `Niramit_600SemiBold_Italic`
- `Niramit_700Bold`
- `Niramit_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/niramit expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Niramit_200ExtraLight,
  Niramit_200ExtraLight_Italic,
  Niramit_300Light,
  Niramit_300Light_Italic,
  Niramit_400Regular,
  Niramit_400Regular_Italic,
  Niramit_500Medium,
  Niramit_500Medium_Italic,
  Niramit_600SemiBold,
  Niramit_600SemiBold_Italic,
  Niramit_700Bold,
  Niramit_700Bold_Italic,
} from '@expo-google-fonts/niramit';

export default () => {
  let [fontsLoaded] = useFonts({
    Niramit_200ExtraLight,
    Niramit_200ExtraLight_Italic,
    Niramit_300Light,
    Niramit_300Light_Italic,
    Niramit_400Regular,
    Niramit_400Regular_Italic,
    Niramit_500Medium,
    Niramit_500Medium_Italic,
    Niramit_600SemiBold,
    Niramit_600SemiBold_Italic,
    Niramit_700Bold,
    Niramit_700Bold_Italic,
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
            fontFamily: 'Niramit_200ExtraLight',
          }}>
          Niramit Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_200ExtraLight_Italic',
          }}>
          Niramit Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_300Light',
          }}>
          Niramit Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_300Light_Italic',
          }}>
          Niramit Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_400Regular',
          }}>
          Niramit Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_400Regular_Italic',
          }}>
          Niramit Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_500Medium',
          }}>
          Niramit Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_500Medium_Italic',
          }}>
          Niramit Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_600SemiBold',
          }}>
          Niramit Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_600SemiBold_Italic',
          }}>
          Niramit Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_700Bold',
          }}>
          Niramit Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Niramit_700Bold_Italic',
          }}>
          Niramit Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Niramit_200ExtraLight](./Niramit_200ExtraLight.ttf.png)|![Niramit_200ExtraLight_Italic](./Niramit_200ExtraLight_Italic.ttf.png)|![Niramit_300Light](./Niramit_300Light.ttf.png)||
|![Niramit_300Light_Italic](./Niramit_300Light_Italic.ttf.png)|![Niramit_400Regular](./Niramit_400Regular.ttf.png)|![Niramit_400Regular_Italic](./Niramit_400Regular_Italic.ttf.png)||
|![Niramit_500Medium](./Niramit_500Medium.ttf.png)|![Niramit_500Medium_Italic](./Niramit_500Medium_Italic.ttf.png)|![Niramit_600SemiBold](./Niramit_600SemiBold.ttf.png)||
|![Niramit_600SemiBold_Italic](./Niramit_600SemiBold_Italic.ttf.png)|![Niramit_700Bold](./Niramit_700Bold.ttf.png)|![Niramit_700Bold_Italic](./Niramit_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/niramit` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Niramit page on Google Fonts](https://fonts.google.com/specimen/Niramit) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Niramit on Google Fonts](https://fonts.google.com/specimen/Niramit)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/niramit)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/niramit)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
