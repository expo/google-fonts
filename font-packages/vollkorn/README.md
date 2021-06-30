# @expo-google-fonts/vollkorn

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/vollkorn)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/vollkorn)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/vollkorn)

This package lets you use the [**Vollkorn**](https://fonts.google.com/specimen/Vollkorn) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Vollkorn

![Vollkorn](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Vollkorn_400Regular`
- `Vollkorn_500Medium`
- `Vollkorn_600SemiBold`
- `Vollkorn_700Bold`
- `Vollkorn_800ExtraBold`
- `Vollkorn_900Black`
- `Vollkorn_400Regular_Italic`
- `Vollkorn_500Medium_Italic`
- `Vollkorn_600SemiBold_Italic`
- `Vollkorn_700Bold_Italic`
- `Vollkorn_800ExtraBold_Italic`
- `Vollkorn_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/vollkorn expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Vollkorn_400Regular,
  Vollkorn_500Medium,
  Vollkorn_600SemiBold,
  Vollkorn_700Bold,
  Vollkorn_800ExtraBold,
  Vollkorn_900Black,
  Vollkorn_400Regular_Italic,
  Vollkorn_500Medium_Italic,
  Vollkorn_600SemiBold_Italic,
  Vollkorn_700Bold_Italic,
  Vollkorn_800ExtraBold_Italic,
  Vollkorn_900Black_Italic,
} from '@expo-google-fonts/vollkorn';

export default () => {
  let [fontsLoaded] = useFonts({
    Vollkorn_400Regular,
    Vollkorn_500Medium,
    Vollkorn_600SemiBold,
    Vollkorn_700Bold,
    Vollkorn_800ExtraBold,
    Vollkorn_900Black,
    Vollkorn_400Regular_Italic,
    Vollkorn_500Medium_Italic,
    Vollkorn_600SemiBold_Italic,
    Vollkorn_700Bold_Italic,
    Vollkorn_800ExtraBold_Italic,
    Vollkorn_900Black_Italic,
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
            fontFamily: 'Vollkorn_400Regular',
          }}>
          Vollkorn Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_500Medium',
          }}>
          Vollkorn Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_600SemiBold',
          }}>
          Vollkorn Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_700Bold',
          }}>
          Vollkorn Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_800ExtraBold',
          }}>
          Vollkorn Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_900Black',
          }}>
          Vollkorn Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_400Regular_Italic',
          }}>
          Vollkorn Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_500Medium_Italic',
          }}>
          Vollkorn Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_600SemiBold_Italic',
          }}>
          Vollkorn Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_700Bold_Italic',
          }}>
          Vollkorn Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_800ExtraBold_Italic',
          }}>
          Vollkorn Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Vollkorn_900Black_Italic',
          }}>
          Vollkorn Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Vollkorn_400Regular](./Vollkorn_400Regular.ttf.png)|![Vollkorn_500Medium](./Vollkorn_500Medium.ttf.png)|![Vollkorn_600SemiBold](./Vollkorn_600SemiBold.ttf.png)||
|![Vollkorn_700Bold](./Vollkorn_700Bold.ttf.png)|![Vollkorn_800ExtraBold](./Vollkorn_800ExtraBold.ttf.png)|![Vollkorn_900Black](./Vollkorn_900Black.ttf.png)||
|![Vollkorn_400Regular_Italic](./Vollkorn_400Regular_Italic.ttf.png)|![Vollkorn_500Medium_Italic](./Vollkorn_500Medium_Italic.ttf.png)|![Vollkorn_600SemiBold_Italic](./Vollkorn_600SemiBold_Italic.ttf.png)||
|![Vollkorn_700Bold_Italic](./Vollkorn_700Bold_Italic.ttf.png)|![Vollkorn_800ExtraBold_Italic](./Vollkorn_800ExtraBold_Italic.ttf.png)|![Vollkorn_900Black_Italic](./Vollkorn_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/vollkorn` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Vollkorn page on Google Fonts](https://fonts.google.com/specimen/Vollkorn) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Vollkorn on Google Fonts](https://fonts.google.com/specimen/Vollkorn)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/vollkorn)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/vollkorn)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
