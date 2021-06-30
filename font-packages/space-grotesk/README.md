# @expo-google-fonts/space-grotesk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/space-grotesk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/space-grotesk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/space-grotesk)

This package lets you use the [**Space Grotesk**](https://fonts.google.com/specimen/Space+Grotesk) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Space Grotesk

![Space Grotesk](./font-family.png)

This font family contains [5 styles](#-gallery).

- `SpaceGrotesk_300Light`
- `SpaceGrotesk_400Regular`
- `SpaceGrotesk_500Medium`
- `SpaceGrotesk_600SemiBold`
- `SpaceGrotesk_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/space-grotesk expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk';

export default () => {
  let [fontsLoaded] = useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
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
            fontFamily: 'SpaceGrotesk_300Light',
          }}>
          Space Grotesk Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpaceGrotesk_400Regular',
          }}>
          Space Grotesk Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpaceGrotesk_500Medium',
          }}>
          Space Grotesk Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpaceGrotesk_600SemiBold',
          }}>
          Space Grotesk Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpaceGrotesk_700Bold',
          }}>
          Space Grotesk Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SpaceGrotesk_300Light](./SpaceGrotesk_300Light.ttf.png)|![SpaceGrotesk_400Regular](./SpaceGrotesk_400Regular.ttf.png)|![SpaceGrotesk_500Medium](./SpaceGrotesk_500Medium.ttf.png)||
|![SpaceGrotesk_600SemiBold](./SpaceGrotesk_600SemiBold.ttf.png)|![SpaceGrotesk_700Bold](./SpaceGrotesk_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/space-grotesk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Space Grotesk page on Google Fonts](https://fonts.google.com/specimen/Space+Grotesk) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Space Grotesk on Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/space-grotesk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/space-grotesk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
