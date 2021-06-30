# @expo-google-fonts/mali

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mali)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mali)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mali)

This package lets you use the [**Mali**](https://fonts.google.com/specimen/Mali) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mali

![Mali](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Mali_200ExtraLight`
- `Mali_200ExtraLight_Italic`
- `Mali_300Light`
- `Mali_300Light_Italic`
- `Mali_400Regular`
- `Mali_400Regular_Italic`
- `Mali_500Medium`
- `Mali_500Medium_Italic`
- `Mali_600SemiBold`
- `Mali_600SemiBold_Italic`
- `Mali_700Bold`
- `Mali_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mali expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Mali_200ExtraLight,
  Mali_200ExtraLight_Italic,
  Mali_300Light,
  Mali_300Light_Italic,
  Mali_400Regular,
  Mali_400Regular_Italic,
  Mali_500Medium,
  Mali_500Medium_Italic,
  Mali_600SemiBold,
  Mali_600SemiBold_Italic,
  Mali_700Bold,
  Mali_700Bold_Italic,
} from '@expo-google-fonts/mali';

export default () => {
  let [fontsLoaded] = useFonts({
    Mali_200ExtraLight,
    Mali_200ExtraLight_Italic,
    Mali_300Light,
    Mali_300Light_Italic,
    Mali_400Regular,
    Mali_400Regular_Italic,
    Mali_500Medium,
    Mali_500Medium_Italic,
    Mali_600SemiBold,
    Mali_600SemiBold_Italic,
    Mali_700Bold,
    Mali_700Bold_Italic,
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
            fontFamily: 'Mali_200ExtraLight',
          }}>
          Mali Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_200ExtraLight_Italic',
          }}>
          Mali Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_300Light',
          }}>
          Mali Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_300Light_Italic',
          }}>
          Mali Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_400Regular',
          }}>
          Mali Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_400Regular_Italic',
          }}>
          Mali Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_500Medium',
          }}>
          Mali Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_500Medium_Italic',
          }}>
          Mali Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_600SemiBold',
          }}>
          Mali Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_600SemiBold_Italic',
          }}>
          Mali Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_700Bold',
          }}>
          Mali Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mali_700Bold_Italic',
          }}>
          Mali Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Mali_200ExtraLight](./Mali_200ExtraLight.ttf.png)|![Mali_200ExtraLight_Italic](./Mali_200ExtraLight_Italic.ttf.png)|![Mali_300Light](./Mali_300Light.ttf.png)||
|![Mali_300Light_Italic](./Mali_300Light_Italic.ttf.png)|![Mali_400Regular](./Mali_400Regular.ttf.png)|![Mali_400Regular_Italic](./Mali_400Regular_Italic.ttf.png)||
|![Mali_500Medium](./Mali_500Medium.ttf.png)|![Mali_500Medium_Italic](./Mali_500Medium_Italic.ttf.png)|![Mali_600SemiBold](./Mali_600SemiBold.ttf.png)||
|![Mali_600SemiBold_Italic](./Mali_600SemiBold_Italic.ttf.png)|![Mali_700Bold](./Mali_700Bold.ttf.png)|![Mali_700Bold_Italic](./Mali_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mali` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mali page on Google Fonts](https://fonts.google.com/specimen/Mali) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mali on Google Fonts](https://fonts.google.com/specimen/Mali)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mali)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mali)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
