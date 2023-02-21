# @expo-google-fonts/be-vietnam-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/be-vietnam-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/be-vietnam-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/be-vietnam-pro)

This package lets you use the [**Be Vietnam Pro**](https://fonts.google.com/specimen/Be+Vietnam+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Be Vietnam Pro

![Be Vietnam Pro](./font-family.png)

This font family contains [18 styles](#-gallery).

- `BeVietnamPro_100Thin`
- `BeVietnamPro_100Thin_Italic`
- `BeVietnamPro_200ExtraLight`
- `BeVietnamPro_200ExtraLight_Italic`
- `BeVietnamPro_300Light`
- `BeVietnamPro_300Light_Italic`
- `BeVietnamPro_400Regular`
- `BeVietnamPro_400Regular_Italic`
- `BeVietnamPro_500Medium`
- `BeVietnamPro_500Medium_Italic`
- `BeVietnamPro_600SemiBold`
- `BeVietnamPro_600SemiBold_Italic`
- `BeVietnamPro_700Bold`
- `BeVietnamPro_700Bold_Italic`
- `BeVietnamPro_800ExtraBold`
- `BeVietnamPro_800ExtraBold_Italic`
- `BeVietnamPro_900Black`
- `BeVietnamPro_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/be-vietnam-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BeVietnamPro_100Thin,
  BeVietnamPro_100Thin_Italic,
  BeVietnamPro_200ExtraLight,
  BeVietnamPro_200ExtraLight_Italic,
  BeVietnamPro_300Light,
  BeVietnamPro_300Light_Italic,
  BeVietnamPro_400Regular,
  BeVietnamPro_400Regular_Italic,
  BeVietnamPro_500Medium,
  BeVietnamPro_500Medium_Italic,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_600SemiBold_Italic,
  BeVietnamPro_700Bold,
  BeVietnamPro_700Bold_Italic,
  BeVietnamPro_800ExtraBold,
  BeVietnamPro_800ExtraBold_Italic,
  BeVietnamPro_900Black,
  BeVietnamPro_900Black_Italic,
} from '@expo-google-fonts/be-vietnam-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    BeVietnamPro_100Thin,
    BeVietnamPro_100Thin_Italic,
    BeVietnamPro_200ExtraLight,
    BeVietnamPro_200ExtraLight_Italic,
    BeVietnamPro_300Light,
    BeVietnamPro_300Light_Italic,
    BeVietnamPro_400Regular,
    BeVietnamPro_400Regular_Italic,
    BeVietnamPro_500Medium,
    BeVietnamPro_500Medium_Italic,
    BeVietnamPro_600SemiBold,
    BeVietnamPro_600SemiBold_Italic,
    BeVietnamPro_700Bold,
    BeVietnamPro_700Bold_Italic,
    BeVietnamPro_800ExtraBold,
    BeVietnamPro_800ExtraBold_Italic,
    BeVietnamPro_900Black,
    BeVietnamPro_900Black_Italic,
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
            fontFamily: 'BeVietnamPro_100Thin',
          }}>
          Be Vietnam Pro Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_100Thin_Italic',
          }}>
          Be Vietnam Pro Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_200ExtraLight',
          }}>
          Be Vietnam Pro Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_200ExtraLight_Italic',
          }}>
          Be Vietnam Pro Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_300Light',
          }}>
          Be Vietnam Pro Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_300Light_Italic',
          }}>
          Be Vietnam Pro Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_400Regular',
          }}>
          Be Vietnam Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_400Regular_Italic',
          }}>
          Be Vietnam Pro Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_500Medium',
          }}>
          Be Vietnam Pro Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_500Medium_Italic',
          }}>
          Be Vietnam Pro Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_600SemiBold',
          }}>
          Be Vietnam Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_600SemiBold_Italic',
          }}>
          Be Vietnam Pro Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_700Bold',
          }}>
          Be Vietnam Pro Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_700Bold_Italic',
          }}>
          Be Vietnam Pro Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_800ExtraBold',
          }}>
          Be Vietnam Pro Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_800ExtraBold_Italic',
          }}>
          Be Vietnam Pro Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_900Black',
          }}>
          Be Vietnam Pro Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BeVietnamPro_900Black_Italic',
          }}>
          Be Vietnam Pro Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BeVietnamPro_100Thin](./BeVietnamPro_100Thin.ttf.png)|![BeVietnamPro_100Thin_Italic](./BeVietnamPro_100Thin_Italic.ttf.png)|![BeVietnamPro_200ExtraLight](./BeVietnamPro_200ExtraLight.ttf.png)||
|![BeVietnamPro_200ExtraLight_Italic](./BeVietnamPro_200ExtraLight_Italic.ttf.png)|![BeVietnamPro_300Light](./BeVietnamPro_300Light.ttf.png)|![BeVietnamPro_300Light_Italic](./BeVietnamPro_300Light_Italic.ttf.png)||
|![BeVietnamPro_400Regular](./BeVietnamPro_400Regular.ttf.png)|![BeVietnamPro_400Regular_Italic](./BeVietnamPro_400Regular_Italic.ttf.png)|![BeVietnamPro_500Medium](./BeVietnamPro_500Medium.ttf.png)||
|![BeVietnamPro_500Medium_Italic](./BeVietnamPro_500Medium_Italic.ttf.png)|![BeVietnamPro_600SemiBold](./BeVietnamPro_600SemiBold.ttf.png)|![BeVietnamPro_600SemiBold_Italic](./BeVietnamPro_600SemiBold_Italic.ttf.png)||
|![BeVietnamPro_700Bold](./BeVietnamPro_700Bold.ttf.png)|![BeVietnamPro_700Bold_Italic](./BeVietnamPro_700Bold_Italic.ttf.png)|![BeVietnamPro_800ExtraBold](./BeVietnamPro_800ExtraBold.ttf.png)||
|![BeVietnamPro_800ExtraBold_Italic](./BeVietnamPro_800ExtraBold_Italic.ttf.png)|![BeVietnamPro_900Black](./BeVietnamPro_900Black.ttf.png)|![BeVietnamPro_900Black_Italic](./BeVietnamPro_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/be-vietnam-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Be Vietnam Pro page on Google Fonts](https://fonts.google.com/specimen/Be+Vietnam+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Be Vietnam Pro on Google Fonts](https://fonts.google.com/specimen/Be+Vietnam+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/be-vietnam-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/be-vietnam-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
