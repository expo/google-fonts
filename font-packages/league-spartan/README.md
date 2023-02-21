# @expo-google-fonts/league-spartan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/league-spartan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/league-spartan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/league-spartan)

This package lets you use the [**League Spartan**](https://fonts.google.com/specimen/League+Spartan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## League Spartan

![League Spartan](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LeagueSpartan_100Thin`
- `LeagueSpartan_200ExtraLight`
- `LeagueSpartan_300Light`
- `LeagueSpartan_400Regular`
- `LeagueSpartan_500Medium`
- `LeagueSpartan_600SemiBold`
- `LeagueSpartan_700Bold`
- `LeagueSpartan_800ExtraBold`
- `LeagueSpartan_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/league-spartan expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  LeagueSpartan_100Thin,
  LeagueSpartan_200ExtraLight,
  LeagueSpartan_300Light,
  LeagueSpartan_400Regular,
  LeagueSpartan_500Medium,
  LeagueSpartan_600SemiBold,
  LeagueSpartan_700Bold,
  LeagueSpartan_800ExtraBold,
  LeagueSpartan_900Black,
} from '@expo-google-fonts/league-spartan';

export default () => {
  let [fontsLoaded] = useFonts({
    LeagueSpartan_100Thin,
    LeagueSpartan_200ExtraLight,
    LeagueSpartan_300Light,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
    LeagueSpartan_700Bold,
    LeagueSpartan_800ExtraBold,
    LeagueSpartan_900Black,
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
            fontFamily: 'LeagueSpartan_100Thin',
          }}>
          League Spartan Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_200ExtraLight',
          }}>
          League Spartan Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_300Light',
          }}>
          League Spartan Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_400Regular',
          }}>
          League Spartan Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_500Medium',
          }}>
          League Spartan Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_600SemiBold',
          }}>
          League Spartan Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_700Bold',
          }}>
          League Spartan Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_800ExtraBold',
          }}>
          League Spartan Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LeagueSpartan_900Black',
          }}>
          League Spartan Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LeagueSpartan_100Thin](./LeagueSpartan_100Thin.ttf.png)|![LeagueSpartan_200ExtraLight](./LeagueSpartan_200ExtraLight.ttf.png)|![LeagueSpartan_300Light](./LeagueSpartan_300Light.ttf.png)||
|![LeagueSpartan_400Regular](./LeagueSpartan_400Regular.ttf.png)|![LeagueSpartan_500Medium](./LeagueSpartan_500Medium.ttf.png)|![LeagueSpartan_600SemiBold](./LeagueSpartan_600SemiBold.ttf.png)||
|![LeagueSpartan_700Bold](./LeagueSpartan_700Bold.ttf.png)|![LeagueSpartan_800ExtraBold](./LeagueSpartan_800ExtraBold.ttf.png)|![LeagueSpartan_900Black](./LeagueSpartan_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/league-spartan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [League Spartan page on Google Fonts](https://fonts.google.com/specimen/League+Spartan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [League Spartan on Google Fonts](https://fonts.google.com/specimen/League+Spartan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/league-spartan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/league-spartan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
