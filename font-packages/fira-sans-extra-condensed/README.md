# @expo-google-fonts/fira-sans-extra-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fira-sans-extra-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fira-sans-extra-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fira-sans-extra-condensed)

This package lets you use the [**Fira Sans Extra Condensed**](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fira Sans Extra Condensed

![Fira Sans Extra Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `FiraSansExtraCondensed_100Thin`
- `FiraSansExtraCondensed_100Thin_Italic`
- `FiraSansExtraCondensed_200ExtraLight`
- `FiraSansExtraCondensed_200ExtraLight_Italic`
- `FiraSansExtraCondensed_300Light`
- `FiraSansExtraCondensed_300Light_Italic`
- `FiraSansExtraCondensed_400Regular`
- `FiraSansExtraCondensed_400Regular_Italic`
- `FiraSansExtraCondensed_500Medium`
- `FiraSansExtraCondensed_500Medium_Italic`
- `FiraSansExtraCondensed_600SemiBold`
- `FiraSansExtraCondensed_600SemiBold_Italic`
- `FiraSansExtraCondensed_700Bold`
- `FiraSansExtraCondensed_700Bold_Italic`
- `FiraSansExtraCondensed_800ExtraBold`
- `FiraSansExtraCondensed_800ExtraBold_Italic`
- `FiraSansExtraCondensed_900Black`
- `FiraSansExtraCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/fira-sans-extra-condensed expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  FiraSansExtraCondensed_100Thin,
  FiraSansExtraCondensed_100Thin_Italic,
  FiraSansExtraCondensed_200ExtraLight,
  FiraSansExtraCondensed_200ExtraLight_Italic,
  FiraSansExtraCondensed_300Light,
  FiraSansExtraCondensed_300Light_Italic,
  FiraSansExtraCondensed_400Regular,
  FiraSansExtraCondensed_400Regular_Italic,
  FiraSansExtraCondensed_500Medium,
  FiraSansExtraCondensed_500Medium_Italic,
  FiraSansExtraCondensed_600SemiBold,
  FiraSansExtraCondensed_600SemiBold_Italic,
  FiraSansExtraCondensed_700Bold,
  FiraSansExtraCondensed_700Bold_Italic,
  FiraSansExtraCondensed_800ExtraBold,
  FiraSansExtraCondensed_800ExtraBold_Italic,
  FiraSansExtraCondensed_900Black,
  FiraSansExtraCondensed_900Black_Italic,
} from '@expo-google-fonts/fira-sans-extra-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    FiraSansExtraCondensed_100Thin,
    FiraSansExtraCondensed_100Thin_Italic,
    FiraSansExtraCondensed_200ExtraLight,
    FiraSansExtraCondensed_200ExtraLight_Italic,
    FiraSansExtraCondensed_300Light,
    FiraSansExtraCondensed_300Light_Italic,
    FiraSansExtraCondensed_400Regular,
    FiraSansExtraCondensed_400Regular_Italic,
    FiraSansExtraCondensed_500Medium,
    FiraSansExtraCondensed_500Medium_Italic,
    FiraSansExtraCondensed_600SemiBold,
    FiraSansExtraCondensed_600SemiBold_Italic,
    FiraSansExtraCondensed_700Bold,
    FiraSansExtraCondensed_700Bold_Italic,
    FiraSansExtraCondensed_800ExtraBold,
    FiraSansExtraCondensed_800ExtraBold_Italic,
    FiraSansExtraCondensed_900Black,
    FiraSansExtraCondensed_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_100Thin' }}>
          FiraSansExtraCondensed_100Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_100Thin_Italic',
          }}>
          FiraSansExtraCondensed_100Thin_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_200ExtraLight' }}>
          FiraSansExtraCondensed_200ExtraLight
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_200ExtraLight_Italic',
          }}>
          FiraSansExtraCondensed_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_300Light' }}>
          FiraSansExtraCondensed_300Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_300Light_Italic',
          }}>
          FiraSansExtraCondensed_300Light_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_400Regular' }}>
          FiraSansExtraCondensed_400Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_400Regular_Italic',
          }}>
          FiraSansExtraCondensed_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_500Medium' }}>
          FiraSansExtraCondensed_500Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_500Medium_Italic',
          }}>
          FiraSansExtraCondensed_500Medium_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_600SemiBold' }}>
          FiraSansExtraCondensed_600SemiBold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_600SemiBold_Italic',
          }}>
          FiraSansExtraCondensed_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_700Bold' }}>
          FiraSansExtraCondensed_700Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_700Bold_Italic',
          }}>
          FiraSansExtraCondensed_700Bold_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_800ExtraBold' }}>
          FiraSansExtraCondensed_800ExtraBold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_800ExtraBold_Italic',
          }}>
          FiraSansExtraCondensed_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_900Black' }}>
          FiraSansExtraCondensed_900Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_900Black_Italic',
          }}>
          FiraSansExtraCondensed_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### FiraSansExtraCondensed_100Thin
![FiraSansExtraCondensed_100Thin](./FiraSansExtraCondensed_100Thin.ttf.png)

##### FiraSansExtraCondensed_100Thin_Italic
![FiraSansExtraCondensed_100Thin_Italic](./FiraSansExtraCondensed_100Thin_Italic.ttf.png)

##### FiraSansExtraCondensed_200ExtraLight
![FiraSansExtraCondensed_200ExtraLight](./FiraSansExtraCondensed_200ExtraLight.ttf.png)

##### FiraSansExtraCondensed_200ExtraLight_Italic
![FiraSansExtraCondensed_200ExtraLight_Italic](./FiraSansExtraCondensed_200ExtraLight_Italic.ttf.png)

##### FiraSansExtraCondensed_300Light
![FiraSansExtraCondensed_300Light](./FiraSansExtraCondensed_300Light.ttf.png)

##### FiraSansExtraCondensed_300Light_Italic
![FiraSansExtraCondensed_300Light_Italic](./FiraSansExtraCondensed_300Light_Italic.ttf.png)

##### FiraSansExtraCondensed_400Regular
![FiraSansExtraCondensed_400Regular](./FiraSansExtraCondensed_400Regular.ttf.png)

##### FiraSansExtraCondensed_400Regular_Italic
![FiraSansExtraCondensed_400Regular_Italic](./FiraSansExtraCondensed_400Regular_Italic.ttf.png)

##### FiraSansExtraCondensed_500Medium
![FiraSansExtraCondensed_500Medium](./FiraSansExtraCondensed_500Medium.ttf.png)

##### FiraSansExtraCondensed_500Medium_Italic
![FiraSansExtraCondensed_500Medium_Italic](./FiraSansExtraCondensed_500Medium_Italic.ttf.png)

##### FiraSansExtraCondensed_600SemiBold
![FiraSansExtraCondensed_600SemiBold](./FiraSansExtraCondensed_600SemiBold.ttf.png)

##### FiraSansExtraCondensed_600SemiBold_Italic
![FiraSansExtraCondensed_600SemiBold_Italic](./FiraSansExtraCondensed_600SemiBold_Italic.ttf.png)

##### FiraSansExtraCondensed_700Bold
![FiraSansExtraCondensed_700Bold](./FiraSansExtraCondensed_700Bold.ttf.png)

##### FiraSansExtraCondensed_700Bold_Italic
![FiraSansExtraCondensed_700Bold_Italic](./FiraSansExtraCondensed_700Bold_Italic.ttf.png)

##### FiraSansExtraCondensed_800ExtraBold
![FiraSansExtraCondensed_800ExtraBold](./FiraSansExtraCondensed_800ExtraBold.ttf.png)

##### FiraSansExtraCondensed_800ExtraBold_Italic
![FiraSansExtraCondensed_800ExtraBold_Italic](./FiraSansExtraCondensed_800ExtraBold_Italic.ttf.png)

##### FiraSansExtraCondensed_900Black
![FiraSansExtraCondensed_900Black](./FiraSansExtraCondensed_900Black.ttf.png)

##### FiraSansExtraCondensed_900Black_Italic
![FiraSansExtraCondensed_900Black_Italic](./FiraSansExtraCondensed_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/fira-sans-extra-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fira Sans Extra Condensed page on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fira Sans Extra Condensed on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fira-sans-extra-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fira-sans-extra-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
