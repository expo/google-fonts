# @expo-google-fonts/asap-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/asap-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/asap-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/asap-condensed)

This package lets you use the [**Asap Condensed**](https://fonts.google.com/specimen/Asap+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Asap Condensed

![Asap Condensed](./font-family.png)

This font family contains [16 styles](#-gallery).

- `AsapCondensed_200ExtraLight`
- `AsapCondensed_200ExtraLight_Italic`
- `AsapCondensed_300Light`
- `AsapCondensed_300Light_Italic`
- `AsapCondensed_400Regular`
- `AsapCondensed_400Regular_Italic`
- `AsapCondensed_500Medium`
- `AsapCondensed_500Medium_Italic`
- `AsapCondensed_600SemiBold`
- `AsapCondensed_600SemiBold_Italic`
- `AsapCondensed_700Bold`
- `AsapCondensed_700Bold_Italic`
- `AsapCondensed_800ExtraBold`
- `AsapCondensed_800ExtraBold_Italic`
- `AsapCondensed_900Black`
- `AsapCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/asap-condensed expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AsapCondensed_200ExtraLight,
  AsapCondensed_200ExtraLight_Italic,
  AsapCondensed_300Light,
  AsapCondensed_300Light_Italic,
  AsapCondensed_400Regular,
  AsapCondensed_400Regular_Italic,
  AsapCondensed_500Medium,
  AsapCondensed_500Medium_Italic,
  AsapCondensed_600SemiBold,
  AsapCondensed_600SemiBold_Italic,
  AsapCondensed_700Bold,
  AsapCondensed_700Bold_Italic,
  AsapCondensed_800ExtraBold,
  AsapCondensed_800ExtraBold_Italic,
  AsapCondensed_900Black,
  AsapCondensed_900Black_Italic,
} from '@expo-google-fonts/asap-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    AsapCondensed_200ExtraLight,
    AsapCondensed_200ExtraLight_Italic,
    AsapCondensed_300Light,
    AsapCondensed_300Light_Italic,
    AsapCondensed_400Regular,
    AsapCondensed_400Regular_Italic,
    AsapCondensed_500Medium,
    AsapCondensed_500Medium_Italic,
    AsapCondensed_600SemiBold,
    AsapCondensed_600SemiBold_Italic,
    AsapCondensed_700Bold,
    AsapCondensed_700Bold_Italic,
    AsapCondensed_800ExtraBold,
    AsapCondensed_800ExtraBold_Italic,
    AsapCondensed_900Black,
    AsapCondensed_900Black_Italic,
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
            fontFamily: 'AsapCondensed_200ExtraLight',
          }}>
          Asap Condensed Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_200ExtraLight_Italic',
          }}>
          Asap Condensed Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_300Light',
          }}>
          Asap Condensed Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_300Light_Italic',
          }}>
          Asap Condensed Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_400Regular',
          }}>
          Asap Condensed Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_400Regular_Italic',
          }}>
          Asap Condensed Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_500Medium',
          }}>
          Asap Condensed Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_500Medium_Italic',
          }}>
          Asap Condensed Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_600SemiBold',
          }}>
          Asap Condensed Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_600SemiBold_Italic',
          }}>
          Asap Condensed Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_700Bold',
          }}>
          Asap Condensed Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_700Bold_Italic',
          }}>
          Asap Condensed Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_800ExtraBold',
          }}>
          Asap Condensed Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_800ExtraBold_Italic',
          }}>
          Asap Condensed Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_900Black',
          }}>
          Asap Condensed Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AsapCondensed_900Black_Italic',
          }}>
          Asap Condensed Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![AsapCondensed_200ExtraLight](./AsapCondensed_200ExtraLight.ttf.png)|![AsapCondensed_200ExtraLight_Italic](./AsapCondensed_200ExtraLight_Italic.ttf.png)|![AsapCondensed_300Light](./AsapCondensed_300Light.ttf.png)||
|![AsapCondensed_300Light_Italic](./AsapCondensed_300Light_Italic.ttf.png)|![AsapCondensed_400Regular](./AsapCondensed_400Regular.ttf.png)|![AsapCondensed_400Regular_Italic](./AsapCondensed_400Regular_Italic.ttf.png)||
|![AsapCondensed_500Medium](./AsapCondensed_500Medium.ttf.png)|![AsapCondensed_500Medium_Italic](./AsapCondensed_500Medium_Italic.ttf.png)|![AsapCondensed_600SemiBold](./AsapCondensed_600SemiBold.ttf.png)||
|![AsapCondensed_600SemiBold_Italic](./AsapCondensed_600SemiBold_Italic.ttf.png)|![AsapCondensed_700Bold](./AsapCondensed_700Bold.ttf.png)|![AsapCondensed_700Bold_Italic](./AsapCondensed_700Bold_Italic.ttf.png)||
|![AsapCondensed_800ExtraBold](./AsapCondensed_800ExtraBold.ttf.png)|![AsapCondensed_800ExtraBold_Italic](./AsapCondensed_800ExtraBold_Italic.ttf.png)|![AsapCondensed_900Black](./AsapCondensed_900Black.ttf.png)||
|![AsapCondensed_900Black_Italic](./AsapCondensed_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/asap-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Asap Condensed page on Google Fonts](https://fonts.google.com/specimen/Asap+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Asap Condensed on Google Fonts](https://fonts.google.com/specimen/Asap+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/asap-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/asap-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
