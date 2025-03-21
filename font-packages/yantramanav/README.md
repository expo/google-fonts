# @expo-google-fonts/yantramanav

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/yantramanav)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/yantramanav)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/yantramanav)

This package lets you use the [**Yantramanav**](https://fonts.google.com/specimen/Yantramanav) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Yantramanav

![Yantramanav](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Yantramanav_100Thin`
- `Yantramanav_300Light`
- `Yantramanav_400Regular`
- `Yantramanav_500Medium`
- `Yantramanav_700Bold`
- `Yantramanav_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/yantramanav expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Yantramanav_100Thin,
  Yantramanav_300Light,
  Yantramanav_400Regular,
  Yantramanav_500Medium,
  Yantramanav_700Bold,
  Yantramanav_900Black,
} from '@expo-google-fonts/yantramanav';

export default () => {
  let [fontsLoaded] = useFonts({
    Yantramanav_100Thin,
    Yantramanav_300Light,
    Yantramanav_400Regular,
    Yantramanav_500Medium,
    Yantramanav_700Bold,
    Yantramanav_900Black,
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
            fontFamily: 'Yantramanav_100Thin',
          }}>
          Yantramanav Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Yantramanav_300Light',
          }}>
          Yantramanav Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Yantramanav_400Regular',
          }}>
          Yantramanav Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Yantramanav_500Medium',
          }}>
          Yantramanav Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Yantramanav_700Bold',
          }}>
          Yantramanav Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Yantramanav_900Black',
          }}>
          Yantramanav Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Yantramanav_100Thin](./Yantramanav_100Thin.ttf.png)|![Yantramanav_300Light](./Yantramanav_300Light.ttf.png)|![Yantramanav_400Regular](./Yantramanav_400Regular.ttf.png)||
|![Yantramanav_500Medium](./Yantramanav_500Medium.ttf.png)|![Yantramanav_700Bold](./Yantramanav_700Bold.ttf.png)|![Yantramanav_900Black](./Yantramanav_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/yantramanav` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Yantramanav page on Google Fonts](https://fonts.google.com/specimen/Yantramanav) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Yantramanav on Google Fonts](https://fonts.google.com/specimen/Yantramanav)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/yantramanav)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/yantramanav)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
