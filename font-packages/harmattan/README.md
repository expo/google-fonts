# @expo-google-fonts/harmattan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/harmattan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/harmattan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/harmattan)

This package lets you use the [**Harmattan**](https://fonts.google.com/specimen/Harmattan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Harmattan

![Harmattan](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Harmattan_400Regular`
- `Harmattan_500Medium`
- `Harmattan_600SemiBold`
- `Harmattan_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/harmattan expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Harmattan_400Regular,
  Harmattan_500Medium,
  Harmattan_600SemiBold,
  Harmattan_700Bold,
} from '@expo-google-fonts/harmattan';

export default () => {
  let [fontsLoaded] = useFonts({
    Harmattan_400Regular,
    Harmattan_500Medium,
    Harmattan_600SemiBold,
    Harmattan_700Bold,
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
            fontFamily: 'Harmattan_400Regular',
          }}>
          Harmattan Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Harmattan_500Medium',
          }}>
          Harmattan Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Harmattan_600SemiBold',
          }}>
          Harmattan Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Harmattan_700Bold',
          }}>
          Harmattan Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Harmattan_400Regular](./Harmattan_400Regular.ttf.png)|![Harmattan_500Medium](./Harmattan_500Medium.ttf.png)|![Harmattan_600SemiBold](./Harmattan_600SemiBold.ttf.png)||
|![Harmattan_700Bold](./Harmattan_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/harmattan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Harmattan page on Google Fonts](https://fonts.google.com/specimen/Harmattan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Harmattan on Google Fonts](https://fonts.google.com/specimen/Harmattan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/harmattan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/harmattan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
