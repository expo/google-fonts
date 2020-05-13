# @expo-google-fonts/baloo-tamma-2

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baloo-tamma-2)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baloo-tamma-2)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baloo-tamma-2)

This package lets you use the [**Baloo Tamma 2**](https://fonts.google.com/specimen/Baloo+Tamma+2) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Baloo Tamma 2

![Baloo Tamma 2](./font-family.png)

This font family contains [5 styles](#-gallery).

- `BalooTamma2_400Regular`
- `BalooTamma2_500Medium`
- `BalooTamma2_600SemiBold`
- `BalooTamma2_700Bold`
- `BalooTamma2_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/baloo-tamma-2 expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BalooTamma2_400Regular,
  BalooTamma2_500Medium,
  BalooTamma2_600SemiBold,
  BalooTamma2_700Bold,
  BalooTamma2_800ExtraBold,
} from '@expo-google-fonts/baloo-tamma-2';

export default () => {
  let [fontsLoaded] = useFonts({
    BalooTamma2_400Regular,
    BalooTamma2_500Medium,
    BalooTamma2_600SemiBold,
    BalooTamma2_700Bold,
    BalooTamma2_800ExtraBold,
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
            fontFamily: 'BalooTamma2_400Regular',
          }}>
          Baloo Tamma 2 Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BalooTamma2_500Medium',
          }}>
          Baloo Tamma 2 Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BalooTamma2_600SemiBold',
          }}>
          Baloo Tamma 2 Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BalooTamma2_700Bold',
          }}>
          Baloo Tamma 2 Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BalooTamma2_800ExtraBold',
          }}>
          Baloo Tamma 2 Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BalooTamma2_400Regular](./BalooTamma2_400Regular.ttf.png)|![BalooTamma2_500Medium](./BalooTamma2_500Medium.ttf.png)|![BalooTamma2_600SemiBold](./BalooTamma2_600SemiBold.ttf.png)||
|![BalooTamma2_700Bold](./BalooTamma2_700Bold.ttf.png)|![BalooTamma2_800ExtraBold](./BalooTamma2_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/baloo-tamma-2` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baloo Tamma 2 page on Google Fonts](https://fonts.google.com/specimen/Baloo+Tamma+2) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baloo Tamma 2 on Google Fonts](https://fonts.google.com/specimen/Baloo+Tamma+2)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baloo-tamma-2)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baloo-tamma-2)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
