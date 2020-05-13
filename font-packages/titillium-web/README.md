# @expo-google-fonts/titillium-web

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/titillium-web)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/titillium-web)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/titillium-web)

This package lets you use the [**Titillium Web**](https://fonts.google.com/specimen/Titillium+Web) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Titillium Web

![Titillium Web](./font-family.png)

This font family contains [11 styles](#-gallery).

- `TitilliumWeb_200ExtraLight`
- `TitilliumWeb_200ExtraLight_Italic`
- `TitilliumWeb_300Light`
- `TitilliumWeb_300Light_Italic`
- `TitilliumWeb_400Regular`
- `TitilliumWeb_400Regular_Italic`
- `TitilliumWeb_600SemiBold`
- `TitilliumWeb_600SemiBold_Italic`
- `TitilliumWeb_700Bold`
- `TitilliumWeb_700Bold_Italic`
- `TitilliumWeb_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/titillium-web expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  TitilliumWeb_200ExtraLight,
  TitilliumWeb_200ExtraLight_Italic,
  TitilliumWeb_300Light,
  TitilliumWeb_300Light_Italic,
  TitilliumWeb_400Regular,
  TitilliumWeb_400Regular_Italic,
  TitilliumWeb_600SemiBold,
  TitilliumWeb_600SemiBold_Italic,
  TitilliumWeb_700Bold,
  TitilliumWeb_700Bold_Italic,
  TitilliumWeb_900Black,
} from '@expo-google-fonts/titillium-web';

export default () => {
  let [fontsLoaded] = useFonts({
    TitilliumWeb_200ExtraLight,
    TitilliumWeb_200ExtraLight_Italic,
    TitilliumWeb_300Light,
    TitilliumWeb_300Light_Italic,
    TitilliumWeb_400Regular,
    TitilliumWeb_400Regular_Italic,
    TitilliumWeb_600SemiBold,
    TitilliumWeb_600SemiBold_Italic,
    TitilliumWeb_700Bold,
    TitilliumWeb_700Bold_Italic,
    TitilliumWeb_900Black,
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
            fontFamily: 'TitilliumWeb_200ExtraLight',
          }}>
          Titillium Web Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_200ExtraLight_Italic',
          }}>
          Titillium Web Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_300Light',
          }}>
          Titillium Web Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_300Light_Italic',
          }}>
          Titillium Web Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_400Regular',
          }}>
          Titillium Web Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_400Regular_Italic',
          }}>
          Titillium Web Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_600SemiBold',
          }}>
          Titillium Web Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_600SemiBold_Italic',
          }}>
          Titillium Web Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_700Bold',
          }}>
          Titillium Web Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_700Bold_Italic',
          }}>
          Titillium Web Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TitilliumWeb_900Black',
          }}>
          Titillium Web Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### TitilliumWeb_200ExtraLight
![TitilliumWeb_200ExtraLight](./TitilliumWeb_200ExtraLight.ttf.png)

##### TitilliumWeb_200ExtraLight_Italic
![TitilliumWeb_200ExtraLight_Italic](./TitilliumWeb_200ExtraLight_Italic.ttf.png)

##### TitilliumWeb_300Light
![TitilliumWeb_300Light](./TitilliumWeb_300Light.ttf.png)

##### TitilliumWeb_300Light_Italic
![TitilliumWeb_300Light_Italic](./TitilliumWeb_300Light_Italic.ttf.png)

##### TitilliumWeb_400Regular
![TitilliumWeb_400Regular](./TitilliumWeb_400Regular.ttf.png)

##### TitilliumWeb_400Regular_Italic
![TitilliumWeb_400Regular_Italic](./TitilliumWeb_400Regular_Italic.ttf.png)

##### TitilliumWeb_600SemiBold
![TitilliumWeb_600SemiBold](./TitilliumWeb_600SemiBold.ttf.png)

##### TitilliumWeb_600SemiBold_Italic
![TitilliumWeb_600SemiBold_Italic](./TitilliumWeb_600SemiBold_Italic.ttf.png)

##### TitilliumWeb_700Bold
![TitilliumWeb_700Bold](./TitilliumWeb_700Bold.ttf.png)

##### TitilliumWeb_700Bold_Italic
![TitilliumWeb_700Bold_Italic](./TitilliumWeb_700Bold_Italic.ttf.png)

##### TitilliumWeb_900Black
![TitilliumWeb_900Black](./TitilliumWeb_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/titillium-web` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Titillium Web page on Google Fonts](https://fonts.google.com/specimen/Titillium+Web) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Titillium Web on Google Fonts](https://fonts.google.com/specimen/Titillium+Web)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/titillium-web)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/titillium-web)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
