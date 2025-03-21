# @expo-google-fonts/faustina

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/faustina)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/faustina)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/faustina)

This package lets you use the [**Faustina**](https://fonts.google.com/specimen/Faustina) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Faustina

![Faustina](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Faustina_300Light`
- `Faustina_400Regular`
- `Faustina_500Medium`
- `Faustina_600SemiBold`
- `Faustina_700Bold`
- `Faustina_800ExtraBold`
- `Faustina_300Light_Italic`
- `Faustina_400Regular_Italic`
- `Faustina_500Medium_Italic`
- `Faustina_600SemiBold_Italic`
- `Faustina_700Bold_Italic`
- `Faustina_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/faustina expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Faustina_300Light,
  Faustina_400Regular,
  Faustina_500Medium,
  Faustina_600SemiBold,
  Faustina_700Bold,
  Faustina_800ExtraBold,
  Faustina_300Light_Italic,
  Faustina_400Regular_Italic,
  Faustina_500Medium_Italic,
  Faustina_600SemiBold_Italic,
  Faustina_700Bold_Italic,
  Faustina_800ExtraBold_Italic,
} from '@expo-google-fonts/faustina';

export default () => {
  let [fontsLoaded] = useFonts({
    Faustina_300Light,
    Faustina_400Regular,
    Faustina_500Medium,
    Faustina_600SemiBold,
    Faustina_700Bold,
    Faustina_800ExtraBold,
    Faustina_300Light_Italic,
    Faustina_400Regular_Italic,
    Faustina_500Medium_Italic,
    Faustina_600SemiBold_Italic,
    Faustina_700Bold_Italic,
    Faustina_800ExtraBold_Italic,
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
            fontFamily: 'Faustina_300Light',
          }}>
          Faustina Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_400Regular',
          }}>
          Faustina Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_500Medium',
          }}>
          Faustina Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_600SemiBold',
          }}>
          Faustina Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_700Bold',
          }}>
          Faustina Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_800ExtraBold',
          }}>
          Faustina Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_300Light_Italic',
          }}>
          Faustina Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_400Regular_Italic',
          }}>
          Faustina Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_500Medium_Italic',
          }}>
          Faustina Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_600SemiBold_Italic',
          }}>
          Faustina Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_700Bold_Italic',
          }}>
          Faustina Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Faustina_800ExtraBold_Italic',
          }}>
          Faustina Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Faustina_300Light](./Faustina_300Light.ttf.png)|![Faustina_400Regular](./Faustina_400Regular.ttf.png)|![Faustina_500Medium](./Faustina_500Medium.ttf.png)||
|![Faustina_600SemiBold](./Faustina_600SemiBold.ttf.png)|![Faustina_700Bold](./Faustina_700Bold.ttf.png)|![Faustina_800ExtraBold](./Faustina_800ExtraBold.ttf.png)||
|![Faustina_300Light_Italic](./Faustina_300Light_Italic.ttf.png)|![Faustina_400Regular_Italic](./Faustina_400Regular_Italic.ttf.png)|![Faustina_500Medium_Italic](./Faustina_500Medium_Italic.ttf.png)||
|![Faustina_600SemiBold_Italic](./Faustina_600SemiBold_Italic.ttf.png)|![Faustina_700Bold_Italic](./Faustina_700Bold_Italic.ttf.png)|![Faustina_800ExtraBold_Italic](./Faustina_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/faustina` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Faustina page on Google Fonts](https://fonts.google.com/specimen/Faustina) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Faustina on Google Fonts](https://fonts.google.com/specimen/Faustina)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/faustina)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/faustina)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
