# @expo-google-fonts/prompt

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/prompt)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/prompt)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/prompt)

This package lets you use the [**Prompt**](https://fonts.google.com/specimen/Prompt) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Prompt

![Prompt](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Prompt_100Thin`
- `Prompt_100Thin_Italic`
- `Prompt_200ExtraLight`
- `Prompt_200ExtraLight_Italic`
- `Prompt_300Light`
- `Prompt_300Light_Italic`
- `Prompt_400Regular`
- `Prompt_400Regular_Italic`
- `Prompt_500Medium`
- `Prompt_500Medium_Italic`
- `Prompt_600SemiBold`
- `Prompt_600SemiBold_Italic`
- `Prompt_700Bold`
- `Prompt_700Bold_Italic`
- `Prompt_800ExtraBold`
- `Prompt_800ExtraBold_Italic`
- `Prompt_900Black`
- `Prompt_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/prompt expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Prompt_100Thin,
  Prompt_100Thin_Italic,
  Prompt_200ExtraLight,
  Prompt_200ExtraLight_Italic,
  Prompt_300Light,
  Prompt_300Light_Italic,
  Prompt_400Regular,
  Prompt_400Regular_Italic,
  Prompt_500Medium,
  Prompt_500Medium_Italic,
  Prompt_600SemiBold,
  Prompt_600SemiBold_Italic,
  Prompt_700Bold,
  Prompt_700Bold_Italic,
  Prompt_800ExtraBold,
  Prompt_800ExtraBold_Italic,
  Prompt_900Black,
  Prompt_900Black_Italic,
} from '@expo-google-fonts/prompt';

export default () => {
  let [fontsLoaded] = useFonts({
    Prompt_100Thin,
    Prompt_100Thin_Italic,
    Prompt_200ExtraLight,
    Prompt_200ExtraLight_Italic,
    Prompt_300Light,
    Prompt_300Light_Italic,
    Prompt_400Regular,
    Prompt_400Regular_Italic,
    Prompt_500Medium,
    Prompt_500Medium_Italic,
    Prompt_600SemiBold,
    Prompt_600SemiBold_Italic,
    Prompt_700Bold,
    Prompt_700Bold_Italic,
    Prompt_800ExtraBold,
    Prompt_800ExtraBold_Italic,
    Prompt_900Black,
    Prompt_900Black_Italic,
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
            fontFamily: 'Prompt_100Thin',
          }}>
          Prompt Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_100Thin_Italic',
          }}>
          Prompt Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_200ExtraLight',
          }}>
          Prompt Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_200ExtraLight_Italic',
          }}>
          Prompt Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_300Light',
          }}>
          Prompt Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_300Light_Italic',
          }}>
          Prompt Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_400Regular',
          }}>
          Prompt Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_400Regular_Italic',
          }}>
          Prompt Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_500Medium',
          }}>
          Prompt Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_500Medium_Italic',
          }}>
          Prompt Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_600SemiBold',
          }}>
          Prompt Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_600SemiBold_Italic',
          }}>
          Prompt Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_700Bold',
          }}>
          Prompt Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_700Bold_Italic',
          }}>
          Prompt Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_800ExtraBold',
          }}>
          Prompt Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_800ExtraBold_Italic',
          }}>
          Prompt Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_900Black',
          }}>
          Prompt Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Prompt_900Black_Italic',
          }}>
          Prompt Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Prompt_100Thin](./Prompt_100Thin.ttf.png)|![Prompt_100Thin_Italic](./Prompt_100Thin_Italic.ttf.png)|![Prompt_200ExtraLight](./Prompt_200ExtraLight.ttf.png)||
|![Prompt_200ExtraLight_Italic](./Prompt_200ExtraLight_Italic.ttf.png)|![Prompt_300Light](./Prompt_300Light.ttf.png)|![Prompt_300Light_Italic](./Prompt_300Light_Italic.ttf.png)||
|![Prompt_400Regular](./Prompt_400Regular.ttf.png)|![Prompt_400Regular_Italic](./Prompt_400Regular_Italic.ttf.png)|![Prompt_500Medium](./Prompt_500Medium.ttf.png)||
|![Prompt_500Medium_Italic](./Prompt_500Medium_Italic.ttf.png)|![Prompt_600SemiBold](./Prompt_600SemiBold.ttf.png)|![Prompt_600SemiBold_Italic](./Prompt_600SemiBold_Italic.ttf.png)||
|![Prompt_700Bold](./Prompt_700Bold.ttf.png)|![Prompt_700Bold_Italic](./Prompt_700Bold_Italic.ttf.png)|![Prompt_800ExtraBold](./Prompt_800ExtraBold.ttf.png)||
|![Prompt_800ExtraBold_Italic](./Prompt_800ExtraBold_Italic.ttf.png)|![Prompt_900Black](./Prompt_900Black.ttf.png)|![Prompt_900Black_Italic](./Prompt_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/prompt` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Prompt page on Google Fonts](https://fonts.google.com/specimen/Prompt) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Prompt on Google Fonts](https://fonts.google.com/specimen/Prompt)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/prompt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/prompt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
