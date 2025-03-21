# @expo-google-fonts/noto-serif-telugu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-telugu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-telugu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-telugu)

This package lets you use the [**Noto Serif Telugu**](https://fonts.google.com/specimen/Noto+Serif+Telugu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Telugu

![Noto Serif Telugu](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifTelugu_100Thin`
- `NotoSerifTelugu_200ExtraLight`
- `NotoSerifTelugu_300Light`
- `NotoSerifTelugu_400Regular`
- `NotoSerifTelugu_500Medium`
- `NotoSerifTelugu_600SemiBold`
- `NotoSerifTelugu_700Bold`
- `NotoSerifTelugu_800ExtraBold`
- `NotoSerifTelugu_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-serif-telugu expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifTelugu_100Thin,
  NotoSerifTelugu_200ExtraLight,
  NotoSerifTelugu_300Light,
  NotoSerifTelugu_400Regular,
  NotoSerifTelugu_500Medium,
  NotoSerifTelugu_600SemiBold,
  NotoSerifTelugu_700Bold,
  NotoSerifTelugu_800ExtraBold,
  NotoSerifTelugu_900Black,
} from '@expo-google-fonts/noto-serif-telugu';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifTelugu_100Thin,
    NotoSerifTelugu_200ExtraLight,
    NotoSerifTelugu_300Light,
    NotoSerifTelugu_400Regular,
    NotoSerifTelugu_500Medium,
    NotoSerifTelugu_600SemiBold,
    NotoSerifTelugu_700Bold,
    NotoSerifTelugu_800ExtraBold,
    NotoSerifTelugu_900Black,
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
            fontFamily: 'NotoSerifTelugu_100Thin',
          }}>
          Noto Serif Telugu Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_200ExtraLight',
          }}>
          Noto Serif Telugu Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_300Light',
          }}>
          Noto Serif Telugu Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_400Regular',
          }}>
          Noto Serif Telugu Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_500Medium',
          }}>
          Noto Serif Telugu Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_600SemiBold',
          }}>
          Noto Serif Telugu Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_700Bold',
          }}>
          Noto Serif Telugu Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_800ExtraBold',
          }}>
          Noto Serif Telugu Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifTelugu_900Black',
          }}>
          Noto Serif Telugu Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifTelugu_100Thin](./NotoSerifTelugu_100Thin.ttf.png)|![NotoSerifTelugu_200ExtraLight](./NotoSerifTelugu_200ExtraLight.ttf.png)|![NotoSerifTelugu_300Light](./NotoSerifTelugu_300Light.ttf.png)||
|![NotoSerifTelugu_400Regular](./NotoSerifTelugu_400Regular.ttf.png)|![NotoSerifTelugu_500Medium](./NotoSerifTelugu_500Medium.ttf.png)|![NotoSerifTelugu_600SemiBold](./NotoSerifTelugu_600SemiBold.ttf.png)||
|![NotoSerifTelugu_700Bold](./NotoSerifTelugu_700Bold.ttf.png)|![NotoSerifTelugu_800ExtraBold](./NotoSerifTelugu_800ExtraBold.ttf.png)|![NotoSerifTelugu_900Black](./NotoSerifTelugu_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-telugu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Telugu page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Telugu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Telugu on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Telugu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-telugu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-telugu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
