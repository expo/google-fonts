# @expo-google-fonts/eczar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/eczar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/eczar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/eczar)

This package lets you use the [**Eczar**](https://fonts.google.com/specimen/Eczar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Eczar

![Eczar](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Eczar_400Regular`
- `Eczar_500Medium`
- `Eczar_600SemiBold`
- `Eczar_700Bold`
- `Eczar_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/eczar expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Eczar_400Regular,
  Eczar_500Medium,
  Eczar_600SemiBold,
  Eczar_700Bold,
  Eczar_800ExtraBold,
} from '@expo-google-fonts/eczar';

export default () => {
  let [fontsLoaded] = useFonts({
    Eczar_400Regular,
    Eczar_500Medium,
    Eczar_600SemiBold,
    Eczar_700Bold,
    Eczar_800ExtraBold,
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
            fontFamily: 'Eczar_400Regular',
          }}>
          Eczar Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Eczar_500Medium',
          }}>
          Eczar Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Eczar_600SemiBold',
          }}>
          Eczar Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Eczar_700Bold',
          }}>
          Eczar Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Eczar_800ExtraBold',
          }}>
          Eczar Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Eczar_400Regular](./Eczar_400Regular.ttf.png)|![Eczar_500Medium](./Eczar_500Medium.ttf.png)|![Eczar_600SemiBold](./Eczar_600SemiBold.ttf.png)||
|![Eczar_700Bold](./Eczar_700Bold.ttf.png)|![Eczar_800ExtraBold](./Eczar_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/eczar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Eczar page on Google Fonts](https://fonts.google.com/specimen/Eczar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Eczar on Google Fonts](https://fonts.google.com/specimen/Eczar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/eczar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/eczar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
