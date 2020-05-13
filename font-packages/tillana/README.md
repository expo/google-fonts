# @expo-google-fonts/tillana

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tillana)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tillana)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tillana)

This package lets you use the [**Tillana**](https://fonts.google.com/specimen/Tillana) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tillana

![Tillana](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Tillana_400Regular`
- `Tillana_500Medium`
- `Tillana_600SemiBold`
- `Tillana_700Bold`
- `Tillana_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tillana expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Tillana_400Regular,
  Tillana_500Medium,
  Tillana_600SemiBold,
  Tillana_700Bold,
  Tillana_800ExtraBold,
} from '@expo-google-fonts/tillana';

export default () => {
  let [fontsLoaded] = useFonts({
    Tillana_400Regular,
    Tillana_500Medium,
    Tillana_600SemiBold,
    Tillana_700Bold,
    Tillana_800ExtraBold,
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
            fontFamily: 'Tillana_400Regular',
          }}>
          Tillana Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tillana_500Medium',
          }}>
          Tillana Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tillana_600SemiBold',
          }}>
          Tillana Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tillana_700Bold',
          }}>
          Tillana Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tillana_800ExtraBold',
          }}>
          Tillana Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Tillana_400Regular](./Tillana_400Regular.ttf.png)|![Tillana_500Medium](./Tillana_500Medium.ttf.png)|![Tillana_600SemiBold](./Tillana_600SemiBold.ttf.png)||
|![Tillana_700Bold](./Tillana_700Bold.ttf.png)|![Tillana_800ExtraBold](./Tillana_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tillana` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tillana page on Google Fonts](https://fonts.google.com/specimen/Tillana) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tillana on Google Fonts](https://fonts.google.com/specimen/Tillana)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tillana)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tillana)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
