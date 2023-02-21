# @expo-google-fonts/sofia-sans-extra-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sofia-sans-extra-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sofia-sans-extra-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sofia-sans-extra-condensed)

This package lets you use the [**Sofia Sans Extra Condensed**](https://fonts.google.com/specimen/Sofia+Sans+Extra+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sofia Sans Extra Condensed

![Sofia Sans Extra Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `SofiaSansExtraCondensed_100Thin`
- `SofiaSansExtraCondensed_200ExtraLight`
- `SofiaSansExtraCondensed_300Light`
- `SofiaSansExtraCondensed_400Regular`
- `SofiaSansExtraCondensed_500Medium`
- `SofiaSansExtraCondensed_600SemiBold`
- `SofiaSansExtraCondensed_700Bold`
- `SofiaSansExtraCondensed_800ExtraBold`
- `SofiaSansExtraCondensed_900Black`
- `SofiaSansExtraCondensed_100Thin_Italic`
- `SofiaSansExtraCondensed_200ExtraLight_Italic`
- `SofiaSansExtraCondensed_300Light_Italic`
- `SofiaSansExtraCondensed_400Regular_Italic`
- `SofiaSansExtraCondensed_500Medium_Italic`
- `SofiaSansExtraCondensed_600SemiBold_Italic`
- `SofiaSansExtraCondensed_700Bold_Italic`
- `SofiaSansExtraCondensed_800ExtraBold_Italic`
- `SofiaSansExtraCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sofia-sans-extra-condensed expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SofiaSansExtraCondensed_100Thin,
  SofiaSansExtraCondensed_200ExtraLight,
  SofiaSansExtraCondensed_300Light,
  SofiaSansExtraCondensed_400Regular,
  SofiaSansExtraCondensed_500Medium,
  SofiaSansExtraCondensed_600SemiBold,
  SofiaSansExtraCondensed_700Bold,
  SofiaSansExtraCondensed_800ExtraBold,
  SofiaSansExtraCondensed_900Black,
  SofiaSansExtraCondensed_100Thin_Italic,
  SofiaSansExtraCondensed_200ExtraLight_Italic,
  SofiaSansExtraCondensed_300Light_Italic,
  SofiaSansExtraCondensed_400Regular_Italic,
  SofiaSansExtraCondensed_500Medium_Italic,
  SofiaSansExtraCondensed_600SemiBold_Italic,
  SofiaSansExtraCondensed_700Bold_Italic,
  SofiaSansExtraCondensed_800ExtraBold_Italic,
  SofiaSansExtraCondensed_900Black_Italic,
} from '@expo-google-fonts/sofia-sans-extra-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    SofiaSansExtraCondensed_100Thin,
    SofiaSansExtraCondensed_200ExtraLight,
    SofiaSansExtraCondensed_300Light,
    SofiaSansExtraCondensed_400Regular,
    SofiaSansExtraCondensed_500Medium,
    SofiaSansExtraCondensed_600SemiBold,
    SofiaSansExtraCondensed_700Bold,
    SofiaSansExtraCondensed_800ExtraBold,
    SofiaSansExtraCondensed_900Black,
    SofiaSansExtraCondensed_100Thin_Italic,
    SofiaSansExtraCondensed_200ExtraLight_Italic,
    SofiaSansExtraCondensed_300Light_Italic,
    SofiaSansExtraCondensed_400Regular_Italic,
    SofiaSansExtraCondensed_500Medium_Italic,
    SofiaSansExtraCondensed_600SemiBold_Italic,
    SofiaSansExtraCondensed_700Bold_Italic,
    SofiaSansExtraCondensed_800ExtraBold_Italic,
    SofiaSansExtraCondensed_900Black_Italic,
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
            fontFamily: 'SofiaSansExtraCondensed_100Thin',
          }}>
          Sofia Sans Extra Condensed Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_200ExtraLight',
          }}>
          Sofia Sans Extra Condensed Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_300Light',
          }}>
          Sofia Sans Extra Condensed Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_400Regular',
          }}>
          Sofia Sans Extra Condensed Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_500Medium',
          }}>
          Sofia Sans Extra Condensed Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_600SemiBold',
          }}>
          Sofia Sans Extra Condensed Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_700Bold',
          }}>
          Sofia Sans Extra Condensed Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_800ExtraBold',
          }}>
          Sofia Sans Extra Condensed Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_900Black',
          }}>
          Sofia Sans Extra Condensed Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_100Thin_Italic',
          }}>
          Sofia Sans Extra Condensed Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_200ExtraLight_Italic',
          }}>
          Sofia Sans Extra Condensed Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_300Light_Italic',
          }}>
          Sofia Sans Extra Condensed Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_400Regular_Italic',
          }}>
          Sofia Sans Extra Condensed Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_500Medium_Italic',
          }}>
          Sofia Sans Extra Condensed Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_600SemiBold_Italic',
          }}>
          Sofia Sans Extra Condensed Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_700Bold_Italic',
          }}>
          Sofia Sans Extra Condensed Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_800ExtraBold_Italic',
          }}>
          Sofia Sans Extra Condensed Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SofiaSansExtraCondensed_900Black_Italic',
          }}>
          Sofia Sans Extra Condensed Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SofiaSansExtraCondensed_100Thin](./SofiaSansExtraCondensed_100Thin.ttf.png)|![SofiaSansExtraCondensed_200ExtraLight](./SofiaSansExtraCondensed_200ExtraLight.ttf.png)|![SofiaSansExtraCondensed_300Light](./SofiaSansExtraCondensed_300Light.ttf.png)||
|![SofiaSansExtraCondensed_400Regular](./SofiaSansExtraCondensed_400Regular.ttf.png)|![SofiaSansExtraCondensed_500Medium](./SofiaSansExtraCondensed_500Medium.ttf.png)|![SofiaSansExtraCondensed_600SemiBold](./SofiaSansExtraCondensed_600SemiBold.ttf.png)||
|![SofiaSansExtraCondensed_700Bold](./SofiaSansExtraCondensed_700Bold.ttf.png)|![SofiaSansExtraCondensed_800ExtraBold](./SofiaSansExtraCondensed_800ExtraBold.ttf.png)|![SofiaSansExtraCondensed_900Black](./SofiaSansExtraCondensed_900Black.ttf.png)||
|![SofiaSansExtraCondensed_100Thin_Italic](./SofiaSansExtraCondensed_100Thin_Italic.ttf.png)|![SofiaSansExtraCondensed_200ExtraLight_Italic](./SofiaSansExtraCondensed_200ExtraLight_Italic.ttf.png)|![SofiaSansExtraCondensed_300Light_Italic](./SofiaSansExtraCondensed_300Light_Italic.ttf.png)||
|![SofiaSansExtraCondensed_400Regular_Italic](./SofiaSansExtraCondensed_400Regular_Italic.ttf.png)|![SofiaSansExtraCondensed_500Medium_Italic](./SofiaSansExtraCondensed_500Medium_Italic.ttf.png)|![SofiaSansExtraCondensed_600SemiBold_Italic](./SofiaSansExtraCondensed_600SemiBold_Italic.ttf.png)||
|![SofiaSansExtraCondensed_700Bold_Italic](./SofiaSansExtraCondensed_700Bold_Italic.ttf.png)|![SofiaSansExtraCondensed_800ExtraBold_Italic](./SofiaSansExtraCondensed_800ExtraBold_Italic.ttf.png)|![SofiaSansExtraCondensed_900Black_Italic](./SofiaSansExtraCondensed_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sofia-sans-extra-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sofia Sans Extra Condensed page on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans+Extra+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sofia Sans Extra Condensed on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans+Extra+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sofia-sans-extra-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sofia-sans-extra-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
