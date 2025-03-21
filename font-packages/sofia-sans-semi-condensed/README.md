# @expo-google-fonts/sofia-sans-semi-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sofia-sans-semi-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sofia-sans-semi-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sofia-sans-semi-condensed)

This package lets you use the [**Sofia Sans Semi Condensed**](https://fonts.google.com/specimen/Sofia+Sans+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sofia Sans Semi Condensed

![Sofia Sans Semi Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `SofiaSansSemiCondensed_100Thin`
- `SofiaSansSemiCondensed_200ExtraLight`
- `SofiaSansSemiCondensed_300Light`
- `SofiaSansSemiCondensed_400Regular`
- `SofiaSansSemiCondensed_500Medium`
- `SofiaSansSemiCondensed_600SemiBold`
- `SofiaSansSemiCondensed_700Bold`
- `SofiaSansSemiCondensed_800ExtraBold`
- `SofiaSansSemiCondensed_900Black`
- `SofiaSansSemiCondensed_100Thin_Italic`
- `SofiaSansSemiCondensed_200ExtraLight_Italic`
- `SofiaSansSemiCondensed_300Light_Italic`
- `SofiaSansSemiCondensed_400Regular_Italic`
- `SofiaSansSemiCondensed_500Medium_Italic`
- `SofiaSansSemiCondensed_600SemiBold_Italic`
- `SofiaSansSemiCondensed_700Bold_Italic`
- `SofiaSansSemiCondensed_800ExtraBold_Italic`
- `SofiaSansSemiCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/sofia-sans-semi-condensed expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SofiaSansSemiCondensed_100Thin,
  SofiaSansSemiCondensed_200ExtraLight,
  SofiaSansSemiCondensed_300Light,
  SofiaSansSemiCondensed_400Regular,
  SofiaSansSemiCondensed_500Medium,
  SofiaSansSemiCondensed_600SemiBold,
  SofiaSansSemiCondensed_700Bold,
  SofiaSansSemiCondensed_800ExtraBold,
  SofiaSansSemiCondensed_900Black,
  SofiaSansSemiCondensed_100Thin_Italic,
  SofiaSansSemiCondensed_200ExtraLight_Italic,
  SofiaSansSemiCondensed_300Light_Italic,
  SofiaSansSemiCondensed_400Regular_Italic,
  SofiaSansSemiCondensed_500Medium_Italic,
  SofiaSansSemiCondensed_600SemiBold_Italic,
  SofiaSansSemiCondensed_700Bold_Italic,
  SofiaSansSemiCondensed_800ExtraBold_Italic,
  SofiaSansSemiCondensed_900Black_Italic,
} from '@expo-google-fonts/sofia-sans-semi-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    SofiaSansSemiCondensed_100Thin,
    SofiaSansSemiCondensed_200ExtraLight,
    SofiaSansSemiCondensed_300Light,
    SofiaSansSemiCondensed_400Regular,
    SofiaSansSemiCondensed_500Medium,
    SofiaSansSemiCondensed_600SemiBold,
    SofiaSansSemiCondensed_700Bold,
    SofiaSansSemiCondensed_800ExtraBold,
    SofiaSansSemiCondensed_900Black,
    SofiaSansSemiCondensed_100Thin_Italic,
    SofiaSansSemiCondensed_200ExtraLight_Italic,
    SofiaSansSemiCondensed_300Light_Italic,
    SofiaSansSemiCondensed_400Regular_Italic,
    SofiaSansSemiCondensed_500Medium_Italic,
    SofiaSansSemiCondensed_600SemiBold_Italic,
    SofiaSansSemiCondensed_700Bold_Italic,
    SofiaSansSemiCondensed_800ExtraBold_Italic,
    SofiaSansSemiCondensed_900Black_Italic,
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
            fontFamily: 'SofiaSansSemiCondensed_100Thin',
          }}>
          Sofia Sans Semi Condensed Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_200ExtraLight',
          }}>
          Sofia Sans Semi Condensed Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_300Light',
          }}>
          Sofia Sans Semi Condensed Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_400Regular',
          }}>
          Sofia Sans Semi Condensed Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_500Medium',
          }}>
          Sofia Sans Semi Condensed Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_600SemiBold',
          }}>
          Sofia Sans Semi Condensed Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_700Bold',
          }}>
          Sofia Sans Semi Condensed Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_800ExtraBold',
          }}>
          Sofia Sans Semi Condensed Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_900Black',
          }}>
          Sofia Sans Semi Condensed Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_100Thin_Italic',
          }}>
          Sofia Sans Semi Condensed Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_200ExtraLight_Italic',
          }}>
          Sofia Sans Semi Condensed Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_300Light_Italic',
          }}>
          Sofia Sans Semi Condensed Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_400Regular_Italic',
          }}>
          Sofia Sans Semi Condensed Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_500Medium_Italic',
          }}>
          Sofia Sans Semi Condensed Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_600SemiBold_Italic',
          }}>
          Sofia Sans Semi Condensed Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_700Bold_Italic',
          }}>
          Sofia Sans Semi Condensed Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_800ExtraBold_Italic',
          }}>
          Sofia Sans Semi Condensed Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansSemiCondensed_900Black_Italic',
          }}>
          Sofia Sans Semi Condensed Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SofiaSansSemiCondensed_100Thin](./SofiaSansSemiCondensed_100Thin.ttf.png)|![SofiaSansSemiCondensed_200ExtraLight](./SofiaSansSemiCondensed_200ExtraLight.ttf.png)|![SofiaSansSemiCondensed_300Light](./SofiaSansSemiCondensed_300Light.ttf.png)||
|![SofiaSansSemiCondensed_400Regular](./SofiaSansSemiCondensed_400Regular.ttf.png)|![SofiaSansSemiCondensed_500Medium](./SofiaSansSemiCondensed_500Medium.ttf.png)|![SofiaSansSemiCondensed_600SemiBold](./SofiaSansSemiCondensed_600SemiBold.ttf.png)||
|![SofiaSansSemiCondensed_700Bold](./SofiaSansSemiCondensed_700Bold.ttf.png)|![SofiaSansSemiCondensed_800ExtraBold](./SofiaSansSemiCondensed_800ExtraBold.ttf.png)|![SofiaSansSemiCondensed_900Black](./SofiaSansSemiCondensed_900Black.ttf.png)||
|![SofiaSansSemiCondensed_100Thin_Italic](./SofiaSansSemiCondensed_100Thin_Italic.ttf.png)|![SofiaSansSemiCondensed_200ExtraLight_Italic](./SofiaSansSemiCondensed_200ExtraLight_Italic.ttf.png)|![SofiaSansSemiCondensed_300Light_Italic](./SofiaSansSemiCondensed_300Light_Italic.ttf.png)||
|![SofiaSansSemiCondensed_400Regular_Italic](./SofiaSansSemiCondensed_400Regular_Italic.ttf.png)|![SofiaSansSemiCondensed_500Medium_Italic](./SofiaSansSemiCondensed_500Medium_Italic.ttf.png)|![SofiaSansSemiCondensed_600SemiBold_Italic](./SofiaSansSemiCondensed_600SemiBold_Italic.ttf.png)||
|![SofiaSansSemiCondensed_700Bold_Italic](./SofiaSansSemiCondensed_700Bold_Italic.ttf.png)|![SofiaSansSemiCondensed_800ExtraBold_Italic](./SofiaSansSemiCondensed_800ExtraBold_Italic.ttf.png)|![SofiaSansSemiCondensed_900Black_Italic](./SofiaSansSemiCondensed_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sofia-sans-semi-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sofia Sans Semi Condensed page on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans+Semi+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sofia Sans Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sofia-sans-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sofia-sans-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
