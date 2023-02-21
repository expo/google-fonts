# @expo-google-fonts/genos

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/genos)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/genos)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/genos)

This package lets you use the [**Genos**](https://fonts.google.com/specimen/Genos) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Genos

![Genos](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Genos_100Thin`
- `Genos_200ExtraLight`
- `Genos_300Light`
- `Genos_400Regular`
- `Genos_500Medium`
- `Genos_600SemiBold`
- `Genos_700Bold`
- `Genos_800ExtraBold`
- `Genos_900Black`
- `Genos_100Thin_Italic`
- `Genos_200ExtraLight_Italic`
- `Genos_300Light_Italic`
- `Genos_400Regular_Italic`
- `Genos_500Medium_Italic`
- `Genos_600SemiBold_Italic`
- `Genos_700Bold_Italic`
- `Genos_800ExtraBold_Italic`
- `Genos_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/genos expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Genos_100Thin,
  Genos_200ExtraLight,
  Genos_300Light,
  Genos_400Regular,
  Genos_500Medium,
  Genos_600SemiBold,
  Genos_700Bold,
  Genos_800ExtraBold,
  Genos_900Black,
  Genos_100Thin_Italic,
  Genos_200ExtraLight_Italic,
  Genos_300Light_Italic,
  Genos_400Regular_Italic,
  Genos_500Medium_Italic,
  Genos_600SemiBold_Italic,
  Genos_700Bold_Italic,
  Genos_800ExtraBold_Italic,
  Genos_900Black_Italic,
} from '@expo-google-fonts/genos';

export default () => {
  let [fontsLoaded] = useFonts({
    Genos_100Thin,
    Genos_200ExtraLight,
    Genos_300Light,
    Genos_400Regular,
    Genos_500Medium,
    Genos_600SemiBold,
    Genos_700Bold,
    Genos_800ExtraBold,
    Genos_900Black,
    Genos_100Thin_Italic,
    Genos_200ExtraLight_Italic,
    Genos_300Light_Italic,
    Genos_400Regular_Italic,
    Genos_500Medium_Italic,
    Genos_600SemiBold_Italic,
    Genos_700Bold_Italic,
    Genos_800ExtraBold_Italic,
    Genos_900Black_Italic,
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
            fontFamily: 'Genos_100Thin',
          }}>
          Genos Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_200ExtraLight',
          }}>
          Genos Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_300Light',
          }}>
          Genos Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_400Regular',
          }}>
          Genos Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_500Medium',
          }}>
          Genos Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_600SemiBold',
          }}>
          Genos Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_700Bold',
          }}>
          Genos Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_800ExtraBold',
          }}>
          Genos Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_900Black',
          }}>
          Genos Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_100Thin_Italic',
          }}>
          Genos Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_200ExtraLight_Italic',
          }}>
          Genos Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_300Light_Italic',
          }}>
          Genos Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_400Regular_Italic',
          }}>
          Genos Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_500Medium_Italic',
          }}>
          Genos Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_600SemiBold_Italic',
          }}>
          Genos Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_700Bold_Italic',
          }}>
          Genos Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_800ExtraBold_Italic',
          }}>
          Genos Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Genos_900Black_Italic',
          }}>
          Genos Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Genos_100Thin](./Genos_100Thin.ttf.png)|![Genos_200ExtraLight](./Genos_200ExtraLight.ttf.png)|![Genos_300Light](./Genos_300Light.ttf.png)||
|![Genos_400Regular](./Genos_400Regular.ttf.png)|![Genos_500Medium](./Genos_500Medium.ttf.png)|![Genos_600SemiBold](./Genos_600SemiBold.ttf.png)||
|![Genos_700Bold](./Genos_700Bold.ttf.png)|![Genos_800ExtraBold](./Genos_800ExtraBold.ttf.png)|![Genos_900Black](./Genos_900Black.ttf.png)||
|![Genos_100Thin_Italic](./Genos_100Thin_Italic.ttf.png)|![Genos_200ExtraLight_Italic](./Genos_200ExtraLight_Italic.ttf.png)|![Genos_300Light_Italic](./Genos_300Light_Italic.ttf.png)||
|![Genos_400Regular_Italic](./Genos_400Regular_Italic.ttf.png)|![Genos_500Medium_Italic](./Genos_500Medium_Italic.ttf.png)|![Genos_600SemiBold_Italic](./Genos_600SemiBold_Italic.ttf.png)||
|![Genos_700Bold_Italic](./Genos_700Bold_Italic.ttf.png)|![Genos_800ExtraBold_Italic](./Genos_800ExtraBold_Italic.ttf.png)|![Genos_900Black_Italic](./Genos_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/genos` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Genos page on Google Fonts](https://fonts.google.com/specimen/Genos) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Genos on Google Fonts](https://fonts.google.com/specimen/Genos)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/genos)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/genos)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
