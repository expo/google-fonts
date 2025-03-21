# @expo-google-fonts/tsukimi-rounded

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tsukimi-rounded)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tsukimi-rounded)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tsukimi-rounded)

This package lets you use the [**Tsukimi Rounded**](https://fonts.google.com/specimen/Tsukimi+Rounded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tsukimi Rounded

![Tsukimi Rounded](./font-family.png)

This font family contains [5 styles](#-gallery).

- `TsukimiRounded_300Light`
- `TsukimiRounded_400Regular`
- `TsukimiRounded_500Medium`
- `TsukimiRounded_600SemiBold`
- `TsukimiRounded_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/tsukimi-rounded expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  TsukimiRounded_300Light,
  TsukimiRounded_400Regular,
  TsukimiRounded_500Medium,
  TsukimiRounded_600SemiBold,
  TsukimiRounded_700Bold,
} from '@expo-google-fonts/tsukimi-rounded';

export default () => {
  let [fontsLoaded] = useFonts({
    TsukimiRounded_300Light,
    TsukimiRounded_400Regular,
    TsukimiRounded_500Medium,
    TsukimiRounded_600SemiBold,
    TsukimiRounded_700Bold,
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
            fontFamily: 'TsukimiRounded_300Light',
          }}>
          Tsukimi Rounded Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TsukimiRounded_400Regular',
          }}>
          Tsukimi Rounded Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TsukimiRounded_500Medium',
          }}>
          Tsukimi Rounded Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TsukimiRounded_600SemiBold',
          }}>
          Tsukimi Rounded Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TsukimiRounded_700Bold',
          }}>
          Tsukimi Rounded Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![TsukimiRounded_300Light](./TsukimiRounded_300Light.ttf.png)|![TsukimiRounded_400Regular](./TsukimiRounded_400Regular.ttf.png)|![TsukimiRounded_500Medium](./TsukimiRounded_500Medium.ttf.png)||
|![TsukimiRounded_600SemiBold](./TsukimiRounded_600SemiBold.ttf.png)|![TsukimiRounded_700Bold](./TsukimiRounded_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tsukimi-rounded` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tsukimi Rounded page on Google Fonts](https://fonts.google.com/specimen/Tsukimi+Rounded) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tsukimi Rounded on Google Fonts](https://fonts.google.com/specimen/Tsukimi+Rounded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tsukimi-rounded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tsukimi-rounded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
