# @expo-google-fonts/roboto

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto)

This package lets you use the [**Roboto**](https://fonts.google.com/specimen/Roboto) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Roboto

![Roboto](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Roboto_100Thin`
- `Roboto_100Thin_Italic`
- `Roboto_300Light`
- `Roboto_300Light_Italic`
- `Roboto_400Regular`
- `Roboto_400Regular_Italic`
- `Roboto_500Medium`
- `Roboto_500Medium_Italic`
- `Roboto_700Bold`
- `Roboto_700Bold_Italic`
- `Roboto_900Black`
- `Roboto_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/roboto expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

export default () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
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
            fontFamily: 'Roboto_100Thin',
          }}>
          Roboto Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_100Thin_Italic',
          }}>
          Roboto Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_300Light',
          }}>
          Roboto Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_300Light_Italic',
          }}>
          Roboto Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_400Regular',
          }}>
          Roboto Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_400Regular_Italic',
          }}>
          Roboto Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_500Medium',
          }}>
          Roboto Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_500Medium_Italic',
          }}>
          Roboto Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_700Bold',
          }}>
          Roboto Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_700Bold_Italic',
          }}>
          Roboto Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_900Black',
          }}>
          Roboto Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Roboto_900Black_Italic',
          }}>
          Roboto Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Roboto_100Thin](./Roboto_100Thin.ttf.png)|![Roboto_100Thin_Italic](./Roboto_100Thin_Italic.ttf.png)|![Roboto_300Light](./Roboto_300Light.ttf.png)||
|![Roboto_300Light_Italic](./Roboto_300Light_Italic.ttf.png)|![Roboto_400Regular](./Roboto_400Regular.ttf.png)|![Roboto_400Regular_Italic](./Roboto_400Regular_Italic.ttf.png)||
|![Roboto_500Medium](./Roboto_500Medium.ttf.png)|![Roboto_500Medium_Italic](./Roboto_500Medium_Italic.ttf.png)|![Roboto_700Bold](./Roboto_700Bold.ttf.png)||
|![Roboto_700Bold_Italic](./Roboto_700Bold_Italic.ttf.png)|![Roboto_900Black](./Roboto_900Black.ttf.png)|![Roboto_900Black_Italic](./Roboto_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/roboto` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto page on Google Fonts](https://fonts.google.com/specimen/Roboto) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto on Google Fonts](https://fonts.google.com/specimen/Roboto)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
