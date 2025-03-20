# @expo-google-fonts/linefont

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/linefont)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/linefont)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/linefont)

This package lets you use the [**Linefont**](https://fonts.google.com/specimen/Linefont) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Linefont

![Linefont](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Linefont_100Thin`
- `Linefont_200ExtraLight`
- `Linefont_300Light`
- `Linefont_400Regular`
- `Linefont_500Medium`
- `Linefont_600SemiBold`
- `Linefont_700Bold`
- `Linefont_800ExtraBold`
- `Linefont_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/linefont expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Linefont_100Thin,
  Linefont_200ExtraLight,
  Linefont_300Light,
  Linefont_400Regular,
  Linefont_500Medium,
  Linefont_600SemiBold,
  Linefont_700Bold,
  Linefont_800ExtraBold,
  Linefont_900Black,
} from '@expo-google-fonts/linefont';

export default () => {
  let [fontsLoaded] = useFonts({
    Linefont_100Thin,
    Linefont_200ExtraLight,
    Linefont_300Light,
    Linefont_400Regular,
    Linefont_500Medium,
    Linefont_600SemiBold,
    Linefont_700Bold,
    Linefont_800ExtraBold,
    Linefont_900Black,
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
            fontFamily: 'Linefont_100Thin',
          }}>
          Linefont Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_200ExtraLight',
          }}>
          Linefont Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_300Light',
          }}>
          Linefont Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_400Regular',
          }}>
          Linefont Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_500Medium',
          }}>
          Linefont Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_600SemiBold',
          }}>
          Linefont Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_700Bold',
          }}>
          Linefont Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_800ExtraBold',
          }}>
          Linefont Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Linefont_900Black',
          }}>
          Linefont Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Linefont_100Thin](./Linefont_100Thin.ttf.png)|![Linefont_200ExtraLight](./Linefont_200ExtraLight.ttf.png)|![Linefont_300Light](./Linefont_300Light.ttf.png)||
|![Linefont_400Regular](./Linefont_400Regular.ttf.png)|![Linefont_500Medium](./Linefont_500Medium.ttf.png)|![Linefont_600SemiBold](./Linefont_600SemiBold.ttf.png)||
|![Linefont_700Bold](./Linefont_700Bold.ttf.png)|![Linefont_800ExtraBold](./Linefont_800ExtraBold.ttf.png)|![Linefont_900Black](./Linefont_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/linefont` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Linefont page on Google Fonts](https://fonts.google.com/specimen/Linefont) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Linefont on Google Fonts](https://fonts.google.com/specimen/Linefont)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/linefont)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/linefont)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
