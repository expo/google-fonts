# @expo-google-fonts/cormorant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant)

This package lets you use the [**Cormorant**](https://fonts.google.com/specimen/Cormorant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cormorant

![Cormorant](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Cormorant_300Light`
- `Cormorant_300Light_Italic`
- `Cormorant_400Regular`
- `Cormorant_400Regular_Italic`
- `Cormorant_500Medium`
- `Cormorant_500Medium_Italic`
- `Cormorant_600SemiBold`
- `Cormorant_600SemiBold_Italic`
- `Cormorant_700Bold`
- `Cormorant_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cormorant expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Cormorant_300Light,
  Cormorant_300Light_Italic,
  Cormorant_400Regular,
  Cormorant_400Regular_Italic,
  Cormorant_500Medium,
  Cormorant_500Medium_Italic,
  Cormorant_600SemiBold,
  Cormorant_600SemiBold_Italic,
  Cormorant_700Bold,
  Cormorant_700Bold_Italic,
} from '@expo-google-fonts/cormorant';

export default () => {
  let [fontsLoaded] = useFonts({
    Cormorant_300Light,
    Cormorant_300Light_Italic,
    Cormorant_400Regular,
    Cormorant_400Regular_Italic,
    Cormorant_500Medium,
    Cormorant_500Medium_Italic,
    Cormorant_600SemiBold,
    Cormorant_600SemiBold_Italic,
    Cormorant_700Bold,
    Cormorant_700Bold_Italic,
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
            fontFamily: 'Cormorant_300Light',
          }}>
          Cormorant Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_300Light_Italic',
          }}>
          Cormorant Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_400Regular',
          }}>
          Cormorant Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_400Regular_Italic',
          }}>
          Cormorant Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_500Medium',
          }}>
          Cormorant Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_500Medium_Italic',
          }}>
          Cormorant Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_600SemiBold',
          }}>
          Cormorant Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_600SemiBold_Italic',
          }}>
          Cormorant Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_700Bold',
          }}>
          Cormorant Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cormorant_700Bold_Italic',
          }}>
          Cormorant Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Cormorant_300Light](./Cormorant_300Light.ttf.png)|![Cormorant_300Light_Italic](./Cormorant_300Light_Italic.ttf.png)|![Cormorant_400Regular](./Cormorant_400Regular.ttf.png)||
|![Cormorant_400Regular_Italic](./Cormorant_400Regular_Italic.ttf.png)|![Cormorant_500Medium](./Cormorant_500Medium.ttf.png)|![Cormorant_500Medium_Italic](./Cormorant_500Medium_Italic.ttf.png)||
|![Cormorant_600SemiBold](./Cormorant_600SemiBold.ttf.png)|![Cormorant_600SemiBold_Italic](./Cormorant_600SemiBold_Italic.ttf.png)|![Cormorant_700Bold](./Cormorant_700Bold.ttf.png)||
|![Cormorant_700Bold_Italic](./Cormorant_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cormorant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant page on Google Fonts](https://fonts.google.com/specimen/Cormorant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant on Google Fonts](https://fonts.google.com/specimen/Cormorant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
