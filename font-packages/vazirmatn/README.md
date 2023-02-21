# @expo-google-fonts/vazirmatn

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/vazirmatn)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/vazirmatn)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/vazirmatn)

This package lets you use the [**Vazirmatn**](https://fonts.google.com/specimen/Vazirmatn) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Vazirmatn

![Vazirmatn](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Vazirmatn_100Thin`
- `Vazirmatn_200ExtraLight`
- `Vazirmatn_300Light`
- `Vazirmatn_400Regular`
- `Vazirmatn_500Medium`
- `Vazirmatn_600SemiBold`
- `Vazirmatn_700Bold`
- `Vazirmatn_800ExtraBold`
- `Vazirmatn_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/vazirmatn expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Vazirmatn_100Thin,
  Vazirmatn_200ExtraLight,
  Vazirmatn_300Light,
  Vazirmatn_400Regular,
  Vazirmatn_500Medium,
  Vazirmatn_600SemiBold,
  Vazirmatn_700Bold,
  Vazirmatn_800ExtraBold,
  Vazirmatn_900Black,
} from '@expo-google-fonts/vazirmatn';

export default () => {
  let [fontsLoaded] = useFonts({
    Vazirmatn_100Thin,
    Vazirmatn_200ExtraLight,
    Vazirmatn_300Light,
    Vazirmatn_400Regular,
    Vazirmatn_500Medium,
    Vazirmatn_600SemiBold,
    Vazirmatn_700Bold,
    Vazirmatn_800ExtraBold,
    Vazirmatn_900Black,
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
            fontFamily: 'Vazirmatn_100Thin',
          }}>
          Vazirmatn Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_200ExtraLight',
          }}>
          Vazirmatn Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_300Light',
          }}>
          Vazirmatn Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_400Regular',
          }}>
          Vazirmatn Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_500Medium',
          }}>
          Vazirmatn Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_600SemiBold',
          }}>
          Vazirmatn Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_700Bold',
          }}>
          Vazirmatn Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_800ExtraBold',
          }}>
          Vazirmatn Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vazirmatn_900Black',
          }}>
          Vazirmatn Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Vazirmatn_100Thin](./Vazirmatn_100Thin.ttf.png)|![Vazirmatn_200ExtraLight](./Vazirmatn_200ExtraLight.ttf.png)|![Vazirmatn_300Light](./Vazirmatn_300Light.ttf.png)||
|![Vazirmatn_400Regular](./Vazirmatn_400Regular.ttf.png)|![Vazirmatn_500Medium](./Vazirmatn_500Medium.ttf.png)|![Vazirmatn_600SemiBold](./Vazirmatn_600SemiBold.ttf.png)||
|![Vazirmatn_700Bold](./Vazirmatn_700Bold.ttf.png)|![Vazirmatn_800ExtraBold](./Vazirmatn_800ExtraBold.ttf.png)|![Vazirmatn_900Black](./Vazirmatn_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/vazirmatn` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Vazirmatn page on Google Fonts](https://fonts.google.com/specimen/Vazirmatn) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Vazirmatn on Google Fonts](https://fonts.google.com/specimen/Vazirmatn)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/vazirmatn)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/vazirmatn)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
