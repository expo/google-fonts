# @expo-google-fonts/bricolage-grotesque

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bricolage-grotesque)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bricolage-grotesque)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bricolage-grotesque)

This package lets you use the [**Bricolage Grotesque**](https://fonts.google.com/specimen/Bricolage+Grotesque) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bricolage Grotesque

![Bricolage Grotesque](./font-family.png)

This font family contains [7 styles](#-gallery).

- `BricolageGrotesque_200ExtraLight`
- `BricolageGrotesque_300Light`
- `BricolageGrotesque_400Regular`
- `BricolageGrotesque_500Medium`
- `BricolageGrotesque_600SemiBold`
- `BricolageGrotesque_700Bold`
- `BricolageGrotesque_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/bricolage-grotesque expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BricolageGrotesque_200ExtraLight,
  BricolageGrotesque_300Light,
  BricolageGrotesque_400Regular,
  BricolageGrotesque_500Medium,
  BricolageGrotesque_600SemiBold,
  BricolageGrotesque_700Bold,
  BricolageGrotesque_800ExtraBold,
} from '@expo-google-fonts/bricolage-grotesque';

export default () => {
  let [fontsLoaded] = useFonts({
    BricolageGrotesque_200ExtraLight,
    BricolageGrotesque_300Light,
    BricolageGrotesque_400Regular,
    BricolageGrotesque_500Medium,
    BricolageGrotesque_600SemiBold,
    BricolageGrotesque_700Bold,
    BricolageGrotesque_800ExtraBold,
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
            fontFamily: 'BricolageGrotesque_200ExtraLight',
          }}>
          Bricolage Grotesque Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BricolageGrotesque_300Light',
          }}>
          Bricolage Grotesque Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BricolageGrotesque_400Regular',
          }}>
          Bricolage Grotesque Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BricolageGrotesque_500Medium',
          }}>
          Bricolage Grotesque Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BricolageGrotesque_600SemiBold',
          }}>
          Bricolage Grotesque Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BricolageGrotesque_700Bold',
          }}>
          Bricolage Grotesque Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BricolageGrotesque_800ExtraBold',
          }}>
          Bricolage Grotesque Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BricolageGrotesque_200ExtraLight](./BricolageGrotesque_200ExtraLight.ttf.png)|![BricolageGrotesque_300Light](./BricolageGrotesque_300Light.ttf.png)|![BricolageGrotesque_400Regular](./BricolageGrotesque_400Regular.ttf.png)||
|![BricolageGrotesque_500Medium](./BricolageGrotesque_500Medium.ttf.png)|![BricolageGrotesque_600SemiBold](./BricolageGrotesque_600SemiBold.ttf.png)|![BricolageGrotesque_700Bold](./BricolageGrotesque_700Bold.ttf.png)||
|![BricolageGrotesque_800ExtraBold](./BricolageGrotesque_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/bricolage-grotesque` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bricolage Grotesque page on Google Fonts](https://fonts.google.com/specimen/Bricolage+Grotesque) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bricolage Grotesque on Google Fonts](https://fonts.google.com/specimen/Bricolage+Grotesque)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bricolage-grotesque)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bricolage-grotesque)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
