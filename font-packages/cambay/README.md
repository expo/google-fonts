# @expo-google-fonts/cambay

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cambay)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cambay)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cambay)

This package lets you use the [**Cambay**](https://fonts.google.com/specimen/Cambay) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cambay

![Cambay](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Cambay_400Regular`
- `Cambay_400Regular_Italic`
- `Cambay_700Bold`
- `Cambay_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cambay expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Cambay_400Regular,
  Cambay_400Regular_Italic,
  Cambay_700Bold,
  Cambay_700Bold_Italic,
} from '@expo-google-fonts/cambay';

export default () => {
  let [fontsLoaded] = useFonts({
    Cambay_400Regular,
    Cambay_400Regular_Italic,
    Cambay_700Bold,
    Cambay_700Bold_Italic,
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
            fontFamily: 'Cambay_400Regular',
          }}>
          Cambay Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cambay_400Regular_Italic',
          }}>
          Cambay Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cambay_700Bold',
          }}>
          Cambay Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cambay_700Bold_Italic',
          }}>
          Cambay Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Cambay_400Regular](./Cambay_400Regular.ttf.png)|![Cambay_400Regular_Italic](./Cambay_400Regular_Italic.ttf.png)|![Cambay_700Bold](./Cambay_700Bold.ttf.png)||
|![Cambay_700Bold_Italic](./Cambay_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cambay` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cambay page on Google Fonts](https://fonts.google.com/specimen/Cambay) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cambay on Google Fonts](https://fonts.google.com/specimen/Cambay)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cambay)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cambay)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
