# @expo-google-fonts/kodchasan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kodchasan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kodchasan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kodchasan)

This package lets you use the [**Kodchasan**](https://fonts.google.com/specimen/Kodchasan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kodchasan

![Kodchasan](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Kodchasan_200ExtraLight`
- `Kodchasan_200ExtraLight_Italic`
- `Kodchasan_300Light`
- `Kodchasan_300Light_Italic`
- `Kodchasan_400Regular`
- `Kodchasan_400Regular_Italic`
- `Kodchasan_500Medium`
- `Kodchasan_500Medium_Italic`
- `Kodchasan_600SemiBold`
- `Kodchasan_600SemiBold_Italic`
- `Kodchasan_700Bold`
- `Kodchasan_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kodchasan expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Kodchasan_200ExtraLight,
  Kodchasan_200ExtraLight_Italic,
  Kodchasan_300Light,
  Kodchasan_300Light_Italic,
  Kodchasan_400Regular,
  Kodchasan_400Regular_Italic,
  Kodchasan_500Medium,
  Kodchasan_500Medium_Italic,
  Kodchasan_600SemiBold,
  Kodchasan_600SemiBold_Italic,
  Kodchasan_700Bold,
  Kodchasan_700Bold_Italic,
} from '@expo-google-fonts/kodchasan';

export default () => {
  let [fontsLoaded] = useFonts({
    Kodchasan_200ExtraLight,
    Kodchasan_200ExtraLight_Italic,
    Kodchasan_300Light,
    Kodchasan_300Light_Italic,
    Kodchasan_400Regular,
    Kodchasan_400Regular_Italic,
    Kodchasan_500Medium,
    Kodchasan_500Medium_Italic,
    Kodchasan_600SemiBold,
    Kodchasan_600SemiBold_Italic,
    Kodchasan_700Bold,
    Kodchasan_700Bold_Italic,
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
            fontFamily: 'Kodchasan_200ExtraLight',
          }}>
          Kodchasan Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_200ExtraLight_Italic',
          }}>
          Kodchasan Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_300Light',
          }}>
          Kodchasan Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_300Light_Italic',
          }}>
          Kodchasan Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_400Regular',
          }}>
          Kodchasan Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_400Regular_Italic',
          }}>
          Kodchasan Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_500Medium',
          }}>
          Kodchasan Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_500Medium_Italic',
          }}>
          Kodchasan Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_600SemiBold',
          }}>
          Kodchasan Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_600SemiBold_Italic',
          }}>
          Kodchasan Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_700Bold',
          }}>
          Kodchasan Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kodchasan_700Bold_Italic',
          }}>
          Kodchasan Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Kodchasan_200ExtraLight](./Kodchasan_200ExtraLight.ttf.png)|![Kodchasan_200ExtraLight_Italic](./Kodchasan_200ExtraLight_Italic.ttf.png)|![Kodchasan_300Light](./Kodchasan_300Light.ttf.png)||
|![Kodchasan_300Light_Italic](./Kodchasan_300Light_Italic.ttf.png)|![Kodchasan_400Regular](./Kodchasan_400Regular.ttf.png)|![Kodchasan_400Regular_Italic](./Kodchasan_400Regular_Italic.ttf.png)||
|![Kodchasan_500Medium](./Kodchasan_500Medium.ttf.png)|![Kodchasan_500Medium_Italic](./Kodchasan_500Medium_Italic.ttf.png)|![Kodchasan_600SemiBold](./Kodchasan_600SemiBold.ttf.png)||
|![Kodchasan_600SemiBold_Italic](./Kodchasan_600SemiBold_Italic.ttf.png)|![Kodchasan_700Bold](./Kodchasan_700Bold.ttf.png)|![Kodchasan_700Bold_Italic](./Kodchasan_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kodchasan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kodchasan page on Google Fonts](https://fonts.google.com/specimen/Kodchasan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kodchasan on Google Fonts](https://fonts.google.com/specimen/Kodchasan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kodchasan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kodchasan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
