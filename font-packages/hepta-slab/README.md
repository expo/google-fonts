# @expo-google-fonts/hepta-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hepta-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hepta-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hepta-slab)

This package lets you use the [**Hepta Slab**](https://fonts.google.com/specimen/Hepta+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Hepta Slab

![Hepta Slab](./font-family.png)

This font family contains [9 styles](#-gallery).

- `HeptaSlab_100Thin`
- `HeptaSlab_200ExtraLight`
- `HeptaSlab_300Light`
- `HeptaSlab_400Regular`
- `HeptaSlab_500Medium`
- `HeptaSlab_600SemiBold`
- `HeptaSlab_700Bold`
- `HeptaSlab_800ExtraBold`
- `HeptaSlab_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/hepta-slab expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  HeptaSlab_100Thin,
  HeptaSlab_200ExtraLight,
  HeptaSlab_300Light,
  HeptaSlab_400Regular,
  HeptaSlab_500Medium,
  HeptaSlab_600SemiBold,
  HeptaSlab_700Bold,
  HeptaSlab_800ExtraBold,
  HeptaSlab_900Black,
} from '@expo-google-fonts/hepta-slab';

export default () => {
  let [fontsLoaded] = useFonts({
    HeptaSlab_100Thin,
    HeptaSlab_200ExtraLight,
    HeptaSlab_300Light,
    HeptaSlab_400Regular,
    HeptaSlab_500Medium,
    HeptaSlab_600SemiBold,
    HeptaSlab_700Bold,
    HeptaSlab_800ExtraBold,
    HeptaSlab_900Black,
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
            fontFamily: 'HeptaSlab_100Thin',
          }}>
          Hepta Slab Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_200ExtraLight',
          }}>
          Hepta Slab Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_300Light',
          }}>
          Hepta Slab Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_400Regular',
          }}>
          Hepta Slab Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_500Medium',
          }}>
          Hepta Slab Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_600SemiBold',
          }}>
          Hepta Slab Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_700Bold',
          }}>
          Hepta Slab Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_800ExtraBold',
          }}>
          Hepta Slab Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'HeptaSlab_900Black',
          }}>
          Hepta Slab Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![HeptaSlab_100Thin](./HeptaSlab_100Thin.ttf.png)|![HeptaSlab_200ExtraLight](./HeptaSlab_200ExtraLight.ttf.png)|![HeptaSlab_300Light](./HeptaSlab_300Light.ttf.png)||
|![HeptaSlab_400Regular](./HeptaSlab_400Regular.ttf.png)|![HeptaSlab_500Medium](./HeptaSlab_500Medium.ttf.png)|![HeptaSlab_600SemiBold](./HeptaSlab_600SemiBold.ttf.png)||
|![HeptaSlab_700Bold](./HeptaSlab_700Bold.ttf.png)|![HeptaSlab_800ExtraBold](./HeptaSlab_800ExtraBold.ttf.png)|![HeptaSlab_900Black](./HeptaSlab_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/hepta-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hepta Slab page on Google Fonts](https://fonts.google.com/specimen/Hepta+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hepta Slab on Google Fonts](https://fonts.google.com/specimen/Hepta+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hepta-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hepta-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
