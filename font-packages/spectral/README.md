# @expo-google-fonts/spectral

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/spectral)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/spectral)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/spectral)

This package lets you use the [**Spectral**](https://fonts.google.com/specimen/Spectral) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Spectral

![Spectral](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Spectral_200ExtraLight`
- `Spectral_200ExtraLight_Italic`
- `Spectral_300Light`
- `Spectral_300Light_Italic`
- `Spectral_400Regular`
- `Spectral_400Regular_Italic`
- `Spectral_500Medium`
- `Spectral_500Medium_Italic`
- `Spectral_600SemiBold`
- `Spectral_600SemiBold_Italic`
- `Spectral_700Bold`
- `Spectral_700Bold_Italic`
- `Spectral_800ExtraBold`
- `Spectral_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/spectral expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Spectral_200ExtraLight,
  Spectral_200ExtraLight_Italic,
  Spectral_300Light,
  Spectral_300Light_Italic,
  Spectral_400Regular,
  Spectral_400Regular_Italic,
  Spectral_500Medium,
  Spectral_500Medium_Italic,
  Spectral_600SemiBold,
  Spectral_600SemiBold_Italic,
  Spectral_700Bold,
  Spectral_700Bold_Italic,
  Spectral_800ExtraBold,
  Spectral_800ExtraBold_Italic,
} from '@expo-google-fonts/spectral';

export default () => {
  let [fontsLoaded] = useFonts({
    Spectral_200ExtraLight,
    Spectral_200ExtraLight_Italic,
    Spectral_300Light,
    Spectral_300Light_Italic,
    Spectral_400Regular,
    Spectral_400Regular_Italic,
    Spectral_500Medium,
    Spectral_500Medium_Italic,
    Spectral_600SemiBold,
    Spectral_600SemiBold_Italic,
    Spectral_700Bold,
    Spectral_700Bold_Italic,
    Spectral_800ExtraBold,
    Spectral_800ExtraBold_Italic,
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
            fontFamily: 'Spectral_200ExtraLight',
          }}>
          Spectral Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_200ExtraLight_Italic',
          }}>
          Spectral Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_300Light',
          }}>
          Spectral Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_300Light_Italic',
          }}>
          Spectral Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_400Regular',
          }}>
          Spectral Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_400Regular_Italic',
          }}>
          Spectral Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_500Medium',
          }}>
          Spectral Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_500Medium_Italic',
          }}>
          Spectral Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_600SemiBold',
          }}>
          Spectral Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_600SemiBold_Italic',
          }}>
          Spectral Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_700Bold',
          }}>
          Spectral Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_700Bold_Italic',
          }}>
          Spectral Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_800ExtraBold',
          }}>
          Spectral Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Spectral_800ExtraBold_Italic',
          }}>
          Spectral Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Spectral_200ExtraLight](./Spectral_200ExtraLight.ttf.png)|![Spectral_200ExtraLight_Italic](./Spectral_200ExtraLight_Italic.ttf.png)|![Spectral_300Light](./Spectral_300Light.ttf.png)||
|![Spectral_300Light_Italic](./Spectral_300Light_Italic.ttf.png)|![Spectral_400Regular](./Spectral_400Regular.ttf.png)|![Spectral_400Regular_Italic](./Spectral_400Regular_Italic.ttf.png)||
|![Spectral_500Medium](./Spectral_500Medium.ttf.png)|![Spectral_500Medium_Italic](./Spectral_500Medium_Italic.ttf.png)|![Spectral_600SemiBold](./Spectral_600SemiBold.ttf.png)||
|![Spectral_600SemiBold_Italic](./Spectral_600SemiBold_Italic.ttf.png)|![Spectral_700Bold](./Spectral_700Bold.ttf.png)|![Spectral_700Bold_Italic](./Spectral_700Bold_Italic.ttf.png)||
|![Spectral_800ExtraBold](./Spectral_800ExtraBold.ttf.png)|![Spectral_800ExtraBold_Italic](./Spectral_800ExtraBold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/spectral` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Spectral page on Google Fonts](https://fonts.google.com/specimen/Spectral) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Spectral on Google Fonts](https://fonts.google.com/specimen/Spectral)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spectral)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spectral)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
