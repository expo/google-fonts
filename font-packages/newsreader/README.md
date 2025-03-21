# @expo-google-fonts/newsreader

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/newsreader)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/newsreader)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/newsreader)

This package lets you use the [**Newsreader**](https://fonts.google.com/specimen/Newsreader) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Newsreader

![Newsreader](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Newsreader_200ExtraLight`
- `Newsreader_300Light`
- `Newsreader_400Regular`
- `Newsreader_500Medium`
- `Newsreader_600SemiBold`
- `Newsreader_700Bold`
- `Newsreader_800ExtraBold`
- `Newsreader_200ExtraLight_Italic`
- `Newsreader_300Light_Italic`
- `Newsreader_400Regular_Italic`
- `Newsreader_500Medium_Italic`
- `Newsreader_600SemiBold_Italic`
- `Newsreader_700Bold_Italic`
- `Newsreader_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/newsreader expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Newsreader_200ExtraLight,
  Newsreader_300Light,
  Newsreader_400Regular,
  Newsreader_500Medium,
  Newsreader_600SemiBold,
  Newsreader_700Bold,
  Newsreader_800ExtraBold,
  Newsreader_200ExtraLight_Italic,
  Newsreader_300Light_Italic,
  Newsreader_400Regular_Italic,
  Newsreader_500Medium_Italic,
  Newsreader_600SemiBold_Italic,
  Newsreader_700Bold_Italic,
  Newsreader_800ExtraBold_Italic,
} from '@expo-google-fonts/newsreader';

export default () => {
  let [fontsLoaded] = useFonts({
    Newsreader_200ExtraLight,
    Newsreader_300Light,
    Newsreader_400Regular,
    Newsreader_500Medium,
    Newsreader_600SemiBold,
    Newsreader_700Bold,
    Newsreader_800ExtraBold,
    Newsreader_200ExtraLight_Italic,
    Newsreader_300Light_Italic,
    Newsreader_400Regular_Italic,
    Newsreader_500Medium_Italic,
    Newsreader_600SemiBold_Italic,
    Newsreader_700Bold_Italic,
    Newsreader_800ExtraBold_Italic,
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
            fontFamily: 'Newsreader_200ExtraLight',
          }}>
          Newsreader Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_300Light',
          }}>
          Newsreader Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_400Regular',
          }}>
          Newsreader Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_500Medium',
          }}>
          Newsreader Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_600SemiBold',
          }}>
          Newsreader Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_700Bold',
          }}>
          Newsreader Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_800ExtraBold',
          }}>
          Newsreader Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_200ExtraLight_Italic',
          }}>
          Newsreader Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_300Light_Italic',
          }}>
          Newsreader Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_400Regular_Italic',
          }}>
          Newsreader Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_500Medium_Italic',
          }}>
          Newsreader Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_600SemiBold_Italic',
          }}>
          Newsreader Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_700Bold_Italic',
          }}>
          Newsreader Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Newsreader_800ExtraBold_Italic',
          }}>
          Newsreader Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Newsreader_200ExtraLight](./Newsreader_200ExtraLight.ttf.png)|![Newsreader_300Light](./Newsreader_300Light.ttf.png)|![Newsreader_400Regular](./Newsreader_400Regular.ttf.png)||
|![Newsreader_500Medium](./Newsreader_500Medium.ttf.png)|![Newsreader_600SemiBold](./Newsreader_600SemiBold.ttf.png)|![Newsreader_700Bold](./Newsreader_700Bold.ttf.png)||
|![Newsreader_800ExtraBold](./Newsreader_800ExtraBold.ttf.png)|![Newsreader_200ExtraLight_Italic](./Newsreader_200ExtraLight_Italic.ttf.png)|![Newsreader_300Light_Italic](./Newsreader_300Light_Italic.ttf.png)||
|![Newsreader_400Regular_Italic](./Newsreader_400Regular_Italic.ttf.png)|![Newsreader_500Medium_Italic](./Newsreader_500Medium_Italic.ttf.png)|![Newsreader_600SemiBold_Italic](./Newsreader_600SemiBold_Italic.ttf.png)||
|![Newsreader_700Bold_Italic](./Newsreader_700Bold_Italic.ttf.png)|![Newsreader_800ExtraBold_Italic](./Newsreader_800ExtraBold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/newsreader` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Newsreader page on Google Fonts](https://fonts.google.com/specimen/Newsreader) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Newsreader on Google Fonts](https://fonts.google.com/specimen/Newsreader)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/newsreader)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/newsreader)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
