# @expo-google-fonts/kantumruy-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kantumruy-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kantumruy-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kantumruy-pro)

This package lets you use the [**Kantumruy Pro**](https://fonts.google.com/specimen/Kantumruy+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kantumruy Pro

![Kantumruy Pro](./font-family.png)

This font family contains [14 styles](#-gallery).

- `KantumruyPro_100Thin`
- `KantumruyPro_200ExtraLight`
- `KantumruyPro_300Light`
- `KantumruyPro_400Regular`
- `KantumruyPro_500Medium`
- `KantumruyPro_600SemiBold`
- `KantumruyPro_700Bold`
- `KantumruyPro_100Thin_Italic`
- `KantumruyPro_200ExtraLight_Italic`
- `KantumruyPro_300Light_Italic`
- `KantumruyPro_400Regular_Italic`
- `KantumruyPro_500Medium_Italic`
- `KantumruyPro_600SemiBold_Italic`
- `KantumruyPro_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/kantumruy-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  KantumruyPro_100Thin,
  KantumruyPro_200ExtraLight,
  KantumruyPro_300Light,
  KantumruyPro_400Regular,
  KantumruyPro_500Medium,
  KantumruyPro_600SemiBold,
  KantumruyPro_700Bold,
  KantumruyPro_100Thin_Italic,
  KantumruyPro_200ExtraLight_Italic,
  KantumruyPro_300Light_Italic,
  KantumruyPro_400Regular_Italic,
  KantumruyPro_500Medium_Italic,
  KantumruyPro_600SemiBold_Italic,
  KantumruyPro_700Bold_Italic,
} from '@expo-google-fonts/kantumruy-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    KantumruyPro_100Thin,
    KantumruyPro_200ExtraLight,
    KantumruyPro_300Light,
    KantumruyPro_400Regular,
    KantumruyPro_500Medium,
    KantumruyPro_600SemiBold,
    KantumruyPro_700Bold,
    KantumruyPro_100Thin_Italic,
    KantumruyPro_200ExtraLight_Italic,
    KantumruyPro_300Light_Italic,
    KantumruyPro_400Regular_Italic,
    KantumruyPro_500Medium_Italic,
    KantumruyPro_600SemiBold_Italic,
    KantumruyPro_700Bold_Italic,
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
            fontFamily: 'KantumruyPro_100Thin',
          }}>
          Kantumruy Pro Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_200ExtraLight',
          }}>
          Kantumruy Pro Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_300Light',
          }}>
          Kantumruy Pro Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_400Regular',
          }}>
          Kantumruy Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_500Medium',
          }}>
          Kantumruy Pro Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_600SemiBold',
          }}>
          Kantumruy Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_700Bold',
          }}>
          Kantumruy Pro Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_100Thin_Italic',
          }}>
          Kantumruy Pro Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_200ExtraLight_Italic',
          }}>
          Kantumruy Pro Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_300Light_Italic',
          }}>
          Kantumruy Pro Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_400Regular_Italic',
          }}>
          Kantumruy Pro Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_500Medium_Italic',
          }}>
          Kantumruy Pro Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_600SemiBold_Italic',
          }}>
          Kantumruy Pro Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KantumruyPro_700Bold_Italic',
          }}>
          Kantumruy Pro Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![KantumruyPro_100Thin](./KantumruyPro_100Thin.ttf.png)|![KantumruyPro_200ExtraLight](./KantumruyPro_200ExtraLight.ttf.png)|![KantumruyPro_300Light](./KantumruyPro_300Light.ttf.png)||
|![KantumruyPro_400Regular](./KantumruyPro_400Regular.ttf.png)|![KantumruyPro_500Medium](./KantumruyPro_500Medium.ttf.png)|![KantumruyPro_600SemiBold](./KantumruyPro_600SemiBold.ttf.png)||
|![KantumruyPro_700Bold](./KantumruyPro_700Bold.ttf.png)|![KantumruyPro_100Thin_Italic](./KantumruyPro_100Thin_Italic.ttf.png)|![KantumruyPro_200ExtraLight_Italic](./KantumruyPro_200ExtraLight_Italic.ttf.png)||
|![KantumruyPro_300Light_Italic](./KantumruyPro_300Light_Italic.ttf.png)|![KantumruyPro_400Regular_Italic](./KantumruyPro_400Regular_Italic.ttf.png)|![KantumruyPro_500Medium_Italic](./KantumruyPro_500Medium_Italic.ttf.png)||
|![KantumruyPro_600SemiBold_Italic](./KantumruyPro_600SemiBold_Italic.ttf.png)|![KantumruyPro_700Bold_Italic](./KantumruyPro_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kantumruy-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kantumruy Pro page on Google Fonts](https://fonts.google.com/specimen/Kantumruy+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kantumruy Pro on Google Fonts](https://fonts.google.com/specimen/Kantumruy+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kantumruy-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kantumruy-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
