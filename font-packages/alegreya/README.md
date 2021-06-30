# @expo-google-fonts/alegreya

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alegreya)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alegreya)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alegreya)

This package lets you use the [**Alegreya**](https://fonts.google.com/specimen/Alegreya) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alegreya

![Alegreya](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Alegreya_400Regular`
- `Alegreya_500Medium`
- `Alegreya_600SemiBold`
- `Alegreya_700Bold`
- `Alegreya_800ExtraBold`
- `Alegreya_900Black`
- `Alegreya_400Regular_Italic`
- `Alegreya_500Medium_Italic`
- `Alegreya_600SemiBold_Italic`
- `Alegreya_700Bold_Italic`
- `Alegreya_800ExtraBold_Italic`
- `Alegreya_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/alegreya expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Alegreya_400Regular,
  Alegreya_500Medium,
  Alegreya_600SemiBold,
  Alegreya_700Bold,
  Alegreya_800ExtraBold,
  Alegreya_900Black,
  Alegreya_400Regular_Italic,
  Alegreya_500Medium_Italic,
  Alegreya_600SemiBold_Italic,
  Alegreya_700Bold_Italic,
  Alegreya_800ExtraBold_Italic,
  Alegreya_900Black_Italic,
} from '@expo-google-fonts/alegreya';

export default () => {
  let [fontsLoaded] = useFonts({
    Alegreya_400Regular,
    Alegreya_500Medium,
    Alegreya_600SemiBold,
    Alegreya_700Bold,
    Alegreya_800ExtraBold,
    Alegreya_900Black,
    Alegreya_400Regular_Italic,
    Alegreya_500Medium_Italic,
    Alegreya_600SemiBold_Italic,
    Alegreya_700Bold_Italic,
    Alegreya_800ExtraBold_Italic,
    Alegreya_900Black_Italic,
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
            fontFamily: 'Alegreya_400Regular',
          }}>
          Alegreya Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_500Medium',
          }}>
          Alegreya Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_600SemiBold',
          }}>
          Alegreya Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_700Bold',
          }}>
          Alegreya Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_800ExtraBold',
          }}>
          Alegreya Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_900Black',
          }}>
          Alegreya Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_400Regular_Italic',
          }}>
          Alegreya Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_500Medium_Italic',
          }}>
          Alegreya Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_600SemiBold_Italic',
          }}>
          Alegreya Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_700Bold_Italic',
          }}>
          Alegreya Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_800ExtraBold_Italic',
          }}>
          Alegreya Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Alegreya_900Black_Italic',
          }}>
          Alegreya Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Alegreya_400Regular](./Alegreya_400Regular.ttf.png)|![Alegreya_500Medium](./Alegreya_500Medium.ttf.png)|![Alegreya_600SemiBold](./Alegreya_600SemiBold.ttf.png)||
|![Alegreya_700Bold](./Alegreya_700Bold.ttf.png)|![Alegreya_800ExtraBold](./Alegreya_800ExtraBold.ttf.png)|![Alegreya_900Black](./Alegreya_900Black.ttf.png)||
|![Alegreya_400Regular_Italic](./Alegreya_400Regular_Italic.ttf.png)|![Alegreya_500Medium_Italic](./Alegreya_500Medium_Italic.ttf.png)|![Alegreya_600SemiBold_Italic](./Alegreya_600SemiBold_Italic.ttf.png)||
|![Alegreya_700Bold_Italic](./Alegreya_700Bold_Italic.ttf.png)|![Alegreya_800ExtraBold_Italic](./Alegreya_800ExtraBold_Italic.ttf.png)|![Alegreya_900Black_Italic](./Alegreya_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/alegreya` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alegreya page on Google Fonts](https://fonts.google.com/specimen/Alegreya) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alegreya on Google Fonts](https://fonts.google.com/specimen/Alegreya)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
