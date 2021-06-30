# @expo-google-fonts/oswald

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/oswald)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/oswald)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/oswald)

This package lets you use the [**Oswald**](https://fonts.google.com/specimen/Oswald) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Oswald

![Oswald](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Oswald_200ExtraLight`
- `Oswald_300Light`
- `Oswald_400Regular`
- `Oswald_500Medium`
- `Oswald_600SemiBold`
- `Oswald_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/oswald expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from '@expo-google-fonts/oswald';

export default () => {
  let [fontsLoaded] = useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
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
            fontFamily: 'Oswald_200ExtraLight',
          }}>
          Oswald Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Oswald_300Light',
          }}>
          Oswald Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Oswald_400Regular',
          }}>
          Oswald Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Oswald_500Medium',
          }}>
          Oswald Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Oswald_600SemiBold',
          }}>
          Oswald Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Oswald_700Bold',
          }}>
          Oswald Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Oswald_200ExtraLight](./Oswald_200ExtraLight.ttf.png)|![Oswald_300Light](./Oswald_300Light.ttf.png)|![Oswald_400Regular](./Oswald_400Regular.ttf.png)||
|![Oswald_500Medium](./Oswald_500Medium.ttf.png)|![Oswald_600SemiBold](./Oswald_600SemiBold.ttf.png)|![Oswald_700Bold](./Oswald_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/oswald` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Oswald page on Google Fonts](https://fonts.google.com/specimen/Oswald) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Oswald on Google Fonts](https://fonts.google.com/specimen/Oswald)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/oswald)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/oswald)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
