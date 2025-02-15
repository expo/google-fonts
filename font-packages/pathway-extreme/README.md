# @expo-google-fonts/pathway-extreme

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/pathway-extreme)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/pathway-extreme)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/pathway-extreme)

This package lets you use the [**Pathway Extreme**](https://fonts.google.com/specimen/Pathway+Extreme) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Pathway Extreme

![Pathway Extreme](./font-family.png)

This font family contains [18 styles](#-gallery).

- `PathwayExtreme_100Thin`
- `PathwayExtreme_200ExtraLight`
- `PathwayExtreme_300Light`
- `PathwayExtreme_400Regular`
- `PathwayExtreme_500Medium`
- `PathwayExtreme_600SemiBold`
- `PathwayExtreme_700Bold`
- `PathwayExtreme_800ExtraBold`
- `PathwayExtreme_900Black`
- `PathwayExtreme_100Thin_Italic`
- `PathwayExtreme_200ExtraLight_Italic`
- `PathwayExtreme_300Light_Italic`
- `PathwayExtreme_400Regular_Italic`
- `PathwayExtreme_500Medium_Italic`
- `PathwayExtreme_600SemiBold_Italic`
- `PathwayExtreme_700Bold_Italic`
- `PathwayExtreme_800ExtraBold_Italic`
- `PathwayExtreme_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pathway-extreme expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PathwayExtreme_100Thin,
  PathwayExtreme_200ExtraLight,
  PathwayExtreme_300Light,
  PathwayExtreme_400Regular,
  PathwayExtreme_500Medium,
  PathwayExtreme_600SemiBold,
  PathwayExtreme_700Bold,
  PathwayExtreme_800ExtraBold,
  PathwayExtreme_900Black,
  PathwayExtreme_100Thin_Italic,
  PathwayExtreme_200ExtraLight_Italic,
  PathwayExtreme_300Light_Italic,
  PathwayExtreme_400Regular_Italic,
  PathwayExtreme_500Medium_Italic,
  PathwayExtreme_600SemiBold_Italic,
  PathwayExtreme_700Bold_Italic,
  PathwayExtreme_800ExtraBold_Italic,
  PathwayExtreme_900Black_Italic,
} from '@expo-google-fonts/pathway-extreme';

export default () => {
  let [fontsLoaded] = useFonts({
    PathwayExtreme_100Thin,
    PathwayExtreme_200ExtraLight,
    PathwayExtreme_300Light,
    PathwayExtreme_400Regular,
    PathwayExtreme_500Medium,
    PathwayExtreme_600SemiBold,
    PathwayExtreme_700Bold,
    PathwayExtreme_800ExtraBold,
    PathwayExtreme_900Black,
    PathwayExtreme_100Thin_Italic,
    PathwayExtreme_200ExtraLight_Italic,
    PathwayExtreme_300Light_Italic,
    PathwayExtreme_400Regular_Italic,
    PathwayExtreme_500Medium_Italic,
    PathwayExtreme_600SemiBold_Italic,
    PathwayExtreme_700Bold_Italic,
    PathwayExtreme_800ExtraBold_Italic,
    PathwayExtreme_900Black_Italic,
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
            fontFamily: 'PathwayExtreme_100Thin',
          }}>
          Pathway Extreme Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_200ExtraLight',
          }}>
          Pathway Extreme Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_300Light',
          }}>
          Pathway Extreme Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_400Regular',
          }}>
          Pathway Extreme Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_500Medium',
          }}>
          Pathway Extreme Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_600SemiBold',
          }}>
          Pathway Extreme Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_700Bold',
          }}>
          Pathway Extreme Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_800ExtraBold',
          }}>
          Pathway Extreme Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_900Black',
          }}>
          Pathway Extreme Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_100Thin_Italic',
          }}>
          Pathway Extreme Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_200ExtraLight_Italic',
          }}>
          Pathway Extreme Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_300Light_Italic',
          }}>
          Pathway Extreme Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_400Regular_Italic',
          }}>
          Pathway Extreme Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_500Medium_Italic',
          }}>
          Pathway Extreme Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_600SemiBold_Italic',
          }}>
          Pathway Extreme Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_700Bold_Italic',
          }}>
          Pathway Extreme Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_800ExtraBold_Italic',
          }}>
          Pathway Extreme Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PathwayExtreme_900Black_Italic',
          }}>
          Pathway Extreme Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PathwayExtreme_100Thin](./PathwayExtreme_100Thin.ttf.png)|![PathwayExtreme_200ExtraLight](./PathwayExtreme_200ExtraLight.ttf.png)|![PathwayExtreme_300Light](./PathwayExtreme_300Light.ttf.png)||
|![PathwayExtreme_400Regular](./PathwayExtreme_400Regular.ttf.png)|![PathwayExtreme_500Medium](./PathwayExtreme_500Medium.ttf.png)|![PathwayExtreme_600SemiBold](./PathwayExtreme_600SemiBold.ttf.png)||
|![PathwayExtreme_700Bold](./PathwayExtreme_700Bold.ttf.png)|![PathwayExtreme_800ExtraBold](./PathwayExtreme_800ExtraBold.ttf.png)|![PathwayExtreme_900Black](./PathwayExtreme_900Black.ttf.png)||
|![PathwayExtreme_100Thin_Italic](./PathwayExtreme_100Thin_Italic.ttf.png)|![PathwayExtreme_200ExtraLight_Italic](./PathwayExtreme_200ExtraLight_Italic.ttf.png)|![PathwayExtreme_300Light_Italic](./PathwayExtreme_300Light_Italic.ttf.png)||
|![PathwayExtreme_400Regular_Italic](./PathwayExtreme_400Regular_Italic.ttf.png)|![PathwayExtreme_500Medium_Italic](./PathwayExtreme_500Medium_Italic.ttf.png)|![PathwayExtreme_600SemiBold_Italic](./PathwayExtreme_600SemiBold_Italic.ttf.png)||
|![PathwayExtreme_700Bold_Italic](./PathwayExtreme_700Bold_Italic.ttf.png)|![PathwayExtreme_800ExtraBold_Italic](./PathwayExtreme_800ExtraBold_Italic.ttf.png)|![PathwayExtreme_900Black_Italic](./PathwayExtreme_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/pathway-extreme` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Pathway Extreme page on Google Fonts](https://fonts.google.com/specimen/Pathway+Extreme) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Pathway Extreme on Google Fonts](https://fonts.google.com/specimen/Pathway+Extreme)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pathway-extreme)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pathway-extreme)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
