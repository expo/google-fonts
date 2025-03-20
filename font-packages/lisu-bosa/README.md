# @expo-google-fonts/lisu-bosa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lisu-bosa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lisu-bosa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lisu-bosa)

This package lets you use the [**Lisu Bosa**](https://fonts.google.com/specimen/Lisu+Bosa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lisu Bosa

![Lisu Bosa](./font-family.png)

This font family contains [16 styles](#-gallery).

- `LisuBosa_200ExtraLight`
- `LisuBosa_200ExtraLight_Italic`
- `LisuBosa_300Light`
- `LisuBosa_300Light_Italic`
- `LisuBosa_400Regular`
- `LisuBosa_400Regular_Italic`
- `LisuBosa_500Medium`
- `LisuBosa_500Medium_Italic`
- `LisuBosa_600SemiBold`
- `LisuBosa_600SemiBold_Italic`
- `LisuBosa_700Bold`
- `LisuBosa_700Bold_Italic`
- `LisuBosa_800ExtraBold`
- `LisuBosa_800ExtraBold_Italic`
- `LisuBosa_900Black`
- `LisuBosa_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lisu-bosa expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  LisuBosa_200ExtraLight,
  LisuBosa_200ExtraLight_Italic,
  LisuBosa_300Light,
  LisuBosa_300Light_Italic,
  LisuBosa_400Regular,
  LisuBosa_400Regular_Italic,
  LisuBosa_500Medium,
  LisuBosa_500Medium_Italic,
  LisuBosa_600SemiBold,
  LisuBosa_600SemiBold_Italic,
  LisuBosa_700Bold,
  LisuBosa_700Bold_Italic,
  LisuBosa_800ExtraBold,
  LisuBosa_800ExtraBold_Italic,
  LisuBosa_900Black,
  LisuBosa_900Black_Italic,
} from '@expo-google-fonts/lisu-bosa';

export default () => {
  let [fontsLoaded] = useFonts({
    LisuBosa_200ExtraLight,
    LisuBosa_200ExtraLight_Italic,
    LisuBosa_300Light,
    LisuBosa_300Light_Italic,
    LisuBosa_400Regular,
    LisuBosa_400Regular_Italic,
    LisuBosa_500Medium,
    LisuBosa_500Medium_Italic,
    LisuBosa_600SemiBold,
    LisuBosa_600SemiBold_Italic,
    LisuBosa_700Bold,
    LisuBosa_700Bold_Italic,
    LisuBosa_800ExtraBold,
    LisuBosa_800ExtraBold_Italic,
    LisuBosa_900Black,
    LisuBosa_900Black_Italic,
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
            fontFamily: 'LisuBosa_200ExtraLight',
          }}>
          Lisu Bosa Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_200ExtraLight_Italic',
          }}>
          Lisu Bosa Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_300Light',
          }}>
          Lisu Bosa Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_300Light_Italic',
          }}>
          Lisu Bosa Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_400Regular',
          }}>
          Lisu Bosa Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_400Regular_Italic',
          }}>
          Lisu Bosa Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_500Medium',
          }}>
          Lisu Bosa Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_500Medium_Italic',
          }}>
          Lisu Bosa Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_600SemiBold',
          }}>
          Lisu Bosa Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_600SemiBold_Italic',
          }}>
          Lisu Bosa Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_700Bold',
          }}>
          Lisu Bosa Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_700Bold_Italic',
          }}>
          Lisu Bosa Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_800ExtraBold',
          }}>
          Lisu Bosa Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_800ExtraBold_Italic',
          }}>
          Lisu Bosa Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_900Black',
          }}>
          Lisu Bosa Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LisuBosa_900Black_Italic',
          }}>
          Lisu Bosa Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LisuBosa_200ExtraLight](./LisuBosa_200ExtraLight.ttf.png)|![LisuBosa_200ExtraLight_Italic](./LisuBosa_200ExtraLight_Italic.ttf.png)|![LisuBosa_300Light](./LisuBosa_300Light.ttf.png)||
|![LisuBosa_300Light_Italic](./LisuBosa_300Light_Italic.ttf.png)|![LisuBosa_400Regular](./LisuBosa_400Regular.ttf.png)|![LisuBosa_400Regular_Italic](./LisuBosa_400Regular_Italic.ttf.png)||
|![LisuBosa_500Medium](./LisuBosa_500Medium.ttf.png)|![LisuBosa_500Medium_Italic](./LisuBosa_500Medium_Italic.ttf.png)|![LisuBosa_600SemiBold](./LisuBosa_600SemiBold.ttf.png)||
|![LisuBosa_600SemiBold_Italic](./LisuBosa_600SemiBold_Italic.ttf.png)|![LisuBosa_700Bold](./LisuBosa_700Bold.ttf.png)|![LisuBosa_700Bold_Italic](./LisuBosa_700Bold_Italic.ttf.png)||
|![LisuBosa_800ExtraBold](./LisuBosa_800ExtraBold.ttf.png)|![LisuBosa_800ExtraBold_Italic](./LisuBosa_800ExtraBold_Italic.ttf.png)|![LisuBosa_900Black](./LisuBosa_900Black.ttf.png)||
|![LisuBosa_900Black_Italic](./LisuBosa_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lisu-bosa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lisu Bosa page on Google Fonts](https://fonts.google.com/specimen/Lisu+Bosa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lisu Bosa on Google Fonts](https://fonts.google.com/specimen/Lisu+Bosa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lisu-bosa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lisu-bosa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
