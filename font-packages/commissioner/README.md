# @expo-google-fonts/commissioner

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/commissioner)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/commissioner)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/commissioner)

This package lets you use the [**Commissioner**](https://fonts.google.com/specimen/Commissioner) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Commissioner

![Commissioner](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Commissioner_100Thin`
- `Commissioner_200ExtraLight`
- `Commissioner_300Light`
- `Commissioner_400Regular`
- `Commissioner_500Medium`
- `Commissioner_600SemiBold`
- `Commissioner_700Bold`
- `Commissioner_800ExtraBold`
- `Commissioner_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/commissioner expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Commissioner_100Thin,
  Commissioner_200ExtraLight,
  Commissioner_300Light,
  Commissioner_400Regular,
  Commissioner_500Medium,
  Commissioner_600SemiBold,
  Commissioner_700Bold,
  Commissioner_800ExtraBold,
  Commissioner_900Black,
} from '@expo-google-fonts/commissioner';

export default () => {
  let [fontsLoaded] = useFonts({
    Commissioner_100Thin,
    Commissioner_200ExtraLight,
    Commissioner_300Light,
    Commissioner_400Regular,
    Commissioner_500Medium,
    Commissioner_600SemiBold,
    Commissioner_700Bold,
    Commissioner_800ExtraBold,
    Commissioner_900Black,
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
            fontFamily: 'Commissioner_100Thin',
          }}>
          Commissioner Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_200ExtraLight',
          }}>
          Commissioner Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_300Light',
          }}>
          Commissioner Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_400Regular',
          }}>
          Commissioner Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_500Medium',
          }}>
          Commissioner Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_600SemiBold',
          }}>
          Commissioner Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_700Bold',
          }}>
          Commissioner Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_800ExtraBold',
          }}>
          Commissioner Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Commissioner_900Black',
          }}>
          Commissioner Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Commissioner_100Thin](./Commissioner_100Thin.ttf.png)|![Commissioner_200ExtraLight](./Commissioner_200ExtraLight.ttf.png)|![Commissioner_300Light](./Commissioner_300Light.ttf.png)||
|![Commissioner_400Regular](./Commissioner_400Regular.ttf.png)|![Commissioner_500Medium](./Commissioner_500Medium.ttf.png)|![Commissioner_600SemiBold](./Commissioner_600SemiBold.ttf.png)||
|![Commissioner_700Bold](./Commissioner_700Bold.ttf.png)|![Commissioner_800ExtraBold](./Commissioner_800ExtraBold.ttf.png)|![Commissioner_900Black](./Commissioner_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/commissioner` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Commissioner page on Google Fonts](https://fonts.google.com/specimen/Commissioner) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Commissioner on Google Fonts](https://fonts.google.com/specimen/Commissioner)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/commissioner)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/commissioner)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
