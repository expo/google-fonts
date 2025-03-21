# @expo-google-fonts/atkinson-hyperlegible-next

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/atkinson-hyperlegible-next)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/atkinson-hyperlegible-next)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/atkinson-hyperlegible-next)

This package lets you use the [**Atkinson Hyperlegible Next**](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Atkinson Hyperlegible Next

![Atkinson Hyperlegible Next](./font-family.png)

This font family contains [14 styles](#-gallery).

- `AtkinsonHyperlegibleNext_200ExtraLight`
- `AtkinsonHyperlegibleNext_300Light`
- `AtkinsonHyperlegibleNext_400Regular`
- `AtkinsonHyperlegibleNext_500Medium`
- `AtkinsonHyperlegibleNext_600SemiBold`
- `AtkinsonHyperlegibleNext_700Bold`
- `AtkinsonHyperlegibleNext_800ExtraBold`
- `AtkinsonHyperlegibleNext_200ExtraLight_Italic`
- `AtkinsonHyperlegibleNext_300Light_Italic`
- `AtkinsonHyperlegibleNext_400Regular_Italic`
- `AtkinsonHyperlegibleNext_500Medium_Italic`
- `AtkinsonHyperlegibleNext_600SemiBold_Italic`
- `AtkinsonHyperlegibleNext_700Bold_Italic`
- `AtkinsonHyperlegibleNext_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/atkinson-hyperlegible-next expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AtkinsonHyperlegibleNext_200ExtraLight,
  AtkinsonHyperlegibleNext_300Light,
  AtkinsonHyperlegibleNext_400Regular,
  AtkinsonHyperlegibleNext_500Medium,
  AtkinsonHyperlegibleNext_600SemiBold,
  AtkinsonHyperlegibleNext_700Bold,
  AtkinsonHyperlegibleNext_800ExtraBold,
  AtkinsonHyperlegibleNext_200ExtraLight_Italic,
  AtkinsonHyperlegibleNext_300Light_Italic,
  AtkinsonHyperlegibleNext_400Regular_Italic,
  AtkinsonHyperlegibleNext_500Medium_Italic,
  AtkinsonHyperlegibleNext_600SemiBold_Italic,
  AtkinsonHyperlegibleNext_700Bold_Italic,
  AtkinsonHyperlegibleNext_800ExtraBold_Italic,
} from '@expo-google-fonts/atkinson-hyperlegible-next';

export default () => {
  let [fontsLoaded] = useFonts({
    AtkinsonHyperlegibleNext_200ExtraLight,
    AtkinsonHyperlegibleNext_300Light,
    AtkinsonHyperlegibleNext_400Regular,
    AtkinsonHyperlegibleNext_500Medium,
    AtkinsonHyperlegibleNext_600SemiBold,
    AtkinsonHyperlegibleNext_700Bold,
    AtkinsonHyperlegibleNext_800ExtraBold,
    AtkinsonHyperlegibleNext_200ExtraLight_Italic,
    AtkinsonHyperlegibleNext_300Light_Italic,
    AtkinsonHyperlegibleNext_400Regular_Italic,
    AtkinsonHyperlegibleNext_500Medium_Italic,
    AtkinsonHyperlegibleNext_600SemiBold_Italic,
    AtkinsonHyperlegibleNext_700Bold_Italic,
    AtkinsonHyperlegibleNext_800ExtraBold_Italic,
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
            fontFamily: 'AtkinsonHyperlegibleNext_200ExtraLight',
          }}>
          Atkinson Hyperlegible Next Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_300Light',
          }}>
          Atkinson Hyperlegible Next Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_400Regular',
          }}>
          Atkinson Hyperlegible Next Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_500Medium',
          }}>
          Atkinson Hyperlegible Next Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_600SemiBold',
          }}>
          Atkinson Hyperlegible Next Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_700Bold',
          }}>
          Atkinson Hyperlegible Next Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_800ExtraBold',
          }}>
          Atkinson Hyperlegible Next Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_200ExtraLight_Italic',
          }}>
          Atkinson Hyperlegible Next Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_300Light_Italic',
          }}>
          Atkinson Hyperlegible Next Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_400Regular_Italic',
          }}>
          Atkinson Hyperlegible Next Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_500Medium_Italic',
          }}>
          Atkinson Hyperlegible Next Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_600SemiBold_Italic',
          }}>
          Atkinson Hyperlegible Next Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_700Bold_Italic',
          }}>
          Atkinson Hyperlegible Next Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AtkinsonHyperlegibleNext_800ExtraBold_Italic',
          }}>
          Atkinson Hyperlegible Next Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![AtkinsonHyperlegibleNext_200ExtraLight](./AtkinsonHyperlegibleNext_200ExtraLight.ttf.png)|![AtkinsonHyperlegibleNext_300Light](./AtkinsonHyperlegibleNext_300Light.ttf.png)|![AtkinsonHyperlegibleNext_400Regular](./AtkinsonHyperlegibleNext_400Regular.ttf.png)||
|![AtkinsonHyperlegibleNext_500Medium](./AtkinsonHyperlegibleNext_500Medium.ttf.png)|![AtkinsonHyperlegibleNext_600SemiBold](./AtkinsonHyperlegibleNext_600SemiBold.ttf.png)|![AtkinsonHyperlegibleNext_700Bold](./AtkinsonHyperlegibleNext_700Bold.ttf.png)||
|![AtkinsonHyperlegibleNext_800ExtraBold](./AtkinsonHyperlegibleNext_800ExtraBold.ttf.png)|![AtkinsonHyperlegibleNext_200ExtraLight_Italic](./AtkinsonHyperlegibleNext_200ExtraLight_Italic.ttf.png)|![AtkinsonHyperlegibleNext_300Light_Italic](./AtkinsonHyperlegibleNext_300Light_Italic.ttf.png)||
|![AtkinsonHyperlegibleNext_400Regular_Italic](./AtkinsonHyperlegibleNext_400Regular_Italic.ttf.png)|![AtkinsonHyperlegibleNext_500Medium_Italic](./AtkinsonHyperlegibleNext_500Medium_Italic.ttf.png)|![AtkinsonHyperlegibleNext_600SemiBold_Italic](./AtkinsonHyperlegibleNext_600SemiBold_Italic.ttf.png)||
|![AtkinsonHyperlegibleNext_700Bold_Italic](./AtkinsonHyperlegibleNext_700Bold_Italic.ttf.png)|![AtkinsonHyperlegibleNext_800ExtraBold_Italic](./AtkinsonHyperlegibleNext_800ExtraBold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/atkinson-hyperlegible-next` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Atkinson Hyperlegible Next page on Google Fonts](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Atkinson Hyperlegible Next on Google Fonts](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/atkinson-hyperlegible-next)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/atkinson-hyperlegible-next)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
