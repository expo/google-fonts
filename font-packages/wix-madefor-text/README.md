# @expo-google-fonts/wix-madefor-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/wix-madefor-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/wix-madefor-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/wix-madefor-text)

This package lets you use the [**Wix Madefor Text**](https://fonts.google.com/specimen/Wix+Madefor+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Wix Madefor Text

![Wix Madefor Text](./font-family.png)

This font family contains [10 styles](#-gallery).

- `WixMadeforText_400Regular`
- `WixMadeforText_400Regular_Italic`
- `WixMadeforText_500Medium`
- `WixMadeforText_500Medium_Italic`
- `WixMadeforText_600SemiBold`
- `WixMadeforText_600SemiBold_Italic`
- `WixMadeforText_700Bold`
- `WixMadeforText_700Bold_Italic`
- `WixMadeforText_800ExtraBold`
- `WixMadeforText_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/wix-madefor-text expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  WixMadeforText_400Regular,
  WixMadeforText_400Regular_Italic,
  WixMadeforText_500Medium,
  WixMadeforText_500Medium_Italic,
  WixMadeforText_600SemiBold,
  WixMadeforText_600SemiBold_Italic,
  WixMadeforText_700Bold,
  WixMadeforText_700Bold_Italic,
  WixMadeforText_800ExtraBold,
  WixMadeforText_800ExtraBold_Italic,
} from '@expo-google-fonts/wix-madefor-text';

export default () => {
  let [fontsLoaded] = useFonts({
    WixMadeforText_400Regular,
    WixMadeforText_400Regular_Italic,
    WixMadeforText_500Medium,
    WixMadeforText_500Medium_Italic,
    WixMadeforText_600SemiBold,
    WixMadeforText_600SemiBold_Italic,
    WixMadeforText_700Bold,
    WixMadeforText_700Bold_Italic,
    WixMadeforText_800ExtraBold,
    WixMadeforText_800ExtraBold_Italic,
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
            fontFamily: 'WixMadeforText_400Regular',
          }}>
          Wix Madefor Text Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_400Regular_Italic',
          }}>
          Wix Madefor Text Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_500Medium',
          }}>
          Wix Madefor Text Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_500Medium_Italic',
          }}>
          Wix Madefor Text Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_600SemiBold',
          }}>
          Wix Madefor Text Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_600SemiBold_Italic',
          }}>
          Wix Madefor Text Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_700Bold',
          }}>
          Wix Madefor Text Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_700Bold_Italic',
          }}>
          Wix Madefor Text Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_800ExtraBold',
          }}>
          Wix Madefor Text Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'WixMadeforText_800ExtraBold_Italic',
          }}>
          Wix Madefor Text Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![WixMadeforText_400Regular](./WixMadeforText_400Regular.ttf.png)|![WixMadeforText_400Regular_Italic](./WixMadeforText_400Regular_Italic.ttf.png)|![WixMadeforText_500Medium](./WixMadeforText_500Medium.ttf.png)||
|![WixMadeforText_500Medium_Italic](./WixMadeforText_500Medium_Italic.ttf.png)|![WixMadeforText_600SemiBold](./WixMadeforText_600SemiBold.ttf.png)|![WixMadeforText_600SemiBold_Italic](./WixMadeforText_600SemiBold_Italic.ttf.png)||
|![WixMadeforText_700Bold](./WixMadeforText_700Bold.ttf.png)|![WixMadeforText_700Bold_Italic](./WixMadeforText_700Bold_Italic.ttf.png)|![WixMadeforText_800ExtraBold](./WixMadeforText_800ExtraBold.ttf.png)||
|![WixMadeforText_800ExtraBold_Italic](./WixMadeforText_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/wix-madefor-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Wix Madefor Text page on Google Fonts](https://fonts.google.com/specimen/Wix+Madefor+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Wix Madefor Text on Google Fonts](https://fonts.google.com/specimen/Wix+Madefor+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/wix-madefor-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/wix-madefor-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
