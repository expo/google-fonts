# @expo-google-fonts/work-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/work-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/work-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/work-sans)

This package lets you use the [**Work Sans**](https://fonts.google.com/specimen/Work+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Work Sans

![Work Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `WorkSans_100Thin`
- `WorkSans_200ExtraLight`
- `WorkSans_300Light`
- `WorkSans_400Regular`
- `WorkSans_500Medium`
- `WorkSans_600SemiBold`
- `WorkSans_700Bold`
- `WorkSans_800ExtraBold`
- `WorkSans_900Black`
- `WorkSans_100Thin_Italic`
- `WorkSans_200ExtraLight_Italic`
- `WorkSans_300Light_Italic`
- `WorkSans_400Regular_Italic`
- `WorkSans_500Medium_Italic`
- `WorkSans_600SemiBold_Italic`
- `WorkSans_700Bold_Italic`
- `WorkSans_800ExtraBold_Italic`
- `WorkSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/work-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  WorkSans_100Thin,
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
  WorkSans_900Black,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light_Italic,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black_Italic,
} from '@expo-google-fonts/work-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light_Italic,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black_Italic,
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
            fontFamily: 'WorkSans_100Thin',
          }}>
          Work Sans Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_200ExtraLight',
          }}>
          Work Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_300Light',
          }}>
          Work Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_400Regular',
          }}>
          Work Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_500Medium',
          }}>
          Work Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_600SemiBold',
          }}>
          Work Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_700Bold',
          }}>
          Work Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_800ExtraBold',
          }}>
          Work Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_900Black',
          }}>
          Work Sans Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_100Thin_Italic',
          }}>
          Work Sans Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_200ExtraLight_Italic',
          }}>
          Work Sans Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_300Light_Italic',
          }}>
          Work Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_400Regular_Italic',
          }}>
          Work Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_500Medium_Italic',
          }}>
          Work Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_600SemiBold_Italic',
          }}>
          Work Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_700Bold_Italic',
          }}>
          Work Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_800ExtraBold_Italic',
          }}>
          Work Sans Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WorkSans_900Black_Italic',
          }}>
          Work Sans Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![WorkSans_100Thin](./WorkSans_100Thin.ttf.png)|![WorkSans_200ExtraLight](./WorkSans_200ExtraLight.ttf.png)|![WorkSans_300Light](./WorkSans_300Light.ttf.png)||
|![WorkSans_400Regular](./WorkSans_400Regular.ttf.png)|![WorkSans_500Medium](./WorkSans_500Medium.ttf.png)|![WorkSans_600SemiBold](./WorkSans_600SemiBold.ttf.png)||
|![WorkSans_700Bold](./WorkSans_700Bold.ttf.png)|![WorkSans_800ExtraBold](./WorkSans_800ExtraBold.ttf.png)|![WorkSans_900Black](./WorkSans_900Black.ttf.png)||
|![WorkSans_100Thin_Italic](./WorkSans_100Thin_Italic.ttf.png)|![WorkSans_200ExtraLight_Italic](./WorkSans_200ExtraLight_Italic.ttf.png)|![WorkSans_300Light_Italic](./WorkSans_300Light_Italic.ttf.png)||
|![WorkSans_400Regular_Italic](./WorkSans_400Regular_Italic.ttf.png)|![WorkSans_500Medium_Italic](./WorkSans_500Medium_Italic.ttf.png)|![WorkSans_600SemiBold_Italic](./WorkSans_600SemiBold_Italic.ttf.png)||
|![WorkSans_700Bold_Italic](./WorkSans_700Bold_Italic.ttf.png)|![WorkSans_800ExtraBold_Italic](./WorkSans_800ExtraBold_Italic.ttf.png)|![WorkSans_900Black_Italic](./WorkSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/work-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Work Sans page on Google Fonts](https://fonts.google.com/specimen/Work+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Work Sans on Google Fonts](https://fonts.google.com/specimen/Work+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/work-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/work-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
