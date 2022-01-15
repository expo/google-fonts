# @expo-google-fonts/source-code-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/source-code-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/source-code-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/source-code-pro)

This package lets you use the [**Source Code Pro**](https://fonts.google.com/specimen/Source+Code+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Source Code Pro

![Source Code Pro](./font-family.png)

This font family contains [16 styles](#-gallery).

- `SourceCodePro_200ExtraLight`
- `SourceCodePro_300Light`
- `SourceCodePro_400Regular`
- `SourceCodePro_500Medium`
- `SourceCodePro_600SemiBold`
- `SourceCodePro_700Bold`
- `SourceCodePro_800ExtraBold`
- `SourceCodePro_900Black`
- `SourceCodePro_200ExtraLight_Italic`
- `SourceCodePro_300Light_Italic`
- `SourceCodePro_400Regular_Italic`
- `SourceCodePro_500Medium_Italic`
- `SourceCodePro_600SemiBold_Italic`
- `SourceCodePro_700Bold_Italic`
- `SourceCodePro_800ExtraBold_Italic`
- `SourceCodePro_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/source-code-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceCodePro_200ExtraLight,
  SourceCodePro_300Light,
  SourceCodePro_400Regular,
  SourceCodePro_500Medium,
  SourceCodePro_600SemiBold,
  SourceCodePro_700Bold,
  SourceCodePro_800ExtraBold,
  SourceCodePro_900Black,
  SourceCodePro_200ExtraLight_Italic,
  SourceCodePro_300Light_Italic,
  SourceCodePro_400Regular_Italic,
  SourceCodePro_500Medium_Italic,
  SourceCodePro_600SemiBold_Italic,
  SourceCodePro_700Bold_Italic,
  SourceCodePro_800ExtraBold_Italic,
  SourceCodePro_900Black_Italic,
} from '@expo-google-fonts/source-code-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceCodePro_200ExtraLight,
    SourceCodePro_300Light,
    SourceCodePro_400Regular,
    SourceCodePro_500Medium,
    SourceCodePro_600SemiBold,
    SourceCodePro_700Bold,
    SourceCodePro_800ExtraBold,
    SourceCodePro_900Black,
    SourceCodePro_200ExtraLight_Italic,
    SourceCodePro_300Light_Italic,
    SourceCodePro_400Regular_Italic,
    SourceCodePro_500Medium_Italic,
    SourceCodePro_600SemiBold_Italic,
    SourceCodePro_700Bold_Italic,
    SourceCodePro_800ExtraBold_Italic,
    SourceCodePro_900Black_Italic,
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
            fontFamily: 'SourceCodePro_200ExtraLight',
          }}>
          Source Code Pro Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_300Light',
          }}>
          Source Code Pro Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_400Regular',
          }}>
          Source Code Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_500Medium',
          }}>
          Source Code Pro Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_600SemiBold',
          }}>
          Source Code Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_700Bold',
          }}>
          Source Code Pro Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_800ExtraBold',
          }}>
          Source Code Pro Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_900Black',
          }}>
          Source Code Pro Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_200ExtraLight_Italic',
          }}>
          Source Code Pro Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_300Light_Italic',
          }}>
          Source Code Pro Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_400Regular_Italic',
          }}>
          Source Code Pro Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_500Medium_Italic',
          }}>
          Source Code Pro Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_600SemiBold_Italic',
          }}>
          Source Code Pro Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_700Bold_Italic',
          }}>
          Source Code Pro Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_800ExtraBold_Italic',
          }}>
          Source Code Pro Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceCodePro_900Black_Italic',
          }}>
          Source Code Pro Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SourceCodePro_200ExtraLight](./SourceCodePro_200ExtraLight.ttf.png)|![SourceCodePro_300Light](./SourceCodePro_300Light.ttf.png)|![SourceCodePro_400Regular](./SourceCodePro_400Regular.ttf.png)||
|![SourceCodePro_500Medium](./SourceCodePro_500Medium.ttf.png)|![SourceCodePro_600SemiBold](./SourceCodePro_600SemiBold.ttf.png)|![SourceCodePro_700Bold](./SourceCodePro_700Bold.ttf.png)||
|![SourceCodePro_800ExtraBold](./SourceCodePro_800ExtraBold.ttf.png)|![SourceCodePro_900Black](./SourceCodePro_900Black.ttf.png)|![SourceCodePro_200ExtraLight_Italic](./SourceCodePro_200ExtraLight_Italic.ttf.png)||
|![SourceCodePro_300Light_Italic](./SourceCodePro_300Light_Italic.ttf.png)|![SourceCodePro_400Regular_Italic](./SourceCodePro_400Regular_Italic.ttf.png)|![SourceCodePro_500Medium_Italic](./SourceCodePro_500Medium_Italic.ttf.png)||
|![SourceCodePro_600SemiBold_Italic](./SourceCodePro_600SemiBold_Italic.ttf.png)|![SourceCodePro_700Bold_Italic](./SourceCodePro_700Bold_Italic.ttf.png)|![SourceCodePro_800ExtraBold_Italic](./SourceCodePro_800ExtraBold_Italic.ttf.png)||
|![SourceCodePro_900Black_Italic](./SourceCodePro_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/source-code-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Source Code Pro page on Google Fonts](https://fonts.google.com/specimen/Source+Code+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Source Code Pro on Google Fonts](https://fonts.google.com/specimen/Source+Code+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-code-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-code-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
